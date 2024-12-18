// Calculate Total Daily Energy Expenditure (TDEE)
export const calculateTDEE = (
  weight: number,
  height: number,
  age: number,
  gender: string,
  activityLevel: string
): number => {
  // Calculate BMR using Mifflin-St Jeor Equation
  let bmr = 10 * weight + 6.25 * height - 5 * age;
  bmr = gender === 'male' ? bmr + 5 : bmr - 161;

  // Apply activity multiplier
  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very: 1.9
  };

  return bmr * activityMultipliers[activityLevel as keyof typeof activityMultipliers];
};

// Calculate recommended deficit and daily calories
export const calculateDeficit = (
  maintenance: number,
  currentWeight: number,
  targetWeight: number
): { deficit: number; dailyCalories: number } => {
  const weightDiff = currentWeight - targetWeight;
  
  // Adjust deficit based on amount of weight to lose
  let deficit = 500; // Default deficit
  if (weightDiff > 20) {
    deficit = 750; // Larger deficit for more weight to lose
  } else if (weightDiff < 5) {
    deficit = 250; // Smaller deficit for less weight to lose
  }

  // Ensure daily calories don't go below safe minimum
  const minCalories = 1200; // Minimum safe calories
  const recommendedCalories = maintenance - deficit;
  const dailyCalories = Math.max(recommendedCalories, minCalories);

  return {
    deficit: maintenance - dailyCalories,
    dailyCalories
  };
};

// Calculate estimated time to reach goal weight
export const calculateTimeToGoal = (
  currentWeight: number,
  targetWeight: number,
  dailyDeficit: number
): number => {
  const weightDiff = currentWeight - targetWeight;
  const weeklyWeightLoss = (dailyDeficit * 7) / 7700; // 7700 calories = 1kg of fat
  return weightDiff / weeklyWeightLoss;
};