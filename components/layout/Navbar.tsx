"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import DownloadCVButton from "../ui/DownloadCVButton";
import ThemeToggle from "../ui/ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const bgOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 0.8]);
  const [open, setOpen] = useState(false);

  return (
    <motion.nav 
      style={{ 
        backgroundColor: bgOpacity,
        borderColor: "var(--border-color)"
      }} 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* 🖼️ Logo + Text Combined */}
        <a href="#" className="flex items-center gap-3 group">
          {/* Logo Image */}
          <div className="relative h-10 w-10 overflow-hidden rounded-lg">
            <Image
              src="/images/my-logo.jpg"
              alt="Brian Githinji"
              fill
              className="object-cover transition-transform group-hover:scale-110"
              priority
              sizes="40px"
            />
          </div>
          
          {/* BG. Text */}
          <span className="text-xl font-bold tracking-tight gradient-text">
            BG.
          </span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a 
              key={l.href} 
              href={l.href} 
              className="text-sm transition-colors hover:text-primary"
              style={{ color: "var(--text-secondary)" }}
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <DownloadCVButton />
          <a href="#contact" className="glass-btn py-2! px-4! text-xs!">Let's Talk</a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden transition-colors"
          style={{ color: "var(--text-secondary)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }} 
          animate={{ height: "auto", opacity: 1 }} 
          className="md:hidden backdrop-blur-xl border-t px-6 py-6 flex flex-col gap-4"
          style={{ 
            backgroundColor: "var(--surface)",
            borderColor: "var(--border-color)"
          }}
        >
          {links.map(l => (
            <a 
              key={l.href} 
              href={l.href} 
              onClick={() => setOpen(false)} 
              className="text-lg transition-colors hover:text-primary"
              style={{ color: "var(--text-secondary)" }}
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-4 border-t" style={{ borderColor: "var(--border-color)" }}>
            <ThemeToggle />
            <DownloadCVButton className="flex-1 justify-center" />
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
