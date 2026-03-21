export default function StatsSection({
  stats,
  theme,
}: {
  stats: { value: string; label: string; description: string }[];
  theme: { gradient: string; textColor: string };
}) {
  return (
    <section className="border-t border-neutral-800 bg-[#0a0a0a] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-sm font-bold uppercase tracking-[0.3em] text-neutral-500 text-center">
          By The Numbers
        </h2>
        <div className="grid gap-px bg-neutral-800 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative bg-[#0a0a0a] p-8 md:p-12 transition-colors hover:bg-neutral-900"
            >
              <div 
                className="absolute left-0 top-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                style={{ background: theme.gradient }}
              />
              <p
                className="text-5xl font-light tracking-tighter md:text-6xl lg:text-7xl"
                style={{ color: theme.textColor }}
              >
                {stat.value}
              </p>
              <div className="mt-8">
                <p className="text-lg font-medium tracking-wide text-white">
                  {stat.label}
                </p>
                <p className="mt-4 text-sm font-light leading-relaxed text-neutral-500">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
