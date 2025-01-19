import React from 'react';
import { Info } from 'lucide-react';

const BmiInfo: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-2 mb-4">
        <Info className="h-5 w-5 text-rose-600" />
        <h2 className="text-lg font-medium text-gray-900">什么是 BMI？</h2>
      </div>
      
      <div className="space-y-4 text-gray-600">
        <p>
          体重指数（Body Mass Index，简称BMI）是一个简单的体重与身高的比值，
          用于评估人体胖瘦程度和是否处于健康体重范围的常用指标。
        </p>
        
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="text-sm font-medium text-gray-900 mb-2">计算公式</h3>
          <p className="text-sm">
            BMI = 体重(kg) / 身高(m)²
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-2">BMI 的局限性</h3>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>不能反映体内脂肪的分布情况</li>
            <li>不适用于运动员、孕妇和老年人</li>
            <li>没有考虑年龄和性别差异</li>
            <li>可能不适用于不同种族人群</li>
          </ul>
        </div>

        <p className="text-sm">
          BMI 仅作为一个参考指标，建议结合其他健康指标（如体脂率、腰围等）
          进行综合评估。如有疑虑，请咨询专业医生。
        </p>
      </div>
    </div>
  );
};

export default BmiInfo; 