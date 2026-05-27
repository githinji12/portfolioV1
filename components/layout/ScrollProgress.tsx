"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-60"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #6366f1, #a855f7)",
        boxShadow: "0 0 10px rgba(99, 102, 241, 0.5)"
      }}
    />
  );
}