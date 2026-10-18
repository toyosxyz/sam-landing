import { ImageResponse } from "next/og";

export const alt = "Sam — cookieless Shopify analytics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111311",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#a3e635",
            fontSize: 28,
            letterSpacing: 6,
          }}
        >
          SAM
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#edeee9",
              fontSize: 64,
              lineHeight: 1.1,
              maxWidth: 920,
            }}
          >
            Cookieless Shopify analytics
          </div>
          <div
            style={{
              display: "flex",
              color: "#8a8f86",
              fontSize: 32,
              marginTop: 24,
            }}
          >
            Funnel, landings and campaigns. No banner for Sam.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
