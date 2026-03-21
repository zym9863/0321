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
