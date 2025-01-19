import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart } from 'lucide-react';
import HealthyLivingIntro from '../components/healthyLiving/HealthyLivingIntro';
import HealthyDiet from '../components/healthyLiving/HealthyDiet';
import ExerciseGuide from '../components/healthyLiving/ExerciseGuide';
import MentalHealth from '../components/healthyLiving/MentalHealth';

const HealthyLiving = () => {
  return (
    <>
      <Helmet>
        <title>Healthy Living Guide | Wellness Tips & Advice | HealthHub</title>
        <meta
          name="description"
          content="Comprehensive guide to healthy living, including nutrition, exercise, mental health, and lifestyle tips. Learn about balanced diet, physical activity, and maintaining overall wellness."
        />
        <meta
          name="keywords"
          content="healthy living, nutrition, exercise, mental health, wellness, physical health, mental well-being, regular checkups, lifestyle tips, balanced diet"
        />
        <link rel="canonical" href="https://bodyfat-calculator.net/healthy-living" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="Healthy Living Guide | Wellness Tips & Advice | HealthHub" />
        <meta property="og:description" content="Discover comprehensive approaches to maintaining physical and mental well-being through proper nutrition, exercise, and healthy lifestyle choices." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bodyfat-calculator.net/healthy-living" />
        
        {/* Schema.org markup for rich results */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "name": "Healthy Living Guide",
            "description": "Comprehensive guide to healthy living, including nutrition, exercise, and mental health tips.",
            "author": {
              "@type": "Organization",
              "name": "HealthHub"
            },
            "publisher": {
              "@type": "Organization",
              "name": "HealthHub"
            },
            "headline": "Guide to Healthy Living",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "/healthy-living"
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Heart className="h-16 w-16 mx-auto text-rose-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Guide to Healthy Living</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover comprehensive approaches to maintaining physical and mental well-being through proper nutrition,
            regular exercise, and healthy lifestyle choices.
          </p>
        </div>

        <div className="space-y-12">
          <HealthyLivingIntro />
          <HealthyDiet />
          <ExerciseGuide />
          <MentalHealth />
        </div>
      </div>
    </>
  );
};

export default HealthyLiving;