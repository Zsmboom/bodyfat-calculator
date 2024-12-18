import React from 'react';
import { Apple, Coffee, XCircle } from 'lucide-react';

const HealthyDiet = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Nutrition and Healthy Eating</h2>

      <div className="prose max-w-none text-gray-700 space-y-6">
        <p className="text-lg leading-relaxed">
          A healthy diet forms the cornerstone of overall wellness and vitality. It's not just about 
          counting calories or following strict rules, but rather about making informed, sustainable 
          choices that nourish your body and support long-term health. The key is to focus on whole, 
          nutrient-rich foods while limiting processed and refined options.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Essential Components of a Healthy Diet</h3>
          <p className="mb-4">
            A balanced diet should include a variety of colorful fruits and vegetables, which provide 
            essential vitamins, minerals, and antioxidants. Leafy greens like spinach and kale are 
            particularly nutrient-dense, while berries offer powerful antioxidant properties. Citrus 
            fruits provide vital vitamin C and other immune-boosting compounds.
          </p>
          <p className="mb-4">
            Protein plays a crucial role in maintaining muscle mass and supporting overall health. 
            Opt for lean sources such as fish (particularly fatty fish rich in omega-3s), poultry, 
            legumes, and eggs. Plant-based proteins like lentils and chickpeas also provide fiber 
            and other beneficial nutrients.
          </p>
          <p>
            Healthy fats are essential for brain function and nutrient absorption. Include sources 
            like avocados, nuts, seeds, and olive oil in your diet. These fats help you feel 
            satisfied and support various bodily functions, from hormone production to 
            cell membrane maintenance.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Foods to Limit or Avoid</h3>
          <p className="mb-4">
            While no food needs to be completely off-limits, certain items should be limited for 
            optimal health. Processed foods often contain added sugars, unhealthy fats, and excessive 
            sodium, while providing little nutritional value. These include packaged snacks, sugary 
            beverages, and most fast food options.
          </p>
          <p className="mb-4">
            Trans fats and excessive saturated fats can contribute to heart disease and other health 
            issues. Be particularly mindful of deep-fried foods, processed meats, and certain baked 
            goods. Instead, focus on foods rich in healthy fats that support heart health.
          </p>
          <p>
            Added sugars, found in sodas, candies, and many processed foods, can lead to weight gain 
            and metabolic issues. Even seemingly healthy items like flavored yogurts and breakfast 
            cereals can contain significant amounts of added sugar. Reading nutrition labels can help 
            you make informed choices.
          </p>
        </div>

        <div className="bg-rose-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Practical Eating Strategies</h3>
          <p className="mb-4">
            Successful healthy eating isn't just about what you eat, but also how you eat. Meal 
            planning can help you make better food choices and avoid impulsive decisions when hungry. 
            Preparing meals at home gives you control over ingredients and portions while often being 
            more economical.
          </p>
          <p className="mb-4">
            Hydration is crucial for overall health and can sometimes be mistaken for hunger. Aim 
            for 8-10 glasses of water daily, adjusting based on activity level and climate. Consider 
            keeping a water bottle nearby as a reminder to stay hydrated throughout the day.
          </p>
          <p>
            Mindful eating practices, such as eating slowly and without distractions, can help you 
            better recognize hunger and fullness cues. This approach can lead to better digestion 
            and more satisfaction from your meals, ultimately supporting a healthier relationship 
            with food.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HealthyDiet;