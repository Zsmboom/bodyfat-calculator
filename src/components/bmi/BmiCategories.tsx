import React from 'react';
import { Scale } from 'lucide-react';

interface BmiCategory {
  range: string;
  category: string;
  description: string;
  color: string;
  risks: string[];
}

const categories: BmiCategory[] = [
  {
    range: '< 18.5',
    category: '体重过轻',
    description: '可能营养不良，免疫力低下',
    color: 'bg-blue-100 text-blue-800',
    risks: ['营养不良', '骨质疏松', '免疫力下降', '贫血风险增加']
  },
  {
    range: '18.5 - 24.9',
    category: '体重正常',
    description: '健康体重范围',
    color: 'bg-green-100 text-green-800',
    risks: ['保持健康生活方式', '均衡饮食', '规律运动', '定期体检']
  },
  {
    range: '25.0 - 29.9',
    category: '超重',
    description: '体重超出健康范围',
    color: 'bg-yellow-100 text-yellow-800',
    risks: ['心血管疾病风险增加', '高血压风险', '糖尿病风险', '关节压力增加']
  },
  {
    range: '≥ 30.0',
    category: '肥胖',
    description: '需要采取措施改善健康状况',
    color: 'bg-red-100 text-red-800',
    risks: ['严重心血管疾病风险', '代谢综合征', '睡眠呼吸暂停', '多种慢性病风险']
  }
];

const BmiCategories: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-2 mb-6">
        <Scale className="h-5 w-5 text-rose-600" />
        <h2 className="text-lg font-medium text-gray-900">BMI 分类标准</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => (
          <div
            key={cat.range}
            className={`rounded-lg p-4 ${cat.color}`}
          >
            <div className="mb-2">
              <span className="text-sm font-semibold">BMI 范围</span>
              <p className="text-2xl font-bold">{cat.range}</p>
            </div>
            
            <h3 className="text-lg font-medium mb-1">{cat.category}</h3>
            <p className="text-sm mb-3">{cat.description}</p>
            
            <div className="text-sm">
              <span className="font-medium">健康提示：</span>
              <ul className="list-disc list-inside mt-1 space-y-1">
                {cat.risks.map((risk, index) => (
                  <li key={index}>{risk}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-sm text-gray-600">
        <p className="font-medium mb-2">注意事项：</p>
        <ul className="list-disc list-inside space-y-1">
          <li>BMI 值仅供参考，不同年龄、性别和种族可能有所差异</li>
          <li>建议结合其他健康指标进行综合评估</li>
          <li>如有特殊情况，请咨询专业医生建议</li>
        </ul>
      </div>
    </div>
  );
};

export default BmiCategories; 