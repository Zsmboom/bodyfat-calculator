import React, { useState } from 'react';
import { InputField } from '../ui/InputField';
import { SelectField } from '../ui/SelectField';
import { calculateTDEE, calculateDeficit, calculateTimeToGoal } from '../../utils/calorieCalculations';

interface FormData {
  age: string;
  gender: string;
  weight: string;
  height: string;
  targetWeight: string;
  activityLevel: string;
}

const CalorieCalculator = () => {
  const [formData, setFormData] = useState<FormData>({
    age: '',
    gender: 'male',
    weight: '',
    height: '',
    targetWeight: '',
    activityLevel: 'moderate'
  });

  const [result, setResult] = useState<{
    maintenance: number;
    deficit: number;
    timeToGoal: number;
    dailyCalories: number;
  } | null>(null);

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const maintenance = calculateTDEE(
      parseFloat(formData.weight),
      parseFloat(formData.height),
      parseInt(formData.age),
      formData.gender,
      formData.activityLevel
    );
    
    const { deficit, dailyCalories } = calculateDeficit(
      maintenance,
      parseFloat(formData.weight),
      parseFloat(formData.targetWeight)
    );

    const timeToGoal = calculateTimeToGoal(
      parseFloat(formData.weight),
      parseFloat(formData.targetWeight),
      deficit
    );

    setResult({ maintenance, deficit, timeToGoal, dailyCalories });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
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

        <div className="grid md:grid-cols-2 gap-4">
          <InputField
            label="Age (years)"
            type="number"
            value={formData.age}
            onChange={(e) => handleChange('age', e.target.value)}
            required
            min="18"
            max="120"
          />
          <InputField
            label="Height (cm)"
            type="number"
            value={formData.height}
            onChange={(e) => handleChange('height', e.target.value)}
            required
            min="100"
            max="250"
          />
          <InputField
            label="Current Weight (kg)"
            type="number"
            value={formData.weight}
            onChange={(e) => handleChange('weight', e.target.value)}
            required
            min="30"
            max="300"
            step="0.1"
          />
          <InputField
            label="Target Weight (kg)"
            type="number"
            value={formData.targetWeight}
            onChange={(e) => handleChange('targetWeight', e.target.value)}
            required
            min="30"
            max="300"
            step="0.1"
          />
        </div>

        <SelectField
          label="Activity Level"
          value={formData.activityLevel}
          onChange={(e) => handleChange('activityLevel', e.target.value)}
          options={[
            { value: 'sedentary', label: 'Sedentary (little or no exercise)' },
            { value: 'light', label: 'Light (exercise 1-3 times/week)' },
            { value: 'moderate', label: 'Moderate (exercise 3-5 times/week)' },
            { value: 'active', label: 'Active (exercise 6-7 times/week)' },
            { value: 'very', label: 'Very Active (intense exercise daily)' }
          ]}
        />

        <button
          type="submit"
          className="w-full bg-rose-600 text-white py-3 px-4 rounded-lg hover:bg-rose-700 transition-colors"
        >
          Calculate Plan
        </button>
      </form>

      {result && (
        <div className="mt-8 space-y-4 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900">Your Personalized Plan</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-600">Maintenance Calories</p>
              <p className="text-2xl font-bold text-gray-900">{Math.round(result.maintenance)} kcal</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-600">Recommended Daily Calories</p>
              <p className="text-2xl font-bold text-rose-600">{Math.round(result.dailyCalories)} kcal</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-600">Daily Calorie Deficit</p>
              <p className="text-2xl font-bold text-gray-900">{Math.round(result.deficit)} kcal</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-600">Estimated Time to Goal</p>
              <p className="text-2xl font-bold text-gray-900">{Math.ceil(result.timeToGoal)} weeks</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            This plan creates a safe and sustainable calorie deficit. Aim to lose 0.5-1kg per week for healthy, lasting results.
          </p>
        </div>
      )}
    </div>
  );
};

export default CalorieCalculator;