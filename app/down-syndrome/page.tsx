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
