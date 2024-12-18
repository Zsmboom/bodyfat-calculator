import React from 'react';
import { Target, ArrowDown } from 'lucide-react';

const AbdominalFat = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8 mt-8">
      <div className="flex items-center gap-3 mb-6">
        <Target className="h-8 w-8 text-rose-600" />
        <h2 className="text-2xl font-bold text-gray-900">Understanding Abdominal Fat</h2>
      </div>

      <div className="space-y-8">
        <p className="text-lg text-gray-700">
          Abdominal fat accumulation is influenced by various factors and can be particularly challenging
          to address. Understanding why it occurs and how to effectively reduce it is crucial for overall health.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Why Fat Accumulates in the Abdomen</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Hormonal changes (especially during aging)</li>
              <li>• Genetic predisposition</li>
              <li>• Chronic stress and cortisol production</li>
              <li>• Poor sleep patterns</li>
              <li>• Sedentary lifestyle</li>
              <li>• Imbalanced diet high in processed foods</li>
              <li>• Age-related metabolic changes</li>
              <li>• Insulin resistance</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Targeted Reduction Strategies</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Exercise Focus</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• High-intensity interval training (HIIT)</li>
                  <li>• Core-strengthening exercises</li>
                  <li>• Regular cardiovascular activity</li>
                  <li>• Full-body strength training</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Lifestyle Adjustments</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Stress management techniques</li>
                  <li>• Improved sleep quality</li>
                  <li>• Regular meal timing</li>
                  <li>• Reduced alcohol consumption</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-rose-50 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <ArrowDown className="h-6 w-6 text-rose-600" />
            <h3 className="text-lg font-semibold text-gray-900">Key Points for Success</h3>
          </div>
          <ul className="space-y-2 text-rose-800">
            <li>• Focus on overall fat loss rather than spot reduction</li>
            <li>• Maintain consistency in diet and exercise</li>
            <li>• Track progress through measurements and photos</li>
            <li>• Be patient - abdominal fat reduction takes time</li>
            <li>• Address underlying lifestyle factors</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AbdominalFat;