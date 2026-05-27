import Reveal from "../ui/Reveal";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "Omba Platform", desc: "React-based spiritual learning platform with progress tracking and community features.", tech: ["React", "Tailwind", "Supabase"] },
  { title: "Morel Tech Solutions", desc: "Corporate business website optimized for SEO and lead generation.", tech: ["HTML/CSS", "JS", "Vite"] },
  { title: "Stream Kenya", desc: "Video/media platform with Kenyan cultural UI design and streaming architecture.", tech: ["Next.js", "FFmpeg", "AWS"] },
  { title: "Zaina Beauty Shop", desc: "Full business management system: inventory, sales, POS, and staff tracking.", tech: ["PHP", "MySQL", "Bootstrap"] },
  { title: "Dream Angels Learning", desc: "Educational institution portal with course catalogs and enrollment system.", tech: ["React", "Node.js", "PostgreSQL"] },
  { title: "AI Task Manager", desc: "Productivity application leveraging AI for smart task categorization and prioritization.", tech: ["Next.js", "OpenAI API", "Prisma"] },
  { title: "Weather Dashboard", desc: "Real-time weather data visualization with interactive maps and location tracking.", tech: ["React", "Weather API", "Chart.js"] },
  { title: "Todo Pro", desc: "Advanced task management with drag-and-drop, subtasks, and sync capabilities.", tech: ["TypeScript", "React", "LocalStorage"] },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-dark-700 section-padding">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Selected Work</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">Production systems, platforms, and digital products I've engineered.</p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={0.05 * i} className="glass-card p-8 group hover:shadow-[0_0_40px_rgba(168,85,247,0.08)] transition-all duration-500 border-t-2 border-transparent hover:border-brand-purple/40">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-purple transition-colors">{p.title}</h3>
              <p className="text-sm text-zinc-400 mb-6 leading-relaxed h-20">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map(t => <span key={t} className="text-[11px] px-2 py-1 rounded bg-white/5 text-zinc-300 border border-white/5">{t}</span>)}
              </div>
              <div className="flex gap-4 pt-4 border-t border-white/5">
                <button className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"><ExternalLink className="w-3 h-3" /> Live</button>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
  <path d="M9 18c-4.51 2-5-2-7-2"/>
</svg>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
