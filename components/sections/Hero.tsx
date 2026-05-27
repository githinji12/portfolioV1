"use client";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import DownloadCVButton from "@/components/ui/DownloadCVButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden">
      
      {/* 🌗 Theme-Aware Grid Background */}
      <div 
        className="absolute inset-0 bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(var(--grid-color), 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--grid-color), 0.03) 1px, transparent 1px)
          `
        }}
      />

      {/* 🖼️ Floating Logo Badge - Desktop Only */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute top-32 right-12 hidden lg:block z-0"
      >
        <div className="relative w-24 h-24 rounded-2xl overflow-hidden glass-card p-1">
          <Image
            src="/images/my-logo.jpg"
            alt="Brian Githinji"
            fill
            className="object-cover rounded-xl"
            sizes="96px"
          />
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto text-center z-10 relative">
        
        {/* Availability Badge - theme-aware */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="mb-6"
        >
          <span 
            className="inline-block px-4 py-1.5 text-xs font-medium rounded-full border backdrop-blur-sm transition-colors"
            style={{
              borderColor: "var(--border-color)",
              backgroundColor: "var(--muted-bg)",
              color: "var(--text-secondary)"
            }}
          >
            Available for Remote Work
          </span>
        </motion.div>

        {/* 🎯 Main Heading - stays consistent */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1, duration: 0.7 }} 
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          Building <span className="gradient-text">scalable</span> digital platforms.
        </motion.h1>

        {/* Subtitle - theme-aware */}
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3 }} 
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          I design and build scalable web applications, business systems, and modern digital platforms. Based in Kenya, working globally.
        </motion.p>

        {/* ✅ Single CTA Group - cleaned up, theme-aware buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4 }} 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="#projects" 
            className="glass-btn group relative overflow-hidden"
            style={{ borderColor: "var(--border-color)" }}
          >
            <span className="relative z-10 flex items-center">
              View Projects 
              <ArrowDownRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </span>
          </a>
          
          <DownloadCVButton className="border-brand-blue/30! bg-brand-blue/10! hover:bg-brand-blue/20!" />
          
          <a 
            href="#contact" 
            className="glass-btn !bg-transparent"
            style={{ borderColor: "var(--border-color)" }}
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}