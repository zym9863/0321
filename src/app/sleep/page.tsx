export default function SleepPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题 */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-lg p-6 mb-10 text-white shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">世界睡眠日</h1>
        <p className="text-lg text-center mb-2">每年3月21日</p>
        <p className="text-center italic">"优质睡眠，健康人生"</p>
      </section>

      {/* 睡眠日介绍 */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700 border-b-2 border-indigo-200 pb-2">什么是世界睡眠日？</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>世界睡眠日（World Sleep Day）是由世界睡眠医学协会（World Sleep Society，前身为世界睡眠联盟）于2008年发起的国际性活动，旨在提高人们对睡眠重要性的认识，促进睡眠健康。每年的3月21日前的星期五被定为世界睡眠日，2024年恰逢3月15日，但我们在3月21日这一特殊日子也一同关注睡眠健康。</p>
          <p>在这一天，世界各地的医疗专业人士、研究人员和健康倡导者通过各种活动来宣传良好睡眠习惯的重要性，提高公众对睡眠障碍的认识，并促进睡眠健康研究和教育。</p>
        </div>
      </section>

      {/* 睡眠的重要性 */}
      <section className="mb-12 bg-indigo-50 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700">睡眠的重要性</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">身体健康</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>充足的睡眠有助于免疫系统功能，增强抵抗力</li>
              <li>睡眠期间，身体进行修复和再生</li>
              <li>良好的睡眠有助于维持健康的体重</li>
              <li>睡眠不足增加心脏病、糖尿病和高血压的风险</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">心理健康</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>睡眠对情绪调节至关重要</li>
              <li>充足的睡眠提高注意力和认知功能</li>
              <li>睡眠不足与焦虑和抑郁有关</li>
              <li>睡眠期间，大脑处理和整合信息，巩固记忆</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2024年主题 */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700 border-b-2 border-indigo-200 pb-2">2024年主题：睡眠公平</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>2024年世界睡眠日的主题是"睡眠公平：健康睡眠是全球人权"，强调每个人都应该有获得健康睡眠的机会，不受社会经济状况、地理位置或其他因素的限制。</p>
          <p>睡眠不平等现象在全球范围内普遍存在，受到工作条件、生活环境、医疗资源获取等多种因素的影响。这一主题呼吁政策制定者、医疗专业人士和社会各界共同努力，消除睡眠健康领域的不平等，确保每个人都能获得良好的睡眠条件和睡眠障碍治疗。</p>
          
          <div className="bg-indigo-50 p-4 rounded-lg my-6">
            <p className="font-semibold text-center">"睡眠不是奢侈品，而是基本需求和基本权利。"</p>
          </div>
        </div>
      </section>

      {/* 健康睡眠建议 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">健康睡眠建议</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-indigo-400">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">规律作息</h3>
            <p className="text-gray-700">保持规律的睡眠和起床时间，包括周末，有助于调节身体的生物钟。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-indigo-400">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">睡眠环境</h3>
            <p className="text-gray-700">创造安静、黑暗、凉爽和舒适的睡眠环境，减少干扰因素。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-indigo-400">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">限制电子设备</h3>
            <p className="text-gray-700">睡前一小时避免使用手机、电脑等电子设备，蓝光会抑制褪黑素的分泌。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-indigo-400">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">饮食注意</h3>
            <p className="text-gray-700">避免睡前大量进食，限制咖啡因和酒精的摄入，尤其是在下午和晚上。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-indigo-400">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">规律运动</h3>
            <p className="text-gray-700">定期进行适度的体育锻炼，但避免在睡前几小时内进行剧烈运动。</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-t-4 border-indigo-400">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">放松技巧</h3>
            <p className="text-gray-700">睡前进行放松活动，如阅读、冥想、深呼吸或温水浴，帮助身心放松。</p>
          </div>
        </div>
      </section>

      {/* 睡眠障碍 */}
      <section className="mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">常见睡眠障碍</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">失眠症</h3>
            <p className="text-gray-700">难以入睡、保持睡眠或过早醒来，影响日间功能。可能由压力、焦虑、抑郁或不良睡眠习惯引起。</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">睡眠呼吸暂停综合征</h3>
            <p className="text-gray-700">睡眠期间呼吸反复中断，导致睡眠质量下降和日间疲劳。常见症状包括打鼾、呼吸中断和早晨头痛。</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">不宁腿综合征</h3>
            <p className="text-gray-700">一种神经系统疾病，表现为腿部不适和移动腿部的强烈冲动，尤其在休息时加重，影响入睡。</p>
          </div>
        </div>
      </section>

      {/* 资源链接 */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700 border-b-2 border-indigo-200 pb-2">睡眠健康资源</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>了解更多关于睡眠健康的资源：</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>世界睡眠医学协会：提供睡眠健康信息和资源</li>
            <li>睡眠医学中心：提供睡眠障碍诊断和治疗</li>
            <li>睡眠健康应用：帮助追踪和改善睡眠质量</li>
            <li>睡眠健康教育资源：提供关于健康睡眠习惯的指导</li>
          </ul>
        </div>
      </section>
    </div>
  );
}