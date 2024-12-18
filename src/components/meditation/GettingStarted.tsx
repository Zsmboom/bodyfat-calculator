import React from 'react';
import { Compass, Settings, BookOpen } from 'lucide-react';

const GettingStarted = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Started with Meditation</h2>

      <div className="prose max-w-none text-gray-700 space-y-6">
        <p className="text-lg leading-relaxed">
          Starting a meditation practice doesn't have to be complicated. The key is to begin 
          with simple techniques and gradually build your practice. Here's a comprehensive 
          guide to help you begin your meditation journey.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Compass className="h-6 w-6 text-rose-600" />
            <h3 className="text-xl font-semibold">Step-by-Step Guide for Beginners</h3>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">1. Create Your Space</h4>
              <p>
                Find a quiet, comfortable space where you won't be disturbed. You don't need 
                a dedicated meditation room - a corner of your bedroom or a peaceful spot in 
                your home will do. Consider these elements:
              </p>
              <ul className="mt-2 space-y-1">
                <li>• Comfortable seating (chair, cushion, or mat)</li>
                <li>• Good ventilation and comfortable temperature</li>
                <li>• Minimal distractions (turn off phone notifications)</li>
                <li>• Optional: soft lighting, calming scents, or plants</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">2. Find Your Position</h4>
              <p>
                Choose a comfortable position that you can maintain for the duration of your 
                practice:
              </p>
              <ul className="mt-2 space-y-1">
                <li>• Sitting cross-legged on a cushion</li>
                <li>• Sitting in a chair with feet flat on the ground</li>
                <li>• Lying down (if you're sure you won't fall asleep)</li>
                <li>• Keep your spine straight but not rigid</li>
                <li>• Rest your hands comfortably on your lap or knees</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">3. Basic Breathing Technique</h4>
              <p>
                Start with this simple breathing meditation:
              </p>
              <ul className="mt-2 space-y-1">
                <li>• Close your eyes or maintain a soft gaze</li>
                <li>• Take a few deep breaths to settle in</li>
                <li>• Notice the natural rhythm of your breath</li>
                <li>• Focus on the sensation of breathing</li>
                <li>• When your mind wanders, gently return to the breath</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Settings className="h-6 w-6 text-rose-600" />
            <h3 className="text-xl font-semibold">Building Your Practice</h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Start Small</h4>
              <p>
                Begin with just 5 minutes daily and gradually increase the duration as you 
                become more comfortable. Consistency is more important than length - it's 
                better to meditate for 5 minutes every day than 30 minutes once a week.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Choose Your Time</h4>
              <p>
                Many people find early morning meditation helpful, but choose a time that 
                works best for your schedule. The key is to make it a regular part of your 
                daily routine.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Track Your Progress</h4>
              <p>
                Consider keeping a simple meditation journal to note:
              </p>
              <ul className="mt-2 space-y-1">
                <li>• Duration of practice</li>
                <li>• Type of meditation used</li>
                <li>• How you felt before and after</li>
                <li>• Any challenges or insights</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-rose-50 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-6 w-6 text-rose-600" />
            <h3 className="text-xl font-semibold">Common Challenges and Solutions</h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-rose-900 mb-2">Challenge: "I can't stop thinking"</h4>
              <p className="text-rose-800">
                Solution: Remember that the goal isn't to stop thoughts but to observe them 
                without getting caught up in them. Think of thoughts as clouds passing through 
                the sky of your mind.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-rose-900 mb-2">Challenge: "I keep falling asleep"</h4>
              <p className="text-rose-800">
                Solution: Try meditating at a different time of day, sit upright rather than 
                lying down, or open your eyes slightly with a soft gaze.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-rose-900 mb-2">Challenge: "I'm too restless"</h4>
              <p className="text-rose-800">
                Solution: Start with walking meditation or try shorter sessions. Some people 
                find it helpful to do light stretching before sitting to meditate.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-rose-900 mb-2">Challenge: "I don't have time"</h4>
              <p className="text-rose-800">
                Solution: Start with just 2-3 minutes. You can meditate while waiting for your 
                coffee to brew or during your lunch break. The key is finding small moments 
                in your existing routine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;