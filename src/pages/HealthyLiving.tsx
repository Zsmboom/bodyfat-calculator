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
        <title>Healthy Living Guide | HealthHub</title>
        <meta
          name="description"
          content="Comprehensive guide to healthy living, including nutrition, exercise, mental health, and lifestyle tips. Learn about balanced diet, physical activity, and maintaining overall wellness."
        />
        <meta
          name="keywords"
          content="healthy living, nutrition, exercise, mental health, wellness, physical health, mental well-being, regular checkups"
        />
        <link rel="canonical" href="/healthy-living" />
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