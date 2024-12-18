import React from 'react';
import { Info, Target, Battery, Scale } from 'lucide-react';

const CalorieInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div className="flex items-center gap-2 text-rose-600">
        <Info className="h-5 w-5" />
        <h2 className="text-xl font-semibold">Understanding Calorie Deficit</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Target className="h-5 w-5 text-rose-600 mt-1" />
          <div>
            <h3 className="font-medium mb-1">Safe Weight Loss Rate</h3>
            <p className="text-gray-600 text-sm">
              Aim for 0.5-1kg per week for sustainable results. This ensures you maintain muscle mass while losing fat.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Battery className="h-5 w-5 text-rose-600 mt-1" />
          <div>
            <h3 className="font-medium mb-1">Daily Calorie Needs</h3>
            <p className="text-gray-600 text-sm">
              Your maintenance calories are based on your BMR (Basal Metabolic Rate) and activity level.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Scale className="h-5 w-5 text-rose-600 mt-1" />
          <div>
            <h3 className="font-medium mb-1">Deficit Guidelines</h3>
            <p className="text-gray-600 text-sm">
              A deficit of 500-750 calories per day is recommended for healthy weight loss without compromising nutrition.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="font-medium mb-2">Tips for Success</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Track your food intake accurately</li>
          <li>• Stay hydrated (aim for 2-3 liters daily)</li>
          <li>• Include protein with every meal</li>
          <li>• Get 7-9 hours of quality sleep</li>
          <li>• Combine diet with regular exercise</li>
        </ul>
      </div>
    </div>
  );
};

export default CalorieInfo;