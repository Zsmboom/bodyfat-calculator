import React, { useState } from 'react';
import BMICalculator from './BMICalculator';
import MeasurementCalculator from './MeasurementCalculator';
import HealthyStandards from './HealthyStandards';
import CalculatorMethods from './CalculatorMethods';

const CalculatorTabs = () => {
  const [activeTab, setActiveTab] = useState('measurement');

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex border-b mb-6">
        <button
          className={`px-6 py-3 text-lg font-medium ${
            activeTab === 'measurement'
              ? 'border-b-2 border-rose-600 text-rose-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('measurement')}
        >
          Body Measurements
        </button>
        <button
          className={`px-6 py-3 text-lg font-medium ${
            activeTab === 'bmi'
              ? 'border-b-2 border-rose-600 text-rose-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('bmi')}
        >
          BMI Method
        </button>
      </div>

      {activeTab === 'measurement' ? <MeasurementCalculator /> : <BMICalculator />}
      
      <HealthyStandards />
      
      <CalculatorMethods />
    </div>
  );
};

export default CalculatorTabs;