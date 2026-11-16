import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import ScrollProgress from "@/components/layout/ScrollProgress";
import { Analytics } from "@vercel/analytics/react";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Brian Githinji | Full Stack Developer",
    template: "%s | Brian Githinji"
  },
  description: "Scalable web applications, business systems & modern digital platforms. Based in Kenya, working globally.",
  keywords: ["Full Stack Developer", "React", "Next.js", "PHP", "Kenya", "Remote Developer", "Web Applications"],
  authors: [{ name: "Brian Githinji", url: "https://githinji-wanjohi-portfolio.vercel.app" }],
  creator: "Brian Githinji",
  publisher: "Brian Githinji",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL("https://githinji-wanjohi-portfolio.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://githinji-wanjohi-portfolio.vercel.app",
    title: "Brian Githinji | Full Stack Developer",
    description: "Scalable web applications, business systems & modern digital platforms.",
    siteName: "Brian Githinji Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Brian Githinji - Full Stack Developer" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Githinji | Full Stack Developer",
    description: "Scalable web applications, business systems & modern digital platforms.",
    images: ["/og-image.png"],
    creator: "@briangithinji" // Update with your actual X/Twitter handle if you have one
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 }
  }
};

// Structured Data for SEO (Updated with your actual links)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Brian Githinji",
  jobTitle: "Full Stack Developer",
  url: "https://githinji-wanjohi-portfolio.vercel.app",
  image: "https://githinji-wanjohi-portfolio.vercel.app/images/my-logo.jpg",
  sameAs: [
    "https://github.com/githinji12",
    "https://www.linkedin.com/in/githinSji-wanjohi-9b5b202bb/",
    "https://wa.me/254745506462"
  ],
  worksFor: { "@type": "Organization", name: "Freelance" },
  address: { "@type": "PostalAddress", addressCountry: "KE", addressLocality: "Nyeri" },
  knowsAbout: ["React", "Next.js", "PHP", "MySQL", "Supabase", "TailwindCSS", "TypeScript"],
  description: "Full Stack Developer specializing in scalable web applications, business systems, and modern digital platforms."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data for Search Engines */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
        />
        {/* Preconnect to Resend for faster email API calls */}
        <link rel="preconnect" href="https://api.resend.com" />
      </head>
      <body className={`${inter.variable} antialiased selection:bg-brand-blue/30 selection:text-white`}>
        
        {/* Accessibility: Skip to Content Link */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-brand-blue focus:text-white focus:rounded-lg focus:outline-none transition-all"
        >
          Skip to content
        </a>

        <ThemeProvider>
          {/* Scroll Progress Indicator */}
          <ScrollProgress />
          
          {/* Main Content Area */}
          <main id="main-content" className="relative min-h-screen">
            {children}
          </main>
          
          {/* Vercel Analytics */}
          <Analytics />
          
          {/* 🟢 Floating WhatsApp Button (Global) */}
          <FloatingWhatsApp />
          
        </ThemeProvider>
      </body>
    </html>
  );
}