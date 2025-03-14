import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 春分主题横幅 */}
      <section className="bg-gradient-to-r from-blue-400 to-green-300 rounded-lg p-6 mb-10 text-white shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">春分 · 3月21日</h1>
        <p className="text-lg text-center mb-6">阳光与黑夜平分秋色，万物复苏的季节</p>
      </section>

      {/* 星座交界展示 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">星座交界：双鱼座 ♓ 与白羊座 ♈</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="bg-blue-100 rounded-lg p-6 flex-1 max-w-md shadow-md transform transition-transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-blue-700">双鱼座</h3>
              <span className="text-3xl">♓</span>
            </div>
            <p className="mb-4 text-gray-700">2月19日 - 3月20日</p>
            <p className="text-gray-600">水象星座，代表着直觉、梦想和情感。双鱼座的人富有同情心，具有艺术天赋，常常沉浸在自己的想象世界中。</p>
          </div>

          <div className="relative w-20 h-20 flex items-center justify-center">
            <div className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-red-400 animate-pulse"></div>
            <div className="z-10 text-white font-bold">3月21日</div>
          </div>

          <div className="bg-red-100 rounded-lg p-6 flex-1 max-w-md shadow-md transform transition-transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-red-700">白羊座</h3>
              <span className="text-3xl">♈</span>
            </div>
            <p className="mb-4 text-gray-700">3月21日 - 4月19日</p>
            <p className="text-gray-600">火象星座，代表着活力、勇气和冲劲。白羊座的人热情奔放，勇于冒险，喜欢接受挑战，是天生的领导者。</p>
          </div>
        </div>
      </section>

      {/* 国际纪念日概览 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">3月21日的国际纪念日</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-green-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-green-700 mb-2">国际森林日</h3>
            <p className="text-gray-600">庆祝森林的多样性和重要性，提高人们对森林保护的意识。</p>
            <div className="mt-4">
              <a href="/forest" className="text-green-600 hover:underline">了解更多 →</a>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-purple-700 mb-2">国际色彩日</h3>
            <p className="text-gray-600">庆祝色彩在我们生活中的重要性和影响力。</p>
            <div className="mt-4">
              <a href="/color" className="text-purple-600 hover:underline">了解更多 →</a>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">世界诗歌日</h3>
            <p className="text-gray-600">庆祝诗歌的多样性和重要性，促进诗歌创作和阅读。</p>
            <div className="mt-4">
              <a href="/poetry" className="text-blue-600 hover:underline">了解更多 →</a>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-yellow-700 mb-2">国际消除种族歧视日</h3>
            <p className="text-gray-600">提高人们对种族歧视问题的认识，促进平等和包容。</p>
            <div className="mt-4">
              <a href="/anti-racism" className="text-yellow-600 hover:underline">了解更多 →</a>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">世界唐氏综合症日</h3>
            <p className="text-gray-600">提高人们对唐氏综合症的认识，促进社会包容和理解。</p>
            <div className="mt-4">
              <a href="/down-syndrome" className="text-blue-600 hover:underline">了解更多 →</a>
            </div>
          </div>

          <div className="bg-indigo-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">世界睡眠日</h3>
            <p className="text-gray-600">提高人们对睡眠重要性的认识，促进健康的睡眠习惯。</p>
            <div className="mt-4">
              <a href="/sleep" className="text-indigo-600 hover:underline">了解更多 →</a>
            </div>
          </div>
        </div>
      </section>

      {/* 春分介绍 */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-10 shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 drop-shadow-lg">春分的意义</h2>
        <div className="space-y-4 text-gray-700">
          <p>春分是二十四节气之一，在每年公历3月20日或21日。这一天，太阳直射地球赤道，全球各地昼夜等长。</p>
          <p>在中国传统文化中，春分被视为春季的中点，标志着万物生长的开始。人们常在这一天进行踏青、放风筝等户外活动，庆祝春天的到来。</p>
          <p>春分也是农业生产的重要时节，农谚有云："春分麦起身，一刻值千金"</p>
        </div>
      </section>
    </div>
  );
}
