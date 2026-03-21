export default function HeroSection({
  title,
  subtitle,
  date,
  gradient,
  icon,
}: {
  title: string;
  subtitle: string;
  date: string;
  gradient: string;
  icon: string;
}) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 overflow-hidden bg-black text-white">
      {/* Dynamic Background with SVG Noise */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-screen"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      <div 
        className="absolute inset-0 z-0 opacity-30" 
        style={{ background: gradient }} 
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-black" />

      {/* Decorative large icon in background */}
      <div className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 text-[30vw] opacity-[0.03] select-none text-current grayscale mix-blend-overlay blur-[2px]">
        {icon}
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/5 text-4xl shadow-2xl backdrop-blur-md transition-transform hover:scale-110 hover:bg-white/10 md:h-32 md:w-32 md:text-5xl">
          {icon}
        </span>
        
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.5em] text-white/50">
          {date}
        </p>

        <h1 className="text-5xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl lg:text-[7rem]">
          {title}
        </h1>
        
        <div className="mt-8 h-px w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        <p className="mt-8 max-w-2xl px-4 text-lg font-light leading-relaxed text-white/70 md:text-2xl md:leading-loose">
          {subtitle}
        </p>
        
        <div className="mt-16 animate-bounce text-white/30">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
