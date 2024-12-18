import React from 'react';
import { Info } from 'lucide-react';

const HealthyStandards = () => {
  return (
    <div className="mt-8 bg-gray-50 p-6 rounded-lg">
      <div className="flex items-center mb-4">
        <Info className="h-6 w-6 text-rose-600 mr-2" />
        <h3 className="text-xl font-semibold">Measurement Methods Explained</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium text-gray-800 mb-2">Body Measurements Method</h4>
          <p className="text-gray-600 text-sm mb-4">
            The U.S. Navy Method uses circumference measurements to estimate body fat percentage.
            This method is generally accurate for most people and easy to perform at home.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• More accurate than BMI for most body types</li>
            <li>• Takes into account body shape differences</li>
            <li>• No special equipment needed</li>
            <li>• Can be done at home</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-gray-800 mb-2">BMI Method</h4>
          <p className="text-gray-600 text-sm mb-4">
            BMI provides a simple measure using height and weight. While not directly measuring body fat,
            it offers a useful screening tool for weight categories.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Quick and easy calculation</li>
            <li>• Widely used in medical settings</li>
            <li>• Good for population-level screening</li>
            <li>• May not be accurate for athletes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HealthyStandards;