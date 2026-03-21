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
