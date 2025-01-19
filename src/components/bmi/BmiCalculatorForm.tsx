import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

interface BmiResult {
  bmi: number;
  category: string;
  color: string;
}

const BmiCalculatorForm: React.FC = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [result, setResult] = useState<BmiResult | null>(null);
  const [error, setError] = useState<string>('');

  const validateInput = (value: number, min: number, max: number, field: string): boolean => {
    if (value < min || value > max) {
      setError(`${field}输入范围应在 ${min} - ${max} 之间`);
      return false;
    }
    return true;
  };

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const heightInMeters = parseFloat(height) / 100; // Convert cm to meters
    const weightInKg = parseFloat(weight);
    
    // Validate input ranges
    if (!validateInput(parseFloat(height), 50, 250, '身高')) return;
    if (!validateInput(weightInKg, 20, 300, '体重')) return;

    const bmi = weightInKg / (heightInMeters * heightInMeters);
    const category = getBmiCategory(bmi);
    const color = getBmiColor(bmi);
    
    setResult({ bmi, category, color });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setter: (value: string) => void) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setter(value);
      setError('');
    }
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
            onChange={(e) => handleInputChange(e, setHeight)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
            placeholder="例如：170"
            min="50"
            max="250"
            step="0.1"
            required
            aria-describedby="height-description"
          />
          <p className="mt-1 text-sm text-gray-500" id="height-description">
            请输入50-250厘米之间的值
          </p>
        </div>

        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
            体重 (公斤)
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => handleInputChange(e, setWeight)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
            placeholder="例如：65"
            min="20"
            max="300"
            step="0.1"
            required
            aria-describedby="weight-description"
          />
          <p className="mt-1 text-sm text-gray-500" id="weight-description">
            请输入20-300公斤之间的值
          </p>
        </div>

        {error && (
          <div className="text-red-600 text-sm">
            {error}
          </div>
        )}

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