import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Scale } from 'lucide-react';
import BmiCalculatorForm from '../components/bmi/BmiCalculatorForm';
import BmiInfo from '../components/bmi/BmiInfo';
import BmiCategories from '../components/bmi/BmiCategories';

const BmiCalculator = () => {
  return (
    <>
      <Helmet>
        <title>BMI Calculator | Body Mass Index Calculator | HealthHub</title>
        <meta
          name="description"
          content="Calculate your Body Mass Index (BMI) instantly with our free BMI calculator. Understand your weight status, health risks, and get personalized recommendations for maintaining a healthy weight."
        />
        <meta
          name="keywords"
          content="BMI calculator, body mass index calculator, weight calculator, healthy weight calculator, BMI chart, BMI categories, weight status calculator"
        />
        <link rel="canonical" href="/bmi-calculator" />
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="BMI Calculator | Body Mass Index Calculator | HealthHub" />
        <meta property="og:description" content="Calculate your Body Mass Index (BMI) instantly. Understand your weight status and get personalized health recommendations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/bmi-calculator" />
        {/* Schema.org markup for rich results */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "BMI Calculator",
            "description": "Calculate your Body Mass Index (BMI) instantly and understand your weight status.",
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

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Scale className="h-16 w-16 mx-auto text-rose-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">BMI Calculator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your Body Mass Index (BMI) to assess if you're at a healthy weight.
            BMI is a useful measure of overweight and obesity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BmiCalculatorForm />
          </div>
          <div className="lg:col-span-1">
            <BmiInfo />
          </div>
        </div>

        <div className="mt-12">
          <BmiCategories />
        </div>
      </div>
    </>
  );
};

export default BmiCalculator; 