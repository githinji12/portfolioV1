"use client";
import Reveal from "../ui/Reveal";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-dark-700 relative">
      <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* IMAGE COLUMN */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative group w-full max-w-sm mx-auto aspect-[4/5]">
            {/* Animated Glow Behind */}
            <div className="absolute inset-0 bg-linear-to-br from-brand-blue/30 to-brand-purple/30 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
            
            {/* Glass Frame */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full h-full glass-card overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src="/brian-profile.jpg" // ⬅️ UPDATE IF NAMED DIFFERENTLY
                alt="Brian Githinji - Full Stack Developer"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
              />
              {/* Subtle Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-dark-900/60 via-transparent to-transparent" />
            </motion.div>
          </div>
        </Reveal>

        {/* TEXT COLUMN */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Me</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              I’m a Full Stack Developer focused on engineering robust, user-centric systems. From real-time data platforms to automated business workflows, I bridge the gap between design and deployment.
            </p>
            <p className="text-zinc-500 leading-relaxed mb-8">
              My stack centers around <span className="text-white">React & Next.js</span> on the frontend, and <span className="text-white">PHP, MySQL, Supabase</span> on the backend. I specialize in turning complex requirements into clean, maintainable code that scales.
            </p>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="glass-card p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-[50px] group-hover:bg-brand-blue/20 transition-colors duration-500" />
              <h3 className="text-lg font-medium mb-4 text-zinc-200">Core Expertise</h3>
              <ul className="space-y-3 text-zinc-400">
                {[
                  "Business Platforms & CRMs",
                  "Education & LMS Websites",
                  "Media & Streaming Interfaces",
                  "Admin Dashboards & Management Systems"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}