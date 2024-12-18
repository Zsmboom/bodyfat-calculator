import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Flower } from 'lucide-react';
import MeditationIntro from '../components/meditation/MeditationIntro';
import WhyMeditate from '../components/meditation/WhyMeditate';
import GettingStarted from '../components/meditation/GettingStarted';

const Meditation = () => {
  return (
    <>
      <Helmet>
        <title>Meditation Guide | HealthHub</title>
        <meta
          name="description"
          content="Learn about meditation, its benefits, and how to start your meditation practice. Discover techniques for mindfulness and stress reduction through meditation."
        />
        <meta
          name="keywords"
          content="meditation, mindfulness, stress reduction, mental health, meditation techniques, meditation benefits, meditation guide"
        />
        <link rel="canonical" href="/meditation" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Flower className="h-16 w-16 mx-auto text-rose-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Guide to Meditation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the transformative power of meditation and learn how to incorporate
            this ancient practice into your modern lifestyle for improved well-being.
          </p>
        </div>

        <div className="space-y-12">
          <MeditationIntro />
          <WhyMeditate />
          <GettingStarted />
        </div>
      </div>
    </>
  );
};

export default Meditation;