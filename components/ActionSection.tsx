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
    <section className="px-6 py-20 md:py-28" style={{ backgroundColor: theme.bgColor }}>
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          {title}
        </h2>
        <ul className="space-y-4">
          {actions.map((action, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ background: theme.gradient }}
              >
                {i + 1}
              </span>
              <p className="text-gray-700">{action}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
