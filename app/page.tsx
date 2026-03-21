import Link from "next/link";

const days = [
  {
    href: "/forest",
    icon: "🌲",
    title: "世界森林日",
    titleEn: "World Forestry Day",
    subtitle: "守护绿色家园 / 生态的呼吸",
    gradient: "from-emerald-950 via-emerald-900 to-[#1B5E20]",
    accent: "text-emerald-400",
  },
  {
    href: "/poetry",
    icon: "📜",
    title: "世界诗歌日",
    titleEn: "World Poetry Day",
    subtitle: "语言的艺术 / 灵魂的共鸣",
    gradient: "from-purple-950 via-purple-900 to-[#4A148C]",
    accent: "text-purple-400",
  },
  {
    href: "/down-syndrome",
    icon: "🧦",
    title: "世界唐氏综合征日",
    titleEn: "World Down Syndrome Day",
    subtitle: "拥抱不同 / 错袜的羁绊",
    gradient: "from-orange-950 via-orange-900 to-[#E65100]",
    accent: "text-orange-400",
  },
  {
    href: "/anti-racism",
    icon: "✊",
    title: "消除种族歧视日",
    titleEn: "Intl. Day for the Elimination of Racial Discrimination",
    subtitle: "平等与尊严 / 同一片星空下",
    gradient: "from-blue-950 via-blue-900 to-[#0D47A1]",
    accent: "text-blue-400",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* 噪点肌理层 */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32 lg:flex lg:gap-24 lg:py-40">
        
        {/* 左侧：巨型排版头 */}
        <header className="flex flex-col justify-center pb-20 lg:w-1/3 lg:pb-0">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-neutral-500">
            A Day of Significance
          </p>
          
          <div className="relative">
            <h1 className="text-[6rem] font-bold leading-none tracking-tighter sm:text-[8rem] md:text-[10rem] lg:text-[12rem]">
              3<span className="text-neutral-700">/</span>21
            </h1>
            <div className="absolute -left-4 top-1/2 -z-10 h-32 w-32 -translate-y-1/2 rounded-full bg-neutral-900 blur-3xl" />
          </div>

          <p className="mt-8 max-w-sm text-lg font-light leading-relaxed text-neutral-400 md:text-xl">
            在历史的刻度上，有些日子注定要承载更多的意义。
            <br className="hidden sm:block" />
            <strong className="font-normal text-white">四个维度的纪念</strong>
            汇聚于斯，呼唤关怀、平等、艺术与自然。
          </p>
        </header>

        {/* 右侧：解构主义卡片列 */}
        <div className="group flex-1 space-y-4">
          {days.map((day, idx) => (
            <Link
              key={day.href}
              href={day.href}
              className={`relative block overflow-hidden rounded-sm border border-neutral-800 bg-neutral-950/50 p-6 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1 hover:border-neutral-700 hover:shadow-2xl md:p-8 hover:!opacity-100 group-hover:opacity-40`}
            >
              <div className={`absolute inset-0 z-0 bg-gradient-to-br ${day.gradient} opacity-0 transition-opacity duration-500 hover:opacity-100`} />
              
              <div className="relative z-10 flex flex-col justify-between sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl opacity-80 mix-blend-luminosity grayscale transition-all duration-300 group-hover/link:grayscale-0">{day.icon}</span>
                    <span className={`text-xs font-mono tracking-widest uppercase ${day.accent} opacity-80`}>Event 0{idx + 1}</span>
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {day.title}
                  </h2>
                  <h3 className="mt-1 text-sm font-medium tracking-wider text-neutral-500 uppercase">
                    {day.titleEn}
                  </h3>
                </div>
                
                <div className="mt-6 text-left sm:mt-0 sm:text-right">
                  <p className="text-sm font-light tracking-wide text-neutral-300">
                    {day.subtitle.split(' / ')[0]}
                    <span className="block text-neutral-500">{day.subtitle.split(' / ')[1]}</span>
                  </p>
                  
                  <div className="mt-6 inline-flex items-center gap-2 border-b border-transparent pb-1 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-white">
                    Explore
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
