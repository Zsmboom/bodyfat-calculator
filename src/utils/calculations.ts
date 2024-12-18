// BMI Calculations
export const calculateBMI = (
  weight: number,
  height: number,
  age: number,
  gender: string
): number => {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
};

export const getBMICategory = (
  bmi: number,
  age: number,
  gender: string
): {
  bmi: number;
  category: string;
  healthRisk: string;
  recommendation: string;
} => {
  let category: string;
  let healthRisk: string;
  let recommendation: string;

  // Adjust BMI categories based on age and gender
  if (age >= 65) {
    // Modified BMI ranges for elderly
    if (bmi < 22) {
      category = 'Underweight';
      healthRisk = 'Higher risk for bone loss and frailty';
      recommendation = 'Consider consulting a healthcare provider about nutrition and weight gain strategies.';
    } else if (bmi < 27) {
      category = 'Normal weight';
      healthRisk = 'Lower risk for health problems';
      recommendation = 'Maintain current weight through balanced diet and regular exercise.';
    } else if (bmi < 30) {
      category = 'Overweight';
      healthRisk = 'Increased risk for health problems';
      recommendation = 'Gradual weight loss through moderate exercise and dietary changes may be beneficial.';
    } else {
      category = 'Obese';
      healthRisk = 'High risk for health problems';
      recommendation = 'Consult healthcare provider about safe weight loss strategies.';
    }
  } else {
    // Standard BMI categories with gender considerations
    if (gender === 'female') {
      // Slightly adjusted ranges for women
      if (bmi < 18.5) {
        category = 'Underweight';
        healthRisk = 'Risk of nutritional deficiencies and osteoporosis';
        recommendation = 'Focus on nutrient-rich foods and strength training exercises.';
      } else if (bmi < 24.5) {
        category = 'Normal weight';
        healthRisk = 'Lower risk for health problems';
        recommendation = 'Maintain healthy lifestyle with balanced diet and regular exercise.';
      } else if (bmi < 29.5) {
        category = 'Overweight';
        healthRisk = 'Increased risk for health problems';
        recommendation = 'Consider lifestyle modifications for gradual weight loss.';
      } else {
        category = 'Obese';
        healthRisk = 'High risk for health problems';
        recommendation = 'Consult healthcare provider about weight management strategies.';
      }
    } else {
      // Standard ranges for men
      if (bmi < 18.5) {
        category = 'Underweight';
        healthRisk = 'Risk of nutritional deficiencies';
        recommendation = 'Focus on building muscle mass and increasing caloric intake.';
      } else if (bmi < 25) {
        category = 'Normal weight';
        healthRisk = 'Lower risk for health problems';
        recommendation = 'Maintain healthy lifestyle with regular exercise and balanced diet.';
      } else if (bmi < 30) {
        category = 'Overweight';
        healthRisk = 'Increased risk for health problems';
        recommendation = 'Consider combining strength training with cardio for weight management.';
      } else {
        category = 'Obese';
        healthRisk = 'High risk for health problems';
        recommendation = 'Consult healthcare provider about comprehensive weight management plan.';
      }
    }
  }

  return {
    bmi,
    category,
    healthRisk,
    recommendation
  };
};

// Body Fat Calculations using U.S. Navy Method
export const calculateBodyFat = (
  gender: string,
  measurements: { waist: string; neck: string; height: string; hip?: string }
): number => {
  const waist = parseFloat(measurements.waist);
  const neck = parseFloat(measurements.neck);
  const height = parseFloat(measurements.height);
  
  if (gender === 'male') {
    return 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
  } else {
    const hip = parseFloat(measurements.hip || '0');
    return 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
  }
};