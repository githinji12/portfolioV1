import Navbar from "@/components/layout/Navbar";
import BackgroundBlobs from "@/components/layout/BackgroundBlobs";
import SectionCurve from "@/components/layout/SectionCurve";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <BackgroundBlobs />
      
      <Hero />
      <SectionCurve />
      
      <About />
      <SectionCurve flip />
      
      <Skills />
      <SectionCurve />
      
      <Projects />
      <SectionCurve flip />
      
      <Contact />
      
      <footer className="py-12 text-center text-zinc-600 text-sm border-t border-white/5">
        © {new Date().getFullYear()} Brian Githinji. Built with Next.js, Tailwind & Framer Motion.
      </footer>
    </>
  );
}