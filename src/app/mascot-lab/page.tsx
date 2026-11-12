"use client";

import dynamic from "next/dynamic";
import { Section } from "@/components/section";

const Mascot = dynamic(() => import("@/components/mascot/Mascot").then((m) => m.Mascot), {
  ssr: false,
});

export default function MascotLabPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <main className="mx-auto w-full max-w-[720px] px-5 py-16 sm:px-6">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">experiment</p>
        <h1 className="mt-2 text-[28px] font-medium tracking-[-0.02em] sm:text-[34px]">
          Interactive mascot lab
        </h1>
        <p className="mt-3 max-w-[60ch] text-[14.5px] leading-[1.7] text-foreground/80">
          An isolated prototype. The existing portfolio homepage is untouched.
          The character lives in the bottom-right corner and reacts to your cursor.
        </p>

        <div className="mt-10 space-y-6">
          <Section id="interactions" index="01" label="interactions">
            <ul className="space-y-2 text-[13.5px] leading-[1.7] text-foreground/80">
              <li>Move the cursor around — the mascot&apos;s eyes and head follow it.</li>
              <li>Move the cursor close to the mascot — a dead zone keeps it calm.</li>
              <li>Click or tap the mascot — it reacts with a squash and a smile.</li>
              <li>Move the cursor away — it returns to idle (blinking + breathing).</li>
              <li>On touch devices, tap to react; cursor tracking is disabled.</li>
              <li>With &ldquo;prefers-reduced-motion&rdquo;, animation is disabled.</li>
            </ul>
          </Section>

          <Section id="notes" index="02" label="notes">
            <p className="text-[13.5px] leading-[1.7] text-foreground/80">
              The mascot uses <code className="font-mono text-[12px]">pointer-events: auto</code> only on itself,
              so it never blocks links, buttons, or text selection. It is lazy-loaded and fixed-positioned.
            </p>
          </Section>
        </div>
      </main>

      <Mascot size={140} />
    </div>
  );
}
