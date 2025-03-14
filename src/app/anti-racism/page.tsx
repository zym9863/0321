import Image from "next/image";

export default function AntiRacismPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题 */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg p-6 mb-10 text-white shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">国际消除种族歧视日</h1>
        <p className="text-lg text-center mb-2">每年3月21日</p>
        <p className="text-center italic">"平等、尊重、包容 — 共建没有歧视的世界"</p>
      </section>

      {/* 介绍 */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-yellow-700 border-b-2 border-yellow-200 pb-2">什么是国际消除种族歧视日？</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>国际消除种族歧视日（International Day for the Elimination of Racial Discrimination）是联合国于1966年设立的国际纪念日，旨在纪念1960年3月21日南非沙佩维尔惨案，当时警察向和平示威反对种族隔离法的示威者开枪，导致69人死亡。</p>
          <p>每年的这一天，世界各国通过各种活动来提高人们对种族歧视问题的认识，促进种族平等和包容，消除一切形式的种族歧视。联合国呼吁国际社会加倍努力，消除一切形式的种族歧视。</p>
        </div>
      </section>

      {/* 种族歧视的危害 */}
      <section className="mb-12 bg-yellow-50 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-yellow-700">种族歧视的危害</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold text-yellow-600 mb-3">社会影响</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>加剧社会分化和不平等</li>
              <li>阻碍社会和谐与稳定发展</li>
              <li>导致社会资源分配不公</li>
              <li>破坏社会凝聚力和团结</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold text-yellow-600 mb-3">个人影响</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>损害个人尊严和自尊</li>
              <li>限制教育和就业机会</li>
              <li>影响身心健康和生活质量</li>
              <li>造成心理创伤和代际影响</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2024年主题 */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-yellow-700 border-b-2 border-yellow-200 pb-2">2024年主题：数字时代的种族平等</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>2024年国际消除种族歧视日的主题聚焦于"数字时代的种族平等"，探讨如何应对数字环境中出现的新形式种族歧视，以及如何利用数字技术促进种族平等。</p>
          <p>随着数字技术的发展，种族歧视也呈现出新的形式，如算法偏见、网络仇恨言论、数字鸿沟等。同时，数字技术也为促进种族平等提供了新的工具和平台，如在线教育资源、社交媒体倡导、数据驱动的政策制定等。</p>
          
          <div className="bg-yellow-50 p-4 rounded-lg my-6">
            <p className="font-semibold text-center">"在数字时代，我们必须确保技术成为消除而非加剧种族歧视的工具。"</p>
          </div>
        </div>
      </section>

      {/* 行动倡议 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-700">如何参与反种族歧视行动</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-yellow-400">
            <h3 className="text-lg font-semibold text-yellow-700 mb-2">教育与意识</h3>
            <p className="text-gray-700">学习不同文化和历史，提高对种族歧视问题的认识，参加相关讲座和工作坊。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-yellow-400">
            <h3 className="text-lg font-semibold text-yellow-700 mb-2">发声与倡导</h3>
            <p className="text-gray-700">在日常生活中勇敢发声反对歧视言行，支持反歧视政策和法律。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-yellow-400">
            <h3 className="text-lg font-semibold text-yellow-700 mb-2">社区参与</h3>
            <p className="text-gray-700">参与当地多元文化活动，支持促进种族和谐的社区项目。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-yellow-400">
            <h3 className="text-lg font-semibold text-yellow-700 mb-2">媒体素养</h3>
            <p className="text-gray-700">批判性思考媒体中的刻板印象，支持多元文化的媒体内容。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-yellow-400">
            <h3 className="text-lg font-semibold text-yellow-700 mb-2">职场多元化</h3>
            <p className="text-gray-700">在工作场所促进多元化和包容性，支持平等就业机会。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-yellow-400">
            <h3 className="text-lg font-semibold text-yellow-700 mb-2">数字责任</h3>
            <p className="text-gray-700">在网络空间负责任地行动，反对网络仇恨言论，支持数字包容。</p>
          </div>
        </div>
      </section>

      {/* 名人名言 */}
      <section className="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-lg p-6 mb-10 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-700">关于种族平等的名言</h2>
        <div className="space-y-6">
          <blockquote className="italic text-gray-700 border-l-4 border-yellow-300 pl-4 py-2">
            "我有一个梦想，我的四个孩子有一天将生活在一个不是以他们的肤色，而是以他们的品格来评判他们的国家。" — 马丁·路德·金
          </blockquote>
          <blockquote className="italic text-gray-700 border-l-4 border-yellow-300 pl-4 py-2">
            "没有人生来就仇恨另一个人因为他的肤色、背景或宗教。人们必须学会去恨，如果他们能学会恨，他们也能被教导去爱。" — 纳尔逊·曼德拉
          </blockquote>
          <blockquote className="italic text-gray-700 border-l-4 border-yellow-300 pl-4 py-2">
            "多元化是被邀请参加舞会，包容是被邀请跳舞。" — 弗尔纳·迈尔斯
          </blockquote>
        </div>
      </section>

      {/* 资源链接 */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-yellow-700 border-b-2 border-yellow-200 pb-2">反种族歧视资源</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>了解更多关于反种族歧视的资源：</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>联合国人权高专办公室：提供关于种族歧视问题的研究报告和教育资源</li>
            <li>消除种族歧视委员会：监督《消除一切形式种族歧视国际公约》的执行情况</li>
            <li>当地人权组织：提供法律援助和支持服务</li>
            <li>教育资源：多元文化教育材料和反歧视课程</li>
          </ul>
        </div>
      </section>
    </div>
  );
}