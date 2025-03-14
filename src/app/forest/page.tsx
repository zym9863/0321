import Image from "next/image";

export default function ForestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题 */}
      <section className="bg-gradient-to-r from-green-600 to-green-400 rounded-lg p-6 mb-10 text-white shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">国际森林日</h1>
        <p className="text-lg text-center mb-2">每年3月21日</p>
        <p className="text-center italic">"森林是地球的肺，是生命的摇篮"</p>
      </section>

      {/* 森林日介绍 */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-green-700 border-b-2 border-green-200 pb-2">什么是国际森林日？</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>国际森林日（International Day of Forests）是联合国大会于2012年设立的国际日，旨在庆祝和提高对所有类型森林的重要性的认识。每年3月21日，世界各国通过各种活动来庆祝森林的多样性和重要性。</p>
          <p>这一天，人们被鼓励参与当地、国家和国际努力，种植树木，组织社区清理活动，或者简单地了解更多关于森林及其对我们星球的重要性。</p>
        </div>
      </section>

      {/* 森林的重要性 */}
      <section className="mb-12 bg-green-50 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-green-700">森林的重要性</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold text-green-600 mb-3">生态系统服务</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>森林覆盖了地球陆地表面的31%，是陆地生物多样性的主要栖息地</li>
              <li>森林通过光合作用吸收二氧化碳，释放氧气，调节全球气候</li>
              <li>森林保护水源，防止水土流失，减少洪水和干旱的风险</li>
              <li>森林为数百万种植物、动物和微生物提供栖息地</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold text-green-600 mb-3">社会经济价值</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>全球约有16亿人的生计直接依赖于森林资源</li>
              <li>森林提供木材、食物、药物和其他非木材林产品</li>
              <li>森林旅游和休闲活动为当地社区创造就业和收入</li>
              <li>许多原住民和传统社区的文化身份与森林紧密相连</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2024年主题 */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-green-700 border-b-2 border-green-200 pb-2">2024年主题：森林与创新</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>2024年国际森林日的主题聚焦于"森林与创新"，探讨如何通过创新技术和方法来保护、恢复和可持续管理森林资源。</p>
          <p>从卫星监测和无人机巡查，到基因技术和智能林业管理系统，创新正在改变我们保护和管理森林的方式。这些创新不仅提高了森林管理的效率和精确度，还为森林保护和可持续利用提供了新的可能性。</p>
          
          <div className="bg-green-50 p-4 rounded-lg my-6 italic">
            <p className="text-center">"创新是保护森林的新希望，<br/>科技与自然的和谐共舞，<br/>为地球的绿色未来开辟新道路。"</p>
          </div>
        </div>
      </section>

      {/* 庆祝活动 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">如何庆祝国际森林日</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-green-400">
            <h3 className="text-lg font-semibold text-green-700 mb-2">植树活动</h3>
            <p className="text-gray-700">参与当地的植树活动，为社区增添绿色，为地球增添氧气。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-green-400">
            <h3 className="text-lg font-semibold text-green-700 mb-2">森林徒步</h3>
            <p className="text-gray-700">组织或参加森林徒步活动，亲近自然，感受森林的魅力。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-green-400">
            <h3 className="text-lg font-semibold text-green-700 mb-2">环保讲座</h3>
            <p className="text-gray-700">参加关于森林保护和可持续发展的讲座，提高环保意识。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-green-400">
            <h3 className="text-lg font-semibold text-green-700 mb-2">艺术创作</h3>
            <p className="text-gray-700">以森林为主题进行绘画、摄影或其他艺术创作，表达对森林的热爱。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-green-400">
            <h3 className="text-lg font-semibold text-green-700 mb-2">减少纸张使用</h3>
            <p className="text-gray-700">减少不必要的纸张使用，选择电子文档，保护森林资源。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-green-400">
            <h3 className="text-lg font-semibold text-green-700 mb-2">支持环保组织</h3>
            <p className="text-gray-700">支持致力于森林保护的环保组织，为森林保护贡献力量。</p>
          </div>
        </div>
      </section>

      {/* 森林保护行动 */}
      <section className="mb-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">森林保护行动</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-green-600 mb-2">减少森林砍伐</h3>
            <p className="text-gray-700">支持可持续林业实践，选择经FSC认证的木材和纸制品，减少对原始森林的破坏。</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-green-600 mb-2">森林恢复</h3>
            <p className="text-gray-700">支持森林恢复项目，帮助恢复被破坏的森林生态系统，增加森林覆盖面积。</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-green-600 mb-2">可持续消费</h3>
            <p className="text-gray-700">选择可持续生产的产品，减少对森林资源的过度消耗，支持环保企业。</p>
          </div>
        </div>
      </section>

      {/* 资源链接 */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-green-700 border-b-2 border-green-200 pb-2">森林资源</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>了解更多关于森林保护的资源：</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>联合国粮农组织（FAO）：提供全球森林资源评估和森林保护信息</li>
            <li>世界自然基金会（WWF）：致力于森林保护和可持续管理的国际环保组织</li>
            <li>国际森林研究中心（CIFOR）：提供森林研究和政策信息</li>
            <li>全球森林观察（Global Forest Watch）：提供实时森林监测数据和工具</li>
          </ul>
        </div>
      </section>
    </div>
  );
}