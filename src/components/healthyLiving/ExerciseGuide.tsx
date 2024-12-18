import React from 'react';
import { Activity, Clock, Shield } from 'lucide-react';

const ExerciseGuide = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Physical Activity and Exercise</h2>

      <div className="prose max-w-none text-gray-700 space-y-6">
        <p className="text-lg leading-relaxed">
          Regular physical activity is essential for maintaining both physical and mental health. 
          Exercise doesn't need to be intense or complicated to be effective - consistency and 
          gradual progression are more important than intensity. The key is finding activities 
          you enjoy and can maintain long-term.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Getting Started with Exercise</h3>
          <p className="mb-4">
            Walking is one of the most accessible and effective forms of exercise. Begin with 
            10-15 minutes daily and gradually increase to 30-45 minutes as your fitness improves. 
            A brisk pace that slightly elevates your heart rate and breathing is ideal. Simple 
            changes like taking the stairs instead of the elevator can add more movement to your day.
          </p>
          <p className="mb-4">
            Home exercises can be equally effective and require no special equipment. Basic 
            movements like bodyweight squats, modified push-ups, and planks help build strength 
            and stability. Regular stretching improves flexibility and reduces the risk of injury. 
            These exercises can be modified to suit any fitness level.
          </p>
          <p>
            Light cardio activities like dancing, swimming, or cycling provide excellent health 
            benefits while being enjoyable. These activities improve heart health, boost mood, 
            and can be social opportunities. The key is finding activities that you look forward 
            to doing regularly.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Exercise Frequency and Duration</h3>
          <p className="mb-4">
            Current health guidelines recommend 150 minutes of moderate activity or 75 minutes 
            of vigorous activity weekly. This can be broken down into 3-5 sessions per week, 
            allowing for rest and recovery between workouts. Remember that any movement is 
            better than none - even short activity breaks throughout the day can add up to 
            significant health benefits.
          </p>
          <p className="mb-4">
            Each exercise session should include a proper warm-up to prepare your body for 
            activity and reduce injury risk. The main activity period can range from 20-60 
            minutes, depending on your fitness level and goals. Always end with a cool-down 
            period to gradually return your body to its resting state.
          </p>
          <p>
            Rest days are as important as exercise days, allowing your body to recover and 
            adapt to the physical demands of exercise. Use these days for light activities 
            like gentle stretching or walking to maintain mobility while supporting recovery.
          </p>
        </div>

        <div className="bg-rose-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Joint Health and Exercise Safety</h3>
          <p className="mb-4">
            Protecting your joints during exercise is crucial for long-term health and mobility. 
            Proper footwear provides essential support and shock absorption, while maintaining 
            good form during exercises helps prevent unnecessary stress on your joints. If you 
            have existing joint issues, low-impact activities like swimming or cycling may be 
            more appropriate.
          </p>
          <p className="mb-4">
            Listening to your body is essential - while some discomfort during exercise is 
            normal, sharp pain or persistent discomfort should not be ignored. Start new 
            activities gradually and progress at a pace that feels challenging but manageable. 
            This approach helps prevent injury and builds sustainable fitness habits.
          </p>
          <p>
            Staying hydrated during exercise is crucial for performance and safety. Drink water 
            before, during, and after exercise, adjusting intake based on activity intensity 
            and environmental conditions. Proper hydration helps regulate body temperature and 
            supports optimal muscle function.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExerciseGuide;