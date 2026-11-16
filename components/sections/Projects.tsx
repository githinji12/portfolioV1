"use client";
import Reveal from "../ui/Reveal";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  { 
    title: "Omba Platform", 
    image: "/omba.png",
    desc: "React-based spiritual learning platform with progress tracking and community features.", 
    tech: ["React", "Tailwind", "Supabase"],
    link: "#" // Add live link when available
  },
  { 
    title: "FetchTik", 
    image: "/fetchtikV1.png",
    desc: "Web system to download TikTok videos without watermarks quickly and easily.", 
    tech: ["Next.js", "Tailwind", "API"],
    link: "https://fetchtik.xo.je/"
  },
  { 
    title: "Stream Kenya", 
    image: "/stream254.png",
    desc: "Video/media platform with Kenyan cultural UI design and streaming architecture.", 
    tech: ["Next.js", "FFmpeg", "AWS"],
    link: "#" // Add live link when available
  },
  { 
    title: "SautiWatch", 
    image: "/sautiwatch.png",
    desc: "Anonymous incident reporting platform providing secure, encrypted, and 24/7 available support resources.", 
    tech: ["React", "Node.js", "Encryption"],
    link: "https://sautiwatch-for-all.netlify.app/"
  },
  { 
    title: "Dream Angels Learning", 
    image: "/destiny-angels.png",
    desc: "Educational institution website with course catalogs and enrollment procedure.", 
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "https://destiny-angels-school.vercel.app/"
  },
  { 
    title: "Zaina Beauty Shop", 
    image: null, 
    desc: "Full business management system: inventory, sales, POS, and staff tracking.", 
    tech: ["PHP", "MySQL", "Bootstrap"],
    link: "#" 
  },
  { 
    title: "AI Task Manager", 
    image: null, 
    desc: "Productivity application leveraging AI for smart task categorization and prioritization.", 
    tech: ["Next.js", "OpenAI API", "Prisma"],
    link: "#" 
  },
  { 
    title: "Weather Dashboard", 
    image: "/weather-app.png",
    desc: "Real-time weather data visualization with interactive maps and location tracking.", 
    tech: ["React", "Weather API", "Chart.js"],
    link: "#" 
  },
  { 
    title: "Todo Pro", 
    image: "/TODO-app.png",
    desc: "Advanced task management with drag-and-drop, subtasks, and sync capabilities.", 
    tech: ["TypeScript", "React", "LocalStorage"],
    link: "#" 
  },
  { 
    title: "Morel Tech Solutions", 
    image: "/moreltech-solutions.png", // ✅ New image added
    desc: "Corporate business website optimized for SEO and lead generation.", 
    tech: ["HTML/CSS", "JS", "Vite"],
    link: "https://githinji12.github.io/trial/" // ✅ Live link added
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
            Selected Work
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Production systems, platforms, and digital products I've engineered.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <Reveal 
              key={p.title} 
              delay={0.05 * i} 
              className="glass-card group hover:shadow-[0_0_40px_rgba(168,85,247,0.08)] transition-all duration-500 border-t-2 border-transparent hover:border-brand-purple/40 overflow-hidden flex flex-col"
            >
              
              {/* 🖼️ Image Section with Premium Fallback */}
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-brand-blue/10 to-brand-purple/10">
                    <span className="text-5xl font-bold opacity-20" style={{ color: "var(--text-primary)" }}>
                      {p.title.charAt(0)}
                    </span>
                  </div>
                )}
                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-white/5 transition-colors duration-300" />
              </div>

              {/* 📝 Content Section */}
              <div className="p-8 flex flex-col grow">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-purple transition-colors" style={{ color: "var(--text-primary)" }}>
                  {p.title}
                </h3>
                <p className="text-sm mb-6 leading-relaxed grow" style={{ color: "var(--text-secondary)" }}>
                  {p.desc}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map(t => (
                    <span 
                      key={t} 
                      className="text-[11px] px-2.5 py-1 rounded-md border transition-colors duration-300"
                      style={{ 
                        backgroundColor: "var(--muted-bg)", 
                        borderColor: "var(--border-color)", 
                        color: "var(--text-secondary)" 
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4 pt-4" style={{ borderTop: "1px solid var(--border-color)" }}>
                  
                  {/* Live Demo Link */}
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs flex items-center gap-1.5 transition-colors hover:text-primary" 
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </a>

                  {/* Source Code Link (Placeholder for now) */}
                  <a 
                    href="#" 
                    className="text-xs flex items-center gap-1.5 transition-colors hover:text-primary" 
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}