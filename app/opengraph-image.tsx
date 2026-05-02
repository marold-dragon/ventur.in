import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Venturin | Premium UI/UX Design & Web Development Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              backgroundColor: "#1d4ed8",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "6px 16px",
              borderRadius: "6px",
            }}
          >
            Digital Product Agency
          </div>
        </div>

        {/* Middle: Headline + Tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "80px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Venturin
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#a3a3a3",
              lineHeight: 1.4,
              maxWidth: "720px",
            }}
          >
            Premium UI/UX Design, Web Development & Digital Assets — by Martua Sinaga
          </div>
        </div>

        {/* Bottom: CTA + URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              backgroundColor: "#1d4ed8",
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: 600,
              padding: "14px 32px",
              borderRadius: "8px",
            }}
          >
            View Portfolio →
          </div>
          <div style={{ color: "#525252", fontSize: "18px" }}>
            venturin.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
