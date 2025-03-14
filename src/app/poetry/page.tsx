import Image from "next/image";

export default function PoetryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg p-6 mb-10 text-white shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">世界诗歌日</h1>
        <p className="text-lg text-center mb-2">每年3月21日</p>
        <p className="text-center italic">"诗歌是人类最美的语言，是心灵的窗口"</p>
      </section>

      {/* 诗歌日介绍 */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 border-b-2 border-blue-200 pb-2">什么是世界诗歌日？</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>世界诗歌日（World Poetry Day）是联合国教科文组织（UNESCO）于1999年设立的国际纪念日，旨在促进诗歌创作、诗歌阅读、诗歌教学和诗歌传播。每年的3月21日，世界各地通过各种活动来庆祝诗歌的多样性和重要性。</p>
          <p>这一天，人们被鼓励重新发现诗歌的传统形式，同时也探索诗歌在新媒体中的表达方式。世界诗歌日也是支持小型出版社，恢复口头诗歌传统，促进诗歌与其他艺术形式对话的机会。</p>
        </div>
      </section>

      {/* 诗歌的重要性 */}
      <section className="mb-12 bg-blue-50 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">诗歌的重要性</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">文化价值</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>诗歌是人类文化遗产的重要组成部分</li>
              <li>诗歌记录和传承着民族的历史、传统和价值观</li>
              <li>诗歌反映了不同时代的社会现实和人文精神</li>
              <li>诗歌促进了不同文化之间的交流和理解</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">个人发展</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>诗歌培养语言感受力和表达能力</li>
              <li>诗歌激发想象力和创造力</li>
              <li>诗歌提供情感抒发和心灵慰藉</li>
              <li>诗歌帮助人们思考生活和存在的意义</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2024年主题 */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 border-b-2 border-blue-200 pb-2">2024年主题：诗歌与环境</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>2024年世界诗歌日的主题聚焦于"诗歌与环境"，探讨诗歌如何表达人类与自然的关系，以及如何通过诗歌唤起人们对环境保护的意识。</p>
          <p>在气候变化和环境危机的背景下，诗人们通过诗歌描绘自然之美，表达对环境破坏的忧虑，呼吁人类与自然和谐共处。诗歌成为连接人类与自然的桥梁，激发人们保护地球家园的责任感。</p>
          
          <div className="bg-blue-50 p-4 rounded-lg my-6 italic">
            <p className="text-center">"大地是诗人的母亲，<br/>河流是诗人的血脉，<br/>山川是诗人的灵魂，<br/>保护自然，就是守护诗歌的源泉。"</p>
          </div>
        </div>
      </section>

      {/* 庆祝活动 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">如何庆祝世界诗歌日</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-400">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">诗歌朗诵会</h3>
            <p className="text-gray-700">组织或参加诗歌朗诵活动，分享自己喜爱的诗歌或原创作品。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-400">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">诗歌工作坊</h3>
            <p className="text-gray-700">参加诗歌创作工作坊，学习诗歌写作技巧，尝试不同的诗歌形式。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-400">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">诗歌交换</h3>
            <p className="text-gray-700">与朋友交换喜爱的诗集，或赠送诗集作为礼物，分享诗歌的美好。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-400">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">诗歌与音乐</h3>
            <p className="text-gray-700">探索诗歌与音乐的结合，欣赏诗歌朗诵配乐，或尝试将诗歌谱曲。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-400">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">诗歌与自然</h3>
            <p className="text-gray-700">在自然环境中阅读或创作诗歌，感受大自然的灵感。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-400">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">诗歌社交媒体</h3>
            <p className="text-gray-700">在社交媒体上分享喜爱的诗句，使用标签 #世界诗歌日 #WorldPoetryDay</p>
          </div>
        </div>
      </section>

      {/* 著名诗人与诗句 */}
      <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">经典诗句</h2>
        <div className="space-y-6">
          <blockquote className="italic text-gray-700 border-l-4 border-blue-300 pl-4 py-2">
            "人生若只如初见，何事秋风悲画扇。" — 纳兰性德《木兰词·拟古决绝词柬友》
          </blockquote>
          <blockquote className="italic text-gray-700 border-l-4 border-blue-300 pl-4 py-2">
            "两情若是久长时，又岂在朝朝暮暮。" — 秦观《鹊桥仙·纤云弄巧》
          </blockquote>
          <blockquote className="italic text-gray-700 border-l-4 border-blue-300 pl-4 py-2">
            "春风得意马蹄疾，一日看尽长安花。" — 孟郊《登科后》
          </blockquote>
          <blockquote className="italic text-gray-700 border-l-4 border-blue-300 pl-4 py-2">
            "The Road Not Taken" — Robert Frost
          </blockquote>
          <blockquote className="italic text-gray-700 border-l-4 border-blue-300 pl-4 py-2">
            "Hope is the thing with feathers" — Emily Dickinson
          </blockquote>
        </div>
      </section>

      {/* 诗歌资源 */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 border-b-2 border-blue-200 pb-2">诗歌资源</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>探索更多诗歌资源，丰富您的诗歌世界：</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>诗歌网站和应用：诗词大会、诗词中国、Poetry Foundation</li>
            <li>诗歌选集：《唐诗三百首》、《宋词三百首》、《The Norton Anthology of Poetry》</li>
            <li>诗歌期刊：《诗刊》、《星星》、《Poetry Magazine》</li>
            <li>诗歌社区：各地诗社、线上诗歌论坛、社交媒体诗歌小组</li>
          </ul>
        </div>
      </section>
    </div>
  );
}