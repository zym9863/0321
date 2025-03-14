import Image from "next/image";

export default function DownSyndromePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题 */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg p-6 mb-10 text-white shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">世界唐氏综合症日</h1>
        <p className="text-lg text-center mb-2">每年3月21日</p>
        <p className="text-center italic">"不同而不是少，多样而不是缺陷"</p>
      </section>

      {/* 唐氏综合症日介绍 */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 border-b-2 border-blue-200 pb-2">什么是世界唐氏综合症日？</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>世界唐氏综合症日（World Down Syndrome Day）是联合国于2011年正式认可的国际纪念日，旨在提高公众对唐氏综合症的认识和理解，倡导尊重、包容和平等。每年的3月21日被选为世界唐氏综合症日，因为唐氏综合症是由第21号染色体三体（3个而不是2个）引起的，用数字表示为3/21。</p>
          <p>在这一天，世界各地通过各种活动来庆祝唐氏综合症人士的生活和成就，消除对他们的偏见和歧视，促进他们融入社会，享有平等的权利和机会。</p>
        </div>
      </section>

      {/* 唐氏综合症知识 */}
      <section className="mb-12 bg-blue-50 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">了解唐氏综合症</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">医学知识</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>唐氏综合症是一种遗传疾病，由第21对染色体三体引起</li>
              <li>全球每年约有6,000名唐氏综合症婴儿出生</li>
              <li>唐氏综合症人士可能面临一些健康挑战，如先天性心脏病、听力和视力问题等</li>
              <li>早期干预和适当的医疗护理可以显著提高唐氏综合症人士的生活质量</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">能力与潜能</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>唐氏综合症人士拥有广泛的能力和才能</li>
              <li>许多唐氏综合症人士能够完成学业、就业和独立生活</li>
              <li>他们在艺术、体育和社交等方面常常展现出特殊的天赋</li>
              <li>支持性环境和包容性社会对发挥他们的潜能至关重要</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2024年主题 */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 border-b-2 border-blue-200 pb-2">2024年主题：包容性教育</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>2024年世界唐氏综合症日的主题是"包容性教育"，强调为所有唐氏综合症学生提供平等的教育机会和支持。包容性教育不仅仅是将唐氏综合症学生安置在普通教室，而是要确保教育系统能够适应和满足所有学生的多样化需求。</p>
          <p>研究表明，在包容性教育环境中学习的唐氏综合症学生在学术、社交和情感发展方面都能取得更好的成果。同时，其他学生也能从多元化的学习环境中受益，培养同理心、尊重差异和包容多样性的价值观。</p>
          
          <div className="bg-blue-50 p-4 rounded-lg my-6">
            <p className="font-semibold text-center">"每个孩子都有学习的权利，每个孩子都能以自己的方式学习和成长。"</p>
          </div>
        </div>
      </section>

      {/* 行动倡议 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">如何支持唐氏综合症群体</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-400">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">提高认识</h3>
            <p className="text-gray-700">了解唐氏综合症的知识，分享正确信息，消除误解和偏见。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-400">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">包容与尊重</h3>
            <p className="text-gray-700">以尊重和平等的态度对待唐氏综合症人士，关注他们的能力而非局限。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-400">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">支持组织</h3>
            <p className="text-gray-700">支持致力于唐氏综合症研究、教育和服务的组织和机构。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-400">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">参与活动</h3>
            <p className="text-gray-700">参加世界唐氏综合症日的庆祝活动，如穿着不配对的袜子（象征染色体的不同）。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-400">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">倡导政策</h3>
            <p className="text-gray-700">支持促进唐氏综合症人士权益的政策和法律，如包容性教育和就业机会。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-400">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">志愿服务</h3>
            <p className="text-gray-700">为服务唐氏综合症群体的机构提供志愿服务，分享你的时间和技能。</p>
          </div>
        </div>
      </section>

      {/* 成功故事 */}
      <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">唐氏综合症成功故事</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">克里斯·尼基克（Chris Nikic）</h3>
            <p className="text-gray-700">2020年，克里斯成为第一位完成全程铁人三项比赛的唐氏综合症运动员，展示了坚韧不拔的精神和无限可能。</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">马德琳·斯图尔特（Madeline Stuart）</h3>
            <p className="text-gray-700">作为世界上第一位唐氏综合症专业模特，马德琳改变了时尚界对美的定义，成为多元化和包容性的代表。</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">帕布罗·平达（Pablo Pineda）</h3>
            <p className="text-gray-700">西班牙第一位获得大学学位的唐氏综合症人士，现为教师、演讲者和演员，致力于推动社会包容。</p>
          </div>
        </div>
      </section>

      {/* 资源链接 */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 border-b-2 border-blue-200 pb-2">支持资源</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>了解更多关于唐氏综合症的资源：</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>世界唐氏综合症联合会：提供全球唐氏综合症信息和资源</li>
            <li>当地唐氏综合症协会：提供支持服务、教育资源和社区活动</li>
            <li>早期干预项目：为唐氏综合症儿童提供早期发展支持</li>
            <li>包容性教育资源：帮助教育工作者创建包容性学习环境</li>
          </ul>
        </div>
      </section>
    </div>
  );
}