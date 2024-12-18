import React from 'react';
import { Brain, Heart, Stethoscope } from 'lucide-react';

const HealthyLivingIntro = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Healthy Living</h2>
      
      <div className="prose max-w-none text-gray-700 mb-8">
        <p className="text-lg leading-relaxed">
          Healthy living encompasses both physical and mental well-being, forming a holistic approach to 
          health that goes beyond just diet and exercise. It's about creating sustainable lifestyle habits 
          that promote longevity, vitality, and overall wellness. The journey to optimal health begins 
          with understanding how different aspects of our lifestyle interact and influence our well-being.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <Heart className="h-6 w-6 text-rose-600 mt-1 flex-shrink-0" />
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Physical Health</h3>
              <p className="text-gray-700 leading-relaxed">
                Physical health forms the foundation of our overall well-being. It's not just about 
                being free from illness, but about maintaining a body that functions optimally. This 
                involves regular physical activity, proper nutrition, adequate rest, and maintaining 
                a healthy weight. When our bodies are properly cared for, we experience increased 
                energy, better immunity, and improved mental clarity.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Brain className="h-6 w-6 text-rose-600 mt-1 flex-shrink-0" />
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Mental Health</h3>
              <p className="text-gray-700 leading-relaxed">
                Mental health is equally crucial as physical health, yet it's often overlooked. Good 
                mental health involves emotional stability, stress resilience, and maintaining healthy 
                relationships. It's about finding balance in our daily lives, managing stress effectively, 
                and nurturing positive connections with others. Regular self-care practices and 
                mindfulness can significantly impact our mental well-being.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-rose-50 p-6 rounded-lg">
          <div className="flex items-start gap-3">
            <Stethoscope className="h-6 w-6 text-rose-600 mt-1 flex-shrink-0" />
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">The Importance of Regular Health Check-ups</h3>
              <p className="text-gray-700 leading-relaxed">
                Regular medical check-ups are a cornerstone of preventive healthcare. They play a vital 
                role in maintaining good health by catching potential issues early when they're most 
                treatable. These check-ups aren't just about addressing current health concerns; they're 
                about preventing future problems and ensuring long-term wellness.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A comprehensive health monitoring program typically includes annual physical examinations, 
                regular blood pressure monitoring, and various screening tests based on age, gender, and 
                risk factors. These might include cholesterol screenings, diabetes tests, cancer 
                screenings, and regular dental and vision check-ups. Mental health assessments are also 
                becoming increasingly recognized as an essential part of overall health monitoring.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By maintaining regular check-ups, you're not just taking care of your current health; 
                you're investing in your future well-being. These visits provide opportunities to discuss 
                lifestyle changes, address concerns, and develop personalized health strategies with 
                healthcare professionals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">The Pillars of Healthy Living</h3>
        <div className="prose max-w-none text-gray-700">
          <p className="leading-relaxed mb-4">
            Healthy living rests on several key pillars that work together to create a balanced, 
            sustainable lifestyle. Prevention is the first pillar, encompassing regular health 
            screenings, vaccinations, and proactive health management. This preventive approach helps 
            identify potential health issues before they become serious problems.
          </p>
          <p className="leading-relaxed mb-4">
            The second pillar focuses on lifestyle choices, including maintaining a balanced diet rich 
            in nutrients, engaging in regular physical activity, and ensuring adequate sleep. These 
            daily habits form the foundation of good health and contribute significantly to both 
            physical and mental well-being.
          </p>
          <p className="leading-relaxed">
            The third pillar addresses overall well-being, incorporating mental health care, social 
            connections, and work-life balance. This holistic approach recognizes that true health 
            extends beyond physical fitness to include emotional and social wellness, creating a 
            complete picture of healthy living.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HealthyLivingIntro;