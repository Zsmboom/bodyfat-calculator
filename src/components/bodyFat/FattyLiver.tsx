import React from 'react';
import { Heart, Shield, Activity } from 'lucide-react';

const FattyLiver = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8 mt-8">
      <div className="flex items-center gap-3 mb-6">
        <Heart className="h-8 w-8 text-rose-600" />
        <h2 className="text-2xl font-bold text-gray-900">Understanding Fatty Liver Disease</h2>
      </div>

      <div className="space-y-8">
        <p className="text-lg text-gray-700">
          Fatty liver disease occurs when excess fat builds up in the liver. Understanding its causes,
          risks, and prevention strategies is crucial for maintaining liver health.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-rose-600" />
              <h3 className="text-lg font-semibold">Risk Factors</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Obesity or overweight</li>
              <li>• Type 2 diabetes</li>
              <li>• High cholesterol</li>
              <li>• Metabolic syndrome</li>
              <li>• Poor diet</li>
              <li>• Sedentary lifestyle</li>
              <li>• Excessive alcohol consumption</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-6 w-6 text-rose-600" />
              <h3 className="text-lg font-semibold">Warning Signs</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Fatigue and weakness</li>
              <li>• Abdominal discomfort</li>
              <li>• Enlarged liver</li>
              <li>• Unexplained weight loss</li>
              <li>• Jaundice (in severe cases)</li>
              <li>• Loss of appetite</li>
              <li>• Nausea</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-rose-600" />
              <h3 className="text-lg font-semibold">Prevention</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Maintain healthy weight</li>
              <li>• Regular exercise</li>
              <li>• Balanced diet</li>
              <li>• Limit alcohol intake</li>
              <li>• Control blood sugar</li>
              <li>• Regular check-ups</li>
              <li>• Avoid processed foods</li>
            </ul>
          </div>
        </div>

        <div className="bg-rose-50 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-semibold mb-3 text-rose-900">Lifestyle Changes for Prevention</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-rose-800 mb-2">Dietary Recommendations</h4>
              <ul className="space-y-2 text-rose-800">
                <li>• Increase fiber intake</li>
                <li>• Choose whole grains</li>
                <li>• Eat plenty of vegetables</li>
                <li>• Include lean proteins</li>
                <li>• Limit saturated fats</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-rose-800 mb-2">Exercise Guidelines</h4>
              <ul className="space-y-2 text-rose-800">
                <li>• 150 minutes moderate activity weekly</li>
                <li>• Include strength training</li>
                <li>• Daily walking</li>
                <li>• Consistent exercise routine</li>
                <li>• Gradual intensity increase</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FattyLiver;