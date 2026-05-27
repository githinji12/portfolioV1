"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function DownloadCVButton({ className = "" }: { className?: string }) {
  return (
    <motion.a
      href="/resume.pdf"
      download="Brian_Githinji_CV.pdf"
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium tracking-wide rounded-full border border-white/10 bg-white/5 text-zinc-300 backdrop-blur-md hover:bg-white/10 hover:text-white hover:border-white/20 hover:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-all duration-300 ${className}`}
    >
      <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
      Download CV
    </motion.a>
  );
}