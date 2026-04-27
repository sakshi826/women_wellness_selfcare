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
  understanding: { label: string; tone: "peach" | "blue" | "rose" | "mint"; body: string[] }[];
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
      { label: "Basic Guide", tone: "peach", body: [
        "Polycystic Ovary Syndrome (PCOS) is one of the most common hormonal conditions in the world, affecting roughly 1 in 10 people with ovaries. Despite the name, PCOS isn't really about cysts at all — it's about a cluster of hormonal imbalances that can show up very differently from one body to another.",
        "The three classic features doctors look for are irregular or absent periods, signs of higher androgen activity (such as acne, oily skin, scalp hair thinning, or unwanted hair growth on the face, chest, or back), and ovaries that look polycystic on an ultrasound. You only need two of these three to be diagnosed, which is part of why two people with the same diagnosis can have completely different stories.",
        "Underneath these visible signs, there are usually two quieter drivers: insulin resistance and chronic low-grade inflammation. Insulin resistance means your body has to make more insulin than usual to keep blood sugar steady, and that extra insulin nudges the ovaries to make more androgens. Inflammation amplifies the whole loop, especially if sleep is short, stress is high, or meals are irregular.",
        "PCOS isn't just a 'period problem.' Because hormones touch every system, it can also affect mood, energy, skin, hair, weight distribution, sleep, fertility, and long-term metabolic health. Many people describe a vague sense of feeling 'off' for years before finally getting a name for what's happening.",
        "The encouraging part is that PCOS is highly responsive to lifestyle. Steady meals built around protein and fiber, two or three short strength sessions a week, consistent sleep, and small daily stress outlets can ease most symptoms — sometimes within just a few cycles. Medication and supplements add valuable support, but daily habits remain the strongest single lever you have.",
        "There's also no single 'PCOS diet' or 'PCOS workout' that fits everyone. The best plan is the one you can actually keep: foods you enjoy, movement you don't dread, and a routine that respects the rest of your life. PCOS rewards consistency far more than intensity.",
        "If you suspect PCOS, ask for a proper workup: a hormone panel, a fasting insulin and glucose test, a thyroid check, and a pelvic ultrasound. Naming what's happening is the first relief — and the doorway to a plan that actually fits you."
      ]},
      { label: "PCOS Made Simple", tone: "blue", body: [
        "If PCOS feels confusing, it helps to think of it as a communication issue between three players: your brain, your ovaries, and your insulin system. The brain sends hormone signals, the ovaries respond unevenly, and insulin — your blood sugar manager — often runs higher than it should. None of these parts is broken; they're just out of sync.",
        "Here's the loop in plain language. When you eat, your body releases insulin to move sugar from your blood into your cells. In PCOS, cells respond more slowly, so the body releases extra insulin to compensate. That extra insulin then signals the ovaries to make more androgens (testosterone-like hormones), which disrupts ovulation. No ovulation means irregular cycles, which feeds back into more imbalance.",
        "This is why PCOS symptoms cluster the way they do. Acne, oily skin, hair changes, and irregular periods all trace back to the same hormonal current. It's not a coincidence — it's one underlying pattern showing up in different places.",
        "Stress and sleep are part of the loop too. Short or broken sleep raises cortisol, which raises insulin, which pushes androgens higher. That's why someone can 'do everything right' with food and still feel stuck if their sleep and stress aren't being protected.",
        "The simplest interventions work so well precisely because they calm the whole loop at once. Protein at every meal slows blood sugar spikes. A 10-minute walk after eating helps muscles soak up glucose. Lifting weights makes cells more responsive to insulin for hours afterward. Seven to nine hours of sleep lowers cortisol overnight.",
        "You don't need to do all of this perfectly. Even one or two of these habits, repeated most days, gently quiets the system. Many people see their cycles regulate, their skin clear, and their energy lift within two or three months — without anything drastic.",
        "Think of PCOS management less as a strict protocol and more as a long, kind conversation with your body. Small, steady inputs change the whole picture over time."
      ]},
      { label: "What is PCOS?", tone: "rose", body: [
        "PCOS is a lifelong endocrine condition in which the ovaries don't release eggs as regularly as they should. It usually shows up in the late teens or twenties, but many people aren't diagnosed until much later — often after years of struggling with periods, skin, weight, or trying to conceive.",
        "Symptoms vary enormously from person to person. The most common include missed or unpredictable periods, very long or very short cycles, acne (especially along the jaw and chin), oily skin, hair thinning on the scalp, hair growth on the face or body, weight that's hard to shift around the middle, low energy, anxiety, and mood changes. Not everyone experiences every symptom — and some people have PCOS without obvious outer signs at all.",
        "Diagnosis follows what's called the Rotterdam criteria: irregular or absent ovulation, signs of high androgens (either physical or on a blood test), and polycystic-looking ovaries on ultrasound. Two out of three is enough. That's why diagnosis can take time and often involves blood tests, an ultrasound, and a careful conversation about your history.",
        "There are several recognized 'types' of PCOS — insulin-resistant, inflammatory, post-pill, and adrenal — and many people overlap more than one. Understanding which pattern fits you helps shape the most useful treatment plan.",
        "PCOS also carries longer-term considerations. It's linked to higher risk of type 2 diabetes, high blood pressure, fatty liver, sleep apnea, and certain mood conditions. None of these are guaranteed, but knowing the risks means you can stay ahead of them with simple yearly check-ups.",
        "Critically, PCOS is not your fault. It's not caused by something you ate, your body size, or anything you did or didn't do. It runs in families and is shaped by a mix of genetics, environment, and hormones — most of which you didn't choose.",
        "Naming PCOS removes a lot of the shame and confusion that often surround it. From there, the path forward is calmer: regular check-ins, a few core habits, the right specialists when needed, and a long view rather than a quick fix."
      ]},
      { label: "Life Changing Tips", tone: "mint", body: [
        "Start with the plate, because every meal sends hormonal signals. Build meals around protein (eggs, fish, chicken, paneer, tofu, dal, Greek yogurt), then add fiber (vegetables, beans, fruit, whole grains), then add healthy fats (olive oil, nuts, seeds, avocado). Carbs are welcome — just from whole sources, alongside the rest, not on their own.",
        "This one shift steadies blood sugar more than any supplement. Steady blood sugar means fewer cravings, fewer energy crashes, calmer skin, and over time, more regular cycles. You don't need to count anything — just rearrange the order on your plate.",
        "Move in ways that build muscle. Two or three short strength sessions a week (even 20–30 minutes with bodyweight, dumbbells, or resistance bands) improve insulin sensitivity for hours afterward. Add a 10-minute walk after your largest meal of the day, and you've covered the foundation that medication can only partly replicate.",
        "Long, punishing cardio isn't required and can backfire by raising cortisol. Walking, strength training, yoga, swimming, and gentle hikes are some of the most PCOS-friendly forms of movement. The best workout is the one you'll happily come back to next week.",
        "Protect sleep like a prescription. Seven to nine hours, a consistent bedtime, a cool dark room, and a calm wind-down (dim lights, screens off 30 minutes before bed) lower the cortisol that worsens PCOS. Many people see noticeable changes in skin, mood, and cycles within weeks of fixing sleep alone.",
        "Add small, repeatable stress outlets — a daily walk, breathwork, journaling, time with people you love, time outdoors, gentle stretching. They don't need to be long. Five honest minutes a day beats one perfect hour a week.",
        "Layer in supportive supplements only after the basics are in place: inositol, vitamin D, omega-3s, and magnesium are the most evidence-backed for PCOS. Discuss with a clinician who actually knows the condition rather than buying based on social media.",
        "Most importantly, take the long view. PCOS rewards patience. The people who feel best aren't the ones doing everything perfectly — they're the ones doing the basics consistently, over months and years, with kindness toward themselves on the days it slips."
      ]},
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
      { myth: "Birth control is the only treatment.", fact: "It's one tool. Diet, movement, sleep, and other meds all play meaningful roles." },
      { myth: "PCOS is rare.", fact: "It affects roughly 1 in 10 people with ovaries — making it one of the most common hormonal conditions." },
      { myth: "If your periods are regular, it's not PCOS.", fact: "Some people with PCOS have regular cycles. Diagnosis looks at hormones and ovaries too." },
      { myth: "PCOS goes away after menopause.", fact: "Many symptoms ease, but metabolic risks like diabetes can persist — keep up healthy habits." },
    ],
  },
  "reproductive-health": {
    slug: "reproductive-health",
    title: "Reproductive Health",
    subtitle: "Comprehensive support for overall reproductive and hormonal well-being.",
    iconKey: "Flower2",
    tone: "lilac",
    understanding: [
      { label: "What is Reproductive Health?", tone: "peach", body: [
        "Reproductive health is much more than the ability to have children. It's the overall state of your reproductive system at every stage of life — from your first period in your early teens to the years long after menopause. It includes your menstrual cycle, hormones, fertility, sexual wellness, pelvic health, and the way all of this connects to the rest of your body.",
        "When reproductive health is in a good place, your cycle is reasonably predictable, your periods are manageable, sex is comfortable, you can make informed choices about contraception or pregnancy, and you have access to the information and care you need at every life phase. It doesn't mean perfect — it means functional, informed, and supported.",
        "Reproductive health is also deeply connected to the rest of you. Stress, sleep, nutrition, movement, mental health, and even your social environment all show up in your cycle. A stressful month can shift ovulation. Poor sleep can worsen PMS. Skipped meals can mute your period. Treating reproductive health as part of whole-body health is what makes care actually work.",
        "It's also important to know that reproductive health changes across your lifespan, and that's normal. The body that menstruates at 18 is not the same body that's perimenopausal at 46. Different phases need different kinds of attention, and what worked in your twenties may need updating in your thirties or forties.",
        "Sexual health is part of reproductive health too. That includes pleasure, comfort, consent, contraception, STI prevention, and the freedom to ask questions without shame. A clinician you trust can answer almost anything — there's no question that's 'too small' or 'too embarrassing.'",
        "Reproductive health also lives inside relationships and communities. Being able to talk openly with a partner, friend, sister, or doctor changes outcomes. Silence keeps small issues big; conversation makes big issues manageable.",
        "Above all, reproductive health is something you're allowed to invest in actively. You don't have to wait for symptoms to get serious. Curiosity and small daily care now build the foundation for an easier journey at every later stage."
      ]},
      { label: "Reproductive Health Made Simple", tone: "blue", body: [
        "Your menstrual cycle is run by a feedback loop between your brain (specifically the hypothalamus and pituitary gland) and your ovaries. Estrogen and progesterone rise and fall in a predictable pattern across roughly 21–35 days, with ovulation in the middle and a period at the end if pregnancy didn't occur.",
        "There are four broad phases. The menstrual phase (your period) is when the uterine lining sheds. The follicular phase that follows is when estrogen rises and energy often returns. Ovulation, around the middle, is when an egg is released. The luteal phase that follows is when progesterone rises, the body prepares for possible pregnancy, and PMS symptoms can appear.",
        "Each phase has a different feel. Many people notice more energy and confidence in the days leading to ovulation, then more inward focus and lower social bandwidth in the week before their period. Knowing this pattern helps you plan workouts, hard conversations, and rest with your body instead of against it.",
        "When the loop runs smoothly, periods come roughly monthly, last 3–7 days, and don't derail your life. Mild cramps, light breast tenderness, or a slight mood dip before your period are common. Severe pain, very heavy bleeding (soaking through protection in under two hours), bleeding between periods, or cycles that disappear for months are signals worth checking — not signals to push through.",
        "The simple version of reproductive health is: track what's normal for you, support the basics (sleep, food, movement, stress), and speak up early when something shifts. You don't need to wait for things to be 'bad enough' to deserve care.",
        "A basic cycle log — start date, flow level, pain level, mood, and any standout symptoms — turns vague experience into useful information. Bring it to a doctor and you've shortened months of back-and-forth into a focused conversation.",
        "And remember: cycles can shift with stress, illness, travel, intense exercise, weight changes, breastfeeding, and big life events. One unusual month is rarely a crisis. Persistent changes over several cycles deserve a real check-in."
      ]},
      { label: "Understanding Reproductive Health", tone: "rose", body: [
        "Reproductive health spans a lifetime, and each chapter brings its own questions. Adolescence is about understanding your first cycles and what's normal. Your twenties often bring contraception choices, sexual health questions, and the early signals of conditions like PCOS or endometriosis. Your thirties may bring fertility planning, pregnancy, or postpartum recovery. Your forties often introduce perimenopause. Your fifties and beyond bring postmenopause and a focus on long-term wellness.",
        "What worked for your reproductive health at 22 may not fit at 38, and that's by design. The same person needs different support at different stages. Updating your habits, your clinicians, and your information across the years isn't a failure — it's how good care is supposed to work.",
        "Several common conditions can quietly shape reproductive health, often for years before they're named. PCOS, endometriosis, fibroids, adenomyosis, thyroid disorders, premature ovarian insufficiency, and pelvic floor dysfunction are among the most common. Many go undiagnosed because their signs — pain, fatigue, irregular cycles, painful sex — get normalized as 'just part of being a woman.'",
        "They aren't. Persistent pain, very heavy bleeding, missed periods, pain with sex, or trouble conceiving are reasons to ask for a workup. A typical first step might include a hormone panel, a thyroid test, an ultrasound, and a thorough conversation about your history.",
        "Mental health and reproductive health are deeply linked. Hormonal shifts across the cycle, pregnancy, postpartum, and perimenopause can drive real, biological mood changes — PMDD, postpartum depression, and perimenopausal anxiety are not weaknesses, they're medical conditions that respond to treatment.",
        "Sexual health belongs in this picture too. Comfortable, consensual, pleasurable intimacy is part of being well. Pain with sex, low desire, or dryness all have causes worth exploring rather than silently enduring.",
        "Knowing your baseline is power. A simple cycle log, a yearly check-up, and an honest conversation with a clinician you trust can shorten years of guessing into a clear, doable plan."
      ]},
      { label: "Boost Your Reproductive Health", tone: "mint", body: [
        "Eat for hormones. Build meals around steady protein (eggs, fish, legumes, paneer, tofu, chicken), plenty of fiber (vegetables, fruit, beans, whole grains), and healthy fats (olive oil, nuts, seeds, avocado). Fiber especially helps your body clear used estrogen, which keeps cycles smoother and PMS calmer.",
        "Aim for 25–30 grams of fiber a day and try to include some color at every meal. Leafy greens, cruciferous vegetables (broccoli, cauliflower, cabbage), berries, and beans are particularly hormone-friendly.",
        "Move daily, lift weekly. Walking, yoga, and gentle cardio support circulation and mood. Strength training two or three times a week protects long-term hormone balance, bone density, and metabolic health. You don't need a gym — 20 minutes of bodyweight work at home counts.",
        "Be mindful of how exercise interacts with your cycle. The follicular and ovulation phases often handle harder workouts well; the luteal phase and your period may call for gentler movement. Working with your body, not against it, is more sustainable.",
        "Sleep is one of the most underrated reproductive health tools. Seven to nine hours, on a consistent schedule, in a cool dark room, regulates the hormones that run your cycle. Chronic sleep loss is one of the fastest ways to disrupt periods, mood, and fertility.",
        "Manage stress in small daily ways. A short walk, a few minutes of breathwork, time outdoors, time with people who calm you, journaling, prayer, or a hobby — these aren't extras, they're maintenance. Chronic stress raises cortisol, which can disrupt ovulation and worsen PMS.",
        "Limit the things that quietly drain reproductive health: heavy alcohol, smoking, ultra-processed foods on repeat, and chronically skipped meals. Moderation is fine; consistent overload is the issue.",
        "Finally, see your reproductive health as something to invest in across decades, not a problem to fix in a crisis. Most issues respond — at least partly — to these basics, even before any medication enters the picture."
      ]},
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
      { myth: "Discharge means something is wrong.", fact: "Healthy discharge changes through your cycle — color, texture, and amount all vary normally." },
      { myth: "You only need a Pap smear if you're sexually active.", fact: "Guidelines depend on age and history — talk to your clinician, don't assume." },
      { myth: "Irregular periods are always a problem.", fact: "Stress, travel, illness, and life stages can shift cycles. Persistent changes deserve a check-up." },
      { myth: "Douching keeps you cleaner.", fact: "It disrupts the vagina's natural balance and increases infection risk. Water on the outside is enough." },
    ],
  },
  "medical-conditions": {
    slug: "medical-conditions",
    title: "Medical Conditions",
    subtitle: "Expert care and management for a range of women's health conditions.",
    iconKey: "ClipboardPlus",
    tone: "slate",
    understanding: [
      { label: "Different Health Conditions", tone: "peach", body: [
        "Women's bodies face a unique mix of conditions: endometriosis, fibroids, thyroid disorders, autoimmune diseases, migraines, anemia, UTIs, and more. Many overlap and many are missed because their symptoms get blamed on stress or 'just hormones.'",
        "Each condition has its own pattern, but the theme is the same: early recognition shortens suffering. A good symptom journal — when, where, how often, how severe — turns vague experience into something a clinician can act on.",
        "You're not expected to diagnose yourself. You are expected to be the expert on your own body. Bring that expertise to every appointment."
      ]},
      { label: "Understanding Women's Health", tone: "blue", body: [
        "Most medical research was historically done on male bodies, which is why so many conditions in women are diagnosed later or differently. Heart attacks, autoimmune disease, ADHD, and even pain are often missed in women because the textbook picture was built around men.",
        "That's slowly changing, but it means you may have to advocate harder. Asking 'what else could this be?' or requesting a second opinion isn't rude — it's good medicine.",
        "Understanding women's health also means recognizing how cycles, pregnancy, and menopause shift everything else: medication doses, blood pressure, mood, even immune response. Context matters."
      ]},
      { label: "Common Reproductive Health Concerns", tone: "rose", body: [
        "The most common reproductive concerns include painful periods, irregular cycles, fibroids, endometriosis, ovarian cysts, PCOS, and recurrent UTIs or yeast infections. Most are very treatable once named.",
        "Pelvic pain that interrupts your day, periods that soak through protection in under two hours, bleeding between cycles, or pain with sex are all worth investigating. They're common — but not 'normal' to live with.",
        "Bring specifics to appointments: cycle length, pain location, what helps and what doesn't. The clearer your picture, the faster the path to relief."
      ]},
      { label: "Tips to Improve Health", tone: "mint", body: [
        "Lay the foundations first: sleep, hydration, regular meals, daily movement. Many chronic symptoms ease meaningfully when these are steady, even before treatment begins.",
        "Get the basic labs at least yearly: thyroid, iron and ferritin, vitamin D, B12, and a metabolic panel. These five catch a surprising number of 'mystery' issues.",
        "Build a small care team you trust — a primary doctor, a gynecologist, and one specialist if needed. Continuity beats hopping between providers, and trusted relationships make hard conversations easier."
      ]},
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
      { myth: "You're too young for that condition.", fact: "Many conditions show up earlier than textbooks suggest — symptoms matter more than age." },
      { myth: "Heart disease is a man's problem.", fact: "It's the leading cause of death for women too — and symptoms often look different." },
      { myth: "Autoimmune diseases are rare.", fact: "They affect ~1 in 12 women, often hitting in their 20s–40s." },
      { myth: "If a doctor dismisses you, you're being dramatic.", fact: "Trust your gut. A second opinion has saved countless lives." },
    ],
  },
  "nutrition-weight": {
    slug: "nutrition-weight",
    title: "Nutrition & Weight",
    subtitle: "Tailored nutrition plans and weight management support for better health.",
    iconKey: "Salad",
    tone: "peach",
    understanding: [
      { label: "Why is nutrition important?", tone: "peach", body: [
        "Food is information. Every meal sends signals to your hormones, immune system, brain, and muscles. Good nutrition isn't about perfection — it's about giving your body steady, useful information most of the time.",
        "Women specifically have more demand on iron, calcium, B12, vitamin D, and omega-3s, especially through cycles, pregnancy, and perimenopause. Skipping these silently shows up as fatigue, hair loss, mood dips, or weak workouts.",
        "Think 'add' before 'subtract'. Adding protein, fiber, and color to your plate naturally crowds out the foods that drain you, without the willpower battle of strict restriction."
      ]},
      { label: "Balanced Diet", tone: "blue", body: [
        "A balanced plate is simpler than the internet makes it: roughly half vegetables and fruit, a quarter protein (palm-sized), a quarter whole carbs (rice, oats, potatoes, bread), plus a thumb of healthy fat (olive oil, nuts, avocado).",
        "This shape stabilizes blood sugar, supports muscle, and keeps you full for hours. You don't need to track grams — you just need the shape repeated most days.",
        "Variety matters too. Rotating proteins, swapping grains, and changing up vegetables across the week covers a wider range of nutrients than eating the same 'healthy' meal on repeat."
      ]},
      { label: "Healthy Weight", tone: "rose", body: [
        "A healthy weight is the one your body settles at when you're sleeping enough, moving regularly, eating mostly whole foods, and not in a constant cycle of restrict-and-rebound. It looks different on every body.",
        "Weight is one signal, not the signal. Energy, strength, periods, mood, and bloodwork tell a fuller story. Many people get healthier without the scale moving much at all.",
        "If weight loss is a goal, slow and supported wins. Aim for habits you'd happily keep for years, not a sprint that ends in a binge. Strength training and protein protect muscle while you change body composition."
      ]},
      { label: "The Role of Nutrition", tone: "mint", body: [
        "Nutrition shapes nearly every system: hormones, gut, brain, skin, immunity, sleep. Even small upgrades — more fiber, more water, more protein at breakfast — ripple into how you feel within a week or two.",
        "It's also a powerful partner to medication and movement. People who pair treatment with steady nutrition consistently report better outcomes for PCOS, thyroid, mood, and metabolic health.",
        "Most importantly, nutrition is meant to be enjoyed. Meals with people you love, foods from your culture, and flavors you actually want to eat are part of a healthy life — not a deviation from it."
      ]},
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
      { myth: "Fat makes you fat.", fact: "Healthy fats support hormones, brain, and satiety. Don't fear olive oil, nuts, or avocado." },
      { myth: "Skipping meals helps you lose weight.", fact: "It often backfires — leading to overeating and slower metabolism." },
      { myth: "All calories are equal.", fact: "Quality matters. 200 calories of broccoli and 200 of soda affect your body very differently." },
      { myth: "You need supplements to be healthy.", fact: "Most nutrients are best absorbed from food. Supplement only what's measured to be low." },
    ],
  },
  "pregnancy-postpartum": {
    slug: "pregnancy-postpartum",
    title: "Pregnancy & Postpartum",
    subtitle: "End-to-end care for a healthy pregnancy and smooth postpartum recovery.",
    iconKey: "Baby",
    tone: "mint",
    understanding: [
      { label: "Pregnancy and Conception", tone: "peach", body: [
        "Conception happens when a sperm fertilizes an egg released during ovulation, usually around the middle of your cycle. The fertile window — about 5 days before ovulation through ovulation day — is when intercourse can lead to pregnancy.",
        "Tracking ovulation through cervical mucus changes, basal body temperature, or LH strips makes timing far easier than guessing. For most healthy couples, conception happens within 6–12 months.",
        "Preparing for pregnancy starts before the test: a daily prenatal with folate, steady sleep, balanced meals, and easing alcohol all support a healthier first trimester for both you and the baby."
      ]},
      { label: "Understanding the Stages of Pregnancy", tone: "blue", body: [
        "Pregnancy is split into three trimesters of about 13 weeks each. The first is when the baby's organs form — and when fatigue and nausea often hit hardest. Rest is doing real work, even if it doesn't feel like it.",
        "The second trimester usually brings more energy. Movement returns, the bump shows, and many appointments and scans happen here. The third is preparation: bigger body, more rest, and the final shaping of lungs and brain.",
        "Each stage has its own focus, but the through-line is the same: regular prenatal care, gentle movement, hydration, protein, and honest check-ins about your mental health."
      ]},
      { label: "Prenatal Care", tone: "rose", body: [
        "Prenatal care is the regular cadence of check-ups, blood tests, and scans across pregnancy. It catches problems early — high blood pressure, gestational diabetes, growth concerns — when they're easiest to manage.",
        "Bring questions to every visit, even small ones. Sleep, nausea, anxiety, sex, work, travel, food cravings: it's all fair game. Good prenatal care treats the whole person, not just the bump.",
        "If something feels off between visits — sudden swelling, severe headaches, reduced fetal movement, bleeding — call. You're not bothering anyone. That's exactly what they're there for."
      ]},
      { label: "Postpartum Depression", tone: "mint", body: [
        "Postpartum depression (PPD) is more than baby blues. Blues are common in the first two weeks; PPD lingers and deepens, with persistent sadness, anxiety, hopelessness, or numbness that affects daily life and bonding.",
        "It's a medical condition, not a parenting failure. It can show up weeks or even months after birth, and it can affect anyone — including partners. Hormones, sleep loss, and identity shifts all play a part.",
        "Effective help exists: therapy, peer support, medication when needed, and practical help with the baby. Telling a clinician — even with one sentence — opens the door. The earlier the support, the faster the relief."
      ]},
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
      { myth: "You can't exercise while pregnant.", fact: "Most people can — and should — keep moving. Talk to your provider about what fits you." },
      { myth: "Morning sickness only happens in the morning.", fact: "It can hit any time of day. The name is misleading." },
      { myth: "Breastfeeding comes naturally to everyone.", fact: "It's a learned skill. Lactation consultants exist for good reason." },
      { myth: "You can't take any medication while pregnant.", fact: "Many are safe and necessary — never stop without talking to your doctor." },
    ],
  },
  "mental-health": {
    slug: "mental-health",
    title: "Mental Health",
    subtitle: "Support and counseling to nurture emotional and psychological well-being.",
    iconKey: "Brain",
    tone: "blue",
    understanding: [
      { label: "Understanding Mental Health", tone: "peach", body: [
        "Mental health is the state of your emotional, psychological, and social well-being. It shapes how you think, feel, relate, work, and rest. Like physical health, it sits on a spectrum and shifts across your life.",
        "Struggling doesn't mean you're broken. Stress, grief, hormonal changes, sleep loss, and burnout all push mental health around — sometimes for weeks, sometimes longer. Naming what's happening is the first relief.",
        "Care is wide: therapy, medication, movement, social connection, time outdoors, creative outlets, and rest. The goal isn't to feel happy all the time. It's to have tools when life gets heavy."
      ]},
      { label: "Mental Health Made Simple", tone: "blue", body: [
        "Three systems shape day-to-day mental health: your nervous system (how regulated or activated you feel), your brain chemistry (mood and motivation), and your context (relationships, work, finances, sleep).",
        "Small daily inputs add up: morning light, regular meals, movement, breath, and a few minutes of quiet stack into real resilience. Big interventions like therapy or medication work better when these basics are in place.",
        "Mental health isn't separate from physical health. Iron, thyroid, vitamin D, hormones, and inflammation all influence mood. A simple lab panel often explains a surprising amount."
      ]},
      { label: "What is Mental Health?", tone: "rose", body: [
        "Mental health includes mood, thinking, behavior, and the ability to cope with life's normal stress. It's not the absence of difficult feelings — it's the capacity to move through them without getting stuck.",
        "Common conditions include anxiety, depression, PMDD, postpartum depression, ADHD, OCD, and trauma responses. They're real, common, and treatable. Many show up first as physical symptoms — fatigue, gut issues, headaches, sleep changes.",
        "You don't need to be in crisis to seek support. Mental health care is just as valid for clarity, prevention, and growth as it is for difficult chapters."
      ]},
      { label: "Top Tips for Good Mental Health", tone: "mint", body: [
        "Anchor your day with a few non-negotiables: morning light, consistent sleep and wake times, a real meal at breakfast, and one form of movement. These signals keep your nervous system steady.",
        "Connect on purpose. A short call with someone who knows you, a walk with a friend, or a community ritual buffers stress more than almost any solo strategy.",
        "Make rest active. Phones down 30 minutes before bed, time outdoors weekly, and one slow morning a week aren't luxuries — they're maintenance. Therapy, when accessible, multiplies all of the above."
      ]},
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
      { myth: "Therapy is only for serious problems.", fact: "It's a tune-up for the mind — useful at any stage of life." },
      { myth: "Anxiety means you're weak.", fact: "Anxiety is a biological response, not a character trait." },
      { myth: "Talking about depression makes it worse.", fact: "The opposite — naming it and seeking support is the first step toward feeling better." },
      { myth: "If you have a good life, you can't be depressed.", fact: "Depression isn't logical. Brain chemistry doesn't check your gratitude list." },
    ],
  },
  fertility: {
    slug: "fertility",
    title: "Fertility",
    subtitle: "Guidance and treatments to support your journey to conception.",
    iconKey: "Sprout",
    tone: "rose",
    understanding: [
      { label: "Understanding Ovulation & Fertility", tone: "peach", body: [
        "Ovulation is the moment an egg is released from an ovary, usually about 12–16 days before your next period. The egg lives roughly 12–24 hours; sperm can survive up to 5 days inside the body.",
        "That overlap creates a fertile window of about 6 days each cycle. Sex during this window is when conception is possible — and tracking helps you find it.",
        "Cervical mucus that turns clear and stretchy, a small temperature rise, mid-cycle twinges, and a positive LH strip are all reliable signals. Two or three of these together are far more accurate than any single one alone."
      ]},
      { label: "Female Fertility", tone: "blue", body: [
        "Female fertility depends on egg quantity and quality, regular ovulation, open fallopian tubes, and a healthy uterus. All four matter — and all four can be supported or evaluated.",
        "Age is the biggest single factor for egg quality. Fertility is high through the early thirties, gradually declines, and drops more steeply after 37–38. Knowing this isn't pressure — it's information for planning.",
        "Lifestyle still matters: sleep, balanced eating, not smoking, limiting alcohol, and managing stress all support healthier eggs and cycles. So does your partner's health, regardless of whose body the pregnancy will happen in."
      ]},
      { label: "Fertility Options", tone: "rose", body: [
        "Fertility care is a spectrum. It starts with timing intercourse and basic workups, moves through medication that supports ovulation (like letrozole), and includes IUI (intrauterine insemination) and IVF (in vitro fertilization).",
        "Egg freezing and embryo freezing let people preserve fertility for later — useful before treatments that affect fertility, or for those who want time before trying. Donor eggs, donor sperm, and gestational carriers expand the options further.",
        "There's no 'right' path. The best plan considers your age, diagnosis, finances, values, and emotional bandwidth. A good clinic walks you through trade-offs without pressure."
      ]},
      { label: "5 Common Signs of Infertility", tone: "mint", body: [
        "Watch for: irregular or absent periods, very painful periods, cycles shorter than 21 or longer than 35 days, repeated miscarriages, and trying for 12 months without success (or 6 months if you're 35+).",
        "Other quieter signs include changes in cervical mucus, hormonal symptoms like acne or hair changes (which can hint at PCOS), and pelvic pain (which can hint at endometriosis or fibroids).",
        "Infertility is a couple issue about a third of the time, a male-factor issue about a third, and a female-factor issue about a third. Both partners getting evaluated together is faster, fairer, and more accurate."
      ]},
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
      { myth: "If you already have a child, you can't have fertility issues.", fact: "Secondary infertility is real and just as worth investigating." },
      { myth: "IVF always works.", fact: "Success varies by age, cause, and clinic. Going in informed protects your heart." },
      { myth: "Just relax and it'll happen.", fact: "Well-meaning, but rarely true and often hurtful. Medical support exists for a reason." },
      { myth: "Birth control is the cause of infertility.", fact: "It usually isn't. Underlying conditions may have been masked, not caused, by it." },
    ],
  },
  menopause: {
    slug: "menopause",
    title: "Menopause",
    subtitle: "Holistic care to manage symptoms and ease the transition through menopause.",
    iconKey: "HeartPulse",
    tone: "mint",
    understanding: [
      { label: "Perimenopause", tone: "peach", body: [
        "Perimenopause is the transition leading up to menopause, often starting in the late 30s or 40s and lasting 4–10 years. Hormones — especially estrogen and progesterone — start to fluctuate unpredictably.",
        "Common signs: cycles that get shorter, longer, heavier, or skipped; new sleep issues; mood swings; brain fog; joint aches; and the first hot flashes. Many people are told they're 'too young' — but they aren't.",
        "Perimenopause is treatable. Lifestyle (strength training, protein, sleep, stress care) plus, when appropriate, hormone therapy can dramatically smooth this transition. Finding a clinician who actually understands perimenopause is half the battle."
      ]},
      { label: "Menopause", tone: "blue", body: [
        "Menopause is officially the day you've gone 12 full months without a period. The average age is around 51, but anywhere from the mid-40s to mid-50s is normal. Earlier than 45 is called early menopause and deserves specific care.",
        "Symptoms span the whole body: hot flashes, night sweats, sleep changes, vaginal dryness, lower libido, mood shifts, joint pain, and changes in skin and hair. Estrogen has receptors almost everywhere, so its drop is felt almost everywhere.",
        "Treatment options have come a long way. Hormone replacement therapy (HRT), non-hormonal medications, vaginal estrogen, and lifestyle changes are all valid tools. The right mix depends on your symptoms, history, and goals."
      ]},
      { label: "Postmenopause", tone: "rose", body: [
        "Postmenopause begins after that 12-month mark and lasts the rest of your life. Many of the most disruptive symptoms ease over time, though some — like vaginal dryness or sleep changes — can linger and benefit from ongoing care.",
        "The bigger focus shifts to long-term health: bones, heart, brain, and metabolism. Lower estrogen accelerates bone loss and changes cardiovascular risk, which is why strength training, protein, calcium, and vitamin D matter even more now.",
        "Many people describe postmenopause as a powerful chapter — clearer priorities, less hormonal turbulence, and more freedom. The right care helps you feel that, not just hear it."
      ]},
      { label: "Menopause Relief", tone: "mint", body: [
        "Start with the basics: cool the bedroom, keep alcohol and caffeine modest, build a steady wind-down routine, and lift weights at least twice a week. These alone reduce symptoms for many people.",
        "Hormone therapy (HRT) is the most effective treatment for hot flashes, night sweats, sleep, and vaginal symptoms — and for most healthy people under 60 within 10 years of menopause, it's safer than the old headlines suggested.",
        "Non-hormonal options exist too: certain antidepressants, gabapentin, cognitive behavioral therapy, and vaginal moisturizers. Find a menopause-aware clinician and build a plan that fits your body, history, and life."
      ]},
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
      { myth: "Menopause only happens in your 50s.", fact: "Perimenopause can start in your late 30s; early menopause is real and deserves care." },
      { myth: "You can't get pregnant during perimenopause.", fact: "Until 12 months without a period, contraception still matters." },
      { myth: "Weight gain in menopause is unavoidable.", fact: "Hormones make it harder, not impossible. Strength training and protein help significantly." },
      { myth: "Low libido is just part of getting older.", fact: "It's often treatable — hormonal, lifestyle, and relationship factors all play a role." },
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
  { title: "Hair & Skin", slug: "hair-skin", gradient: "bg-tip-teal", iconKey: "Wind" },
  { title: "Food", slug: "food", gradient: "bg-tip-orange", iconKey: "UtensilsCrossed" },
  { title: "Weight Loss", slug: "weight-loss", gradient: "bg-tip-pink", iconKey: "Scale" },
  { title: "PMS", slug: "pms", gradient: "bg-tip-purple", iconKey: "Flower" },
] as const;
