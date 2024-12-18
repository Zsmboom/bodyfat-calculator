import React from 'react';
import { Ruler, Scale } from 'lucide-react';

const CalculatorMethods = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-8">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-4">
          <Ruler className="h-6 w-6 text-rose-600 mr-2" />
          <h3 className="text-xl font-semibold">Body Measurements Method</h3>
        </div>
        <div className="text-gray-600 space-y-3">
          <p>
            The U.S. Navy Method uses body circumference measurements to estimate body fat percentage.
            This method is considered more accurate than BMI for most people.
          </p>
          <h4 className="font-medium text-gray-700">Key Features:</h4>
          <ul className="list-disc ml-6">
            <li>Uses multiple body measurements for better accuracy</li>
            <li>Accounts for body shape and composition</li>
            <li>Different formulas for men and women</li>
            <li>Widely used by military and fitness professionals</li>
          </ul>
          <p className="text-sm italic mt-4">
            For best results, take measurements in the morning before eating and ensure measuring tape is snug but not tight.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-4">
          <Scale className="h-6 w-6 text-rose-600 mr-2" />
          <h3 className="text-xl font-semibold">BMI Method</h3>
        </div>
        <div className="text-gray-600 space-y-3">
          <p>
            The Body Mass Index (BMI) method provides a simple measure using height and weight.
            While not directly measuring body fat, it offers a useful screening tool for weight categories.
          </p>
          <h4 className="font-medium text-gray-700">Characteristics:</h4>
          <ul className="list-disc ml-6">
            <li>Quick and easy calculation</li>
            <li>No special measurements needed</li>
            <li>Considers age and gender factors</li>
            <li>Widely used in medical settings</li>
          </ul>
          <p className="text-sm italic mt-4">
            Note: BMI may not be accurate for athletes, elderly, or very muscular individuals due to its inability to distinguish between muscle and fat mass.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalculatorMethods;