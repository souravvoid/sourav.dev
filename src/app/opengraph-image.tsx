import { ImageResponse } from "next/og";
import { site } from "@/content/portfolio";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#ededed",
          padding: "68px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <span style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em" }}>
            sourav<span style={{ color: "#d4f56a" }}>.</span>
          </span>
          <span style={{ fontSize: 20, color: "#9c9c94" }}>{site.role.toLowerCase()}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 62,
              lineHeight: 1.14,
              letterSpacing: "-0.045em",
              maxWidth: 980,
            }}
          >
            <span>I build the parts of software that stay</span>
            <span style={{ color: "#d4f56a", fontStyle: "italic", marginLeft: 14 }}>
              fast, correct and quiet
            </span>
            <span>under load.</span>
          </div>
          <div style={{ fontSize: 21, color: "#9c9c94", letterSpacing: "0.02em" }}>
            python · c++ · java · fastapi · linux · networking
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 19,
            color: "#9c9c94",
          }}
        >
          <span>{site.url.replace(/^https?:\/\//, "")}</span>
          <span>github.com/souravvoid</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
