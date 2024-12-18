import React from 'react';

interface RangeItem {
  category: string;
  men: string;
  women: string;
}

const ranges: RangeItem[] = [
  { category: 'Essential fat', men: '2-5%', women: '10-13%' },
  { category: 'Athletes', men: '6-13%', women: '14-20%' },
  { category: 'Fitness', men: '14-17%', women: '21-24%' },
  { category: 'Average', men: '18-24%', women: '25-31%' }
];

const HealthyRanges = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-4">Healthy Ranges</h2>
      <div className="text-gray-600 space-y-2">
        {ranges.map((range) => (
          <div key={range.category}>
            <span className="font-medium">{range.category}:</span>{' '}
            {range.men} (men), {range.women} (women)
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthyRanges;