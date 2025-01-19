import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

interface BmiResult {
  bmi: number;
  category: string;
  color: string;
}

const BmiCalculatorForm = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState<BmiResult | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    
    const heightInMeters = parseFloat(height) / 100; // Convert cm to meters
    const weightInKg = parseFloat(weight);
    
    if (heightInMeters > 0 && weightInKg > 0) {
      const bmi = weightInKg / (heightInMeters * heightInMeters);
      const category = getBmiCategory(bmi);
      const color = getBmiColor(bmi);
      
      setResult({ bmi, category, color });
    }
  };

  const getBmiCategory = (bmi: number): string => {
    if (bmi < 18.5) return '体重过轻';
    if (bmi < 24.9) return '体重正常';
    if (bmi < 29.9) return '超重';
    return '肥胖';
  };

  const getBmiColor = (bmi: number): string => {
    if (bmi < 18.5) return 'text-blue-600';
    if (bmi < 24.9) return 'text-green-600';
    if (bmi < 29.9) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={calculateBMI} className="space-y-6">
        <div>
          <label htmlFor="height" className="block text-sm font-medium text-gray-700">
            身高 (厘米)
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
            placeholder="例如：170"
            required
          />
        </div>

        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
            体重 (公斤)
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
            placeholder="例如：65"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
        >
          <Calculator className="h-5 w-5 mr-2" />
          计算 BMI
        </button>
      </form>

      {result && (
        <div className="mt-6 text-center">
          <h3 className="text-lg font-medium text-gray-900">您的 BMI 指数</h3>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            {result.bmi.toFixed(1)}
          </p>
          <p className={`mt-1 text-lg font-medium ${result.color}`}>
            {result.category}
          </p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculatorForm; 