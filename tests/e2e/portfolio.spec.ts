import { test, expect, type Page } from "@playwright/test";

const sectionIds = ["about", "stack", "work", "now", "path", "contact"];

async function expectNoHorizontalOverflow(page: Page) {
  const metrics = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));

  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
}

async function expectSectionAtTop(page: Page, id: string, maxTop = 140) {
  await expect
    .poll(
      () =>
        page.evaluate((sectionId) => {
          const element = document.getElementById(sectionId);
          return element ? Math.round(element.getBoundingClientRect().top) : 9999;
        }, id),
      { message: `#${id} should settle near the top of the viewport` },
    )
    .toBeLessThan(maxTop);
}

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => localStorage.removeItem("theme"));
  await page.reload();
});

test("renders metadata, sections, and loaded imagery without console errors", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.reload();

  await expect(page).toHaveTitle(/Sourav — Backend & Systems Engineer/);
  await expect(page.getByRole("heading", { level: 1, name: "Sourav" })).toBeVisible();

  for (const id of sectionIds) {
    await expect(page.locator(`#${id}`)).toHaveCount(1);
  }

  await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible();

  const brokenImages = await page.evaluate(() =>
    Array.from(document.images)
      .filter((image) => !image.complete || image.naturalWidth === 0)
      .map((image) => image.currentSrc || image.src),
  );
  expect(brokenImages).toEqual([]);

  await expectNoHorizontalOverflow(page);
  expect(errors).toEqual([]);
});

test("primary navigation scrolls to every linked section", async ({ page }) => {
  const primary = page.getByRole("navigation", { name: "Primary" });

  for (const label of ["about", "work", "path", "contact"]) {
    await primary.getByRole("link", { name: label }).click();
    await expect(page).toHaveURL(new RegExp(`#${label}$`));
    // The contact section is last: the document cannot scroll it all the
    // way to the header without adding a blank screen after the footer.
    await expectSectionAtTop(page, label, label === "contact" ? 280 : 140);
  }

  await primary.getByRole("link", { name: "about" }).click();
  await expect(page).toHaveURL(/#about$/);
});

test("project, social, and résumé links are present and valid", async ({ page }) => {
  const projectLinks = page.locator(
    '#work a[aria-label*="open the repository on GitHub"]',
  );
  await expect(projectLinks).toHaveCount(4);

  for (const link of await projectLinks.all()) {
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", /noopener/);
    await expect(link).toHaveAttribute("href", /^https:\/\/github\.com\/souravvoid\//);
  }

  const currentProject = page.locator(
    '#now a[aria-label*="open the repository on GitHub"]',
  );
  await expect(currentProject).toHaveCount(1);

  const hero = page.locator("main");
  await expect(hero.locator('a[href="https://github.com/souravvoid"]').first()).toBeVisible();
  await expect(
    hero.locator('a[href="https://www.linkedin.com/in/sourav-873471302/"]').first(),
  ).toBeVisible();

  // The résumé links are hidden when site.resume is null, so check both states.
  const resumeLinks = page.locator('a[download][href="/cv.pdf"]');
  const resumeResponse = await page.request.get("/cv.pdf");

  if (resumeResponse.status() === 200) {
    expect(resumeResponse.headers()["content-type"]).toContain("application/pdf");
    await expect(resumeLinks.first()).toBeVisible();
  } else {
    await expect(resumeLinks).toHaveCount(0);
  }
});

test("command palette opens, filters, navigates, and closes", async ({ page }) => {
  await page.keyboard.press("Control+K");

  const dialog = page.getByRole("dialog", { name: "Command menu" });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("combobox")).toBeFocused();

  await dialog.getByRole("combobox").fill("work");
  await expect(dialog.getByRole("option", { name: /^Work/ })).toBeVisible();
  await page.keyboard.press("Enter");

  await expect(dialog).toBeHidden();
  await expect(page).toHaveURL(/#work$/);
  await expectSectionAtTop(page, "work");

  await page.getByRole("button", { name: "Search this site" }).click();
  await expect(dialog).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();

  await page.keyboard.press("Control+K");
  await expect(dialog).toBeVisible();
  await dialog.getByRole("combobox").fill("no-such-command");
  await expect(dialog.getByText(/No results for/)).toBeVisible();
});

test("copy email action writes the address to the clipboard", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);

  await page.keyboard.press("Control+K");
  const dialog = page.getByRole("dialog", { name: "Command menu" });
  await dialog.getByRole("option", { name: "Copy email address" }).click();

  await expect(dialog.getByRole("option", { name: "Email copied" })).toBeVisible();
  const clipboard = await page.evaluate(() => navigator.clipboard.readText());
  expect(clipboard).toBe("souravsemwal1@gmail.com");
});

test("theme toggle switches between dark and light and persists", async ({ page }) => {
  const html = page.locator("html");

  await expect(html).toHaveClass(/dark/);
  await page.getByRole("button", { name: "Toggle color theme" }).click();
  await expect(html).toHaveClass(/light/);

  const background = await page.evaluate(
    () => getComputedStyle(document.body).backgroundColor,
  );
  expect(background).toBe("rgb(247, 245, 239)");

  await page.reload();
  await expect(html).toHaveClass(/light/);

  await page.getByRole("button", { name: "Toggle color theme" }).click();
  await expect(html).toHaveClass(/dark/);
});

test("mobile layout has no overflow and the menu navigates", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));

  await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Primary" })).toBeHidden();
  await expectNoHorizontalOverflow(page);

  await page.getByRole("button", { name: "Open menu" }).click();
  const mobileNav = page.getByRole("navigation", { name: "Mobile" });
  await expect(mobileNav).toBeVisible();

  await mobileNav.getByRole("link", { name: /work/ }).click();
  await expect(mobileNav).toBeHidden();
  await expect(page).toHaveURL(/#work$/);
  await expectSectionAtTop(page, "work");
  await expectNoHorizontalOverflow(page);
});

test("tablet and desktop layouts have no horizontal overflow", async ({ page }) => {
  for (const viewport of [
    { width: 768, height: 1024 },
    { width: 1024, height: 900 },
    { width: 1440, height: 900 },
  ]) {
    await page.setViewportSize(viewport);
    await page.evaluate(() => window.scrollTo(0, 0));
    await expectNoHorizontalOverflow(page);
  }
});

test("no interactive element is missing an accessible name", async ({ page }) => {
  const unnamed = await page.evaluate(() =>
    Array.from(document.querySelectorAll<HTMLElement>("button, a[href]"))
      .filter((element) => {
        const text = element.textContent?.trim() ?? "";
        const label = element.getAttribute("aria-label")?.trim() ?? "";
        return text.length === 0 && label.length === 0;
      })
      .map((element) => element.outerHTML.slice(0, 120)),
  );

  expect(unnamed).toEqual([]);
});

test("metadata routes and the generated social image resolve", async ({ page }) => {
  for (const path of [
    "/sitemap.xml",
    "/robots.txt",
    "/manifest.webmanifest",
    "/icon.svg",
    "/opengraph-image",
  ]) {
    const response = await page.request.get(path);
    expect(response.status(), `${path} should return 200`).toBe(200);
  }
});
