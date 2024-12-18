import React from 'react';
import { Ruler, Scale, Activity } from 'lucide-react';

const LimbFat = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8 mt-8">
      <div className="flex items-center gap-3 mb-6">
        <Scale className="h-8 w-8 text-rose-600" />
        <h2 className="text-2xl font-bold text-gray-900">Assessing and Managing Limb Fat</h2>
      </div>

      <div className="space-y-8">
        <p className="text-lg text-gray-700">
          Understanding how to assess and manage fat distribution in the arms and legs is important
          for overall body composition and health.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Ruler className="h-6 w-6 text-rose-600" />
              <h3 className="text-lg font-semibold">Assessment Methods</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Measurement Techniques</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Circumference measurements</li>
                  <li>• Skinfold calipers</li>
                  <li>• Body fat percentage analysis</li>
                  <li>• Visual assessment</li>
                  <li>• Progress photos</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Key Indicators</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Arm circumference above normal range</li>
                  <li>• Thigh and calf measurements</li>
                  <li>• Visible fat deposits</li>
                  <li>• Skin fold thickness</li>
                  <li>• Symmetry between limbs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-6 w-6 text-rose-600" />
              <h3 className="text-lg font-semibold">Targeted Exercises</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Upper Body</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Push-ups and variations</li>
                  <li>• Tricep dips and extensions</li>
                  <li>• Shoulder presses</li>
                  <li>• Rowing exercises</li>
                  <li>• Arm circles and stretches</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Lower Body</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Squats and variations</li>
                  <li>• Lunges and step-ups</li>
                  <li>• Leg presses</li>
                  <li>• Calf raises</li>
                  <li>• Walking and running</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-rose-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-rose-900">Comprehensive Approach</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-rose-800 mb-2">Lifestyle Factors</h4>
              <ul className="space-y-2 text-rose-800">
                <li>• Regular full-body workouts</li>
                <li>• Balanced nutrition plan</li>
                <li>• Adequate protein intake</li>
                <li>• Proper hydration</li>
                <li>• Consistent sleep schedule</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-rose-800 mb-2">Progress Monitoring</h4>
              <ul className="space-y-2 text-rose-800">
                <li>• Regular measurements</li>
                <li>• Progress photos</li>
                <li>• Strength improvements</li>
                <li>• Energy levels</li>
                <li>• Clothing fit changes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimbFat;