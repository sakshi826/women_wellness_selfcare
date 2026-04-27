export type TipSlug = "hair-skin" | "food" | "weight-loss" | "pms";

export interface TipItem {
  title: string;
  subtitle: string;
  iconKey: string;
  detail: string;
}

export interface TipPage {
  slug: TipSlug;
  title: string;
  subtitle: string;
  iconKey: string;
  tone: "teal" | "orange" | "pink" | "purple";
  items: TipItem[];
}

export const tipPages: Record<TipSlug, TipPage> = {
  "hair-skin": {
    slug: "hair-skin",
    title: "Hair & Skin",
    subtitle: "Discover simple tips for healthy hair and glowing skin.",
    iconKey: "Wind",
    tone: "teal",
    items: [
      { title: "Choose Your Face Wash Smartly", subtitle: "Pick the right cleanser for your skin", iconKey: "Droplet", detail: "Match your cleanser to your skin type — gentle gels for oily skin, creamy formulas for dry skin." },
      { title: "Go for Cleansers at Night", subtitle: "Remove dirt & makeup before bed", iconKey: "Moon", detail: "Cleansing at night clears the day's pollutants so your skin can repair while you sleep." },
      { title: "Hold Onto Sunscreens", subtitle: "Daily sun protection is essential", iconKey: "Sun", detail: "SPF 30+ every morning is the single best anti-aging habit you can build." },
      { title: "Go for Antioxidants", subtitle: "Protect skin from damage", iconKey: "Leaf", detail: "Vitamin C in the morning helps neutralize free radicals from sun and pollution." },
      { title: "Night Care Routine", subtitle: "Repair skin while you sleep", iconKey: "Moon", detail: "A retinoid or peptide cream at night supports collagen and cell turnover." },
      { title: "Exfoliation Is Important", subtitle: "Exfoliate gently, not harshly", iconKey: "Sparkles", detail: "Use a chemical exfoliant 1–2x weekly — skip harsh scrubs that cause micro-tears." },
      { title: "Condition Your Hair", subtitle: "Essential after every wash", iconKey: "Wind", detail: "Conditioner seals the cuticle, locking in moisture and reducing breakage." },
      { title: "Trim Your Hair Regularly", subtitle: "Prevent split ends", iconKey: "Scissors", detail: "A trim every 8–12 weeks keeps ends healthy and growth looking thicker." },
      { title: "Relax and De-Stress", subtitle: "Stress impacts skin & hair", iconKey: "Heart", detail: "Cortisol triggers breakouts and shedding. Sleep, breath, and breaks all count." },
    ],
  },
  food: {
    slug: "food",
    title: "Food",
    subtitle: "Learn smart nutrition tips to support your overall wellness.",
    iconKey: "UtensilsCrossed",
    tone: "orange",
    items: [
      { title: "Eat Iron & Zinc-Rich Foods", subtitle: "Helps reduce PMS fatigue & weakness", iconKey: "Shield", detail: "Lentils, spinach, pumpkin seeds, and lean meats restore energy through your cycle." },
      { title: "Boost Calcium Intake", subtitle: "Supports bones & reduces PMS symptoms", iconKey: "Bone", detail: "Dairy, fortified plant milks, and leafy greens give your bones long-term protection." },
      { title: "Avoid Sugar & Fried Foods", subtitle: "Reduces inflammation & mood swings", iconKey: "Ban", detail: "Processed sugar spikes inflammation — a quiet driver of cramps and low moods." },
      { title: "Cut Down on Salt", subtitle: "Helps prevent bloating", iconKey: "Salad", detail: "Lower sodium = less water retention, especially in the days before your period." },
      { title: "Limit Caffeine & Alcohol", subtitle: "Keeps hormones balanced", iconKey: "Coffee", detail: "Both can disrupt sleep and worsen PMS. Try swapping one cup for herbal tea." },
      { title: "Add Omega-3 Fatty Acids", subtitle: "Supports hormones & reduces cramps", iconKey: "Fish", detail: "Salmon, walnuts, and flaxseed help calm inflammation and steady moods." },
      { title: "Eat Smaller, Frequent Meals", subtitle: "Reduces nausea & acidity", iconKey: "Clock", detail: "Eating every 3–4 hours keeps blood sugar — and energy — steady." },
      { title: "Choose High-Quality Protein", subtitle: "Supports growth & recovery", iconKey: "Drumstick", detail: "Eggs, fish, beans, and Greek yogurt help muscles, hormones, and satiety." },
      { title: "Increase Healthy Fats", subtitle: "Supports hormones & glowing skin", iconKey: "Leaf", detail: "Avocado, olive oil, and nuts are essential — fat is fuel for your hormones." },
    ],
  },
  "weight-loss": {
    slug: "weight-loss",
    title: "Weight Loss",
    subtitle: "Get practical tips for healthy and sustainable weight management.",
    iconKey: "Scale",
    tone: "pink",
    items: [
      { title: "Cut Down on Refined Carbs", subtitle: "Prevents sugar spikes & fat gain", iconKey: "Sandwich", detail: "Swap white bread and pastries for whole grains to keep blood sugar steady." },
      { title: "Eat More Protein", subtitle: "Keeps you full & boosts metabolism", iconKey: "Egg", detail: "A palm-sized portion at every meal reduces cravings and protects muscle." },
      { title: "Drink More Water", subtitle: "Supports fat burning & reduces hunger", iconKey: "GlassWater", detail: "Often, thirst masquerades as hunger — start each meal with a glass of water." },
      { title: "Add Resistance Training", subtitle: "Builds muscle & burns more calories", iconKey: "Dumbbell", detail: "Two strength sessions a week change body composition more than endless cardio." },
      { title: "Do More Cardio", subtitle: "Burns calories & improves fitness", iconKey: "Bike", detail: "Mix steady walks with short bursts of higher intensity for heart health." },
      { title: "Fill Up on Fiber", subtitle: "Keeps you full for longer", iconKey: "Wheat", detail: "Aim for 25–30g daily from veggies, legumes, fruit, and whole grains." },
      { title: "Limit Processed Foods & Sugar", subtitle: "Cuts empty calories", iconKey: "Cookie", detail: "Whole foods carry nutrients; processed foods carry mostly extras you don't need." },
      { title: "Practice Mindful Eating", subtitle: "Prevents overeating", iconKey: "UtensilsCrossed", detail: "Slow down, no screens — your brain needs ~20 minutes to register fullness." },
      { title: "Get Enough Sleep", subtitle: "Balances hunger hormones", iconKey: "Moon", detail: "Less than 7 hours pushes ghrelin up and willpower down. Sleep is a weight tool." },
    ],
  },
  pms: {
    slug: "pms",
    title: "PMS",
    subtitle: "Find effective ways to manage PMS symptoms and feel better each month.",
    iconKey: "Flower",
    tone: "purple",
    items: [
      { title: "Follow a Balanced, Nutrient-Rich Diet", subtitle: "Supports hormones & reduces fatigue", iconKey: "Salad", detail: "Whole foods with steady protein and complex carbs ease symptoms across the cycle." },
      { title: "Exercise Regularly", subtitle: "Boosts mood & eases cramps", iconKey: "Bike", detail: "Even a 20-minute walk releases endorphins that quietly counter PMS lows." },
      { title: "Manage Stress Effectively", subtitle: "Reduces emotional symptoms", iconKey: "Brain", detail: "Stress amplifies every PMS symptom. Breathwork and rest are non-negotiable." },
      { title: "Stay Well Hydrated", subtitle: "Reduces bloating & discomfort", iconKey: "GlassWater", detail: "Counterintuitive but true — more water means less water retention." },
      { title: "Get Sufficient Sleep", subtitle: "Improves mood & energy", iconKey: "Moon", detail: "Aim for 7–9 hours, especially in the luteal phase when sleep often suffers." },
      { title: "Limit Caffeine & Alcohol", subtitle: "Prevents sleep & mood issues", iconKey: "Coffee", detail: "Both worsen anxiety, breast tenderness, and disrupted sleep before your period." },
      { title: "Take Essential Supplements", subtitle: "Helps with cramps & fatigue", iconKey: "Pill", detail: "Magnesium, B6, and vitamin D have solid evidence — talk to your clinician first." },
      { title: "Use Heat Therapy for Pain Relief", subtitle: "Eases cramps naturally", iconKey: "Flame", detail: "A heating pad on the lower belly can match over-the-counter pain relievers for cramps." },
      { title: "Include Anti-Inflammatory Foods", subtitle: "Helps reduce PMS pain", iconKey: "Leaf", detail: "Berries, fatty fish, turmeric, and leafy greens calm the inflammation behind cramps." },
    ],
  },
};
