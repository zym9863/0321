export default function ColorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题 */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg p-6 mb-10 text-white shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">国际色彩日</h1>
        <p className="text-lg text-center mb-2">每年3月21日</p>
        <p className="text-center italic">&quot;色彩丰富了我们的世界，点亮了我们的生活&quot;</p>
      </section>

      {/* 色彩日介绍 */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-purple-700 border-b-2 border-purple-200 pb-2">什么是国际色彩日？</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>国际色彩日（International Colour Day）是由国际色彩协会（International Colour Association）于2008年发起的国际性庆祝活动，旨在庆祝色彩在我们日常生活中的重要性。每年的3月21日（春分日）被选为国际色彩日，因为这一天标志着昼夜平分，光明与黑暗的平衡，象征着色彩的和谐与平衡。</p>
          <p>在这一天，世界各地的艺术家、设计师、教育工作者和色彩爱好者通过各种活动来庆祝色彩的多样性和重要性，提高人们对色彩科学、色彩艺术和色彩设计的认识。</p>
        </div>
      </section>

      {/* 色彩的重要性 */}
      <section className="mb-12 bg-gradient-to-r from-red-50 via-green-50 to-blue-50 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-purple-700">色彩的重要性</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold text-purple-600 mb-3">心理影响</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>色彩能影响我们的情绪和心理状态</li>
              <li>红色可以激发热情和活力，蓝色则带来平静和安宁</li>
              <li>色彩疗法利用色彩的心理效应来改善健康和情绪</li>
              <li>工作和学习环境的色彩选择可以影响效率和创造力</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold text-purple-600 mb-3">文化与社会意义</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>不同文化中色彩具有不同的象征意义</li>
              <li>色彩在品牌识别和市场营销中起着关键作用</li>
              <li>色彩是艺术表达和文化传承的重要元素</li>
              <li>色彩编码在信息传达和安全标识中至关重要</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 色彩科学 */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-purple-700 border-b-2 border-purple-200 pb-2">色彩科学</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>色彩科学是研究色彩的物理特性、感知和应用的学科。它涉及光学、物理学、生理学、心理学和艺术等多个领域。</p>
          
          <h3 className="text-xl font-semibold text-purple-600 mt-6 mb-3">色彩模型</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-r from-red-500 via-green-500 to-blue-500 p-4 rounded-lg text-white">
              <h4 className="font-bold mb-2">RGB模型</h4>
              <p>加色模型，用于显示器和数字媒体，通过红、绿、蓝三原色的混合产生各种色彩。</p>
            </div>
            <div className="bg-gradient-to-r from-cyan-500 via-magenta-500 to-yellow-500 p-4 rounded-lg text-white">
              <h4 className="font-bold mb-2">CMYK模型</h4>
              <p>减色模型，用于印刷，通过青、品红、黄和黑四种颜色的混合产生各种色彩。</p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-purple-600 mt-6 mb-3">色彩心理学</h3>
          <p>色彩心理学研究色彩对人类心理和行为的影响。不同的色彩可以引发不同的情绪反应和联想，这在设计、营销和治疗中有广泛应用。</p>
        </div>
      </section>

      {/* 庆祝活动 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">如何庆祝国际色彩日</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-red-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-red-400 mb-4"></div>
            <h3 className="text-lg font-semibold text-red-700 mb-2">色彩探索</h3>
            <p className="text-gray-700">尝试新的色彩组合，在服装、家居或艺术创作中大胆使用色彩。</p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-blue-400 mb-4"></div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">色彩工作坊</h3>
            <p className="text-gray-700">参加或组织色彩相关的工作坊，学习色彩理论和应用技巧。</p>
          </div>
          
          <div className="bg-yellow-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-yellow-400 mb-4"></div>
            <h3 className="text-lg font-semibold text-yellow-700 mb-2">色彩摄影</h3>
            <p className="text-gray-700">拍摄以色彩为主题的照片，捕捉自然界或城市中的丰富色彩。</p>
          </div>
          
          <div className="bg-green-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-green-400 mb-4"></div>
            <h3 className="text-lg font-semibold text-green-700 mb-2">色彩与健康</h3>
            <p className="text-gray-700">了解色彩如何影响情绪和健康，尝试色彩冥想或色彩疗法。</p>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-purple-400 mb-4"></div>
            <h3 className="text-lg font-semibold text-purple-700 mb-2">色彩艺术</h3>
            <p className="text-gray-700">创作色彩丰富的艺术作品，或参观以色彩为主题的艺术展览。</p>
          </div>
          
          <div className="bg-pink-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-pink-400 mb-4"></div>
            <h3 className="text-lg font-semibold text-pink-700 mb-2">色彩教育</h3>
            <p className="text-gray-700">向孩子们介绍色彩的科学和艺术，进行有趣的色彩实验和游戏。</p>
          </div>
        </div>
      </section>

      {/* 名人名言 */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-10 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">关于色彩的名言</h2>
        <div className="space-y-6">
          <blockquote className="italic text-gray-700 border-l-4 border-purple-300 pl-4 py-2">
            &quot;色彩是生命的喜悦，因为没有色彩的世界对我们来说就像是一个坟墓。&quot; — 奥列格·卡西尼
          </blockquote>
          <blockquote className="italic text-gray-700 border-l-4 border-purple-300 pl-4 py-2">
            &quot;色彩是光的痛苦。&quot; — 亨利·马蒂斯
          </blockquote>
          <blockquote className="italic text-gray-700 border-l-4 border-purple-300 pl-4 py-2">
            &quot;色彩是一种力量，它直接影响灵魂。&quot; — 瓦西里·康定斯基
          </blockquote>
        </div>
      </section>
    </div>
  );
}