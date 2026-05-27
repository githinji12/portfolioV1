"use client";
import { motion } from "framer-motion";

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }} transition={{ duration: 15, repeat: Infinity }} className="absolute -top-32 -left-32 w-150 h-150 rounded-full bg-brand-blue/20 blur-[120px] animate-float" />
      <motion.div animate={{ scale: [1, 1.3, 1], rotate: [0, -45, 0] }} transition={{ duration: 18, repeat: Infinity }} className="absolute top-1/3 -right-32 w-[700px] h-[700px] rounded-full bg-brand-purple/15 blur-[140px] animate-pulse-slow" />
      <motion.div animate={{ y: [0, -40, 0] }} transition={{ duration: 12, repeat: Infinity }} className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-brand-cyan/10 blur-[100px]" />
    </div>
  );
}