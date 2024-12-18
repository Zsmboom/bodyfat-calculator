import React from 'react';
import { AlertCircle, Heart, Brain, Activity } from 'lucide-react';

const VisceralFatRisks = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <AlertCircle className="h-8 w-8 text-rose-600" />
        <h2 className="text-2xl font-bold text-gray-900">Health Risks of High Visceral Fat</h2>
      </div>

      <div className="space-y-8">
        <p className="text-lg text-gray-700">
          Excess visceral fat is metabolically active and can lead to various serious health conditions.
          Understanding these risks is crucial for maintaining long-term health.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-rose-600" />
              <h3 className="text-lg font-semibold">Cardiovascular Risks</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Increased blood pressure</li>
              <li>• Higher risk of heart disease</li>
              <li>• Abnormal cholesterol levels</li>
              <li>• Increased risk of stroke</li>
              <li>• Arterial inflammation</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-6 w-6 text-rose-600" />
              <h3 className="text-lg font-semibold">Metabolic Issues</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Type 2 diabetes risk</li>
              <li>• Insulin resistance</li>
              <li>• Metabolic syndrome</li>
              <li>• Hormonal imbalances</li>
              <li>• Increased inflammation</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="h-6 w-6 text-rose-600" />
              <h3 className="text-lg font-semibold">Other Health Impacts</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Sleep disorders</li>
              <li>• Cognitive decline risk</li>
              <li>• Certain cancer risks</li>
              <li>• Liver problems</li>
              <li>• Joint stress</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-semibold text-gray-900">Long-term Health Implications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-3">Systemic Effects</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Chronic inflammation throughout the body</li>
                <li>• Compromised immune system function</li>
                <li>• Increased oxidative stress</li>
                <li>• Accelerated aging process</li>
                <li>• Reduced overall life expectancy</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-3">Quality of Life Impact</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Reduced physical mobility</li>
                <li>• Decreased energy levels</li>
                <li>• Mental health challenges</li>
                <li>• Impaired daily activities</li>
                <li>• Increased healthcare needs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-rose-50 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-semibold mb-3 text-rose-900">Prevention and Management</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-rose-800">
              <li>• Regular physical activity (both cardio and strength training)</li>
              <li>• Balanced, nutrient-rich diet</li>
              <li>• Adequate sleep (7-9 hours per night)</li>
              <li>• Stress management techniques</li>
              <li>• Regular health check-ups</li>
            </ul>
            <ul className="space-y-2 text-rose-800">
              <li>• Limiting processed foods and added sugars</li>
              <li>• Maintaining healthy portion sizes</li>
              <li>• Staying hydrated</li>
              <li>• Avoiding excessive alcohol consumption</li>
              <li>• Consistent monitoring of waist circumference</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisceralFatRisks;