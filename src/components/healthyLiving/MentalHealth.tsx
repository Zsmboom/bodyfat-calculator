import React from 'react';
import { Brain, AlertTriangle, HeartPulse } from 'lucide-react';

const MentalHealth = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Mental Health and Well-being</h2>

      <div className="prose max-w-none text-gray-700 space-y-6">
        <p className="text-lg leading-relaxed">
          Mental health is a crucial component of overall well-being, affecting how we think, feel, 
          and handle daily life situations. Understanding mental health and recognizing when to seek 
          help are essential skills for maintaining a balanced, healthy life.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="h-6 w-6 text-rose-600" />
            <h3 className="text-xl font-semibold">Signs of Good Mental Health</h3>
          </div>
          <div className="space-y-4">
            <p>
              Good mental health is characterized by several key indicators that reflect emotional 
              well-being and psychological resilience. Understanding these signs helps us maintain 
              and strive for optimal mental health.
            </p>
            <ul className="space-y-2">
              <li>• Ability to maintain positive relationships</li>
              <li>• Effective stress management and coping skills</li>
              <li>• Sense of purpose and meaning in life</li>
              <li>• Realistic self-awareness and self-esteem</li>
              <li>• Capacity to adapt to change</li>
              <li>• Regular sleep patterns and good energy levels</li>
              <li>• Ability to experience and express emotions</li>
              <li>• Maintenance of work-life balance</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-6 w-6 text-rose-600" />
            <h3 className="text-xl font-semibold">Warning Signs and Impact</h3>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Common Warning Signs:</h4>
            <ul className="space-y-2">
              <li>• Persistent feelings of sadness or anxiety</li>
              <li>• Changes in sleep patterns or appetite</li>
              <li>• Difficulty concentrating or making decisions</li>
              <li>• Loss of interest in previously enjoyed activities</li>
              <li>• Social withdrawal or isolation</li>
              <li>• Unexplained physical symptoms</li>
              <li>• Increased irritability or mood swings</li>
              <li>• Feelings of hopelessness or worthlessness</li>
            </ul>

            <h4 className="font-medium text-gray-900 mt-6">Potential Impact:</h4>
            <ul className="space-y-2">
              <li>• Decreased work or academic performance</li>
              <li>• Strained relationships with family and friends</li>
              <li>• Physical health complications</li>
              <li>• Difficulty managing daily responsibilities</li>
              <li>• Increased risk of substance abuse</li>
              <li>• Compromised decision-making abilities</li>
            </ul>
          </div>
        </div>

        <div className="bg-rose-50 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <HeartPulse className="h-6 w-6 text-rose-600" />
            <h3 className="text-xl font-semibold">Seeking Professional Help</h3>
          </div>
          <div className="space-y-4">
            <p className="font-medium text-rose-900">
              It's crucial to recognize that seeking professional help is a sign of strength, not 
              weakness. Mental health professionals are trained to provide support and treatment 
              for various mental health concerns.
            </p>
            
            <h4 className="font-medium text-rose-900">When to Seek Help:</h4>
            <ul className="space-y-2 text-rose-800">
              <li>• When symptoms persist for more than two weeks</li>
              <li>• If daily functioning is significantly impaired</li>
              <li>• When experiencing thoughts of self-harm</li>
              <li>• If using substances to cope with emotions</li>
              <li>• When feeling overwhelmed by life changes</li>
            </ul>

            <div className="bg-white p-4 rounded-lg mt-4">
              <p className="font-medium text-gray-900 mb-2">Available Resources:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Mental health professionals (psychiatrists, psychologists, counselors)</li>
                <li>• Employee assistance programs</li>
                <li>• Community mental health centers</li>
                <li>• Support groups and peer counseling</li>
                <li>• Crisis hotlines for immediate support</li>
              </ul>
            </div>

            <p className="text-rose-900 mt-4">
              Remember: Early intervention often leads to better outcomes. Don't hesitate to reach 
              out to a mental health professional if you're experiencing persistent mental health 
              concerns. They can provide the support and guidance needed for recovery and 
              maintaining long-term mental well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealth;