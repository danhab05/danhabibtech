import { ImageResponse } from "next/og";

export const alt =
  "Dan Habib — Développeur Fullstack & Automatisation à Paris";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070605",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(232,134,46,0.28) 0%, rgba(232,134,46,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#e8862e",
            fontSize: 26,
            letterSpacing: 8,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              background: "#e8862e",
              display: "flex",
            }}
          />
          Portfolio — Paris
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 148,
              fontWeight: 800,
              color: "#f2ecdf",
              lineHeight: 1,
              letterSpacing: -4,
              textTransform: "uppercase",
            }}
          >
            Dan Habib
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 36,
              color: "#b5ad9c",
              display: "flex",
            }}
          >
            Développeur Fullstack & Automatisation
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(242,236,223,0.15)",
            paddingTop: 32,
            color: "#6f695c",
            fontSize: 26,
          }}
        >
          <div style={{ display: "flex" }}>danhabib.dev</div>
          <div style={{ display: "flex", color: "#e8862e" }}>
            Python · Next.js · Automatisation · Scraping
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
