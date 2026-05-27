// components/layout/Plausible.tsx
"use client";
import Script from "next/script";

export default function Plausible() {
  return (
    <Script
      defer
      data-domain="githinji-wanjohi-portfolio.vercel.app"
      src="https://plausible.io/js/script.js"
    />
  );
}