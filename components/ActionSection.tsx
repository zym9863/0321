export default function ActionSection({
  title,
  actions,
  theme,
}: {
  title: string;
  actions: string[];
  theme: { gradient: string; bgColor: string };
}) {
  return (
    <section className="relative px-6 py-24 md:py-32 bg-black text-white">
      <div className="absolute inset-0 z-0 opacity-10 bg-gradient-to-b from-transparent to-neutral-900" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <h2 className="mb-16 text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl flex items-center gap-6">
          <span className="h-[2px] w-12 bg-white/20"></span>
          {title}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {actions.map((action, i) => (
            <div
              key={i}
              className="group relative flex flex-col justify-between overflow-hidden border border-neutral-800 bg-neutral-950 p-8 transition-all hover:-translate-y-2 hover:border-neutral-700 md:p-10"
            >
              <div 
                className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10"
                style={{ background: theme.gradient }}
              />
              <div className="relative z-10">
                <span className="text-4xl font-light text-neutral-700 transition-colors group-hover:text-white">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-8 text-lg text-neutral-300 leading-relaxed font-light group-hover:text-white transition-colors">
                  {action}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
