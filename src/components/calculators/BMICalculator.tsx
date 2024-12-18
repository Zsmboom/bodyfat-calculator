import React, { useState } from 'react';
import { calculateBMI, getBMICategory } from '../../utils/calculations';
import { InputField } from '../ui/InputField';
import { SelectField } from '../ui/SelectField';

const BMICalculator = () => {
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    age: '',
    gender: 'male'
  });

  const [result, setResult] = useState<{
    bmi: number;
    category: string;
    healthRisk: string;
    recommendation: string;
  } | null>(null);

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const bmi = calculateBMI(
      parseFloat(formData.weight),
      parseFloat(formData.height),
      parseInt(formData.age),
      formData.gender
    );
    const category = getBMICategory(bmi, parseInt(formData.age), formData.gender);
    setResult(category);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4 mb-4">
        <button
          type="button"
          className={`flex-1 py-2 px-4 rounded-lg ${
            formData.gender === 'male' ? 'bg-rose-600 text-white' : 'bg-gray-100'
          }`}
          onClick={() => handleChange('gender', 'male')}
        >
          Male
        </button>
        <button
          type="button"
          className={`flex-1 py-2 px-4 rounded-lg ${
            formData.gender === 'female' ? 'bg-rose-600 text-white' : 'bg-gray-100'
          }`}
          onClick={() => handleChange('gender', 'female')}
        >
          Female
        </button>
      </div>

      <form onSubmit={handleCalculate} className="space-y-4">
        <InputField
          label="Age (years)"
          type="number"
          value={formData.age}
          onChange={(e) => handleChange('age', e.target.value)}
          placeholder="Enter your age"
          required
          min="18"
          max="120"
        />
        <InputField
          label="Weight (kg)"
          type="number"
          value={formData.weight}
          onChange={(e) => handleChange('weight', e.target.value)}
          placeholder="Enter your weight"
          required
          min="30"
          max="300"
          step="0.1"
        />
        <InputField
          label="Height (cm)"
          type="number"
          value={formData.height}
          onChange={(e) => handleChange('height', e.target.value)}
          placeholder="Enter your height"
          required
          min="100"
          max="250"
        />
        <button
          type="submit"
          className="w-full bg-rose-600 text-white py-2 px-4 rounded-lg hover:bg-rose-700 transition-colors"
        >
          Calculate BMI
        </button>
      </form>

      {result && (
        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
          <h3 className="text-lg font-semibold">Your Results:</h3>
          <p className="text-gray-700">BMI: {result.bmi.toFixed(1)}</p>
          <p className="text-gray-700">Category: {result.category}</p>
          <p className="text-gray-700">Health Risk: {result.healthRisk}</p>
          <p className="text-gray-700 mt-2">{result.recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;