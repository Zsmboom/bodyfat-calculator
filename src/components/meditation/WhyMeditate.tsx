import React from 'react';
import { Target, Shield, Clock } from 'lucide-react';

const WhyMeditate = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Should You Meditate?</h2>

      <div className="prose max-w-none text-gray-700 space-y-6">
        <p className="text-lg leading-relaxed">
          In our fast-paced, constantly connected world, meditation offers a valuable opportunity 
          to step back, reconnect with ourselves, and find moments of peace. Understanding when 
          and why to meditate can help you develop a meaningful practice that supports your 
          overall well-being.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-6 w-6 text-rose-600" />
            <h3 className="text-xl font-semibold">Common Reasons to Start Meditating</h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Stress Management</h4>
              <p>
                When experiencing high levels of stress, meditation can help activate the body's 
                relaxation response, reducing the impact of stress hormones and promoting a 
                sense of calm. Regular practice can build resilience to future stressors and 
                improve your ability to handle challenging situations.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Emotional Balance</h4>
              <p>
                During times of emotional turbulence, meditation provides tools to observe and 
                understand your emotions without being overwhelmed by them. It helps develop 
                emotional intelligence and better regulation of feelings.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Mental Clarity</h4>
              <p>
                When feeling scattered or overwhelmed, meditation can help clear mental clutter 
                and improve focus. It's particularly beneficial during periods of decision-making 
                or when facing complex challenges.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-rose-600" />
            <h3 className="text-xl font-semibold">Ideal Situations for Meditation</h3>
          </div>
          <div className="space-y-4">
            <ul className="space-y-2">
              <li>• During major life transitions or changes</li>
              <li>• When experiencing sleep difficulties</li>
              <li>• Before important meetings or presentations</li>
              <li>• During periods of creative blocks</li>
              <li>• When feeling disconnected from yourself</li>
              <li>• During recovery from illness or injury</li>
              <li>• When seeking personal growth</li>
              <li>• During times of grief or loss</li>
            </ul>
          </div>
        </div>

        <div className="bg-rose-50 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-6 w-6 text-rose-600" />
            <h3 className="text-xl font-semibold">Long-term Benefits of Regular Practice</h3>
          </div>
          <div className="space-y-4">
            <p>
              Consistent meditation practice can lead to profound changes in how you experience 
              and interact with the world. Regular practitioners often report:
            </p>
            <ul className="space-y-2 text-rose-800">
              <li>• Greater sense of inner peace and contentment</li>
              <li>• Improved relationships and communication</li>
              <li>• Enhanced creativity and problem-solving abilities</li>
              <li>• Better stress management in daily life</li>
              <li>• Increased self-awareness and personal growth</li>
              <li>• More consistent emotional balance</li>
              <li>• Better sleep quality and daily energy levels</li>
              <li>• Stronger connection to personal values and purpose</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMeditate;