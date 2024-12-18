import React from 'react';
import { Brain, Heart, Sun } from 'lucide-react';

const MeditationIntro = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Meditation</h2>

      <div className="prose max-w-none text-gray-700 space-y-6">
        <p className="text-lg leading-relaxed">
          Meditation is a practice that has been used for thousands of years to cultivate mental 
          clarity, emotional balance, and inner peace. At its core, meditation is about training 
          your attention and awareness to achieve a mentally clear and emotionally calm state. 
          It's not about emptying your mind completely, but rather about observing your thoughts 
          without judgment and gradually developing a deeper understanding of yourself.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="h-6 w-6 text-rose-600" />
              <h3 className="text-lg font-semibold">Mental Benefits</h3>
            </div>
            <ul className="space-y-2">
              <li>• Improved focus and concentration</li>
              <li>• Enhanced mental clarity</li>
              <li>• Better emotional regulation</li>
              <li>• Reduced anxiety and stress</li>
              <li>• Increased self-awareness</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-rose-600" />
              <h3 className="text-lg font-semibold">Physical Benefits</h3>
            </div>
            <ul className="space-y-2">
              <li>• Lower blood pressure</li>
              <li>• Improved sleep quality</li>
              <li>• Reduced chronic pain</li>
              <li>• Better immune function</li>
              <li>• Decreased muscle tension</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Sun className="h-6 w-6 text-rose-600" />
              <h3 className="text-lg font-semibold">Spiritual Benefits</h3>
            </div>
            <ul className="space-y-2">
              <li>• Greater sense of purpose</li>
              <li>• Enhanced inner peace</li>
              <li>• Deeper self-understanding</li>
              <li>• Increased compassion</li>
              <li>• Better life perspective</li>
            </ul>
          </div>
        </div>

        <div className="bg-rose-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-4">The Science Behind Meditation</h3>
          <p className="mb-4">
            Modern scientific research has validated many of the traditional benefits attributed 
            to meditation. Studies using brain imaging techniques have shown that regular 
            meditation practice can lead to structural changes in the brain, particularly in 
            areas associated with attention, emotional regulation, and self-awareness.
          </p>
          <p>
            Research has demonstrated that meditation can reduce the activity in the brain's 
            "default mode network" - the part responsible for mind-wandering and self-referential 
            thoughts. This reduction is associated with decreased anxiety, depression, and 
            improved overall mental well-being. Additionally, studies have shown that meditation 
            can help reduce the body's stress response by lowering cortisol levels and 
            promoting relaxation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeditationIntro;