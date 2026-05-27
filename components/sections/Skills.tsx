import Reveal from "../ui/Reveal";

const categories = [
  { title: "Frontend", items: ["React", "Next.js", "TailwindCSS", "JavaScript"] },
  { title: "Backend", items: ["PHP", "Supabase", "REST APIs", "Node.js"] },
  { title: "Database", items: ["MySQL", "PostgreSQL", "Firebase"] },
  { title: "Tools", items: ["Git/GitHub", "Figma", "Postman", "Vercel"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Technical Stack</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">Tools and technologies I use to ship production-ready software.</p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={0.1 * i} className="glass-card p-6 hover:translate-y-[-4px] hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-all duration-300">
              <h3 className="text-lg font-medium mb-4 text-zinc-200">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(skill => (
                  <span key={skill} className="px-3 py-1.5 text-xs rounded-md bg-white/5 border border-white/10 text-zinc-400 hover:border-brand-blue/30 hover:text-white transition-colors">{skill}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}