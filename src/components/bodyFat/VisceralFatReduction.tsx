import React from 'react';
import { Salad, Apple, Clock } from 'lucide-react';

const VisceralFatReduction = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8 mt-8">
      <div className="flex items-center gap-3 mb-6">
        <Salad className="h-8 w-8 text-rose-600" />
        <h2 className="text-2xl font-bold text-gray-900">Reducing Visceral Fat</h2>
      </div>

      <div className="space-y-8">
        <p className="text-lg text-gray-700">
          Reducing visceral fat requires a comprehensive approach focusing on diet, exercise, and lifestyle changes.
          Here's what you need to know about making effective changes.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Apple className="h-6 w-6 text-rose-600" />
              <h3 className="text-lg font-semibold">Dietary Guidelines</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Foods to Prioritize</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Lean proteins (fish, poultry, legumes)</li>
                  <li>• Fiber-rich vegetables and fruits</li>
                  <li>• Whole grains and complex carbohydrates</li>
                  <li>• Healthy fats (avocados, nuts, olive oil)</li>
                  <li>• Green tea and other antioxidant-rich beverages</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Foods to Limit</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Processed foods high in trans fats</li>
                  <li>• Refined sugars and sweetened drinks</li>
                  <li>• Excessive alcohol consumption</li>
                  <li>• High-sodium foods</li>
                  <li>• Refined carbohydrates</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-6 w-6 text-rose-600" />
              <h3 className="text-lg font-semibold">Lifestyle Changes</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Daily Habits</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Regular meal timing</li>
                  <li>• Adequate sleep (7-9 hours)</li>
                  <li>• Stress management techniques</li>
                  <li>• Regular physical activity</li>
                  <li>• Proper hydration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Exercise Recommendations</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 150 minutes of moderate cardio per week</li>
                  <li>• Strength training 2-3 times per week</li>
                  <li>• High-intensity interval training (HIIT)</li>
                  <li>• Regular walking throughout the day</li>
                  <li>• Core-strengthening exercises</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisceralFatReduction;