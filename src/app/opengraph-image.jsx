import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kristal Pithwa - Expert Mobile App Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#060b18",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background gradient circles */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            Kristal Pithwa
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 32,
              color: "#a78bfa",
              fontWeight: 500,
              letterSpacing: "0.5px",
            }}
          >
            Expert Mobile App Developer
          </div>

          {/* Divider */}
          <div
            style={{
              width: 80,
              height: 3,
              background: "linear-gradient(90deg, #8b5cf6, #3b82f6)",
              borderRadius: 2,
            }}
          />

          {/* Tags */}
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["React Native", "iOS", "Android", "TypeScript"].map((tag) => (
              <div
                key={tag}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 100,
                  padding: "8px 20px",
                  fontSize: 20,
                  color: "#d1d5db",
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          {/* URL */}
          <div
            style={{
              fontSize: 20,
              color: "#6b7280",
              marginTop: 8,
            }}
          >
            kristalpithwa.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
