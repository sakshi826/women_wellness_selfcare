export type ModuleSlug =
  | "pcos"
  | "reproductive-health"
  | "medical-conditions"
  | "nutrition-weight"
  | "pregnancy-postpartum"
  | "mental-health"
  | "fertility"
  | "menopause";

export type PastelTone =
  | "pink" | "lilac" | "slate" | "peach" | "mint" | "blue" | "yellow" | "rose";

export interface ModuleContent {
  slug: ModuleSlug;
  title: string;
  subtitle: string;
  iconKey: string;
  tone: PastelTone;
  understanding: { label: string; tone: "peach" | "blue" | "rose" | "mint" }[];
  articles: { title: string; body: string }[];
  tips: string[];
  stories: { name: string; quote: string }[];
  myths: { myth: string; fact: string }[];
}

const trackersBase = ["Energy", "Sleep", "Self Care", "BMI", "Physical Activity", "Mood"];
export const TRACKERS = trackersBase;

export const modules: Record<ModuleSlug, ModuleContent> = {
  pcos: {
    slug: "pcos",
    title: "PCOS",
    subtitle: "Personalized care and guidance to manage PCOS symptoms effectively.",
    iconKey: "Flower",
    tone: "pink",
    understanding: [
      { label: "Basic Guide", tone: "peach" },
      { label: "PCOS Made Simple", tone: "blue" },
      { label: "What is PCOS?", tone: "rose" },
      { label: "Life Changing Tips", tone: "mint" },
    ],
    articles: [
      { title: "Understanding your hormones", body: "PCOS affects how your ovaries work. Learn the role of insulin, androgens, and how small lifestyle shifts can rebalance your cycle." },
      { title: "Eating for steady energy", body: "Pair carbs with protein and fiber. This slows glucose spikes and helps reduce cravings, fatigue, and breakouts." },
      { title: "Movement that loves you back", body: "Strength training 2–3x/week improves insulin sensitivity more than long cardio sessions for most people with PCOS." },
      { title: "Sleep, stress and your cycle", body: "Cortisol disruption worsens PCOS symptoms. A consistent wind-down routine can be as powerful as supplements." },
    ],
    tips: [
      "Start the day with protein within an hour of waking.",
      "Walk 10 minutes after meals to steady blood sugar.",
      "Track your cycle — even irregular ones reveal patterns.",
      "Swap refined sugar for whole fruit when cravings hit.",
      "Prioritize 7–9 hours of sleep before any new supplement.",
    ],
    stories: [
      { name: "Maya, 28", quote: "I stopped chasing perfect and started walking after dinner. Three months later, my period came back." },
      { name: "Aisha, 33", quote: "Strength training felt scary. Now it's the one hour a week that's just for me." },
    ],
    myths: [
      { myth: "PCOS means you can't get pregnant.", fact: "Many people with PCOS conceive — sometimes with support, often without." },
      { myth: "Losing weight cures PCOS.", fact: "PCOS is a chronic condition. Habits help symptoms; there is no single cure." },
      { myth: "Only overweight people have PCOS.", fact: "PCOS affects people of every body size." },
    ],
  },
  "reproductive-health": {
    slug: "reproductive-health",
    title: "Reproductive Health",
    subtitle: "Comprehensive support for overall reproductive and hormonal well-being.",
    iconKey: "Flower2",
    tone: "lilac",
    understanding: [
      { label: "What is Reproductive Health?", tone: "peach" },
      { label: "Reproductive Health Made Simple", tone: "blue" },
      { label: "Understanding Reproductive Health", tone: "rose" },
      { label: "Boost Your Reproductive Health", tone: "mint" },
    ],
    articles: [
      { title: "Your cycle, decoded", body: "A healthy cycle is a vital sign. Length, flow, and symptoms all tell you something about your hormones." },
      { title: "Everyday hormone helpers", body: "Fiber, leafy greens, and steady sleep do more for hormone balance than most trending supplements." },
      { title: "When to see a clinician", body: "Persistent pain, very heavy bleeding, or missed periods deserve a real conversation — not silence." },
    ],
    tips: [
      "Aim for 25–30g of fiber a day to support estrogen clearance.",
      "Limit alcohol around your luteal phase if PMS hits hard.",
      "Track flow and pain — it makes doctor visits 10x more useful.",
      "Pelvic floor exercises help more than just postpartum recovery.",
    ],
    stories: [
      { name: "Lina, 31", quote: "Tracking my cycle made me feel less broken and more informed." },
      { name: "Priya, 26", quote: "Talking openly with my sister was the start of taking my health seriously." },
    ],
    myths: [
      { myth: "Period pain is just normal.", fact: "Mild cramps are common. Pain that stops your day isn't normal — get it checked." },
      { myth: "You can't get pregnant during your period.", fact: "It's less likely, but possible. Sperm can survive up to 5 days." },
      { myth: "Birth control ruins your fertility.", fact: "Most people return to baseline fertility within months of stopping." },
    ],
  },
  "medical-conditions": {
    slug: "medical-conditions",
    title: "Medical Conditions",
    subtitle: "Expert care and management for a range of women's health conditions.",
    iconKey: "ClipboardPlus",
    tone: "slate",
    understanding: [
      { label: "Different Health Conditions", tone: "peach" },
      { label: "Understanding Women's Health", tone: "blue" },
      { label: "Common Reproductive Health Concerns", tone: "rose" },
      { label: "Tips to Improve Health", tone: "mint" },
    ],
    articles: [
      { title: "Endometriosis basics", body: "Tissue similar to the uterine lining grows outside the uterus, often causing pain. Diagnosis can take years — advocate for yourself." },
      { title: "Thyroid and your mood", body: "An under- or over-active thyroid can mimic depression, anxiety, and fatigue. A simple blood test can clarify a lot." },
      { title: "UTIs: prevention over panic", body: "Hydration, peeing after sex, and front-to-back wiping prevent most UTIs. Recurring infections deserve a workup." },
    ],
    tips: [
      "Keep a symptom journal before any specialist visit.",
      "Bring a friend or partner to appointments — two ears are better.",
      "Ask: 'What else could this be?' if you feel dismissed.",
      "Track meds and side effects in one place.",
    ],
    stories: [
      { name: "Sara, 35", quote: "Getting diagnosed with endo took 9 years. Naming it changed everything." },
      { name: "Hana, 42", quote: "A thyroid panel finally explained the fog I'd carried for years." },
    ],
    myths: [
      { myth: "If tests are normal, nothing is wrong.", fact: "Normal labs don't always mean normal life. Trust your body and seek second opinions." },
      { myth: "Women just feel pain more.", fact: "Pain is real and measurable. It's not a personality trait." },
      { myth: "Chronic conditions mean giving up.", fact: "Most are highly manageable with the right plan and support." },
    ],
  },
  "nutrition-weight": {
    slug: "nutrition-weight",
    title: "Nutrition & Weight",
    subtitle: "Tailored nutrition plans and weight management support for better health.",
    iconKey: "Salad",
    tone: "peach",
    understanding: [
      { label: "Why is nutrition important?", tone: "peach" },
      { label: "Balanced Diet", tone: "blue" },
      { label: "Healthy Weight", tone: "rose" },
      { label: "The Role of Nutrition", tone: "mint" },
    ],
    articles: [
      { title: "The plate, simplified", body: "Half veggies, a quarter protein, a quarter whole grains. That's it. No app required." },
      { title: "Hunger isn't the enemy", body: "Restriction backfires. Eating enough during the day is the most underrated weight tool." },
      { title: "Strength is the new cardio", body: "Muscle drives metabolism. Two short strength sessions a week change body composition more than any diet." },
    ],
    tips: [
      "Eat protein at every meal — aim for a palm-sized portion.",
      "Drink water before reaching for a snack.",
      "Don't skip breakfast on workout days.",
      "Make veggies the easiest food in your fridge to grab.",
      "Sleep 7+ hours — it controls hunger hormones.",
    ],
    stories: [
      { name: "Ria, 29", quote: "I stopped counting calories and started counting protein grams. My energy doubled." },
      { name: "Dee, 38", quote: "Cooking once and eating twice freed up my whole week." },
    ],
    myths: [
      { myth: "Carbs make you gain weight.", fact: "Excess calories do — from any source. Whole carbs fuel your brain and workouts." },
      { myth: "Eating late causes weight gain.", fact: "Total daily intake matters more than timing." },
      { myth: "Detoxes clean your body.", fact: "Your liver and kidneys already do that — beautifully." },
    ],
  },
  "pregnancy-postpartum": {
    slug: "pregnancy-postpartum",
    title: "Pregnancy & Postpartum",
    subtitle: "End-to-end care for a healthy pregnancy and smooth postpartum recovery.",
    iconKey: "Baby",
    tone: "mint",
    understanding: [
      { label: "Pregnancy and Conception", tone: "peach" },
      { label: "Understanding the Stages of Pregnancy", tone: "blue" },
      { label: "Prenatal Care", tone: "rose" },
      { label: "Postpartum Depression", tone: "mint" },
    ],
    articles: [
      { title: "The first trimester, honestly", body: "Fatigue and nausea are real work. Rest is productive. Snacks are medicine." },
      { title: "Building your birth team", body: "Doctor, partner, doula, friend — knowing who does what reduces stress on the day." },
      { title: "Postpartum is a fourth trimester", body: "Healing takes months, not weeks. Asking for help is part of the plan." },
    ],
    tips: [
      "Drink water like it's your job — every trimester.",
      "Walk daily if your provider okays it; even 10 minutes counts.",
      "Prep freezer meals in the third trimester.",
      "Sleep when the baby sleeps, even badly, even briefly.",
      "Pelvic floor PT after birth is for everyone, not just complications.",
    ],
    stories: [
      { name: "Noor, 30", quote: "Telling my partner exactly what I needed was harder than labor itself — and worth it." },
      { name: "Fara, 34", quote: "Therapy at 6 weeks postpartum saved my mental health." },
    ],
    myths: [
      { myth: "You're eating for two.", fact: "You need ~300 extra calories in the second trimester, ~450 in the third." },
      { myth: "Bouncing back is the goal.", fact: "Healing is the goal. Bodies change — that's biology, not failure." },
      { myth: "Baby blues and PPD are the same.", fact: "Blues lift in 2 weeks. PPD doesn't and deserves real support." },
    ],
  },
  "mental-health": {
    slug: "mental-health",
    title: "Mental Health",
    subtitle: "Support and counseling to nurture emotional and psychological well-being.",
    iconKey: "Brain",
    tone: "blue",
    understanding: [
      { label: "Understanding Mental Health", tone: "peach" },
      { label: "Mental Health Made Simple", tone: "blue" },
      { label: "What is Mental Health?", tone: "rose" },
      { label: "Top Tips for Good Mental Health", tone: "mint" },
    ],
    articles: [
      { title: "Anxiety isn't a character flaw", body: "It's a nervous system response. Naming it shrinks it. Tools help — therapy helps more." },
      { title: "The link between hormones and mood", body: "PMDD, perimenopause, and postpartum can all shift mood dramatically. You're not imagining it." },
      { title: "Boundaries as self-care", body: "A boundary is a sentence, not a wall. 'I can't tonight, but Sunday works' is a complete answer." },
    ],
    tips: [
      "Five slow breaths can reset a spiraling moment.",
      "Move your body daily — even a stretch counts.",
      "Limit doomscrolling before bed.",
      "Name one good thing each evening.",
      "Therapy isn't only for crisis — it's for clarity.",
    ],
    stories: [
      { name: "Tess, 27", quote: "Telling my GP about my anxiety was the scariest 30 seconds — and the most useful." },
      { name: "Mira, 41", quote: "Perimenopause hit my mood like a truck. Knowing why made it survivable." },
    ],
    myths: [
      { myth: "You should be over it by now.", fact: "Healing isn't linear and has no deadline." },
      { myth: "Medication changes who you are.", fact: "Often, it lets you be more of who you are." },
      { myth: "Strong people don't need help.", fact: "Asking for help is one of the strongest things humans do." },
    ],
  },
  fertility: {
    slug: "fertility",
    title: "Fertility",
    subtitle: "Guidance and treatments to support your journey to conception.",
    iconKey: "Sprout",
    tone: "rose",
    understanding: [
      { label: "Understanding Ovulation & Fertility", tone: "peach" },
      { label: "Female Fertility", tone: "blue" },
      { label: "Fertility Options", tone: "rose" },
      { label: "5 Common Signs of Infertility", tone: "mint" },
    ],
    articles: [
      { title: "Knowing your fertile window", body: "It's roughly the 5 days before ovulation plus ovulation day. Cervical mucus is the most reliable cue." },
      { title: "Lifestyle and conception", body: "Sleep, stress, and steady nutrition matter for both partners. Fertility is a team sport." },
      { title: "When to seek a specialist", body: "Under 35 trying for 12 months, or over 35 trying for 6 — it's time for a workup." },
    ],
    tips: [
      "Track ovulation with mucus + LH strips for the clearest picture.",
      "Both partners benefit from a daily multivitamin.",
      "Limit alcohol while trying.",
      "Sex every 2–3 days through your fertile window beats perfect timing.",
      "Be kind to yourself. The wait is the hardest part.",
    ],
    stories: [
      { name: "Jen, 34", quote: "Three months of tracking taught me more than a year of guessing." },
      { name: "Sana, 37", quote: "IVF wasn't plan A. It became our story, and we're okay with that." },
    ],
    myths: [
      { myth: "Stress causes infertility.", fact: "Stress is hard but rarely the sole cause. Don't add guilt to grief." },
      { myth: "You can wait until 40 with no impact.", fact: "Egg quantity and quality decline with age — knowledge is power." },
      { myth: "Infertility is a woman's issue.", fact: "About a third of cases are male factor. Test both partners." },
    ],
  },
  menopause: {
    slug: "menopause",
    title: "Menopause",
    subtitle: "Holistic care to manage symptoms and ease the transition through menopause.",
    iconKey: "HeartPulse",
    tone: "mint",
    understanding: [
      { label: "Perimenopause", tone: "peach" },
      { label: "Menopause", tone: "blue" },
      { label: "Postmenopause", tone: "rose" },
      { label: "Menopause Relief", tone: "mint" },
    ],
    articles: [
      { title: "Perimenopause can start in your 40s", body: "Cycle changes, sleep shifts, and mood swings can begin a decade before your last period." },
      { title: "Hot flashes, demystified", body: "Layered clothing, cool bedrooms, and reducing alcohol help. Talk to your doctor about HRT — it's safer than the headlines." },
      { title: "Strength and bones", body: "Estrogen drops affect bone density. Lifting weights twice a week protects you for decades." },
    ],
    tips: [
      "Cool the bedroom to 18°C for better sleep.",
      "Add calcium + vitamin D daily.",
      "Strength train at least twice a week.",
      "Track triggers for hot flashes — patterns appear quickly.",
      "Talk to a menopause-aware clinician, not just any GP.",
    ],
    stories: [
      { name: "Anya, 49", quote: "HRT gave me back my sleep and my patience." },
      { name: "Bea, 54", quote: "Lifting weights at 50 was the best decision of my decade." },
    ],
    myths: [
      { myth: "Menopause is just hot flashes.", fact: "It affects sleep, mood, joints, skin, libido — the full system." },
      { myth: "HRT is dangerous.", fact: "For most healthy people under 60, benefits outweigh risks. Ask a specialist." },
      { myth: "It's all downhill from here.", fact: "Many describe postmenopause as their most confident, free chapter." },
    ],
  },
};

export const supportCards: { slug: ModuleSlug; title: string; tone: PastelTone; iconKey: string }[] = [
  { slug: "pcos", title: "PCOS", tone: "pink", iconKey: "Flower" },
  { slug: "reproductive-health", title: "Reproductive Health", tone: "lilac", iconKey: "Flower2" },
  { slug: "medical-conditions", title: "Medical Conditions", tone: "slate", iconKey: "ClipboardPlus" },
  { slug: "nutrition-weight", title: "Nutrition & Weight", tone: "peach", iconKey: "Salad" },
  { slug: "pregnancy-postpartum", title: "Pregnancy & Postpartum", tone: "mint", iconKey: "Baby" },
  { slug: "mental-health", title: "Mental Health", tone: "blue", iconKey: "Brain" },
  { slug: "fertility", title: "Fertility", tone: "rose", iconKey: "Sprout" },
  { slug: "menopause", title: "Menopause", tone: "mint", iconKey: "HeartPulse" },
];

export const tipCards = [
  { title: "Hair & Skin", gradient: "bg-tip-teal", iconKey: "Wind" },
  { title: "Food", gradient: "bg-tip-orange", iconKey: "UtensilsCrossed" },
  { title: "Weight Loss", gradient: "bg-tip-pink", iconKey: "Scale" },
  { title: "PMS", gradient: "bg-tip-purple", iconKey: "Flower" },
] as const;
