export default function StatsSection({
  stats,
  theme,
}: {
  stats: { value: string; label: string; description: string }[];
  theme: { gradient: string; textColor: string };
}) {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm"
          >
            <p
              className="text-3xl font-bold md:text-4xl"
              style={{ color: theme.textColor }}
            >
              {stat.value}
            </p>
            <p className="mt-2 font-semibold text-white">{stat.label}</p>
            <p className="mt-1 text-sm text-white/70">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
