import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart } from 'lucide-react';
import VisceralFatAssessment from '../components/bodyFat/VisceralFatAssessment';
import VisceralFatRisks from '../components/bodyFat/VisceralFatRisks';
import VisceralFatReduction from '../components/bodyFat/VisceralFatReduction';
import AbdominalFat from '../components/bodyFat/AbdominalFat';
import FattyLiver from '../components/bodyFat/FattyLiver';
import LimbFat from '../components/bodyFat/LimbFat';

const BodyFatGuide = () => {
  return (
    <>
      <Helmet>
        <title>Body Fat Guide | Types of Body Fat & Health Impacts | HealthHub</title>
        <meta
          name="description"
          content="Comprehensive guide to understanding different types of body fat, health risks, and effective management strategies. Learn about visceral fat, abdominal fat, fatty liver, and more."
        />
        <meta
          name="keywords"
          content="body fat, visceral fat, abdominal fat, fatty liver, health risks, fat reduction, healthy lifestyle, body composition, fat distribution, metabolic health"
        />
        <link rel="canonical" href="/body-fat-guide" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="Body Fat Guide | Types of Body Fat & Health Impacts | HealthHub" />
        <meta property="og:description" content="Learn about different types of body fat, their health impacts, and effective strategies for maintaining healthy body composition." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/body-fat-guide" />
        
        {/* Schema.org markup for rich results */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "name": "Body Fat Guide",
            "description": "Comprehensive guide to understanding different types of body fat and their health impacts.",
            "author": {
              "@type": "Organization",
              "name": "HealthHub"
            },
            "publisher": {
              "@type": "Organization",
              "name": "HealthHub"
            },
            "headline": "Understanding Body Fat Types and Their Health Impacts",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "/body-fat-guide"
            },
            "about": [
              {
                "@type": "Thing",
                "name": "Visceral Fat",
                "description": "Understanding visceral fat and its health implications"
              },
              {
                "@type": "Thing",
                "name": "Abdominal Fat",
                "description": "Information about abdominal fat and its health risks"
              },
              {
                "@type": "Thing",
                "name": "Fatty Liver",
                "description": "Understanding fatty liver disease and prevention"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Heart className="h-16 w-16 mx-auto text-rose-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Understanding Body Fat</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about different types of body fat, their impact on your health, and effective
            strategies for maintaining healthy body composition.
          </p>
        </div>

        <VisceralFatAssessment />
        <VisceralFatRisks />
        <VisceralFatReduction />
        <AbdominalFat />
        <FattyLiver />
        <LimbFat />
      </div>
    </>
  );
};

export default BodyFatGuide;