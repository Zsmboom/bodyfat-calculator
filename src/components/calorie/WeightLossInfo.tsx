import React from 'react';
import { Target, Heart, Dumbbell } from 'lucide-react';

const WeightLossInfo = () => {
  return (
    <div className="mt-16 space-y-16">
      {/* Effective Weight Loss Section */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Target className="h-8 w-8 text-rose-600" />
          <h2 className="text-2xl font-bold text-gray-900">What is Effective Weight Loss?</h2>
        </div>
        <div className="space-y-6 text-gray-700">
          <p className="leading-relaxed">
            Effective weight loss is about creating sustainable habits that lead to long-term success,
            not just quick fixes. It involves a combination of proper nutrition, regular exercise,
            and lifestyle changes.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Key Principles</h3>
              <ul className="space-y-2">
                <li>• Sustainable caloric deficit (500-750 calories/day)</li>
                <li>• Balanced macronutrient intake</li>
                <li>• Regular physical activity</li>
                <li>• Adequate sleep and stress management</li>
                <li>• Consistent monitoring and adjustment</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Common Mistakes to Avoid</h3>
              <ul className="space-y-2">
                <li>• Extreme calorie restriction</li>
                <li>• Eliminating entire food groups</li>
                <li>• Overreliance on supplements</li>
                <li>• Inconsistent eating patterns</li>
                <li>• Neglecting strength training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Healthy Weight Loss Section */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Heart className="h-8 w-8 text-rose-600" />
          <h2 className="text-2xl font-bold text-gray-900">How to Lose Weight Healthily</h2>
        </div>
        <div className="space-y-6 text-gray-700">
          <p className="leading-relaxed">
            Healthy weight loss focuses on making sustainable lifestyle changes that improve overall
            health while gradually reducing body fat. The key is to create habits you can maintain
            long-term.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Nutrition Guidelines</h3>
              <ul className="space-y-2">
                <li>• Eat protein with every meal</li>
                <li>• Include plenty of fiber</li>
                <li>• Stay hydrated</li>
                <li>• Control portion sizes</li>
                <li>• Plan meals in advance</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Lifestyle Changes</h3>
              <ul className="space-y-2">
                <li>• Get 7-9 hours of sleep</li>
                <li>• Manage stress levels</li>
                <li>• Stay active throughout day</li>
                <li>• Keep a food journal</li>
                <li>• Set realistic goals</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Progress Monitoring</h3>
              <ul className="space-y-2">
                <li>• Weekly weigh-ins</li>
                <li>• Take measurements</li>
                <li>• Track energy levels</li>
                <li>• Monitor workout performance</li>
                <li>• Adjust plan as needed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Exercise Types Section */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Dumbbell className="h-8 w-8 text-rose-600" />
          <h2 className="text-2xl font-bold text-gray-900">Cardio vs. Strength Training</h2>
        </div>
        <div className="space-y-6 text-gray-700">
          <p className="leading-relaxed">
            An effective weight loss program combines both cardiovascular exercise and strength training.
            Each type of exercise plays a unique role in fat loss and overall fitness.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Cardiovascular Exercise</h3>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Benefits</h4>
                  <ul className="space-y-1">
                    <li>• Burns calories during activity</li>
                    <li>• Improves heart health</li>
                    <li>• Increases endurance</li>
                    <li>• Reduces stress</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Recommended Activities</h4>
                  <ul className="space-y-1">
                    <li>• Walking (moderate intensity)</li>
                    <li>• Running or jogging</li>
                    <li>• Cycling</li>
                    <li>• Swimming</li>
                    <li>• HIIT workouts</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Strength Training</h3>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Benefits</h4>
                  <ul className="space-y-1">
                    <li>• Builds lean muscle mass</li>
                    <li>• Increases metabolic rate</li>
                    <li>• Improves body composition</li>
                    <li>• Enhances bone density</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Recommended Approach</h4>
                  <ul className="space-y-1">
                    <li>• Full-body workouts 2-3x/week</li>
                    <li>• Focus on compound exercises</li>
                    <li>• Progressive overload</li>
                    <li>• Include rest days</li>
                    <li>• Proper form over weight</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-rose-50 p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold mb-3 text-rose-900">Optimal Exercise Combination</h3>
            <p className="text-rose-800">
              For best results, aim for 3-4 days of strength training and 2-3 days of cardio per week.
              This combination helps maximize fat loss while preserving muscle mass. Remember to start
              gradually and increase intensity over time as your fitness improves.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeightLossInfo;