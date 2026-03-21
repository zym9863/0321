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
