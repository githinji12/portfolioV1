import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Brian Githinji - Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 60,
          color: "white",
          background: "linear-gradient(to right, #0f172a, #1e1b4b)",
          width: "100%",
          height: "100%",
          padding: "60px",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div style={{ 
          fontSize: 80, 
          fontWeight: "bold",
          background: "linear-gradient(to right, #6366f1, #a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Brian Githinji
        </div>
        
        <div style={{ 
          fontSize: 36, 
          color: "#94a3b8",
          fontWeight: 500
        }}>
          Full Stack Developer • React • Next.js
        </div>
        
        <div style={{ 
          marginTop: 20, 
          padding: "12px 32px", 
          background: "rgba(255,255,255,0.1)", 
          borderRadius: "99px",
          fontSize: 24,
          color: "#cbd5e1",
          border: "1px solid rgba(255,255,255,0.1)"
        }}>
          githinji-wanjohi-portfolio.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}