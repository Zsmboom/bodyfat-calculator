import React, { useState } from 'react';
import { calculateBodyFat } from '../../utils/calculations';
import { InputField } from '../ui/InputField';

const MeasurementCalculator = () => {
  const [gender, setGender] = useState('male');
  const [measurements, setMeasurements] = useState({
    waist: '',
    neck: '',
    height: '',
    hip: '', // Only for females
  });

  const [result, setResult] = useState<number | null>(null);

  const handleChange = (name: string, value: string) => {
    setMeasurements(prev => ({ ...prev, [name]: value }));
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const bodyFat = calculateBodyFat(gender, measurements);
    setResult(bodyFat);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4 mb-4">
        <button
          type="button"
          className={`flex-1 py-2 px-4 rounded-lg ${
            gender === 'male' ? 'bg-rose-600 text-white' : 'bg-gray-100'
          }`}
          onClick={() => setGender('male')}
        >
          Male
        </button>
        <button
          type="button"
          className={`flex-1 py-2 px-4 rounded-lg ${
            gender === 'female' ? 'bg-rose-600 text-white' : 'bg-gray-100'
          }`}
          onClick={() => setGender('female')}
        >
          Female
        </button>
      </div>

      <form onSubmit={handleCalculate} className="space-y-4">
        <InputField
          label="Neck Circumference (cm)"
          type="number"
          value={measurements.neck}
          onChange={(e) => handleChange('neck', e.target.value)}
          placeholder="Measure around neck"
          required
        />
        <InputField
          label="Waist Circumference (cm)"
          type="number"
          value={measurements.waist}
          onChange={(e) => handleChange('waist', e.target.value)}
          placeholder="Measure around waist"
          required
        />
        {gender === 'female' && (
          <InputField
            label="Hip Circumference (cm)"
            type="number"
            value={measurements.hip}
            onChange={(e) => handleChange('hip', e.target.value)}
            placeholder="Measure around hips"
            required
          />
        )}
        <InputField
          label="Height (cm)"
          type="number"
          value={measurements.height}
          onChange={(e) => handleChange('height', e.target.value)}
          placeholder="Enter your height"
          required
        />
        <button
          type="submit"
          className="w-full bg-rose-600 text-white py-2 px-4 rounded-lg hover:bg-rose-700 transition-colors"
        >
          Calculate Body Fat
        </button>
      </form>

      {result !== null && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Your Results:</h3>
          <p className="text-gray-700">Body Fat Percentage: {result.toFixed(1)}%</p>
        </div>
      )}
    </div>
  );
};

export default MeasurementCalculator;