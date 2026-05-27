import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Brian Githinji | Full Stack Developer",
  description: "Scalable web applications, business systems & modern digital platforms.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning prevents Next.js from crashing on theme mismatch
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased selection:bg-brand-blue/30 selection:text-white`}>
        <ThemeProvider>
          <main className="relative min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}