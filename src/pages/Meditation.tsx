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
        <title>Meditation Guide | Mindfulness & Stress Reduction | HealthHub</title>
        <meta
          name="description"
          content="Learn about meditation, its benefits, and how to start your meditation practice. Discover techniques for mindfulness and stress reduction through meditation."
        />
        <meta
          name="keywords"
          content="meditation, mindfulness, stress reduction, mental health, meditation techniques, meditation benefits, meditation guide, mindfulness practice, stress management"
        />
        <link rel="canonical" href="/meditation" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="Meditation Guide | Mindfulness & Stress Reduction | HealthHub" />
        <meta property="og:description" content="Learn meditation techniques and discover the benefits of mindfulness practice for stress reduction and mental well-being." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/meditation" />
        
        {/* Schema.org markup for rich results */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Meditation Guide",
            "description": "Learn meditation techniques and discover mindfulness practices for stress reduction.",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Introduction to Meditation",
                "text": "Understanding the basics of meditation and mindfulness"
              },
              {
                "@type": "HowToStep",
                "name": "Benefits of Meditation",
                "text": "Discover the physical and mental benefits of regular meditation practice"
              },
              {
                "@type": "HowToStep",
                "name": "Getting Started",
                "text": "Learn practical techniques to start your meditation practice"
              }
            ]
          })}
        </script>
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