import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calculator } from 'lucide-react';
import WhyCalculate from '../components/home/WhyCalculate';
import HealthyRanges from '../components/home/HealthyRanges';
import CalculatorTabs from '../components/calculators/CalculatorTabs';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Body Fat Calculator | Body Composition Analysis | HealthHub</title>
        <meta
          name="description"
          content="Free online Body Fat Calculator and Body Composition Analysis tool. Calculate your body fat percentage accurately using BMI or body measurements. Get personalized health insights and recommendations."
        />
        <meta
          name="keywords"
          content="body fat calculator, body composition analysis calculator, body fat percentage calculator, BMI calculator, body measurements calculator, healthy body fat range, body composition test, fat percentage measurement"
        />
        <link rel="canonical" href="https://bodyfat-calculator.net" />
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="Body Fat Calculator | Body Composition Analysis | HealthHub" />
        <meta property="og:description" content="Calculate your body fat percentage accurately using our advanced body composition analysis tools. Get personalized health insights and recommendations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bodyfat-calculator.net" />
        {/* Schema.org markup for rich results */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Body Fat Calculator",
            "description": "Calculate your body fat percentage accurately using BMI or body measurements.",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      {/* Rest of the component remains unchanged */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Calculator className="h-16 w-16 mx-auto text-rose-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Body Fat Calculator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding your body composition is key to achieving your fitness goals.
            Use our calculator to determine your body fat percentage accurately.
          </p>
        </div>

        <CalculatorTabs />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <WhyCalculate />
          <HealthyRanges />
        </div>
      </div>
    </>
  );
};

export default Home;