export default function SectionCurve({ flip = false }: { flip?: boolean }) {
  const path = flip 
    ? "M0,64 C320,120 700,0 1440,64 L1440,120 L0,120 Z"
    : "M0,64 C320,0 700,120 1440,64 L1440,120 L0,120 Z";
    
  return (
    <div className={`w-full overflow-hidden ${flip ? "rotate-180" : ""} -mb-[1px]`}>
      <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-12 md:h-24 text-dark-700">
        <path d={path} fill="currentColor" />
      </svg>
    </div>
  );
}