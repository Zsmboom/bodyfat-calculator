import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Activity } from 'lucide-react';
import CalorieCalculator from '../components/calorie/CalorieCalculator';
import CalorieInfo from '../components/calorie/CalorieInfo';
import WeightLossInfo from '../components/calorie/WeightLossInfo';

const CalorieDeficit = () => {
  return (
    <>
      <Helmet>
        <title>Calorie Deficit Calculator | Weight Loss Planning | HealthHub</title>
        <meta
          name="description"
          content="Calculate your ideal calorie deficit for healthy weight loss. Get personalized daily calorie targets, estimated timeline to reach your goal weight, and expert nutrition advice."
        />
        <meta
          name="keywords"
          content="calorie deficit calculator, weight loss calculator, TDEE calculator, daily calorie needs, weight loss planning, healthy weight loss, calorie counting, metabolism calculator"
        />
        <link rel="canonical" href="/calorie-deficit" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Calorie Deficit Calculator | Weight Loss Planning" />
        <meta property="og:description" content="Calculate your ideal calorie deficit for healthy weight loss. Get personalized daily calorie targets and expert nutrition advice." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/calorie-deficit" />
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Calorie Deficit Calculator",
            "description": "Calculate your ideal calorie deficit for healthy weight loss.",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Any"
          })}
        </script>
      </Helmet>

      {/* Rest of the component remains unchanged */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Activity className="h-16 w-16 mx-auto text-rose-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Calorie Deficit Calculator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your daily calorie needs and create a personalized plan to reach your target weight safely and effectively.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CalorieCalculator />
          </div>
          <div className="lg:col-span-1">
            <CalorieInfo />
          </div>
        </div>

        <WeightLossInfo />
      </div>
    </>
  );
};

export default CalorieDeficit;