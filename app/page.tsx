import Link from "next/link";

const days = [
  {
    href: "/forest",
    icon: "🌲",
    title: "世界森林日",
    subtitle: "守护绿色家园",
    gradient: "linear-gradient(135deg, #1B5E20, #4CAF50)",
  },
  {
    href: "/poetry",
    icon: "📜",
    title: "世界诗歌日",
    subtitle: "语言的艺术",
    gradient: "linear-gradient(135deg, #4A148C, #7B1FA2)",
  },
  {
    href: "/down-syndrome",
    icon: "🧦",
    title: "世界唐氏综合征日",
    subtitle: "拥抱不同",
    gradient: "linear-gradient(135deg, #E65100, #FF9800)",
  },
  {
    href: "/anti-racism",
    icon: "✊",
    title: "国际消除种族歧视日",
    subtitle: "平等与尊严",
    gradient: "linear-gradient(135deg, #0D47A1, #1976D2)",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 py-16">
      <header className="animate-fade-in-up mb-12 text-center">
        <p className="text-sm tracking-[0.3em] text-white/40">MARCH 21</p>
        <h1 className="mt-2 text-5xl font-bold text-white md:text-7xl">
          3月21日
        </h1>
        <p className="mt-3 text-lg text-white/60">一个日期，四份意义</p>
      </header>

      <div className="animate-fade-in-up animate-delay-200 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
        {days.map((day) => (
          <Link
            key={day.href}
            href={day.href}
            className="group rounded-2xl p-8 text-white transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl"
            style={{ background: day.gradient }}
          >
            <span className="text-4xl">{day.icon}</span>
            <h2 className="mt-4 text-xl font-semibold">{day.title}</h2>
            <p className="mt-1 text-sm text-white/70">{day.subtitle}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
