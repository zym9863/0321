# 3月21日纪念日网站 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a multi-page immersive website showcasing four March 21st commemorative days with unique theme colors and full-screen designs.

**Architecture:** Next.js 16 App Router with 5 routes (home + 4 sub-pages). Shared components in `components/` consume theme config via props. Each sub-page composes the same 5 sections (Hero, Info, Stats, Action, Navigation) with page-specific content and colors.

**Tech Stack:** Next.js 16.2.0, React 19, TypeScript 5, Tailwind CSS v4, pnpm

**Spec:** `docs/superpowers/specs/2026-03-21-march21-commemorations-design.md`

---

## File Structure

```
components/
├── HeroSection.tsx         # Full-screen hero with gradient background, title, icon
├── InfoSection.tsx          # 2-3 paragraph intro section with light background
├── StatsSection.tsx         # 3-4 stat cards in a responsive grid
├── ActionSection.tsx        # Action items list with themed icons
└── PageNavigation.tsx       # Bottom nav: prev page / home / next page

app/
├── layout.tsx               # MODIFY: Update metadata, lang="zh-CN"
├── page.tsx                 # REWRITE: Home page with 2×2 card grid
├── globals.css              # MODIFY: Add animation keyframes
├── forest/
│   └── page.tsx             # World Day of Forests
├── poetry/
│   └── page.tsx             # World Poetry Day
├── down-syndrome/
│   └── page.tsx             # World Down Syndrome Day
└── anti-racism/
    └── page.tsx             # International Day for Elimination of Racial Discrimination
```

---

### Task 1: Update Root Layout and Global CSS

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Update `app/layout.tsx`**

Replace the entire file content:

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3月21日 — 一个日期，四份意义",
  description:
    "探索3月21日的四个国际纪念日：世界森林日、世界诗歌日、世界唐氏综合征日、国际消除种族歧视日",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Update `app/globals.css`**

Replace the entire file content:

```css
@import "tailwindcss";

:root {
  --background: #0a0a0a;
  --foreground: #ededed;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

body {
  background: var(--background);
  color: var(--foreground);
}

/* Fade-in animation */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out both;
}

.animate-delay-200 {
  animation-delay: 0.2s;
}

.animate-delay-400 {
  animation-delay: 0.4s;
}

.animate-delay-600 {
  animation-delay: 0.6s;
}
```

- [ ] **Step 3: Verify build**

Run: `cd d:/github/projects/0321 && pnpm build`
Expected: Build succeeds with no errors.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx app/globals.css
git commit -m "feat: update root layout and global CSS for March 21 site"
```

---

### Task 2: Create Shared Components

**Files:**
- Create: `components/HeroSection.tsx`
- Create: `components/InfoSection.tsx`
- Create: `components/StatsSection.tsx`
- Create: `components/ActionSection.tsx`
- Create: `components/PageNavigation.tsx`

- [ ] **Step 1: Create `components/HeroSection.tsx`**

```tsx
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
    <section
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center text-white"
      style={{ background: gradient }}
    >
      <span className="animate-fade-in-up text-6xl md:text-8xl">{icon}</span>
      <h1 className="animate-fade-in-up animate-delay-200 mt-6 text-4xl font-bold md:text-6xl">
        {title}
      </h1>
      <p className="animate-fade-in-up animate-delay-400 mt-4 max-w-2xl text-lg opacity-90 md:text-xl">
        {subtitle}
      </p>
      <p className="animate-fade-in-up animate-delay-600 mt-4 text-sm tracking-widest opacity-60">
        {date}
      </p>
    </section>
  );
}
```

- [ ] **Step 2: Create `components/InfoSection.tsx`**

```tsx
export default function InfoSection({
  paragraphs,
  bgColor,
}: {
  paragraphs: string[];
  bgColor: string;
}) {
  return (
    <section
      className="px-6 py-20 md:py-28"
      style={{ backgroundColor: bgColor }}
    >
      <div className="mx-auto max-w-3xl space-y-6">
        {paragraphs.map((text, i) => (
          <p
            key={i}
            className="text-lg leading-relaxed text-gray-800 md:text-xl"
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create `components/StatsSection.tsx`**

```tsx
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
```

- [ ] **Step 4: Create `components/ActionSection.tsx`**

```tsx
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
```

- [ ] **Step 5: Create `components/PageNavigation.tsx`**

```tsx
import Link from "next/link";

export default function PageNavigation({
  prevPage,
  nextPage,
}: {
  prevPage?: { href: string; label: string };
  nextPage?: { href: string; label: string };
}) {
  return (
    <nav className="flex items-center justify-between px-6 py-8">
      <div>
        {prevPage && (
          <Link
            href={prevPage.href}
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            ← {prevPage.label}
          </Link>
        )}
      </div>
      <Link
        href="/"
        className="text-sm font-medium text-white/70 transition-colors hover:text-white"
      >
        首页
      </Link>
      <div>
        {nextPage && (
          <Link
            href={nextPage.href}
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            {nextPage.label} →
          </Link>
        )}
      </div>
    </nav>
  );
}
```

- [ ] **Step 6: Verify build**

Run: `cd d:/github/projects/0321 && pnpm build`
Expected: Build succeeds (components are not yet imported, but should have no syntax errors).

- [ ] **Step 7: Commit**

```bash
git add components/
git commit -m "feat: add shared components - HeroSection, InfoSection, StatsSection, ActionSection, PageNavigation"
```

---

### Task 3: Build Home Page

**Files:**
- Rewrite: `app/page.tsx`

- [ ] **Step 1: Rewrite `app/page.tsx`**

```tsx
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
```

- [ ] **Step 2: Verify dev server**

Run: `cd d:/github/projects/0321 && pnpm dev`
Expected: Home page renders at http://localhost:3000 with 4 colored cards.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: build home page with 4 commemorative day cards"
```

---

### Task 4: Build Forest Day Page

**Files:**
- Create: `app/forest/page.tsx`

- [ ] **Step 1: Create `app/forest/page.tsx`**

```tsx
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import StatsSection from "@/components/StatsSection";
import ActionSection from "@/components/ActionSection";
import PageNavigation from "@/components/PageNavigation";

export const metadata: Metadata = {
  title: "世界森林日 — 3月21日",
  description: "每年3月21日，世界森林日提醒我们森林对地球生态系统的重要性。",
};

const theme = {
  gradient: "linear-gradient(135deg, #1B5E20, #4CAF50, #A5D6A7)",
  textColor: "#4CAF50",
  bgColor: "#E8F5E9",
};

export default function ForestPage() {
  return (
    <div>
      <HeroSection
        icon="🌲"
        title="世界森林日"
        subtitle="森林是地球之肺，为我们提供氧气、净化空气、保护生物多样性"
        date="每年3月21日 · 联合国大会于2012年设立"
        gradient={theme.gradient}
      />
      <InfoSection
        bgColor={theme.bgColor}
        paragraphs={[
          "世界森林日（International Day of Forests）由联合国大会于2012年设立，旨在提高公众对森林重要性的认识。森林覆盖了地球约31%的陆地面积，是80%以上陆地生物多样性的家园。",
          "森林在应对气候变化中扮演着关键角色——它们每年吸收约22亿吨二氧化碳，是最重要的碳汇之一。同时，全球约16亿人直接依赖森林获得食物、住所、能源和收入。",
          "然而，每年约有1000万公顷的森林因砍伐和退化而消失。保护和恢复森林是实现可持续发展目标的核心任务之一。",
        ]}
      />
      <section style={{ background: theme.gradient }}>
        <StatsSection
          theme={theme}
          stats={[
            { value: "31%", label: "陆地覆盖", description: "森林覆盖地球陆地面积的比例" },
            { value: "80%", label: "生物多样性", description: "陆地生物多样性存在于森林中" },
            { value: "16亿", label: "人口依赖", description: "直接依赖森林生存的人口" },
            { value: "1000万", label: "年损失公顷", description: "每年消失的森林面积" },
          ]}
        />
      </section>
      <ActionSection
        title="我们能做什么？"
        actions={[
          "减少纸张浪费，选择再生纸制品，支持无纸化办公。",
          "支持和参与植树造林活动，为恢复森林生态贡献力量。",
          "购买经FSC认证的木材和纸制品，支持可持续林业。",
          "了解并传播森林保护知识，提升身边人的环保意识。",
        ]}
        theme={theme}
      />
      <div style={{ background: theme.gradient }}>
        <PageNavigation
          nextPage={{ href: "/poetry", label: "世界诗歌日" }}
        />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify in browser**

Navigate to http://localhost:3000/forest
Expected: Full page renders with hero, info, stats, actions, and navigation.

- [ ] **Step 3: Commit**

```bash
git add app/forest/
git commit -m "feat: add World Day of Forests page"
```

---

### Task 5: Build Poetry Day Page

**Files:**
- Create: `app/poetry/page.tsx`

- [ ] **Step 1: Create `app/poetry/page.tsx`**

```tsx
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import StatsSection from "@/components/StatsSection";
import ActionSection from "@/components/ActionSection";
import PageNavigation from "@/components/PageNavigation";

export const metadata: Metadata = {
  title: "世界诗歌日 — 3月21日",
  description: "每年3月21日，世界诗歌日致敬诗歌的力量与语言的多样性。",
};

const theme = {
  gradient: "linear-gradient(135deg, #4A148C, #7B1FA2, #CE93D8)",
  textColor: "#7B1FA2",
  bgColor: "#F3E5F5",
};

export default function PoetryPage() {
  return (
    <div>
      <HeroSection
        icon="📜"
        title="世界诗歌日"
        subtitle="诗歌是人类心灵最古老的表达方式，跨越语言与文化的桥梁"
        date="每年3月21日 · 联合国教科文组织于1999年设立"
        gradient={theme.gradient}
      />
      <InfoSection
        bgColor={theme.bgColor}
        paragraphs={[
          "世界诗歌日（World Poetry Day）由联合国教科文组织于1999年设立，旨在促进诗歌的阅读、写作、出版和教学，支持语言多样性，并为濒危语言提供通过诗歌表达的机会。",
          "诗歌是人类最古老的文学形式之一，存在于每一种文化中。从中国的唐诗宋词到波斯的鲁米，从日本的俳句到拉丁美洲的聂鲁达，诗歌以简洁而深刻的方式触动人心。",
          "在数字时代，诗歌正以新的形式焕发活力——社交媒体上的微诗、口语诗表演、诗歌播客等，让更多年轻人接触并爱上这种艺术形式。",
        ]}
      />
      <section style={{ background: theme.gradient }}>
        <StatsSection
          theme={theme}
          stats={[
            { value: "1999", label: "设立年份", description: "UNESCO正式确立世界诗歌日" },
            { value: "7000+", label: "语言", description: "世界上现存的语言种类" },
            { value: "3000+", label: "年历史", description: "已知最古老的诗歌传统" },
            { value: "193", label: "参与国家", description: "UNESCO成员国共同庆祝" },
          ]}
        />
      </section>
      <ActionSection
        title="我们能做什么？"
        actions={[
          "今天就读一首诗，用五分钟感受语言之美。",
          "尝试写一首短诗，记录此刻的感受和观察。",
          "参加或组织一次诗歌朗诵活动，与他人分享诗歌的力量。",
          "关注和支持本地诗人和独立诗歌出版物。",
        ]}
        theme={theme}
      />
      <div style={{ background: theme.gradient }}>
        <PageNavigation
          prevPage={{ href: "/forest", label: "世界森林日" }}
          nextPage={{ href: "/down-syndrome", label: "世界唐氏综合征日" }}
        />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify and commit**

```bash
git add app/poetry/
git commit -m "feat: add World Poetry Day page"
```

---

### Task 6: Build Down Syndrome Day Page

**Files:**
- Create: `app/down-syndrome/page.tsx`

- [ ] **Step 1: Create `app/down-syndrome/page.tsx`**

```tsx
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import StatsSection from "@/components/StatsSection";
import ActionSection from "@/components/ActionSection";
import PageNavigation from "@/components/PageNavigation";

export const metadata: Metadata = {
  title: "世界唐氏综合征日 — 3月21日",
  description: "每年3月21日，世界唐氏综合征日提升公众对唐氏综合征的认识与包容。",
};

const theme = {
  gradient: "linear-gradient(135deg, #E65100, #FF9800, #FFCC02)",
  textColor: "#E65100",
  bgColor: "#FFF3E0",
};

export default function DownSyndromePage() {
  return (
    <div>
      <HeroSection
        icon="🧦"
        title="世界唐氏综合征日"
        subtitle="穿上不一样的袜子，拥抱每一个独特的生命"
        date="每年3月21日 · 联合国大会于2011年设立"
        gradient={theme.gradient}
      />
      <InfoSection
        bgColor={theme.bgColor}
        paragraphs={[
          "世界唐氏综合征日（World Down Syndrome Day）选在3月21日，象征着唐氏综合征的核心特征——第21号染色体的三体（3条第21号染色体）。这一天由联合国大会于2011年正式确立。",
          "唐氏综合征是最常见的染色体异常之一，全球大约每700-1000个新生儿中就有一个患有此症。患有唐氏综合征的人在适当的支持下，可以过上充实、有意义的生活。",
          "\"穿不一样的袜子\"已成为这一天的标志性活动——人们穿上颜色不同或图案古怪的袜子，以此象征对差异的接纳与庆祝。",
        ]}
      />
      <section style={{ background: theme.gradient }}>
        <StatsSection
          theme={theme}
          stats={[
            { value: "1/700", label: "发生率", description: "全球新生儿中唐氏综合征的比例" },
            { value: "21", label: "号染色体", description: "第21号染色体三体是主要病因" },
            { value: "60+", label: "预期寿命", description: "现代医疗下的平均预期寿命（岁）" },
            { value: "2011", label: "设立年份", description: "联合国正式确立纪念日" },
          ]}
        />
      </section>
      <ActionSection
        title="我们能做什么？"
        actions={[
          "穿上不一样的袜子，在社交媒体上分享，传播包容理念。",
          "了解唐氏综合征的基本知识，消除误解与偏见。",
          "支持唐氏综合征群体的就业和社会融合项目。",
          "倡导包容性教育，让每个孩子都有平等的学习机会。",
        ]}
        theme={theme}
      />
      <div style={{ background: theme.gradient }}>
        <PageNavigation
          prevPage={{ href: "/poetry", label: "世界诗歌日" }}
          nextPage={{ href: "/anti-racism", label: "国际消除种族歧视日" }}
        />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify and commit**

```bash
git add app/down-syndrome/
git commit -m "feat: add World Down Syndrome Day page"
```

---

### Task 7: Build Anti-Racism Day Page

**Files:**
- Create: `app/anti-racism/page.tsx`

- [ ] **Step 1: Create `app/anti-racism/page.tsx`**

```tsx
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import StatsSection from "@/components/StatsSection";
import ActionSection from "@/components/ActionSection";
import PageNavigation from "@/components/PageNavigation";

export const metadata: Metadata = {
  title: "国际消除种族歧视日 — 3月21日",
  description: "每年3月21日，国际消除种族歧视日呼吁消除一切形式的种族歧视。",
};

const theme = {
  gradient: "linear-gradient(135deg, #0D47A1, #1976D2, #64B5F6)",
  textColor: "#1976D2",
  bgColor: "#E3F2FD",
};

export default function AntiRacismPage() {
  return (
    <div>
      <HeroSection
        icon="✊"
        title="国际消除种族歧视日"
        subtitle="每一个人，无论肤色、种族或民族，都享有平等的尊严与权利"
        date="每年3月21日 · 联合国大会于1966年设立"
        gradient={theme.gradient}
      />
      <InfoSection
        bgColor={theme.bgColor}
        paragraphs={[
          "国际消除种族歧视日（International Day for the Elimination of Racial Discrimination）源于1960年3月21日南非沙佩维尔惨案——在一场反对种族隔离「通行证法」的和平示威中，警察开枪打死69人。1966年，联合国大会将这一天定为纪念日。",
          "《世界人权宣言》第一条宣称「人人生而自由，在尊严和权利上一律平等」。然而，种族歧视至今仍是全球性问题——它存在于就业、教育、司法、医疗等社会的方方面面。",
          "消除种族歧视不仅是法律和制度的任务，更需要每个人在日常生活中践行尊重与包容。认识偏见是消除偏见的第一步。",
        ]}
      />
      <section style={{ background: theme.gradient }}>
        <StatsSection
          theme={theme}
          stats={[
            { value: "1960", label: "沙佩维尔事件", description: "南非和平示威遭镇压的年份" },
            { value: "1966", label: "设立年份", description: "联合国正式确立纪念日" },
            { value: "182", label: "缔约国", description: "《消除种族歧视公约》缔约国数量" },
            { value: "100+", label: "受影响国家", description: "仍存在系统性种族歧视的国家" },
          ]}
        />
      </section>
      <ActionSection
        title="我们能做什么？"
        actions={[
          "反思自身可能存在的无意识偏见，保持开放和学习的态度。",
          "当目睹种族歧视行为时，勇敢发声，为受害者提供支持。",
          "学习不同文化和民族的历史与贡献，拓宽视野。",
          "支持促进种族平等的组织和倡议活动。",
        ]}
        theme={theme}
      />
      <div style={{ background: theme.gradient }}>
        <PageNavigation
          prevPage={{ href: "/down-syndrome", label: "世界唐氏综合征日" }}
        />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify and commit**

```bash
git add app/anti-racism/
git commit -m "feat: add International Day for Elimination of Racial Discrimination page"
```

---

### Task 8: Final Verification and Build

- [ ] **Step 1: Clean up unused public assets**

Delete the default Next.js template files no longer needed:
- `public/next.svg`
- `public/vercel.svg`
- `public/file.svg`
- `public/globe.svg`
- `public/window.svg`

- [ ] **Step 2: Run full build**

Run: `cd d:/github/projects/0321 && pnpm build`
Expected: Build succeeds with all 5 routes generated.

- [ ] **Step 3: Run lint**

Run: `cd d:/github/projects/0321 && pnpm lint`
Expected: No lint errors.

- [ ] **Step 4: Test all routes in dev**

Run: `cd d:/github/projects/0321 && pnpm dev`
Verify each route:
- http://localhost:3000 — Home page with 4 cards
- http://localhost:3000/forest — Green forest day page
- http://localhost:3000/poetry — Purple poetry day page
- http://localhost:3000/down-syndrome — Orange down syndrome day page
- http://localhost:3000/anti-racism — Blue anti-racism day page

Check:
- All navigation links work (card clicks from home, prev/next between pages, home link)
- Responsive layout on mobile viewport (Chrome DevTools)
- Animations play on page load

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: complete March 21 commemorations website - cleanup and final build"
```
