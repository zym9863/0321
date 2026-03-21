import Link from "next/link";

export default function PageNavigation({
  prevPage,
  nextPage,
}: {
  prevPage?: { href: string; label: string };
  nextPage?: { href: string; label: string };
}) {
  return (
    <nav className="border-t border-neutral-900 bg-black px-6 py-12 md:py-20 text-white flex flex-col md:flex-row relative">
      {/* 噪音背景 */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.02]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      <div className="relative z-10 w-full mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        <div className="w-full md:w-1/3 flex justify-start">
          {prevPage ? (
            <Link
              href={prevPage.href}
              className="group flex flex-col gap-2 transition-all"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-600 transition-colors group-hover:text-neutral-400">Previous</span>
              <span className="text-xl font-medium tracking-wide text-neutral-300 transition-all group-hover:-translate-x-2 group-hover:text-white">
                {prevPage.label}
              </span>
            </Link>
          ) : <div />}
        </div>
        
        <div className="w-full md:w-1/3 flex justify-center">
          <Link
            href="/"
            className="group relative flex h-24 w-24 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950 transition-all duration-500 hover:border-neutral-500 hover:bg-white"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 transition-colors duration-500 group-hover:text-black">
              Index
            </span>
          </Link>
        </div>
        
        <div className="w-full md:w-1/3 flex justify-end text-right">
          {nextPage ? (
            <Link
              href={nextPage.href}
              className="group flex flex-col items-end gap-2 transition-all"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-600 transition-colors group-hover:text-neutral-400">Next</span>
              <span className="text-xl font-medium tracking-wide text-neutral-300 transition-all group-hover:translate-x-2 group-hover:text-white">
                {nextPage.label}
              </span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </nav>
  );
}
