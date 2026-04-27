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

export interface Article {
  title: string;
  summary: string;
  body: string[];
}

export interface Story {
  name: string;
  quote: string;
  body: string[];
}

export interface ModuleContent {
  slug: ModuleSlug;
  title: string;
  subtitle: string;
  iconKey: string;
  tone: PastelTone;
  understanding: { label: string; tone: "peach" | "blue" | "rose" | "mint"; body: string[] }[];
  articles: Article[];
  tips: string[];
  stories: Story[];
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
        "Underneath these visible signs, there are usually two quieter drivers: insulin resistance and chronic low-grade inflammation. Insulin resistance means your body has to make more insulin than usual to keep blood sugar steady, and that extra insulin nudges the ovaries to make more androgens. Inflammation amplifies the whole loop, which is why so many people with PCOS also notice fatigue, brain fog, joint stiffness, and skin flare-ups that don't seem connected on the surface.",
        "PCOS isn't just a 'period problem.' Because hormones touch every system, it can also affect mood, energy, skin, hair, weight distribution, sleep, fertility, and long-term metabolic health. Many people first notice it in their late teens, but a sizable group don't get a clear diagnosis until their late twenties or thirties — often after years of being told that 'irregular periods are normal.'",
        "The encouraging part is that PCOS is highly responsive to lifestyle. Steady meals built around protein and fiber, two or three short strength sessions a week, consistent sleep, and small daily stress outlets can ease most symptoms — sometimes within just a few cycles. Medications such as metformin, inositol, spironolactone, or hormonal contraception can also play a role, but they almost always work better stacked on top of the basics rather than replacing them.",
        "There's also no single 'PCOS diet' or 'PCOS workout' that fits everyone. The best plan is the one you can actually keep: foods you enjoy, movement you don't dread, and a routine that respects the rest of your life. Restrictive plans that promise fast fixes tend to backfire, raising cortisol and crashing energy in ways that make PCOS louder, not quieter.",
        "If you suspect PCOS, ask for a proper workup: a hormone panel (LH, FSH, total and free testosterone, DHEA-S, SHBG, prolactin), fasting insulin and glucose with HbA1c, a thyroid check, vitamin D, and a pelvic ultrasound. Naming what's happening is the first relief — and the doorway to a plan that actually fits you.",
        "Above all, PCOS is a long conversation, not a single decision. Symptoms shift across decades, and what helps in your twenties may need updating in your thirties or forties. The goal isn't to 'cure' PCOS but to live with it on terms that feel good — predictable cycles, steady energy, skin and hair you trust, and a body you no longer have to fight."
      ]},
      { label: "PCOS Made Simple", tone: "blue", body: [
        "If PCOS feels confusing, think of it as a communication issue between three players: your brain, your ovaries, and your insulin system. None of these parts is broken; they're just out of sync, and most of the work of managing PCOS is helping them hear each other again.",
        "When you eat, your body releases insulin to move sugar from blood into cells. In PCOS, cells respond more slowly, so the body releases extra insulin. That extra insulin signals the ovaries to make more androgens (like testosterone), which disrupts ovulation. No ovulation means irregular cycles, which feeds back into more imbalance — a quiet loop that runs in the background of daily life.",
        "This is why PCOS symptoms cluster the way they do. Acne, oily skin, hair changes, irregular periods, stubborn weight around the middle, and energy dips after meals all trace back to the same hormonal current — one underlying pattern showing up in different places. It also explains why treating any single symptom in isolation often disappoints; the underlying loop keeps turning.",
        "Stress and sleep are part of the loop too. Short or broken sleep raises cortisol, which raises insulin, which pushes androgens higher. A high-pressure week with bad sleep can flare PCOS symptoms even if your food and exercise haven't changed at all — useful information, not a personal failing.",
        "The simplest interventions work because they calm the whole loop at once: protein at every meal, a 10-minute walk after eating, lifting weights two or three times a week, and 7–9 hours of sleep. None of these are dramatic on their own, but stacked together they quietly reset insulin sensitivity in a way no single supplement can match.",
        "You don't need to do all of this perfectly. Even one or two of these habits, repeated most days, gently quiets the system. PCOS responds to consistency far more than intensity, and 'good enough most days' beats 'perfect for two weeks then nothing.'",
        "It also helps to think in 90-day blocks rather than weekly check-ins. A new egg takes about three months to mature, so the work you do today shows up in the cycle three months from now. That lag is frustrating, but knowing it exists keeps you from giving up too early.",
        "Think of PCOS management less as a strict protocol and more as a long, kind conversation with your body — one where you learn its signals, respect its rhythms, and stop expecting it to behave like someone else's body."
      ]},
      { label: "What is PCOS?", tone: "rose", body: [
        "PCOS is a lifelong endocrine condition in which the ovaries don't release eggs as regularly as they should. It usually shows up in the late teens or twenties, but many people aren't diagnosed until much later — often after years of irregular periods being dismissed, or after coming off the birth control pill and noticing that their cycle never quite came back.",
        "Symptoms vary enormously. The most common include missed or unpredictable periods, acne (especially along the jaw and chin), oily skin, hair thinning at the temples or crown, hair growth on the face, chest, or back, weight that's hard to shift around the middle, low energy, anxiety, mood changes, and difficulty conceiving.",
        "Diagnosis follows the Rotterdam criteria: irregular ovulation, signs of high androgens (clinically or on bloodwork), and polycystic-looking ovaries on ultrasound. Two out of three is enough — which is why PCOS can be diagnosed even with normal-looking ovaries, and why polycystic ovaries on a scan don't automatically mean PCOS.",
        "There are several recognized 'types' — insulin-resistant (the most common), inflammatory, post-pill, and adrenal — and many people overlap more than one. Knowing which pattern dominates helps tailor the plan: insulin-resistant PCOS responds strongly to blood-sugar work, while adrenal PCOS responds more to stress and sleep work.",
        "PCOS is linked to higher risk of type 2 diabetes, gestational diabetes, high blood pressure, fatty liver, sleep apnea, endometrial changes from long gaps without periods, and certain mood conditions like anxiety and depression. None are guaranteed, but knowing the risks means you can stay ahead of them with regular screening rather than being caught off guard.",
        "PCOS is not your fault. It runs in families and is shaped by a mix of genetics, environment, and hormones — most of which you didn't choose. Decades of being told to 'just lose weight' have caused real harm to people with PCOS, and the science now clearly says the picture is far more complex than willpower.",
        "PCOS also doesn't mean infertility. Most people with PCOS who want children eventually have them, often with relatively simple support like cycle tracking, lifestyle changes, or ovulation-induction medication. It's a condition that needs planning, not a closed door.",
        "Naming PCOS removes a lot of shame. From there, the path forward is calmer: regular check-ins, a few core habits, the right specialists when needed, and a long view rather than a quick fix."
      ]},
      { label: "Life Changing Tips", tone: "mint", body: [
        "Start with the plate. Build meals around protein (25–35g per meal), then add fiber (vegetables, legumes, whole grains, fruit), then add healthy fats (olive oil, nuts, seeds, avocado, fatty fish). Carbs are welcome — just from whole sources, alongside the rest, rather than on their own.",
        "This one shift steadies blood sugar more than any supplement and means fewer cravings, fewer crashes, calmer skin, and over time more regular cycles. A protein-forward breakfast in particular sets the tone for the whole day's hormones.",
        "Move in ways that build muscle. Two or three short strength sessions a week — even 20–30 minutes — improve insulin sensitivity for hours afterward. Add a 10-minute walk after your largest meal to blunt blood-sugar spikes; this single habit is one of the most studied tools in PCOS care.",
        "Long, punishing cardio isn't required and can backfire by raising cortisol. Walking, strength training, yoga, pilates, and swimming are PCOS-friendly. The goal is movement you'll actually keep doing in five years, not movement that wrecks you in five weeks.",
        "Protect sleep like a prescription. Seven to nine hours, a consistent bedtime, a cool dark room, and a calm wind-down lower the cortisol that worsens PCOS. Even a single week of better sleep can noticeably reduce cravings and mood swings.",
        "Add small, repeatable stress outlets — a daily walk, breathwork, journaling, time outdoors, low-stakes hobbies. Five honest minutes a day beats one perfect hour a week. Cortisol is a real driver in PCOS, and lowering it changes how every other intervention lands.",
        "Layer in supportive supplements only after the basics: inositol (myo + d-chiro in a 40:1 ratio), vitamin D (if low), omega-3s, magnesium glycinate at night, and N-acetylcysteine have the most evidence. Talk to a clinician before stacking too many.",
        "Track your cycle. Even a simple log of period dates, mood, energy, sleep, and skin reveals patterns you'd otherwise miss — and gives any clinician far better information to work with.",
        "Be careful with the wellness internet. PCOS attracts a lot of fearmongering and expensive 'protocols.' If a plan tells you to cut out entire food groups, take 15 supplements, and never stop — be skeptical.",
        "Take the long view. PCOS rewards patience and consistency far more than intensity. The wins compound: better cycles, clearer skin, steadier energy, and a quieter relationship with your body."
      ]},
    ],
    articles: [
      {
        title: "Understanding your hormones",
        summary: "How insulin, androgens, and small lifestyle shifts shape your cycle.",
        body: [
          "PCOS is, at its heart, a conversation between three hormones: insulin, androgens (testosterone-like hormones), and the brain signals that drive ovulation. When that conversation gets noisy, periods become irregular, skin and hair change, and energy dips.",
          "Insulin is the quiet conductor. In many people with PCOS, cells respond more slowly to it, so the pancreas releases more. That extra insulin tells the ovaries to make more androgens — which is why acne, oily skin, and hair changes so often arrive together with irregular cycles.",
          "Androgens aren't villains. Everyone needs them. The issue is balance. When androgens are slightly elevated month after month, ovulation becomes inconsistent, and without ovulation the cycle loses its natural rhythm.",
          "The brain matters too. The hypothalamus and pituitary send the signals (LH and FSH) that tell the ovaries what to do. In PCOS, the LH-to-FSH ratio is often skewed, which makes follicles start to develop but rarely finish — hence the 'polycystic' look on ultrasound.",
          "The good news: this whole loop is sensitive to daily inputs. Steady protein at meals, walks after eating, strength training, sleep, and stress care directly lower insulin and quiet androgens. Many people see cycles improve within 2–3 months.",
          "Medication can help where lifestyle isn't enough — metformin for insulin, inositol for both insulin and ovulation, the pill or progesterone for cycle regulation, and spironolactone for androgen-related skin and hair symptoms. Used together with daily basics, they work better than either alone.",
          "Understanding your hormones turns PCOS from a mystery into a system you can work with. You don't need to fix everything at once — you need a few small, repeatable changes that calm the loop."
        ]
      },
      {
        title: "Eating for steady energy",
        summary: "Pair carbs with protein and fiber to reduce cravings and breakouts.",
        body: [
          "Energy crashes, sugar cravings, and afternoon brain fog are some of the most common day-to-day struggles in PCOS. Almost always, they trace back to one thing: blood sugar swings.",
          "When you eat carbs alone — toast, biscuits, juice, sweetened coffee — blood sugar rises quickly and falls just as fast. The crash brings hunger, irritability, and another craving for something sweet. Repeated daily, this pattern keeps insulin elevated and PCOS symptoms loud.",
          "The fix is simple and doesn't require giving up carbs. Pair every carb with protein and fiber. Toast becomes toast + eggs + tomato. Fruit becomes fruit + Greek yogurt + nuts. Rice becomes rice + dal + a vegetable side. The carb still comes in, but it arrives with brakes.",
          "Aim for 25–35g of protein at each main meal. That's roughly two eggs plus a cup of yogurt at breakfast, a palm of paneer/chicken/fish/tofu at lunch and dinner. Most women undereat protein and overestimate how much they're getting.",
          "Fiber is the second pillar. Vegetables, fruit (whole, not juiced), beans, lentils, and whole grains slow digestion, feed your gut, and help your body clear used hormones. 25–30g a day is a good target.",
          "Fats are not the enemy. Olive oil, nuts, seeds, avocado, and fatty fish support hormone production and keep meals satisfying enough that you actually stay full.",
          "A 10-minute walk after your biggest meal of the day is one of the most effective free tools for PCOS. Muscles soak up glucose during gentle movement, blunting the post-meal spike.",
          "Steady eating beats perfect eating. Three balanced meals, eaten without rushing, do more for PCOS than any restrictive plan."
        ]
      },
      {
        title: "Movement that loves you back",
        summary: "Strength training 2–3x/week beats long cardio for insulin sensitivity.",
        body: [
          "For years, women with PCOS were told to do more cardio, eat less, and 'just lose weight.' That advice has aged badly. Long, intense cardio can raise cortisol, drive cravings, and worsen the very hormonal patterns it was meant to help.",
          "Strength training is the more effective tool for most people with PCOS. Two or three sessions a week — even 20–30 minutes with bodyweight, dumbbells, or resistance bands — improves insulin sensitivity for up to 48 hours afterward. That means lower insulin, lower androgens, and a calmer cycle.",
          "Building muscle also raises your resting metabolic rate, supports bone density, and changes body composition even when the scale doesn't move. Many people feel better, look stronger, and have more energy long before any weight changes.",
          "You don't need a gym to start. Squats, lunges, push-ups (knee or full), rows with a band, and a basic plank cover most of the body. Three rounds of 8–12 reps, three days a week, is a powerful starting point.",
          "Pair strength with daily walking. Aim for movement most days — a morning walk, post-meal strolls, taking stairs. Steps don't replace strength, but they multiply its effects.",
          "Yoga, swimming, dancing, and gentle hikes are wonderful additions for stress, mobility, and joy. The best workout is the one you'll come back to next week.",
          "If you've been pushing hard with little progress, the answer is usually less, not more — fewer punishing sessions, more strength, more rest, more sleep. PCOS responds to consistency, not intensity."
        ]
      },
      {
        title: "Sleep, stress and your cycle",
        summary: "A consistent wind-down can be as powerful as supplements.",
        body: [
          "Sleep is the most underrated PCOS treatment. A single short night raises cortisol the next day, which raises insulin, which nudges androgens up. Repeated week after week, this drives the very symptoms most people are trying to fix with food and movement alone.",
          "Aim for 7–9 hours, on a roughly consistent schedule, in a cool, dark room. The consistency matters as much as the total — going to bed and waking at similar times trains your circadian rhythm, which steadies hormones across the cycle.",
          "A simple wind-down routine helps more than any supplement. Dim the lights an hour before bed. Put the phone down 30 minutes earlier. Try a warm shower, light stretching, or reading. Caffeine after 2 p.m. and alcohol close to bed both quietly disrupt sleep quality even if you 'sleep through.'",
          "Stress is the other half of the equation. Chronic stress keeps cortisol elevated, which over time disrupts ovulation, worsens PMS, fuels cravings, and makes everything else harder.",
          "You don't need a meditation practice or a retreat. Five minutes of slow breathing (4 seconds in, 6 seconds out), a daily walk outdoors, time with people who calm you, journaling, or a hobby — repeated daily — meaningfully lower stress hormones.",
          "Watch for hidden stressors: under-eating, over-exercising, doomscrolling, and saying yes when you mean no. These quietly drain capacity even when life looks 'fine.'",
          "If sleep won't come or anxiety is constant, talk to a clinician. Sleep apnea is more common in PCOS than many realize, and treating it can transform energy, mood, and cycles. Therapy and, when appropriate, medication are also legitimate parts of PCOS care."
        ]
      },
    ],
    tips: [
      "Start the day with protein within an hour of waking.",
      "Walk 10 minutes after meals to steady blood sugar.",
      "Track your cycle — even irregular ones reveal patterns.",
      "Swap refined sugar for whole fruit when cravings hit.",
      "Prioritize 7–9 hours of sleep before any new supplement.",
      "Lift weights 2–3 times a week, even short sessions count.",
      "Add ground flaxseed (1–2 tbsp/day) for hormone support.",
      "Cut back on alcohol — it worsens insulin resistance.",
      "Get a full thyroid panel if symptoms persist.",
      "Discuss inositol with a clinician familiar with PCOS.",
      "Spend 10 minutes outdoors in morning sunlight daily.",
      "Don't skip meals — it backfires for blood sugar.",
    ],
    stories: [
      {
        name: "Maya, 28",
        quote: "I stopped chasing perfect and started walking after dinner. Three months later, my period came back.",
        body: [
          "I was diagnosed with PCOS at 24, and for almost four years I tried every plan I read about online — keto, intermittent fasting, low carb, no carb, juice cleanses. Nothing held. I'd start strong on a Monday and crash by Thursday.",
          "My periods came maybe four times a year. My skin was inflamed. I was exhausted by 3 p.m. every day.",
          "What finally changed wasn't a new diet. It was a 10-minute walk after dinner. My therapist suggested it as an anxiety habit, not a PCOS one. I just kept doing it because it felt nice.",
          "After a few weeks, I noticed I wasn't reaching for sugar at 9 p.m. anymore. Then I started adding eggs to breakfast instead of skipping it. Then I joined a beginner strength class twice a week because a friend asked me to.",
          "Three months in, my period came back on its own. No medication change. I cried on the bathroom floor.",
          "The biggest lesson: I had been treating PCOS like a problem to attack. The minute I started treating my body like a partner, things actually changed."
        ]
      },
      {
        name: "Aisha, 33",
        quote: "Strength training felt scary. Now it's the one hour a week that's just for me.",
        body: [
          "I had never lifted a weight in my life. The gym felt like someone else's world. But after six years of struggling with PCOS, my doctor said one thing that stuck: 'Muscle is medicine for you.'",
          "I started at home with a 5kg dumbbell and YouTube videos. Twenty minutes, twice a week. The first month I felt stiff and slightly silly.",
          "By month three, I was sleeping deeper than I had in years. My energy across the day stopped crashing. My acne started clearing without any new product.",
          "Six months in, my fasting insulin had dropped meaningfully. My doctor was thrilled. I was just happy I felt like myself again.",
          "The gym still isn't my world — I lift at home, I take rest weeks when life is loud, I don't track macros. But those two sessions a week are sacred. They're my mental health hour as much as my PCOS treatment.",
          "If you're scared to start, start smaller than you think. A bag of rice as a weight. A YouTube beginner. Twice a week. That's it."
        ]
      },
      {
        name: "Priya, 26",
        quote: "Inositol changed my cycles. But the basics changed my life.",
        body: [
          "When I was finally diagnosed at 25, I felt both relieved and overwhelmed. I went down a supplement rabbit hole and bought eight bottles in a week.",
          "An endocrinologist gently rerouted me. She told me to start with two things: myo-inositol twice a day, and a real breakfast with protein. Everything else could wait.",
          "Within two cycles, my periods regulated for the first time in years. My acne calmed. The afternoon crashes that had defined my work day faded.",
          "Inositol got the headlines in my story, but the truth is the breakfast did just as much. I had been running on coffee and toast for years and wondering why I felt unwell.",
          "Now I'm careful about chasing the next thing. Sleep first. Food second. Movement third. Supplements as support, not the foundation. That order matters."
        ]
      },
      {
        name: "Nadia, 31",
        quote: "I learned to grieve before I could heal.",
        body: [
          "Nobody told me PCOS would be emotional. I was prepared for the medical side — the labs, the scans, the lifestyle changes. I wasn't prepared for the grief.",
          "Grief over my skin in my 20s. Over the years of being told I was 'just stressed.' Over what fertility might or might not look like for me.",
          "For a long time I tried to skip past the feelings and just 'be productive' about my health. It didn't work. The harder I pushed, the more I burned out.",
          "Therapy helped me name what I was actually carrying. Once I let myself feel it, the lifestyle changes got easier — they stopped being punishment and started being care.",
          "I still have PCOS. My cycles are still imperfect. But I'm not at war with my body anymore, and that has changed everything about how I live with this."
        ]
      },
    ],
    myths: [
      { myth: "PCOS means you can't get pregnant.", fact: "Many people with PCOS conceive — sometimes with support, often without." },
      { myth: "Losing weight cures PCOS.", fact: "PCOS is a chronic condition. Habits help symptoms; there is no single cure." },
      { myth: "Only overweight people have PCOS.", fact: "PCOS affects people of every body size." },
      { myth: "Birth control is the only treatment.", fact: "It's one tool. Diet, movement, sleep, and other meds all play meaningful roles." },
      { myth: "PCOS is rare.", fact: "It affects roughly 1 in 10 people with ovaries — one of the most common hormonal conditions." },
      { myth: "If your periods are regular, it's not PCOS.", fact: "Some people with PCOS have regular cycles. Diagnosis looks at hormones and ovaries too." },
      { myth: "PCOS goes away after menopause.", fact: "Many symptoms ease, but metabolic risks like diabetes can persist — keep up healthy habits." },
      { myth: "PCOS always means cysts on your ovaries.", fact: "The 'cysts' are actually undeveloped follicles, and not everyone with PCOS has them on imaging." },
      { myth: "A keto diet is the best for PCOS.", fact: "Many eating patterns work. Steady protein, fiber, and whole carbs matter more than any single trend." },
      { myth: "Hair growth on the face means high testosterone always.", fact: "It's a sign worth investigating but can have multiple causes; a clinician can clarify." },
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
        "Reproductive health is much more than the ability to have children. It's the overall state of your reproductive system at every stage of life — from your first period to the years long after menopause.",
        "When reproductive health is in a good place, your cycle is reasonably predictable, your periods are manageable, sex is comfortable, you can make informed choices about contraception or pregnancy, and you have access to the information and care you need at every life phase.",
        "Reproductive health is deeply connected to the rest of you. Stress, sleep, nutrition, movement, mental health, and your social environment all show up in your cycle.",
        "It also changes across your lifespan, and that's normal. Different phases need different attention.",
        "Sexual health is part of reproductive health too — pleasure, comfort, consent, contraception, STI prevention, and freedom to ask questions without shame.",
        "Reproductive health lives inside relationships and communities. Being able to talk openly with a partner, friend, or doctor changes outcomes.",
        "It's something you're allowed to invest in actively. You don't have to wait for symptoms to get serious."
      ]},
      { label: "Reproductive Health Made Simple", tone: "blue", body: [
        "Your menstrual cycle is run by a feedback loop between your brain and ovaries. Estrogen and progesterone rise and fall in a predictable pattern across roughly 21–35 days.",
        "There are four broad phases: menstrual, follicular, ovulation, and luteal. Each has a different feel.",
        "When the loop runs smoothly, periods come roughly monthly, last 3–7 days, and don't derail your life.",
        "Severe pain, very heavy bleeding, bleeding between periods, or cycles that disappear for months are signals worth checking — not signals to push through.",
        "Track what's normal for you, support the basics, and speak up early when something shifts.",
        "A basic cycle log turns vague experience into useful information.",
        "Cycles can shift with stress, illness, travel, intense exercise, weight changes, breastfeeding, and big life events."
      ]},
      { label: "Understanding Reproductive Health", tone: "rose", body: [
        "Reproductive health spans a lifetime, and each chapter brings its own questions.",
        "What worked at 22 may not fit at 38, and that's by design.",
        "Several common conditions can quietly shape reproductive health for years before they're named — PCOS, endometriosis, fibroids, thyroid disorders.",
        "Persistent pain, very heavy bleeding, missed periods, painful sex, or trouble conceiving are reasons to ask for a workup.",
        "Mental health and reproductive health are deeply linked.",
        "Sexual health belongs in this picture too.",
        "A simple cycle log, a yearly check-up, and an honest clinician can shorten years of guessing."
      ]},
      { label: "Boost Your Reproductive Health", tone: "mint", body: [
        "Eat for hormones — steady protein, fiber, healthy fats. Aim for 25–30g of fiber daily.",
        "Move daily, lift weekly. Work with your cycle, not against it.",
        "Sleep is one of the most underrated reproductive health tools.",
        "Manage stress in small daily ways.",
        "Limit heavy alcohol, smoking, and chronically skipped meals.",
        "See your reproductive health as something to invest in across decades.",
        "Most issues respond — at least partly — to these basics."
      ]},
    ],
    articles: [
      {
        title: "Your cycle, decoded",
        summary: "A healthy cycle is a vital sign — what length, flow, and symptoms reveal.",
        body: [
          "Doctors increasingly describe the menstrual cycle as a 'fifth vital sign' — alongside heart rate, blood pressure, breathing, and temperature. The way your cycle behaves over months tells a clear story about your hormones, nutrition, stress, and overall health.",
          "A typical cycle is anywhere from 21 to 35 days, with bleeding lasting 3–7 days. Anything consistently outside that range — or sudden changes from your own normal — is worth paying attention to.",
          "The first half of your cycle, the follicular phase, is dominated by rising estrogen. Energy often climbs. Skin can look brighter. Confidence and social bandwidth tend to rise.",
          "Ovulation, somewhere mid-cycle, is the main event. An egg is released. Cervical mucus turns clear and stretchy. Some people feel a small twinge on one side. It's also the most fertile window.",
          "After ovulation, progesterone rises in the luteal phase. The body prepares for possible pregnancy. Many people feel more inward, hungrier, and a bit slower. PMS symptoms — bloating, mood shifts, breast tenderness — tend to cluster here.",
          "If pregnancy doesn't occur, hormones drop and the cycle restarts with a period. Mild cramps and tiredness on the first day or two are common. Heavy bleeding that soaks through protection in under two hours, large clots, or pain that stops your day are not normal.",
          "Tracking your cycle for even three months — start date, flow, pain, mood, standout symptoms — gives you and your clinician something concrete to work with. Apps work, but a notes file works just as well. The pattern matters more than the format."
        ]
      },
      {
        title: "Everyday hormone helpers",
        summary: "Fiber, leafy greens, and steady sleep do more than most trending supplements.",
        body: [
          "Hormone balance is a daily project, not a one-time fix. The most powerful tools are quietly unsexy — fiber, sleep, vegetables, hydration, and rest. They don't sell well on social media, but they outperform most supplements.",
          "Fiber is the unsung hero of hormone health. Your liver processes used estrogen and sends it to the gut for removal. Fiber binds to it and ushers it out. Without enough fiber, that estrogen can be reabsorbed, contributing to PMS, breast tenderness, and heavier periods.",
          "Aim for 25–30 grams of fiber a day from a mix of vegetables, fruit, beans, lentils, and whole grains. Cruciferous vegetables — broccoli, cauliflower, cabbage, Brussels sprouts — also support estrogen metabolism specifically.",
          "Protein supports the building blocks of every hormone in your body. 25–35g per main meal protects muscle, hair, mood, and cycle regularity.",
          "Healthy fats — olive oil, nuts, seeds, avocado, fatty fish — are essential. Hormones are literally built from cholesterol and fats. Low-fat diets often quietly disrupt cycles.",
          "Sleep regulates the hormones that regulate everything else. Seven to nine hours, on a consistent schedule, in a cool dark room is non-negotiable maintenance.",
          "Hydration matters more than people realize — most adults need 2–3 liters of fluid a day. Headaches, fatigue, and dry skin are often signs of being under-hydrated.",
          "These daily inputs aren't glamorous. But repeated week after week, they outperform almost any pill."
        ]
      },
      {
        title: "When to see a clinician",
        summary: "Persistent pain, heavy bleeding, or missed periods deserve a real conversation.",
        body: [
          "One of the most common stories in women's health is waiting too long. Pain, heavy bleeding, missed periods, painful sex — all of it gets normalized as 'just part of being a woman.' It isn't.",
          "Period pain that stops your day, pain that pain medication doesn't touch, or pain outside your period entirely is worth investigating. It can be a sign of endometriosis, adenomyosis, fibroids, or pelvic floor dysfunction — all of which respond to treatment.",
          "Heavy bleeding — soaking through pads or tampons in under two hours, periods longer than seven days, large clots, or bleeding that leaves you exhausted or anemic — is a medical conversation, not a personality trait.",
          "Missed periods (more than three months without one when you're not pregnant or breastfeeding), bleeding between periods, bleeding after sex, or any bleeding after menopause should always be checked.",
          "Painful sex (dyspareunia) is more common than people realize and almost always treatable. Causes range from dryness to infections to pelvic floor tension to endometriosis. None of them mean something is wrong with you.",
          "Recurrent UTIs or yeast infections more than three times a year deserve a closer look rather than another round of the same treatment.",
          "Trouble conceiving — six months of trying after 35, twelve months under 35 — is the cue to seek a workup, not to wait another year.",
          "When you go, bring specifics. Cycle length, flow, pain location and timing, what helps, what worsens, what you've already tried. The clearer your picture, the faster the path to relief."
        ]
      },
      {
        title: "Sex, intimacy and your body",
        summary: "Pleasure and comfort are part of reproductive health — at every age.",
        body: [
          "Sexual health is part of reproductive health, full stop. It includes pleasure, comfort, consent, contraception, STI prevention, and the freedom to ask questions without shame.",
          "Desire ebbs and flows. Stress, sleep, hormones, relationship dynamics, body image, medications, and life stage all influence it. A drop in desire isn't a failure — it's a signal worth understanding rather than ignoring.",
          "Pain during sex is never something to push through. Causes range from vaginal dryness, infections, and pelvic floor tension to endometriosis, vaginismus, and hormonal shifts in perimenopause and postpartum. All are treatable.",
          "Lubrication shifts across your cycle, with stress, with hydration, and dramatically in perimenopause and postpartum. Lubricant isn't a sign that something is broken — it's a tool. Vaginal moisturizers and, when appropriate, low-dose vaginal estrogen are also legitimate options.",
          "Contraception choices are deeply personal and not one-size-fits-all. Hormonal IUDs, copper IUDs, the pill, the patch, implants, condoms, and natural cycle tracking each have trade-offs. A clinician you trust can help you weigh them rather than push one.",
          "Talk openly with a partner about what feels good, what doesn't, and what you'd like to try. Most relationship sex challenges are communication challenges in disguise.",
          "If something feels off — pain, low desire that's distressing, dryness, fear — bring it up with a clinician. Sexual health is health, and there are real, practical solutions for almost everything."
        ]
      },
    ],
    tips: [
      "Aim for 25–30g of fiber a day to support estrogen clearance.",
      "Limit alcohol around your luteal phase if PMS hits hard.",
      "Track flow and pain — it makes doctor visits 10x more useful.",
      "Pelvic floor exercises help more than just postpartum recovery.",
      "Add cruciferous vegetables (broccoli, cabbage) several times a week.",
      "Get an annual hormone and thyroid check after 30.",
      "Stay hydrated — 2–3 liters of fluid a day.",
      "Pee after sex to reduce UTI risk.",
      "Don't ignore bleeding between periods — get it checked.",
      "Consider a magnesium supplement for PMS cramps.",
      "Sleep 7–9 hours; it stabilizes the cycle hormones.",
      "Use lubricant freely — it's a tool, not a flaw.",
    ],
    stories: [
      {
        name: "Lina, 31",
        quote: "Tracking my cycle made me feel less broken and more informed.",
        body: [
          "I spent most of my twenties thinking my body was unpredictable in a way no one else's was. PMS that wrecked me. Random skin breakouts. Energy that swung wildly week to week.",
          "A friend gave me a simple suggestion: write down three things every day for a few months — date, mood, anything notable. No app, no system. Just a notes file.",
          "After two months, the patterns were unmistakable. My low moods clustered the week before my period. My best workouts were in the days after it. My skin flared mid-cycle.",
          "I wasn't unpredictable. I was cyclical. And I had been treating my body like a flat line when it had a clear shape.",
          "Now I plan harder conversations after my period. I rest more in the luteal week. I stopped feeling guilty for having less energy on certain days.",
          "Tracking didn't change my hormones. It changed my relationship with them."
        ]
      },
      {
        name: "Priya, 26",
        quote: "Talking openly with my sister was the start of taking my health seriously.",
        body: [
          "We were raised in a family where periods were whispered about. I had no language for what was normal, what wasn't, or who to ask.",
          "When I was 24, I told my older sister, almost as a joke, how bad my cramps had become. She didn't laugh. She said: 'That's not normal, and you're allowed to ask for help.'",
          "She came with me to my first gynecologist appointment. We made a list of questions in the car. I said things out loud I had never said.",
          "It turned out to be a fixable hormonal imbalance. But more than the diagnosis, that conversation changed my life. It told me my body's experience deserved language and care.",
          "I now talk to my younger cousins openly. I refuse to pass on the silence."
        ]
      },
      {
        name: "Sara, 29",
        quote: "Pelvic floor physiotherapy changed everything I thought I knew about my body.",
        body: [
          "I had no idea pelvic floor physio existed until my GP mentioned it for ongoing pain. I had imagined kegels and that was about it.",
          "My first session was eye-opening — and a little awkward, in the best way. The therapist treated my pelvic floor like any other muscle group: too tight, too weak, uncoordinated.",
          "Within six sessions, pain I had carried for two years was meaningfully better. Sex became comfortable again. I felt more in my body than I had in a long time.",
          "I tell every woman I know now: pelvic floor physiotherapists are not just for postpartum. They're for pain, for incontinence, for sexual discomfort, for general strength. They're part of complete reproductive care."
        ]
      },
      {
        name: "Tara, 34",
        quote: "I asked for a second opinion. It changed my life.",
        body: [
          "For three years, I was told my heavy bleeding was 'just bad luck' and to take iron. The iron didn't help. I was tired all the time and managing my life around my period.",
          "A friend pushed me to see a different gynecologist. Within one appointment and an ultrasound, fibroids were found.",
          "I had a minimally invasive procedure. My bleeding normalized. My energy came back within months.",
          "I'm not angry at the first doctor. I'm angry at how easily I had accepted being dismissed. Trusting my own gut and asking for another opinion changed the next decade of my life.",
          "If something keeps not feeling right, get another voice in the room. That's not being difficult. That's being your own advocate."
        ]
      },
    ],
    myths: [
      { myth: "Period pain is just normal.", fact: "Mild cramps are common. Pain that stops your day isn't normal — get it checked." },
      { myth: "You can't get pregnant during your period.", fact: "It's less likely, but possible. Sperm can survive up to 5 days." },
      { myth: "Birth control ruins your fertility.", fact: "Most people return to baseline fertility within months of stopping." },
      { myth: "Discharge means something is wrong.", fact: "Healthy discharge changes through your cycle — color, texture, and amount all vary normally." },
      { myth: "You only need a Pap smear if you're sexually active.", fact: "Guidelines depend on age and history — talk to your clinician, don't assume." },
      { myth: "Irregular periods are always a problem.", fact: "Stress, travel, illness, and life stages can shift cycles. Persistent changes deserve a check-up." },
      { myth: "Douching keeps you cleaner.", fact: "It disrupts the vagina's natural balance and increases infection risk. Water on the outside is enough." },
      { myth: "Tampons can get lost inside you.", fact: "Anatomy makes that impossible — but always remove the previous one before inserting another." },
      { myth: "Heavy bleeding is just genetic — nothing to do.", fact: "Many causes are highly treatable, from hormonal options to minor procedures." },
      { myth: "You only need a gynecologist if something is wrong.", fact: "Annual or biennial check-ins prevent problems and catch them early." },
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
        "Women's bodies face a unique mix of medical conditions, many of which can show up at any age — endometriosis, fibroids, adenomyosis, PCOS, thyroid disorders, autoimmune diseases, migraines, anemia, recurrent UTIs, and pelvic floor disorders.",
        "These conditions often overlap and are frequently missed. Symptoms get blamed on stress when there's an identifiable, treatable condition underneath.",
        "Early recognition shortens suffering. The longer a condition goes unnamed, the more it can shape daily life.",
        "A good symptom journal turns vague experience into something a clinician can act on.",
        "You're not expected to diagnose yourself. You are expected to be the expert on your own body.",
        "Don't be afraid to seek a second opinion.",
        "Having a chronic condition does not mean giving up on a full life."
      ]},
      { label: "Understanding Women's Health", tone: "blue", body: [
        "For most of medical history, research was conducted on male bodies. Women were often excluded from clinical trials until the 1990s.",
        "Heart attacks in women often present as fatigue, jaw pain, nausea, or back pain rather than classic chest pain.",
        "Pain is taken less seriously in women, on average. Knowing this isn't about blame — it's about preparation.",
        "Asking 'what else could this be?' is one of the most useful questions in medicine.",
        "Bring a friend or partner to appointments — both for emotional support and an extra set of ears.",
        "Hormonal context matters at every age.",
        "Women's health is not niche health. It's half the population."
      ]},
      { label: "Common Reproductive Health Concerns", tone: "rose", body: [
        "Common concerns include painful periods, heavy bleeding, irregular cycles, fibroids, endometriosis, adenomyosis, ovarian cysts, PCOS, recurrent UTIs, and pelvic floor dysfunction.",
        "Severe period pain is one of the most common signs of endometriosis or adenomyosis.",
        "Heavy periods can lead to anemia and exhaustion. Fibroids and thyroid issues are common causes.",
        "Bleeding between periods, after sex, or after menopause is always worth checking.",
        "Pain with sex is more common than people realize and almost always treatable.",
        "Recurrent UTIs and yeast infections often respond to simple changes.",
        "Bring specifics to appointments to shorten the path to relief."
      ]},
      { label: "Tips to Improve Health", tone: "mint", body: [
        "Lay the foundations: consistent sleep, hydration, regular meals, and daily movement.",
        "Get basic labs annually: thyroid, iron, vitamin D, B12, fasting glucose and HbA1c.",
        "Track your cycle and symptoms over 3–6 months.",
        "Build a small care team you trust.",
        "Continuity of care matters — a doctor who knows your history catches more.",
        "Strength training protects bone density, hormones, and metabolic health.",
        "Manage stress as a medical issue, not a personality trait.",
        "Trust your body. Your instinct is data."
      ]},
    ],
    articles: [
      {
        title: "Endometriosis basics",
        summary: "Tissue similar to the uterine lining grows outside the uterus, often causing pain.",
        body: [
          "Endometriosis is a condition in which tissue similar to the uterine lining grows outside the uterus — on the ovaries, fallopian tubes, bowel, bladder, and elsewhere in the pelvis. It affects roughly 1 in 10 people with periods.",
          "Despite how common it is, the average diagnosis takes 7–10 years. The pain is often dismissed as 'bad periods,' and the only definitive diagnosis is laparoscopic surgery — though imaging and a careful clinical picture can strongly suggest it.",
          "Symptoms include severe period pain (often unresponsive to over-the-counter pain medication), pain at other times in the cycle, pain with sex, painful bowel movements or urination during periods, heavy bleeding, fatigue, and infertility. Not everyone has all of these.",
          "The pain is not proportional to how much endometriosis is present. Someone with mild disease can have severe pain; someone with extensive disease can have very little.",
          "Treatment is layered. Pain management (heat, NSAIDs, sometimes prescription medication), hormonal therapy (the pill, progesterone-only options, hormonal IUDs, GnRH agonists), pelvic floor physiotherapy, lifestyle changes, and surgery (laparoscopy to excise lesions) all play roles.",
          "Lifestyle alone won't 'cure' endometriosis, but anti-inflammatory eating, stress management, gentle movement, sleep, and pelvic floor work can meaningfully reduce symptoms alongside medical treatment.",
          "If you suspect endometriosis, find a clinician with specific experience — a general gynecologist may not be enough. Endometriosis specialists exist and dramatically shorten the path to relief.",
          "Most importantly: severe period pain is not your fault, not in your head, and not something to push through. There are answers and there is real care."
        ]
      },
      {
        title: "Thyroid and your mood",
        summary: "An under- or over-active thyroid can mimic depression, anxiety, and fatigue.",
        body: [
          "The thyroid is a small butterfly-shaped gland at the front of your neck, but its influence is enormous. Thyroid hormones regulate metabolism, energy, body temperature, mood, heart rate, digestion, and even cycle regularity.",
          "Thyroid disorders are far more common in women than men, especially between the ages of 30 and 60. Hypothyroidism (under-active) is the most common, but hyperthyroidism (over-active) and autoimmune conditions like Hashimoto's and Graves' are also frequent.",
          "Symptoms of hypothyroidism include fatigue, weight gain, cold intolerance, dry skin, hair thinning, constipation, low mood, brain fog, heavier or longer periods, and slower heart rate. It's often misdiagnosed as depression.",
          "Hyperthyroidism looks the opposite — anxiety, racing heart, weight loss, heat intolerance, tremor, lighter periods, and trouble sleeping. It can be misdiagnosed as panic disorder.",
          "Diagnosis is straightforward but often incomplete. Most basic tests check only TSH. A fuller picture includes free T4, free T3, and thyroid antibodies (TPO, TgAb). Ask for the full panel if symptoms persist despite 'normal' TSH.",
          "Treatment is highly effective. Hypothyroidism is usually treated with daily levothyroxine, sometimes combined with T3. Hyperthyroidism may need anti-thyroid medication, radioactive iodine, or rarely surgery.",
          "Lifestyle matters too. Adequate iodine (from iodized salt or fish), selenium (Brazil nuts, fish), zinc, iron, and vitamin D all support thyroid function. Chronic stress and severe under-eating can suppress thyroid hormones.",
          "If you've been struggling with mood, energy, or weight despite trying everything, ask for a thorough thyroid workup. The answer is often surprisingly simple."
        ]
      },
      {
        title: "UTIs: prevention over panic",
        summary: "Hydration, peeing after sex, and front-to-back wiping prevent most UTIs.",
        body: [
          "Urinary tract infections are one of the most common reasons women see a doctor. Most happen when bacteria — usually from the gut — travel up the short female urethra into the bladder.",
          "Symptoms include burning when peeing, urgency, frequency, lower abdominal pressure, and sometimes cloudy or strong-smelling urine. Blood in the urine, fever, back pain, or chills can mean the infection has reached the kidneys and needs urgent care.",
          "Prevention is largely about simple habits. Drink enough water (around 2 liters a day) so you pee regularly. Urinate after sex to flush bacteria from the urethra. Wipe front to back. Avoid holding urine for long periods.",
          "Wear breathable cotton underwear when possible. Avoid scented soaps, douches, and wipes in the genital area — they disrupt the natural microbial balance that protects you.",
          "If you get UTIs more than 2–3 times a year, ask for a workup rather than another round of antibiotics. Causes can include incomplete bladder emptying, low estrogen (especially in perimenopause and postmenopause), kidney stones, or anatomical factors.",
          "For postmenopausal recurrent UTIs, low-dose vaginal estrogen is often life-changing and is safe even for many people who can't use systemic hormone therapy.",
          "Cranberry products and D-mannose have modest evidence and are reasonable to try, but they don't replace good hygiene habits or medical care when needed.",
          "Treat infections promptly — uncomplicated UTIs are usually resolved with a short course of antibiotics. Don't wait it out, and don't share leftover antibiotics."
        ]
      },
      {
        title: "Living with autoimmune conditions",
        summary: "Why women are hit harder, and how to build a sustainable life around them.",
        body: [
          "Autoimmune conditions — where the immune system mistakenly attacks the body's own tissues — affect women three times more often than men. Hashimoto's, Graves', lupus, rheumatoid arthritis, MS, type 1 diabetes, celiac, and psoriasis are among the most common.",
          "Symptoms vary widely depending on which tissue is being targeted, but many autoimmune conditions share threads: fatigue, joint or muscle pain, brain fog, skin changes, gut issues, and unpredictable flares.",
          "Diagnosis is often slow. Symptoms can be vague, blood tests can fluctuate, and one autoimmune condition can hide another. Many women see multiple specialists before getting a clear picture.",
          "Once diagnosed, the work is layered: medication (often immune-modulating), monitoring, and a lifestyle that supports rather than strains the immune system.",
          "Sleep is foundational. Chronic sleep loss measurably worsens autoimmune activity. Aim for 7–9 hours, on a consistent schedule, and treat it as part of your medical plan, not optional.",
          "Stress is similarly powerful. Chronic stress drives flares for many people. Therapy, gentle daily practices, time outdoors, and saying no to overcommitment all help meaningfully.",
          "Eating patterns vary by condition, but most autoimmune-friendly diets share principles: enough protein, plenty of vegetables, fiber, omega-3s, lower ultra-processed foods, and individual attention to specific triggers (like gluten in celiac).",
          "Build a small, expert team. A specialist for the condition itself, a primary doctor who coordinates, and ideally a mental health provider — autoimmune life is heavy, and you don't have to carry it alone. Many people live full, vivid lives with autoimmune conditions; they just live them with care."
        ]
      },
    ],
    tips: [
      "Keep a symptom journal before any specialist visit.",
      "Bring a friend or partner to appointments — two ears are better.",
      "Ask: 'What else could this be?' if you feel dismissed.",
      "Track meds and side effects in one place.",
      "Get annual labs: thyroid, iron, vitamin D, B12, glucose.",
      "Request the full thyroid panel, not just TSH.",
      "Pee after sex to reduce UTI risk.",
      "Wear cotton underwear; skip scented washes.",
      "If a doctor dismisses you, ask for a second opinion.",
      "Move daily — even 10 minutes lowers inflammation.",
      "Sleep is medicine for chronic conditions — protect 7–9 hours.",
      "Don't share antibiotics or skip a full course.",
    ],
    stories: [
      {
        name: "Sara, 35",
        quote: "Getting diagnosed with endo took 9 years. Naming it changed everything.",
        body: [
          "From my first period at 13, I was the girl who cancelled plans, missed school, and curled up on the bathroom floor. Every doctor I saw said the same thing: 'Some women just have bad periods.'",
          "By 22, I was on three different pills hoping one would work. By 27, I was managing my career around my cycle. I was constantly tired and quietly resigned.",
          "At 31, a new GP — a woman in her 40s — looked at me and said: 'I think this is endometriosis. Let's find out.' Six months later, after a laparoscopy, it was confirmed.",
          "Naming it was its own form of relief. Years of being told it was in my head dissolved in one diagnosis.",
          "Treatment is ongoing — a hormonal IUD, pelvic floor physio, anti-inflammatory eating, and regular check-ins with a specialist. I still have hard weeks. But I'm not gaslighting myself anymore.",
          "If you've been told 'it's just bad periods' for years, please get another opinion. You deserve to be believed."
        ]
      },
      {
        name: "Hana, 42",
        quote: "A thyroid panel finally explained the fog I'd carried for years.",
        body: [
          "I had been tired for as long as I could remember. Through my late twenties, I blamed work. Through my thirties, I blamed motherhood. By 40, I was struggling to remember words mid-sentence.",
          "My standard labs were always 'normal.' My TSH was at the high end of the range, but technically fine.",
          "Finally, a friend who's a doctor told me to ask for free T3, free T4, and antibodies. The antibodies came back high — Hashimoto's.",
          "Treatment didn't fix everything overnight, but within three months the fog had lifted enough that I felt like myself again. My energy returned in increments.",
          "I learned that 'normal' on a lab report doesn't always mean 'normal for you.' Asking for the fuller picture changed my life.",
          "If you've been struggling for years and being told nothing's wrong, push for a complete thyroid panel. It's a simple set of tests that explains a lot."
        ]
      },
      {
        name: "Reema, 38",
        quote: "Recurrent UTIs were my normal until vaginal estrogen ended them.",
        body: [
          "I had at least four UTIs a year for nearly a decade. Antibiotics worked, then they came back. I was told to drink more water, pee after sex, take cranberry. I did all of it.",
          "After perimenopause started in my late 30s, the UTIs got worse. A urogynecologist finally suggested low-dose vaginal estrogen.",
          "I was skeptical — and a little scared by what'd I'd read about hormones online. She walked me through the difference between low-dose vaginal estrogen and systemic HRT, and how safe it is even for many people who can't use the systemic kind.",
          "Within three months, the UTIs stopped. I haven't had one in over a year now.",
          "I tell every woman I know: if recurrent UTIs are part of your life, especially around perimenopause, ask about vaginal estrogen. It's quietly life-changing."
        ]
      },
      {
        name: "Anya, 45",
        quote: "Living with lupus taught me how to listen to my body.",
        body: [
          "I was diagnosed with lupus at 33. The first year was a blur of medications, side effects, and grief.",
          "What helped most wasn't a single treatment. It was learning to read my own warning signs — the subtle fatigue before a flare, the joint stiffness on bad-sleep weeks, the way stress sat in my body for days.",
          "I built a small toolkit. Sleep is my most important medicine. I rest before I'm exhausted, not after. I move daily, gently. I keep meals simple and steady.",
          "I also said no to a lot. Friendships that drained me. Work commitments that were too much. The version of myself who said yes to everything is gone — and I'm better for it.",
          "Lupus is still part of my life. But it doesn't run my life anymore. That shift took years and a lot of self-trust."
        ]
      },
    ],
    myths: [
      { myth: "If tests are normal, nothing is wrong.", fact: "Normal labs don't always mean normal life. Trust your body and seek second opinions." },
      { myth: "Women just feel pain more.", fact: "Pain is real and measurable. It's not a personality trait." },
      { myth: "Chronic conditions mean giving up.", fact: "Most are highly manageable with the right plan and support." },
      { myth: "You're too young for that condition.", fact: "Many conditions show up earlier than textbooks suggest — symptoms matter more than age." },
      { myth: "Heart disease is a man's problem.", fact: "It's the leading cause of death for women too — and symptoms often look different." },
      { myth: "Autoimmune diseases are rare.", fact: "They affect ~1 in 12 women, often hitting in their 20s–40s." },
      { myth: "If a doctor dismisses you, you're being dramatic.", fact: "Trust your gut. A second opinion has saved countless lives." },
      { myth: "Endometriosis only causes period pain.", fact: "It can affect bowel, bladder, sex, fertility, and energy across the whole month." },
      { myth: "Antibiotics will always fix recurrent UTIs.", fact: "Recurrent infections often need a deeper workup, not just more antibiotics." },
      { myth: "Hashimoto's is rare.", fact: "It's one of the most common causes of hypothyroidism in women." },
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
        "Food is information. Every meal sends signals to your hormones, immune system, brain, gut, and muscles.",
        "What you eat shapes how you feel within hours and how you function over decades.",
        "Women have higher demands for iron, calcium, vitamin D, B12, folate, omega-3s, and protein.",
        "Skipping these silently shows up as fatigue, hair shedding, mood dips, weak workouts, and irregular cycles.",
        "Nutrition interacts with stress, sleep, and movement.",
        "Think 'add' before 'subtract.' Adding good foods naturally crowds out the draining ones.",
        "Nutrition is meant to support your life, not control it."
      ]},
      { label: "Balanced Diet", tone: "blue", body: [
        "A balanced plate is roughly half vegetables and fruit, a quarter protein, a quarter whole carbs, plus a thumb of healthy fat.",
        "Protein is the most underrated piece for women — aim for 25–35g per meal.",
        "Carbs are not the enemy. Whole carbs fuel your brain, workouts, and hormones.",
        "Healthy fats are essential for hormones, brain, hair, skin, and vitamin absorption.",
        "Hydration matters — most adults need 2–3 liters a day.",
        "Variety matters as much as the shape.",
        "Meal timing is mostly individual — find what works for you."
      ]},
      { label: "Healthy Weight", tone: "rose", body: [
        "A healthy weight is the one your body settles at when sleep, food, movement, and stress are steady.",
        "Body weight is shaped by genetics, hormones, age, conditions, medications, sleep, and life stage.",
        "Weight is one signal, not the signal. Energy, strength, sleep, and labs tell a fuller story.",
        "Slow and supported weight change wins almost every time.",
        "Protein and strength training are the two most underrated tools.",
        "Sleep controls weight more than most diets do.",
        "Weight is not a measure of worth, discipline, or value."
      ]},
      { label: "The Role of Nutrition", tone: "mint", body: [
        "Nutrition shapes hormones, gut, brain, skin, immunity, sleep, mood, fertility, and metabolism.",
        "Hormonal health depends on steady nutrition.",
        "Gut and nutrition are inseparable — aim for 30 different plants per week.",
        "Mental health and nutrition are deeply linked.",
        "Nutrition is a powerful partner to medication and movement.",
        "Across life stages, needs shift.",
        "Start small. One steady habit changed becomes a different body over time."
      ]},
    ],
    articles: [
      {
        title: "The plate, simplified",
        summary: "Half veggies, a quarter protein, a quarter whole grains. No app required.",
        body: [
          "If nutrition advice has become overwhelming, the simplest, most effective tool is the plate. You don't need an app, a scale, or a degree in nutrition. You need a shape your eye can recognize.",
          "Picture your plate divided into rough sections. Half is vegetables and fruit — color, fiber, water, micronutrients. A quarter is protein — eggs, fish, chicken, paneer, tofu, lentils, beans. A quarter is whole carbs — rice, oats, potatoes, bread, pasta, millet. Add a thumb-sized portion of healthy fat — olive oil, nuts, seeds, avocado.",
          "This shape stabilizes blood sugar, supports muscle, keeps you full for hours, and naturally provides most of the nutrients you need. You don't have to weigh anything or count grams.",
          "Build it in any cuisine. Indian: dal, rice, sabzi, raita, salad. Mediterranean: chicken, quinoa, roasted vegetables, olive oil. Asian: tofu, brown rice, stir-fried greens. The shape adapts; the principle stays.",
          "Three plates like this a day, plus a snack or two if needed, covers most people's nutritional needs comfortably.",
          "If a meal is missing the protein piece, you'll likely feel hungry again within an hour or two. If it's missing the vegetables, you'll be lower in fiber and micronutrients than you realize over time.",
          "You don't have to do this perfectly. Most days, most meals, in this shape. That's enough."
        ]
      },
      {
        title: "Hunger isn't the enemy",
        summary: "Restriction backfires. Eating enough during the day is the most underrated tool.",
        body: [
          "One of the most common patterns in women's nutrition is undereating during the day and overeating at night. It looks disciplined; it's actually a setup for failure.",
          "When you skip breakfast, eat a tiny lunch, and 'save' calories for dinner, your blood sugar crashes by mid-afternoon, your willpower thins by evening, and the body — wisely — drives you toward fast carbs and sugar.",
          "This isn't a moral failing. It's biology. The body wants energy when it needs energy. Restriction during the day reliably triggers overeating at night.",
          "The fix is counterintuitive: eat more, earlier. A real breakfast with protein. A satisfying lunch. A balanced dinner. Snacks if you actually need them.",
          "Most women undereat protein and overestimate how much they're eating. 25–35g per main meal is a useful target — that's two eggs plus yogurt at breakfast, a palm of paneer or chicken at lunch and dinner.",
          "Eating enough protects muscle, hormones, mood, sleep, and a sustainable relationship with food.",
          "If you've been chronically undereating, your hunger and fullness signals may be muffled. They return with consistent, satisfying meals — usually within a few weeks.",
          "Hunger is a signal, not the enemy. Listen to it earlier in the day, and the cravings later in the day shrink on their own."
        ]
      },
      {
        title: "Strength is the new cardio",
        summary: "Muscle drives metabolism — two short sessions a week change everything.",
        body: [
          "For decades, women were sold cardio as the answer to everything. The result is a generation that runs more, eats less, and stays stuck in a body that doesn't change. The missing piece is muscle.",
          "Muscle is the most metabolically active tissue in the body. It burns calories at rest, uses up blood sugar, supports hormones, protects your bones, and shapes your body composition more than any diet.",
          "Two short strength sessions a week — even 20–30 minutes with bodyweight, dumbbells, or resistance bands — meaningfully change body composition over months. The scale may move slowly, but how your body looks and feels changes faster.",
          "You don't need a gym. Squats, lunges, push-ups, rows with a band, and planks cover most of the body. Three rounds of 8–12 reps, twice a week, is a powerful start.",
          "Strength training also improves insulin sensitivity for up to 48 hours per session, lowers anxiety, supports sleep, protects bone density, and reduces fall risk later in life. Few things in health science are this consistently good for you.",
          "Cardio still matters — for heart health, mood, and endurance. But it's a complement, not the foundation. Walking, dancing, swimming, hiking — gentle daily movement plus structured strength is the winning formula.",
          "If you're starting from zero, start very small. A bodyweight session at home. A YouTube beginner. A short class. Consistency beats intensity every single time."
        ]
      },
      {
        title: "Eating for hormonal health",
        summary: "Specific nutrients support cycles, energy, and mood.",
        body: [
          "Nutrition and hormones are inseparable. Hormones are built from cholesterol and proteins, regulated by blood sugar, and supported by a handful of key micronutrients. Get the foundations right and many hormonal symptoms ease.",
          "Protein is foundational. 25–35g per meal supports muscle, mood, hair, and the building blocks of hormones. Spread it across the day rather than loading dinner.",
          "Healthy fats — olive oil, nuts, seeds, avocado, fatty fish — support hormone production directly. Very low-fat diets often quietly disrupt cycles and mood.",
          "Fiber helps your body clear used estrogen. 25–30g a day from vegetables, fruit, beans, lentils, and whole grains keeps hormones moving in healthy patterns.",
          "Specific nutrients matter. Iron (often low in menstruating women) supports energy. Magnesium helps with PMS, sleep, and muscle relaxation. Zinc supports skin and ovulation. Omega-3s reduce inflammation. Vitamin D supports mood, bones, and immune function.",
          "Steady blood sugar is one of the most powerful hormonal tools. Pair carbs with protein and fat. Avoid going long stretches running on empty. Walk after meals.",
          "Limit alcohol — it raises estrogen, disrupts sleep, and worsens PMS for many.",
          "And keep food enjoyable. Stress about eating perfectly can disrupt hormones as much as actual nutritional gaps. Build a steady pattern, then enjoy your life."
        ]
      },
    ],
    tips: [
      "Eat protein at every meal — aim for a palm-sized portion.",
      "Drink water before reaching for a snack.",
      "Don't skip breakfast on workout days.",
      "Make veggies the easiest food in your fridge to grab.",
      "Sleep 7+ hours — it controls hunger hormones.",
      "Aim for 30 different plant foods per week.",
      "Cook once, eat twice — leftovers save weeknights.",
      "Limit alcohol — it disrupts sleep and hunger signals.",
      "Walk 10 minutes after your largest meal.",
      "Add fermented foods (yogurt, kimchi, kefir) for gut health.",
      "Supplement vitamin D if you're rarely outdoors.",
      "Don't drink your calories — whole fruit beats juice.",
    ],
    stories: [
      {
        name: "Ria, 29",
        quote: "I stopped counting calories and started counting protein grams. My energy doubled.",
        body: [
          "I spent most of my twenties on some version of 'eat less.' Calorie counting apps, low-fat everything, salad lunches. I was hungry constantly and convinced I was just bad at it.",
          "A nutritionist looked at my food log and said one thing: 'You're eating about 40 grams of protein a day. Try doubling it.'",
          "It felt counterintuitive. I added eggs to breakfast, a Greek yogurt as a snack, an extra portion of dal at lunch, fish or paneer at dinner.",
          "Within two weeks, my afternoon crashes were gone. My workouts felt stronger. The constant cravings I had blamed on no willpower simply quieted.",
          "My weight didn't change much in those first weeks. But my body composition slowly did. More than that, my relationship with food shifted from restriction to nourishment.",
          "Now I count protein, not calories. It's the single most useful change I've ever made."
        ]
      },
      {
        name: "Dee, 38",
        quote: "Cooking once and eating twice freed up my whole week.",
        body: [
          "I was drowning in the daily 'what's for dinner' question. Two kids, full-time work, and an impossibly long mental load. Most weeknights ended in takeout and guilt.",
          "I tried meal prepping the way Instagram showed it — five identical containers, perfectly portioned. I hated it by Wednesday.",
          "Then a friend suggested 'cook once, eat twice.' Make one big thing every other day, eat half tonight, half tomorrow. Vary the sides.",
          "It changed my week. Sunday: roast chicken + veg, half eaten that night, half shredded into a wrap on Monday. Tuesday: a big pot of dal, eaten with rice that night and over toast for breakfast Wednesday.",
          "My evenings opened up. We ate better. I stopped ordering in three nights a week.",
          "I don't meal prep elaborately. I just cook generously. That small shift saved my sanity."
        ]
      },
      {
        name: "Sana, 33",
        quote: "I gave up dieting and gained my life back.",
        body: [
          "I dieted in some form from age 15 to 30. Atkins, low-fat, low-carb, intermittent fasting, juice cleanses. Every plan ended in a binge and a heavier weight than I started.",
          "At 30, exhausted, I went to a registered dietitian — not for a plan, but for help getting off plans. She asked me what I actually liked to eat. I cried because I didn't really know anymore.",
          "We worked on the basics: regular meals, enough protein, vegetables I enjoyed, foods from my culture, no banned foods. No tracking. No rules.",
          "The first year was uncomfortable. My weight fluctuated. My head was loud. Slowly, my body found its own settling point — and it was a healthier weight than my dieting weight had ever been long-term.",
          "Three years on, I don't think about food the way I used to. I eat when hungry. I stop when full. I enjoy meals. The freedom is worth more than any number on a scale."
        ]
      },
      {
        name: "Meera, 41",
        quote: "Strength training in my 40s gave me a body I actually trust.",
        body: [
          "I had never lifted weights until I turned 40. I had run, done yoga, gone to spin classes — but lifting felt like 'not for me.'",
          "A physiotherapist told me, after a back injury, that the strongest thing I could do for my future was build muscle. So I started, reluctantly.",
          "Two sessions a week with a coach. 30 minutes each. Mostly bodyweight at first.",
          "Within three months, my back pain was gone. Within six months, I could carry my groceries up three flights without thinking about it.",
          "My body looks different now — not smaller, but stronger. My posture changed. My energy lifted. I sleep better.",
          "I tell every woman in her 40s: it is not too late. Two short sessions a week. That's all it takes to start changing the next 30 years of your life."
        ]
      },
    ],
    myths: [
      { myth: "Carbs make you gain weight.", fact: "Excess calories do — from any source. Whole carbs fuel your brain and workouts." },
      { myth: "Eating late causes weight gain.", fact: "Total daily intake matters more than timing." },
      { myth: "Detoxes clean your body.", fact: "Your liver and kidneys already do that — beautifully." },
      { myth: "Fat makes you fat.", fact: "Healthy fats support hormones, brain, and satiety. Don't fear olive oil, nuts, or avocado." },
      { myth: "Skipping meals helps you lose weight.", fact: "It often backfires — leading to overeating and slower metabolism." },
      { myth: "All calories are equal.", fact: "Quality matters. 200 calories of broccoli and 200 of soda affect your body very differently." },
      { myth: "You need supplements to be healthy.", fact: "Most nutrients are best absorbed from food. Supplement only what's measured to be low." },
      { myth: "Women shouldn't lift heavy.", fact: "Lifting heavy builds bone, muscle, and confidence. It doesn't make you 'bulky'." },
      { myth: "Snacking always sabotages weight loss.", fact: "A protein-rich snack can prevent overeating later. Quality matters more than frequency." },
      { myth: "You have to earn your food with exercise.", fact: "Food is fuel and pleasure, not punishment or reward." },
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
        "Conception happens when sperm fertilizes an egg released during ovulation, usually around mid-cycle.",
        "The fertile window is about six days long.",
        "Tracking ovulation makes timing far easier than guessing.",
        "Most healthy couples under 35 conceive within 6–12 months.",
        "Preparing for pregnancy starts well before the positive test.",
        "Get any chronic conditions reviewed before trying.",
        "Conception is also emotional, not just biological."
      ]},
      { label: "Stages of Pregnancy", tone: "blue", body: [
        "Pregnancy is divided into three trimesters of about 13 weeks each.",
        "The first trimester is when nearly all of the baby's organs form. It's often the hardest physically.",
        "The second trimester often feels like a relief — energy returns, the bump becomes visible.",
        "The third trimester is the final stretch — the baby grows rapidly, sleep gets harder.",
        "Through all three, regular prenatal care, gentle movement, hydration, protein, sleep, and mental health check-ins are key.",
        "Pregnancy is unpredictable. Plans change. That doesn't mean you're doing it wrong."
      ]},
      { label: "Prenatal Care", tone: "rose", body: [
        "Prenatal care is the regular cadence of check-ups, blood tests, and scans across pregnancy.",
        "A typical schedule has monthly visits, then every two weeks from week 28, then weekly from week 36.",
        "Each visit includes weight, blood pressure, urine, fundal height, and baby's heartbeat.",
        "Bring questions to every visit, even small ones.",
        "Build your team thoughtfully.",
        "Know the warning signs that need immediate attention.",
        "If something feels off between visits, call."
      ]},
      { label: "Postpartum Depression", tone: "mint", body: [
        "PPD is much more than baby blues — it lingers, deepens, and doesn't fade on its own.",
        "It shows up as persistent sadness, anxiety, hopelessness, intrusive thoughts, trouble bonding, and sleep issues.",
        "It is a medical condition, not a parenting failure.",
        "Postpartum anxiety, OCD, PTSD, and rarely psychosis are also part of this picture.",
        "PPD is one of the most treatable mental health conditions.",
        "Telling a clinician — even with one sentence — opens the door.",
        "Reach out urgently if you're having thoughts of harming yourself or the baby."
      ]},
    ],
    articles: [
      {
        title: "The first trimester, honestly",
        summary: "Fatigue and nausea are real work. Rest is productive. Snacks are medicine.",
        body: [
          "The first trimester is famously the hardest for most people, and the least visible. You haven't told most of the world. Your body looks the same. But internally, your hormones are doing astonishing work — and it costs energy.",
          "Fatigue can be crushing. It's not laziness. Your body is building a placenta, growing a tiny human's organs, and adapting nearly every system to support the pregnancy.",
          "Nausea — so-called 'morning sickness' — can hit any time of day. For some, it's a few weeks of mild queasiness. For others, it's months of debilitating sickness that affects work, relationships, and quality of life. Severe nausea (hyperemesis gravidarum) deserves medical care, not dismissal.",
          "What helps: small frequent meals, foods you can keep down (often bland, cold, salty, or carb-based), staying hydrated in tiny sips, lemon and ginger, vitamin B6, prescription anti-nausea medication when needed. Don't suffer silently — there are real options.",
          "Emotionally, the first trimester is a strange mix. Excitement, fear, grief for life-as-it-was, hope, anxiety about miscarriage. All of these can coexist. None of them mean you're a bad parent-to-be.",
          "Take your prenatal vitamin daily, especially folic acid (400–800 mcg), iodine, and DHA. Avoid alcohol, smoking, raw fish, unpasteurized cheese, and limit caffeine.",
          "Rest is doing real work. Sleep when you can. Say no to what you can. Ask for help where possible.",
          "And remember: this trimester is temporary. Many people feel dramatically better by week 14–16. You're not broken — you're growing a human."
        ]
      },
      {
        title: "Building your birth team",
        summary: "Knowing who does what reduces stress on the day.",
        body: [
          "Birth is a team sport, even if you're the one doing the work. The team you build can dramatically shape your experience — physically, emotionally, and after.",
          "Start with your medical lead. That's typically an obstetrician (OB) or a midwife, depending on your country, your risk factors, and your preferences. Both can be excellent. The right choice depends on what you want from your care.",
          "A doula is a non-medical birth companion who supports you emotionally, physically, and informationally throughout pregnancy and birth. Research consistently shows that doula support is linked to shorter labors, fewer interventions, and higher satisfaction with the birth experience.",
          "A partner — romantic, family, or friend — is part of the team too. They benefit enormously from being part of prenatal classes and discussions, not just along for the ride. Their role on the day matters.",
          "Other people who can support you: a lactation consultant (book one before birth, not after), a pelvic floor physiotherapist (essential postpartum, regardless of how you give birth), a postpartum doula, a therapist who specializes in perinatal mental health.",
          "Your wider support — family, friends, community — also belongs in this picture. Who can bring food in the first weeks? Who can hold the baby while you shower? Who will check in honestly?",
          "Discuss preferences with your team in advance. A birth plan isn't a guarantee — it's a conversation starter. What matters most to you? Movement during labor? Pain management options? Who you want in the room?",
          "And accept that birth, like life, can change quickly. The best preparation is a flexible plan, a team that knows you, and trust in your own ability to make decisions in the moment."
        ]
      },
      {
        title: "Postpartum is a fourth trimester",
        summary: "Healing takes months, not weeks. Asking for help is part of the plan.",
        body: [
          "The first three months after birth are sometimes called the 'fourth trimester.' It's an apt name. The baby is adjusting to life outside the womb. The birthing parent is healing physically, recalibrating hormonally, and being remade emotionally.",
          "Recovery from birth — vaginal or cesarean — takes months, not weeks. Tissue healing takes 6–8 weeks at minimum. Pelvic floor recovery often takes 6–12 months. Hormonal rebalancing takes its own time, especially while breastfeeding.",
          "Sleep deprivation is the dominant feature for most. Newborns wake every 2–3 hours around the clock. That's not a phase you push through — it's a survival situation. Take help where you can. Sleep when the baby sleeps, even badly, even briefly.",
          "Postpartum mental health is its own arena. Up to 80% experience baby blues — tearful, overwhelmed feelings that lift in two weeks. Postpartum depression, anxiety, OCD, and PTSD are different — they linger, deepen, and need professional support. They are common and very treatable.",
          "Physical care often gets neglected. Eat enough — undereating in postpartum is a fast track to milk supply issues, mood crashes, and exhaustion. Hydrate, especially when breastfeeding. Take your postnatal vitamin.",
          "Pelvic floor physiotherapy is for everyone postpartum, not just for complications. A good physio assesses healing, addresses incontinence, prolapse, and diastasis recti, and helps you safely return to movement.",
          "Ask for help — practically and emotionally. Meals brought over. A friend who holds the baby while you shower. A partner who genuinely shares the load. A therapist who normalizes what you're feeling.",
          "And lower the bar. The goal in the fourth trimester is not to bounce back. It's to recover, to bond, and to slowly find your footing in a body and life that have permanently changed."
        ]
      },
      {
        title: "Feeding your baby — and yourself",
        summary: "Breast, bottle, or both — what matters most is a fed baby and a supported parent.",
        body: [
          "Few topics carry more guilt and pressure in early parenthood than feeding. The truth is simpler than the noise: a fed baby is the goal, and a supported parent is what makes it sustainable.",
          "Breastfeeding has many benefits, but it's also a learned skill, not an automatic one. Latching, supply, positioning, and pain all take time and often professional help. A lactation consultant in the first week can prevent weeks of struggle.",
          "Common challenges include sore nipples, low or oversupply, mastitis, blocked ducts, tongue tie, and reflux. Most are solvable with good support. Suffering through pain is not noble — it's a sign to ask for help.",
          "Pumping and bottle-feeding breastmilk is breastfeeding. Combination feeding is breastfeeding. Exclusive formula feeding is feeding. None of these make you a better or worse parent.",
          "If breastfeeding isn't working — for medical, mental health, supply, or any other reason — formula is a healthy, complete option. The pressure to push through at the cost of your wellbeing is misplaced.",
          "Your own nutrition matters enormously postpartum, especially while breastfeeding. You need 400–500 extra calories a day, plenty of protein, healthy fats, fluid, and continued prenatal-style supplementation.",
          "Hydration is non-negotiable for milk supply. Keep a water bottle wherever you feed.",
          "Mental health and feeding are tied. Sleep deprivation, hormonal shifts, and feeding pressure can fuel postpartum depression and anxiety. If feeding is dominating your mental health, that's a sign to get support — both for feeding itself and for how you're doing as a person."
        ]
      },
    ],
    tips: [
      "Drink water like it's your job — every trimester.",
      "Walk daily if your provider okays it; even 10 minutes counts.",
      "Prep freezer meals in the third trimester.",
      "Sleep when the baby sleeps, even badly, even briefly.",
      "Pelvic floor PT after birth is for everyone, not just complications.",
      "Take folic acid (400–800 mcg) before and through pregnancy.",
      "Book a lactation consultant in the first week, not the third.",
      "Don't compare your bump to anyone else's.",
      "Eat protein at every meal in pregnancy and postpartum.",
      "Tell your provider about mood — even one sentence.",
      "Accept help. Meals, holding the baby, school runs.",
      "Limit caffeine to 200mg/day in pregnancy.",
    ],
    stories: [
      {
        name: "Noor, 30",
        quote: "Telling my partner exactly what I needed was harder than labor itself — and worth it.",
        body: [
          "I had a beautiful labor and a brutal first month postpartum. The shift from 'us' to 'us with a tiny boss' was harder than anything I had read about prepared me for.",
          "I assumed my partner would just know what I needed. He's a thoughtful person. Surely he'd see I was drowning?",
          "He didn't. He was drowning too, in his own way. Both of us were silently waiting for the other to notice.",
          "At about week three, I sat down and made a list. Specific things. 'I need you to do the night feed at 2 a.m. on Tuesdays and Thursdays.' 'I need 30 minutes alone in the morning.' 'I need you to ask how I'm doing without me having to bring it up.'",
          "It felt awkward and almost rude. He cried. He said: 'Thank you. I had no idea.'",
          "We're still figuring out parenting. But asking specifically — over and over — has been the single biggest thing that's saved our marriage and my sanity."
        ]
      },
      {
        name: "Fara, 34",
        quote: "Therapy at 6 weeks postpartum saved my mental health.",
        body: [
          "I had been so prepared for the physical recovery. I had not prepared for the way my brain would feel.",
          "Around four weeks postpartum, I started having intrusive thoughts that scared me. I couldn't sleep even when the baby slept. I cried daily. I told no one.",
          "At my six-week check, the midwife asked me a direct question: 'How are you, really?' I started sobbing and couldn't stop.",
          "She referred me to a perinatal mental health therapist that same week. She also helped me start a low-dose medication that's safe with breastfeeding.",
          "Within three weeks, the fog lifted. I could feel things again. The intrusive thoughts faded.",
          "I tell every new parent I know now: the postpartum mental health visit is not optional. Tell your provider the truth, even if it's hard. Help exists, and it works fast when you ask."
        ]
      },
      {
        name: "Anika, 32",
        quote: "Pelvic floor physio in the fourth trimester gave me my body back.",
        body: [
          "I had a vaginal birth with no major complications. I was told I'd be 'back to normal' by six weeks. At twelve weeks, I was leaking when I sneezed and felt like everything down there had shifted.",
          "I asked for a pelvic floor physio referral. The first session was eye-opening — I had pelvic floor weakness and a small diastasis recti that nobody had checked.",
          "Eight weeks of focused exercises later, the leaking was gone. My core felt like mine again. Sex was comfortable.",
          "I'm shocked this isn't standard postpartum care everywhere. It should be. Every birthing person deserves a pelvic floor assessment in the first few months.",
          "If you're postpartum at any timeline — six weeks or six years — it's not too late. Find a pelvic floor physio. It's some of the best money I've ever spent."
        ]
      },
      {
        name: "Ravi, 38",
        quote: "I didn't know dads could have postpartum depression too.",
        body: [
          "When my daughter was three months old, I was struggling. I assumed it was just exhaustion and the new role. But it kept getting worse — flat mood, irritability, no joy in things I used to love, dread when I came home.",
          "I read an article about paternal postpartum depression and recognized myself in every line. Up to 1 in 10 fathers experience it. I had no idea.",
          "I told my GP. He was kind, took it seriously, and referred me to a therapist. Talking helped. So did sleep when I could get it, and rejoining a sport I loved.",
          "I'm sharing this because nobody told me. Partners — of any gender — can struggle deeply postpartum. It doesn't make you a bad parent. It means you need support too.",
          "Don't wait it out. Talk to someone. Your family deserves a present version of you, and you deserve to feel like yourself again."
        ]
      },
    ],
    myths: [
      { myth: "You're eating for two.", fact: "You need ~300 extra calories in the second trimester, ~450 in the third." },
      { myth: "Bouncing back is the goal.", fact: "Healing is the goal. Bodies change — that's biology, not failure." },
      { myth: "Baby blues and PPD are the same.", fact: "Blues lift in 2 weeks. PPD doesn't and deserves real support." },
      { myth: "You can't exercise while pregnant.", fact: "Most people can — and should — keep moving. Talk to your provider about what fits you." },
      { myth: "Morning sickness only happens in the morning.", fact: "It can hit any time of day. The name is misleading." },
      { myth: "Breastfeeding comes naturally to everyone.", fact: "It's a learned skill. Lactation consultants exist for good reason." },
      { myth: "You can't take any medication while pregnant.", fact: "Many are safe and necessary — never stop without talking to your doctor." },
      { myth: "C-sections are the easy way out.", fact: "Major abdominal surgery is never easy. Every birth deserves respect." },
      { myth: "Only mothers get postpartum depression.", fact: "Up to 1 in 10 fathers experience it too." },
      { myth: "If you don't breastfeed, you're failing.", fact: "Fed is the goal. Formula and combination feeding are healthy choices." },
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
        "Mental health is the state of your emotional, psychological, and social well-being.",
        "Good mental health doesn't mean feeling happy all the time. It means being able to feel the full range of emotion without getting stuck.",
        "It's shaped by genetics, brain chemistry, hormones, sleep, nutrition, movement, relationships, and life circumstances.",
        "Struggling doesn't mean you're broken or weak.",
        "Naming what's happening is the first relief.",
        "Care is wide and layered — therapy, medication, movement, connection, time outdoors, sleep, and rest.",
        "Mental health care isn't just for crisis. It's for clarity, growth, and becoming more yourself."
      ]},
      { label: "Mental Health Made Simple", tone: "blue", body: [
        "Three systems shape mental health: nervous system, brain chemistry, and life context.",
        "Resilience is the ability to handle hard things and recover when you fall apart.",
        "Small daily inputs add up — morning sunlight, regular meals, gentle movement, slow breathing, screens off before bed.",
        "Big interventions like therapy and medication work better with these basics in place.",
        "Mental health is not separate from physical health — iron, thyroid, vitamin D, and hormones all matter.",
        "Sleep is the single biggest mental health lever for most people.",
        "Connection is the second biggest — even one or two reliable relationships are protective."
      ]},
      { label: "What is Mental Health?", tone: "rose", body: [
        "Mental health is the state of your emotional and psychological functioning.",
        "Common conditions include anxiety, depression, PMDD, postpartum depression, ADHD, OCD, eating disorders, bipolar, and PTSD.",
        "These are medical conditions, not character flaws.",
        "Mental health conditions often show up first as physical symptoms.",
        "Women are particularly affected by hormone-linked mental health shifts.",
        "You don't need to be in crisis to seek support.",
        "If you're struggling with thoughts of harming yourself, reach out immediately."
      ]},
      { label: "Top Tips for Good Mental Health", tone: "mint", body: [
        "Anchor your day with non-negotiables: morning light, consistent sleep, real breakfast, daily movement.",
        "Move daily, even briefly.",
        "Eat to support your brain — protein, healthy fats, B vitamins, magnesium, iron, vitamin D.",
        "Connect on purpose. Loneliness is a major mental health risk.",
        "Make rest active rather than collapsed scrolling.",
        "Build a small toolkit for hard moments.",
        "Limit doomscrolling, comparison-heavy social media, and alcohol used as coping.",
        "Therapy multiplies all of the above."
      ]},
    ],
    articles: [
      {
        title: "Anxiety isn't a character flaw",
        summary: "It's a nervous system response. Naming it shrinks it. Tools help.",
        body: [
          "Anxiety often gets framed as a personality problem — too sensitive, too anxious, too much. It isn't. Anxiety is a nervous system response that evolved to keep humans alive. The issue is when it fires too often, too long, or too loudly.",
          "When anxious, your body is doing what it was designed to do — release adrenaline and cortisol, raise heart rate, sharpen focus, prepare to fight or flee. The problem is that your nervous system can't always tell the difference between a real threat and a difficult email.",
          "Symptoms include racing thoughts, restlessness, trouble sleeping, muscle tension, gut issues, chest tightness, irritability, and difficulty focusing. These are not weakness — they're physiology.",
          "Naming it is the first step. 'I'm anxious right now' shrinks the experience because it moves it from background noise to something you can work with.",
          "Tools that work in the moment: slow exhales (4 seconds in, 6 seconds out), cold water on the face, a short walk, naming five things you can see, a brief grounding text to a person you trust. None of these are magic — but together, they reduce the intensity reliably.",
          "Tools that work over time: regular sleep, regular meals, movement, less alcohol and caffeine, time outdoors, time with people who calm you, and, when accessible, therapy.",
          "Therapy — especially CBT — is one of the most effective treatments for anxiety. Medication can be life-changing when needed and matched well. Neither is a sign of weakness; both are valid tools.",
          "If anxiety is shaping your life — limiting work, relationships, sleep, or daily function — please ask for help. There are real, well-tested treatments. You don't have to live this way."
        ]
      },
      {
        title: "Hormones and mood",
        summary: "PMDD, perimenopause, and postpartum can shift mood dramatically.",
        body: [
          "Mood and hormones are tightly connected, and women's mood can shift dramatically across the cycle, pregnancy, postpartum, and perimenopause. These shifts are biological, not weakness.",
          "PMS — premenstrual syndrome — causes mild mood and physical changes in the week before a period for most women. It's manageable.",
          "PMDD — premenstrual dysphoric disorder — is a more severe form, affecting 3–8% of women. Symptoms include severe depression, anxiety, irritability, hopelessness, and rage in the luteal phase, easing with the period. It's a recognized medical condition with effective treatments (SSRIs, hormonal options, lifestyle).",
          "Pregnancy can bring significant mood shifts. Up to 1 in 5 women experience meaningful depression or anxiety during pregnancy itself, often missed because everyone assumes pregnancy is happy.",
          "Postpartum is a particularly vulnerable window. Postpartum depression, anxiety, OCD, and PTSD all exist. Hormonal shifts after delivery, sleep deprivation, and identity change combine into real risk. All are treatable.",
          "Perimenopause — the years leading up to menopause, often starting in the late 30s or 40s — can introduce anxiety, depression, irritability, and rage that feel completely out of character. Many women describe feeling like a different person. Hormone therapy and other treatments can transform this.",
          "Across all these phases, mood symptoms are not a character flaw, not 'just hormones to push through,' and not your fault. They are biology meeting circumstance, and they respond to treatment.",
          "If your mood is shifting in ways that disrupt your life — across any cycle, life stage, or transition — talk to a clinician with experience in hormone-linked mood. Help exists, it works, and you deserve it."
        ]
      },
      {
        title: "Boundaries as self-care",
        summary: "A boundary is a sentence, not a wall. Saying no protects your yes.",
        body: [
          "Boundaries get a lot of airtime and a lot of misunderstanding. A boundary is not a wall. It's not a punishment. It's a clear sentence about what you can and can't do, what you will and won't accept, and what you need to function as your full self.",
          "Common signs you need better boundaries: chronic resentment, constant exhaustion, dread before social events, saying yes when you mean no, taking on other people's emotional regulation, and feeling like your time is everyone's but yours.",
          "Boundaries are usually small and specific, not dramatic. 'I can't talk on the phone tonight, but Sunday works.' 'I'm not available for work after 7 p.m.' 'I love you, and I can't have this conversation right now.'",
          "Communicating a boundary doesn't require an apology or a long explanation. A complete sentence is enough. People who love you may need time to adjust, but a healthy boundary doesn't damage healthy relationships.",
          "Internal boundaries matter too — with social media, with news consumption, with how much you let other people's opinions shape your day, with your own perfectionism.",
          "Boundaries are not about controlling others. They are about deciding what you will and won't do — and then following through. The boundary is in your action, not in their reaction.",
          "Setting boundaries when you've never set them feels uncomfortable, sometimes guilty, often selfish. That feeling is part of the work, not a sign you're doing something wrong.",
          "The people most worth your time will respect your boundaries. The ones who don't are giving you very useful information."
        ]
      },
      {
        title: "When to see a therapist",
        summary: "You don't need a crisis to deserve support — therapy is for clarity too.",
        body: [
          "Therapy carries old, outdated baggage — that it's only for serious mental illness, that it means something is wrong with you, that it's a sign of weakness. None of this is true.",
          "Therapy is, in its simplest form, a structured conversation with a trained professional whose entire job is to help you understand yourself and live more fully. It's a tune-up for the mind. It's also one of the most effective treatments for anxiety, depression, trauma, and many other conditions.",
          "Reasons to consider therapy include: persistent low mood, anxiety that disrupts your life, big life transitions (new job, marriage, parenthood, divorce, loss), trauma — recent or old, relationship struggles, difficulty making a decision, burnout, self-understanding, or simply feeling stuck.",
          "You also don't need a specific reason. 'I want to think more clearly about my life' is a valid reason to start therapy.",
          "There are many types. Cognitive behavioral therapy (CBT) is highly evidence-based for anxiety, depression, OCD, and many other conditions. Dialectical behavior therapy (DBT) is excellent for emotion regulation. EMDR is powerful for trauma. Psychodynamic therapy goes deeper into patterns from your history. Many therapists blend approaches.",
          "Finding the right therapist matters more than the modality. Most people find a fit within 1–3 attempts. If your first try doesn't feel right, that's normal — try someone else.",
          "Cost is real. Many countries have public mental health options, sliding-scale therapists, employee assistance programs, online platforms, and group therapy options. None of these are 'lesser' — they're access points.",
          "If you're considering therapy, that consideration is itself a meaningful step. Trust it, and find a way to start."
        ]
      },
    ],
    tips: [
      "Five slow breaths can reset a spiraling moment.",
      "Move your body daily — even a stretch counts.",
      "Limit doomscrolling before bed.",
      "Name one good thing each evening.",
      "Therapy isn't only for crisis — it's for clarity.",
      "Get morning sunlight within an hour of waking.",
      "Eat a real breakfast with protein.",
      "Phone out of the bedroom — replace with an alarm clock.",
      "Connect with one person daily, even briefly.",
      "Limit alcohol — it worsens anxiety and sleep.",
      "Check thyroid, iron, B12, and vitamin D before assuming it's 'just stress'.",
      "Keep a small toolkit for hard moments — breath, walk, text, water.",
    ],
    stories: [
      {
        name: "Tess, 27",
        quote: "Telling my GP about my anxiety was the scariest 30 seconds — and the most useful.",
        body: [
          "I had been anxious my entire adult life. I thought it was just my personality. Type A. High strung. 'A worrier,' as my mom called me.",
          "By 26, the anxiety was running my life. I couldn't sleep. I couldn't enjoy weekends. My chest was tight more often than not.",
          "Telling my GP felt impossibly hard. I rehearsed the sentence on the way there: 'I think I might have anxiety.'",
          "She listened. She didn't make it a big deal. She referred me to a therapist and offered a low-dose SSRI to consider after I'd tried therapy for a few months.",
          "Therapy alone helped enormously. I learned that anxiety wasn't who I was — it was something I had. That distinction changed everything.",
          "Six months in, I tried medication too. It was the right call. I feel like myself, but with the volume turned down. I sleep. I enjoy things again.",
          "If you've been carrying anxiety quietly for years, please ask for help. You're not weak. You're not broken. You just deserve to feel better."
        ]
      },
      {
        name: "Mira, 41",
        quote: "Perimenopause hit my mood like a truck. Knowing why made it survivable.",
        body: [
          "At 39, I started feeling like a stranger to myself. Anxious in situations that used to be easy. Snapping at my kids. Crying for no clear reason. Lying awake at 3 a.m. with my heart pounding.",
          "I thought I was having a breakdown. I went to therapy. I tried meditation. None of it touched it.",
          "It was a friend going through the same thing who said: 'Have you looked into perimenopause?' I scoffed — I was 39, far too young.",
          "I wasn't. A menopause-trained doctor confirmed I was deep in perimenopause. My estrogen was crashing in waves, which was driving the anxiety, sleep issues, and mood swings.",
          "We started low-dose hormone therapy. Within six weeks, my anxiety dropped meaningfully. I started sleeping again. I felt like myself.",
          "I'm sharing this loudly because nobody told me. Perimenopause can start in your late 30s. Mood symptoms are real, biological, and treatable. You don't have to white-knuckle through it."
        ]
      },
      {
        name: "Aman, 33",
        quote: "ADHD diagnosis at 32 reframed my entire life.",
        body: [
          "I had spent my whole life thinking I was lazy, disorganized, and just not as smart as I 'should' be. I had a successful career on paper but the cost was crushing — long hours, anxiety, constant scrambling.",
          "A friend mentioned ADHD in adult women. I rolled my eyes. I wasn't a hyperactive kid. I was a quiet, anxious, daydreaming one.",
          "I went down a research rabbit hole and recognized myself in every line. ADHD in girls and women often looks like anxiety, perfectionism, time blindness, and chronic overwhelm — not the stereotype.",
          "I got assessed. Diagnosed. Started treatment.",
          "It wasn't a magic fix, but it reframed thirty years of self-blame as untreated ADHD. I cried for a week and then started rebuilding my life with the right tools and, eventually, the right medication.",
          "If you've spent years feeling like you're working twice as hard for half the result, please consider getting assessed. ADHD in women is widely under-diagnosed and very treatable."
        ]
      },
      {
        name: "Lia, 36",
        quote: "I started taking depression seriously when my body forced me to.",
        body: [
          "I had carried low-grade depression for years and convinced myself it was normal. I worked, I parented, I went through the motions. I didn't feel anything much.",
          "Then I burned out completely. I couldn't get out of bed for a week. My body forced the conversation my mind had been avoiding.",
          "I went to my doctor, broke down in the chair, and asked for help. She set up therapy and a medication trial.",
          "It took finding the right therapist (third try) and the right medication (second try). When the right combination landed, things lifted in a way I hadn't believed was possible.",
          "Joy came back in small flickers. Then in waves. I started laughing again. Crying again. Feeling again.",
          "I tell people now: don't wait until your body forces it. If you've been low for months, please ask for help. You don't have to live in greyscale."
        ]
      },
    ],
    myths: [
      { myth: "You should be over it by now.", fact: "Healing isn't linear and has no deadline." },
      { myth: "Medication changes who you are.", fact: "Often, it lets you be more of who you are." },
      { myth: "Strong people don't need help.", fact: "Asking for help is one of the strongest things humans do." },
      { myth: "Therapy is only for serious problems.", fact: "It's a tune-up for the mind — useful at any stage of life." },
      { myth: "Anxiety means you're weak.", fact: "Anxiety is a biological response, not a character trait." },
      { myth: "Talking about depression makes it worse.", fact: "The opposite — naming it and seeking support is the first step toward feeling better." },
      { myth: "If you have a good life, you can't be depressed.", fact: "Depression isn't logical. Brain chemistry doesn't check your gratitude list." },
      { myth: "ADHD only affects hyperactive boys.", fact: "It's widely under-diagnosed in girls and women — often missed entirely." },
      { myth: "PMDD is just bad PMS.", fact: "PMDD is a recognized medical condition with severe symptoms and effective treatments." },
      { myth: "Once on antidepressants, you're on them for life.", fact: "Many people use them for a season. Tapering with a doctor is a normal part of the journey." },
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
        "Ovulation is the moment a mature egg is released from the ovary, usually 12–16 days before your next period starts.",
        "The fertile window is about six days long — the five days before ovulation and ovulation day.",
        "Sperm can survive 5 days; an egg lives 12–24 hours after release.",
        "Tracking ovulation with cervical mucus, basal body temperature, and LH strips is far more accurate than counting from day 14.",
        "Cycle length varies normally; ovulation timing varies with it.",
        "Some cycles don't ovulate at all — that's not always a problem unless it's persistent.",
        "Understanding your fertile window is power — for trying or avoiding pregnancy."
      ]},
      { label: "Fertility Made Simple", tone: "blue", body: [
        "Fertility depends on egg quality and quantity, sperm quality, fallopian tube function, hormonal balance, and uterine health.",
        "Both partners contribute roughly equally to fertility outcomes.",
        "Age is the single biggest factor in egg quantity and quality.",
        "Most healthy couples under 35 conceive within 6–12 months.",
        "Lifestyle — sleep, weight, stress, alcohol, smoking — affects both partners.",
        "Some conditions (PCOS, endometriosis, low sperm count) need targeted help.",
        "Getting tested early prevents wasted years."
      ]},
      { label: "Boost Your Fertility", tone: "rose", body: [
        "Both partners benefit from a daily multivitamin or prenatal at least 3 months before trying.",
        "Eat for fertility — protein, healthy fats, antioxidants from colorful vegetables and fruit.",
        "Limit alcohol; ideally avoid it while trying.",
        "Stop smoking — it ages eggs and damages sperm.",
        "Manage caffeine — under 200mg/day is reasonable.",
        "Move regularly but avoid excessive endurance training.",
        "Sleep is non-negotiable — short sleep affects ovulation and sperm quality."
      ]},
      { label: "When to See a Specialist", tone: "mint", body: [
        "Under 35 trying for 12 months without success: see a fertility specialist.",
        "Over 35 trying for 6 months: see a specialist sooner.",
        "Known conditions (PCOS, endometriosis, irregular cycles, previous miscarriages): get a workup at the start, not after a year.",
        "Both partners should be tested.",
        "A standard workup includes hormone panels, ovarian reserve testing, ultrasound, semen analysis, and sometimes tube imaging.",
        "Don't wait. Time matters in fertility.",
        "A specialist can shorten months of guessing into a clear plan."
      ]},
    ],
    articles: [
      {
        title: "Knowing your fertile window",
        summary: "It's roughly the 5 days before ovulation plus ovulation day.",
        body: [
          "Most people are taught they ovulate on day 14 of a 28-day cycle. That's a useful starting point but a poor truth. Ovulation timing varies between people and from cycle to cycle, and treating it as fixed leads to a lot of mistimed conception attempts.",
          "Your fertile window is the six days that include the five days before ovulation and ovulation day itself. Sperm can survive in the reproductive tract for up to five days. The egg lives 12–24 hours after release. Conception is possible across this window, with the days right before ovulation being the most likely.",
          "Three signs together identify your fertile window with high accuracy.",
          "Cervical mucus is the single most reliable signal. As you approach ovulation, mucus shifts from sticky or absent to creamy, then to clear, slippery, and stretchy — like raw egg white. This 'fertile mucus' helps sperm survive and travel. When you see it, you're in your fertile window.",
          "LH strips (urine ovulation tests) detect the surge in luteinizing hormone that triggers ovulation. A positive test usually means ovulation will happen in the next 12–36 hours.",
          "Basal body temperature (BBT) — your temperature first thing in the morning — rises by about 0.3°C after ovulation. BBT confirms ovulation has happened, but it's after the fact. Useful for tracking patterns over months, not for catching the window in real time.",
          "For most couples trying to conceive, sex every 2–3 days from a few days after your period until you confirm ovulation covers the window without obsessive timing. Couples who track and time precisely don't always conceive faster — relaxed regularity often wins.",
          "If your cycles are very irregular or you have conditions like PCOS, signs may be harder to read. A fertility-aware clinician can help you interpret your patterns."
        ]
      },
      {
        title: "Lifestyle and conception",
        summary: "Sleep, stress, and steady nutrition matter for both partners.",
        body: [
          "Fertility is a team sport, even though most lifestyle advice is aimed at the person trying to get pregnant. Both partners contribute roughly equally to outcomes, and both benefit from the same basics.",
          "Sleep is foundational. Short sleep disrupts ovulation in women and lowers sperm count and quality in men. Aim for 7–9 hours, on a consistent schedule, in a cool dark room.",
          "Nutrition matters for both. Steady protein, healthy fats, plenty of vegetables, fruit, whole grains, and limited ultra-processed foods support egg and sperm quality. Mediterranean-style eating has the strongest evidence for fertility.",
          "Specific nutrients to focus on: folate (400–800 mcg of folic acid for women, food folate for men), iron, B12, vitamin D, omega-3s, zinc (especially for sperm), CoQ10 (for both), and antioxidants.",
          "Both partners should take a daily multivitamin or prenatal at least three months before trying. Sperm and eggs both take roughly three months to mature, so changes today affect the cells available to conceive in three months.",
          "Limit alcohol — ideally avoid it while trying. Alcohol affects ovulation, hormonal balance, and sperm quality. Even modest drinking reduces fertility.",
          "Stop smoking. It ages eggs, lowers sperm count, increases miscarriage risk, and reduces success of fertility treatments. Quitting at any point helps.",
          "Manage caffeine to under 200mg a day (about one strong coffee). Limit recreational drugs. Manage chronic conditions like thyroid, diabetes, and hypertension.",
          "Stress and weight matter, but with nuance. Severe under-eating and over-exercising can disrupt ovulation. Significant excess weight can affect both partners. Moderate stress is fine — extreme chronic stress is the issue.",
          "Most importantly: don't blame yourself if conception takes time. Even with everything 'right,' conception is a chance event each month."
        ]
      },
      {
        title: "When to seek a specialist",
        summary: "Under 35 trying for 12 months, or over 35 trying for 6 — get a workup.",
        body: [
          "Many couples wait too long to seek help, hoping the next month will be 'the one.' Time matters in fertility, especially after 35. Knowing when to ask for a workup can save months or years.",
          "If you're under 35 and have been having unprotected, well-timed sex for 12 months without conceiving, see a fertility specialist. If you're over 35, that timeline shortens to 6 months. Over 40, see someone after 3 months.",
          "Don't wait the full timeline if you have known issues: PCOS, endometriosis, very irregular cycles, history of pelvic infection, previous miscarriages, known low sperm count, or a partner with a relevant medical history. Get assessed at the start.",
          "A standard fertility workup is more thorough than people expect. For the female partner: hormone panel (including AMH for ovarian reserve), thyroid, prolactin, an ultrasound, and often an HSG (an X-ray to check the fallopian tubes are open).",
          "For the male partner: semen analysis is the cornerstone, plus sometimes hormonal testing. About a third of fertility issues are male factor — testing both is essential, not optional.",
          "Don't be surprised if 'unexplained infertility' is a finding. Up to a quarter of couples have no clear cause despite a full workup. That doesn't mean nothing can be done — it just means the path forward focuses on optimizing what you can.",
          "Treatment options range from timed intercourse and ovulation induction to IUI (intrauterine insemination) to IVF (in vitro fertilization). The right path depends on your specific situation, age, and cause.",
          "Going early doesn't lock you into aggressive treatment. It just gives you information and time. The worst case is finding out earlier rather than later."
        ]
      },
      {
        title: "The emotional side of trying",
        summary: "The wait is real work — for both partners.",
        body: [
          "Trying to conceive is one of the most emotionally heavy experiences many people will go through, and it's almost completely invisible. From the outside, you look the same. Inside, every cycle is a quiet wave of hope, waiting, and grief.",
          "The two-week wait between ovulation and your next period can feel endless. Every twinge is a possible sign. Every negative test is a small loss. This is normal, and it's exhausting.",
          "Both partners often experience this differently. One may want to talk constantly. The other may withdraw. Neither is wrong. Communicating about how you're each coping — without trying to fix each other — protects the relationship.",
          "Loss is part of the journey for many. Miscarriage, chemical pregnancies, and failed cycles are common and rarely talked about. Each is a real loss, even when others minimize it. Grieve as fully as you need.",
          "Be careful with social media and social comparisons. Pregnancy announcements from friends can hit hard. It's okay to mute, unfollow, or take breaks. Protecting your peace is not bitterness.",
          "Find your people. Online communities, support groups, friends who've been through it, or a therapist who specializes in fertility can help carry the weight. You don't have to do this alone.",
          "Couples counseling is wonderful even — especially — when nothing is 'wrong.' Having a third party to navigate the emotional terrain together can keep the relationship strong through a hard chapter.",
          "Finally, give yourself permission to step back when you need to. Taking a break from trying, from tracking, from treatment — is not failure. It's wisdom. The journey is long, and you matter as much as the outcome."
        ]
      },
    ],
    tips: [
      "Track ovulation with mucus + LH strips for the clearest picture.",
      "Both partners benefit from a daily multivitamin.",
      "Limit alcohol while trying.",
      "Sex every 2–3 days through your fertile window beats perfect timing.",
      "Be kind to yourself. The wait is the hardest part.",
      "Sleep 7–9 hours a night — both partners.",
      "Take folic acid (400–800 mcg) for at least 3 months before trying.",
      "Quit smoking — it affects egg and sperm quality.",
      "Move regularly but avoid excessive endurance training.",
      "Don't wait 12 months if you have known issues — get tested early.",
      "Ask for a male partner workup too — about 1/3 of cases are male factor.",
      "Take breaks from tracking when it gets heavy.",
    ],
    stories: [
      {
        name: "Jen, 34",
        quote: "Three months of tracking taught me more than a year of guessing.",
        body: [
          "We had been 'trying' for almost a year before I started actually tracking. Like most people, I assumed I ovulated around day 14 of my cycle.",
          "After three months of cervical mucus checks and LH strips, I realized I was ovulating around day 20 most cycles. We had been mistiming sex by a week.",
          "We adjusted. I conceived two cycles later.",
          "I'm not saying tracking is the answer for everyone — fertility is more complicated than that. But the assumption that everyone ovulates on day 14 cost us months of frustration.",
          "If you're trying, please track. It's free, simple, and it might just save you a lot of waiting."
        ]
      },
      {
        name: "Sana, 37",
        quote: "IVF wasn't plan A. It became our story, and we're okay with that.",
        body: [
          "We started trying at 34. After 18 months of nothing — and eventually a workup that showed both endometriosis and low ovarian reserve — we ended up at IVF.",
          "I grieved a lot in that journey. The version of conception I had imagined didn't happen. Each round of IVF was physically and emotionally heavy.",
          "Round three worked. Our daughter is two now.",
          "What I wish someone had told me earlier: don't see IVF as a failure of plan A. It's just a different route to the same place. The science is incredible. The emotional cost is real but survivable.",
          "We're considering trying again, naturally or with our remaining frozen embryos. Either way is okay with me now. The path matters less than the destination."
        ]
      },
      {
        name: "Riya, 31",
        quote: "Quitting alcohol was the change I didn't expect to make a difference.",
        body: [
          "We had been trying for eight months. I was eating well, exercising, sleeping. The one thing I hadn't changed was my evening glass of wine — sometimes two.",
          "My GP suggested cutting it out completely while trying. I rolled my eyes a bit. I drank moderately.",
          "Three months alcohol-free, my cycles regulated more clearly. My PMS eased. I conceived in the fourth month.",
          "I can't prove it was the alcohol. But the timing was striking. And honestly, my mood and sleep were better off it too.",
          "If you've been trying with no luck and are still drinking even moderately, it may be worth a real break. It's just a few months of your life."
        ]
      },
      {
        name: "Diya, 36",
        quote: "We tested early and saved ourselves a year of wondering.",
        body: [
          "I was 35 when we started trying. After only four months of nothing, I asked my GP for a workup. She gently suggested waiting until six months.",
          "I pushed back politely. I wanted to know what I was working with, not wait blindly.",
          "The workup showed I had a thyroid issue I hadn't known about, and my partner had a borderline-low sperm count.",
          "We treated both. Three months later, we conceived.",
          "If we'd waited the full year, I'd have spent that year worrying instead of treating. Don't be afraid to ask for testing earlier than the textbook says — especially over 35. Information is not impatience."
        ]
      },
    ],
    myths: [
      { myth: "Stress causes infertility.", fact: "Stress is hard but rarely the sole cause. Don't add guilt to grief." },
      { myth: "You can wait until 40 with no impact.", fact: "Egg quantity and quality decline with age — knowledge is power." },
      { myth: "Infertility is a woman's issue.", fact: "About a third of cases are male factor. Test both partners." },
      { myth: "If you already have a child, you can't have fertility issues.", fact: "Secondary infertility is real and just as worth investigating." },
      { myth: "IVF always works.", fact: "Success varies by age, cause, and clinic. Going in informed protects your heart." },
      { myth: "Just relax and it'll happen.", fact: "Well-meaning, but rarely true and often hurtful. Medical support exists for a reason." },
      { myth: "Birth control is the cause of infertility.", fact: "It usually isn't. Underlying conditions may have been masked, not caused, by it." },
      { myth: "You ovulate on day 14 of every cycle.", fact: "Ovulation timing varies between people and cycles — track yours, don't guess." },
      { myth: "Trying for 6 months and waiting another 6 is best.", fact: "Over 35, get assessed after 6 months. Over 40, after 3. Time matters." },
      { myth: "Lifestyle changes don't affect male fertility.", fact: "Sleep, alcohol, smoking, and diet meaningfully affect sperm quality." },
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
        "Perimenopause is the transition leading up to menopause, often starting in the late 30s or 40s.",
        "Hormones — especially estrogen and progesterone — fluctuate unpredictably.",
        "Common signs include irregular cycles, sleep issues, mood swings, brain fog, joint aches, weight shifts, hot flashes, and night sweats.",
        "Many people are told they're 'too young' for perimenopause when symptoms appear in their late 30s. They aren't.",
        "Perimenopause is highly treatable.",
        "Find a clinician who actually understands perimenopause.",
        "It isn't a decline — it's a transition."
      ]},
      { label: "Menopause", tone: "blue", body: [
        "Menopause is officially the day you've gone 12 full months without a period.",
        "The average age is around 51.",
        "Estrogen has receptors almost everywhere — its drop is felt almost everywhere too.",
        "Symptoms include hot flashes, night sweats, vaginal dryness, sleep changes, mood shifts, brain fog, joint pain, and skin changes.",
        "Menopause also brings longer-term changes — bone loss, cardiovascular risk, body composition.",
        "Treatment options include HRT, non-hormonal medications, vaginal estrogen, and lifestyle changes.",
        "There's no one-size-fits-all menopause plan — only the plan that fits you."
      ]},
      { label: "Postmenopause", tone: "rose", body: [
        "Postmenopause begins after that 12-month mark and lasts the rest of your life.",
        "Many disruptive symptoms ease over time. Some, like vaginal dryness, can linger and need ongoing care.",
        "Focus shifts to long-term health: bones, heart, brain, muscle, and metabolism.",
        "Strength training becomes one of the most important habits.",
        "Nutrition needs shift — more protein, calcium, vitamin D.",
        "Genitourinary symptoms are common and very treatable.",
        "Many describe postmenopause as a powerful chapter — clearer priorities, more freedom."
      ]},
      { label: "Menopause Relief", tone: "mint", body: [
        "Start with the basics — cool bedroom, less alcohol/caffeine, steady wind-down, lift weights twice a week.",
        "Eat to support this stage — steady protein, fiber, healthy fats, calcium, vitamin D.",
        "Movement matters more than ever — strength, walking, flexibility.",
        "Hormone therapy (HRT) is the most effective treatment for many symptoms.",
        "Non-hormonal options exist for those who can't use HRT.",
        "For genitourinary symptoms, vaginal estrogen is often life-changing.",
        "Build a small care team you trust."
      ]},
    ],
    articles: [
      {
        title: "Perimenopause can start in your 40s",
        summary: "Cycle changes, sleep shifts, and mood swings can begin a decade before your last period.",
        body: [
          "Perimenopause is one of the most under-recognized chapters in women's health. Most women still think menopause arrives in their 50s and that everything before that is 'normal.' For many, perimenopause actually begins in the late 30s or early 40s — a full decade before their last period.",
          "Perimenopause is the transition to menopause, when hormones — especially estrogen and progesterone — start fluctuating unpredictably. Estrogen can spike high one month and crash low the next. Progesterone tends to fall earlier and faster.",
          "These swings drive a wide and confusing range of symptoms: cycles that get shorter, longer, heavier, lighter, or skipped; new sleep issues (especially waking at 3 a.m.); mood swings, anxiety, or rage that feels out of character; brain fog; joint aches; weight settling around the middle; lower libido; and the first hot flashes.",
          "Many women are told they're 'too young' for perimenopause when symptoms start in their late 30s. They aren't. The textbook age range is wider than the textbook usually says, and being dismissed only delays helpful care.",
          "Perimenopause symptoms can come and go for years before periods stop entirely. Some women have a relatively easy transition; others have years of significant symptoms. Both are normal.",
          "It's also highly treatable. Lifestyle foundations — strength training, adequate protein, steady sleep, stress care, less alcohol — make a real difference. Hormone therapy, when appropriate, can dramatically smooth the transition. Non-hormonal medications help with specific symptoms.",
          "Find a clinician who actually understands perimenopause. A menopause-trained doctor can shorten years of trial and error into a focused plan.",
          "If symptoms in your late 30s or early 40s feel new, confusing, and out of character, perimenopause is worth considering — even if your doctor brushes it off. Knowledge is the first step to relief."
        ]
      },
      {
        title: "Hot flashes, demystified",
        summary: "Layered clothing, cool bedrooms, and reducing alcohol help. HRT is safer than headlines.",
        body: [
          "Hot flashes — sudden waves of intense heat, often with sweating and a flushed face, sometimes followed by chills — are the most stereotyped menopause symptom for a reason. Up to 80% of women experience them at some point, and for some they're brief; for others, they last a decade.",
          "Night sweats are the same phenomenon happening during sleep. They can shred sleep quality and, with it, mood, focus, and energy.",
          "Hot flashes happen because dropping estrogen disrupts the brain's temperature regulation. The body misreads small temperature changes as overheating and triggers cooling — sweating, flushing, blood vessel dilation — before quickly overcorrecting.",
          "Common triggers include alcohol, caffeine, spicy food, stress, warm rooms, hot showers, and tight clothing. Identifying your personal triggers can reduce frequency meaningfully.",
          "Practical tools that genuinely help: layered clothing, breathable fabrics (cotton, linen, bamboo), a fan at the bedside, a cool bedroom (around 18°C / 65°F), cooling pillows, and a glass of cold water by the bed.",
          "Lifestyle changes help significantly. Limiting alcohol especially in the evening, regular exercise (especially strength training), maintaining a healthy weight, stopping smoking, and stress management all reduce hot flash frequency and intensity.",
          "Hormone therapy (HRT) is by far the most effective treatment for hot flashes — typically reducing them by 75% or more. The old fears about HRT have been substantially revised. For most healthy women under 60 and within 10 years of menopause, modern HRT is safer than the headlines suggested, and the benefits often outweigh the risks.",
          "Non-hormonal options include certain antidepressants (low-dose SSRIs and SNRIs), gabapentin, fezolinetant (a newer specifically-designed option), and CBT for hot flashes. All have evidence and can be discussed with a menopause-aware clinician."
        ]
      },
      {
        title: "Strength and bones",
        summary: "Estrogen drops affect bone density. Lifting weights twice a week protects you for decades.",
        body: [
          "Estrogen has been quietly protecting your bones for decades. When it drops in menopause, bone loss accelerates significantly — up to 20% of total bone density can be lost in the first 5–7 years after menopause.",
          "This matters because osteoporosis affects 1 in 3 women over 50 and dramatically raises the risk of fractures. A hip fracture in older age can be life-altering. The good news: bone loss is largely modifiable.",
          "Strength training is one of the most powerful tools you have. Loading bones through weight-bearing and resistance exercise tells them to stay strong. Two to three sessions a week — even 30 minutes — meaningfully protects bone density over time.",
          "You don't need a gym. Bodyweight squats, lunges, push-ups, rows with a band, planks, and step-ups cover most of the body. Three rounds of 8–12 reps, twice a week, is a powerful baseline.",
          "Higher-impact movement also helps when joints allow it — walking, hiking, dancing, jogging, even jumping (for those without joint issues). Yoga and pilates are excellent for balance and flexibility, which protect against falls.",
          "Nutrition matters too. Aim for 1.2–1.6g of protein per kg of body weight. Get enough calcium (around 1200mg/day after 50, ideally from food — dairy, leafy greens, tofu, fortified plant milks, sardines). Vitamin D is essential for calcium absorption — most people benefit from a supplement, especially in winter or indoor lives.",
          "Limit alcohol — it impairs bone health and increases fracture risk. Stop smoking. Maintain a healthy weight (very low weight is also a bone risk).",
          "Get a DEXA scan around menopause to know your baseline. From there, your clinician can guide you on whether lifestyle alone is enough or whether medication (including HRT, which protects bone) is appropriate. The earlier you start, the more you protect."
        ]
      },
      {
        title: "Sleep, mood and the menopause brain",
        summary: "Hormonal shifts affect more than just hot flashes — and there are real solutions.",
        body: [
          "Brain fog. Anxiety. Sleep that disappears at 3 a.m. Mood swings that feel like someone else is driving. Word-finding difficulty mid-sentence. These are some of the most disorienting menopause symptoms — and some of the least talked about.",
          "All of them are connected to hormonal shifts. Estrogen and progesterone influence sleep architecture, mood regulation, memory, and the brain's stress response. As they fluctuate in perimenopause and drop in menopause, all of these can wobble.",
          "Sleep is often the first to go. Many women describe waking at 3 a.m. wide awake, sometimes with a racing mind. Hot flashes and night sweats break sleep further. Chronic poor sleep then amplifies everything else — mood, focus, anxiety.",
          "Mood symptoms in perimenopause and menopause are common and biologically real. Anxiety, irritability, and depression can all hit harder than at other life stages. They're not weakness; they're the brain responding to hormonal change.",
          "Brain fog and word-finding difficulties are also real. They're usually transient and often improve after menopause stabilizes, but they can be deeply unsettling while they're happening. Most women do not develop dementia from menopause brain fog.",
          "What helps: hormone therapy (HRT) is often life-changing for these symptoms, especially when started early in perimenopause. Sleep, exercise (especially strength training), nutrition, and stress care all support brain health.",
          "Mental health support matters. Therapy, particularly CBT, has strong evidence for menopausal mood and sleep symptoms. SSRIs and SNRIs at low doses can help mood and even hot flashes. Don't push through alone.",
          "Talk openly with the people around you. Menopause is not optional or shameful. The more women normalize talking about it, the better the next generation will be supported. You're not losing your mind — you're navigating one of the biggest hormonal transitions of your life."
        ]
      },
    ],
    tips: [
      "Cool the bedroom to 18°C for better sleep.",
      "Add calcium + vitamin D daily.",
      "Strength train at least twice a week.",
      "Track triggers for hot flashes — patterns appear quickly.",
      "Talk to a menopause-aware clinician, not just any GP.",
      "Layer clothing — easier to adjust with hot flashes.",
      "Limit alcohol; it worsens hot flashes and sleep.",
      "Aim for 1.2–1.6g protein per kg body weight.",
      "Get a DEXA scan around menopause for a bone baseline.",
      "Vaginal estrogen is safe for most — ask about it.",
      "Move daily; even a walk lifts mood.",
      "Don't push through — therapy and HRT can transform this stage."
    ],
    stories: [
      {
        name: "Anya, 49",
        quote: "HRT gave me back my sleep and my patience.",
        body: [
          "I had been waking at 3 a.m. for nearly two years before I figured out it was perimenopause. By day, I was anxious and short-tempered with everyone I love.",
          "I was scared of HRT — old headlines lived in my head. A menopause-trained doctor walked me through what we now know, what the risks actually are for someone my age and history, and what the benefits could be.",
          "Within four weeks of starting a low-dose patch and progesterone, I was sleeping through the night. By eight weeks, I felt like myself again. My patience came back. My focus came back.",
          "I'm not sharing this to push HRT on anyone — it's an individual decision. I'm sharing it because I almost didn't try, and it changed my life.",
          "If you've been suffering through perimenopause, please find a menopause-aware doctor and have an honest conversation. The science has moved on — make sure your care has too."
        ]
      },
      {
        name: "Bea, 54",
        quote: "Lifting weights at 50 was the best decision of my decade.",
        body: [
          "I had been a runner my whole adult life. After menopause, my joints started complaining, my body shape changed, and my energy dipped. Running alone wasn't enough anymore.",
          "I started lifting weights at 50, very reluctantly. Twice a week, with a coach the first three months.",
          "Four years in, my body composition has changed dramatically. I'm stronger than I've been in two decades. My back pain is gone. My DEXA scan showed bone density that surprised everyone.",
          "More than the physical, lifting gave me a confidence I didn't expect. I trust my body. I'm not afraid of it changing anymore.",
          "If you're in your 50s and have never lifted, please start. It is not too late. Two short sessions a week. Start with bodyweight or light dumbbells. The next 30 years of your life will thank you."
        ]
      },
      {
        name: "Padma, 52",
        quote: "Vaginal estrogen ended a decade of discomfort.",
        body: [
          "I had been silently struggling with vaginal dryness, painful sex, and recurrent UTIs for years. I assumed it was just part of getting older. I was wrong.",
          "A urogynecologist explained genitourinary syndrome of menopause — the umbrella term for these symptoms — and prescribed low-dose vaginal estrogen.",
          "Within two months, the dryness was gone. UTIs stopped. Sex was comfortable again — the first time in over a decade.",
          "I'm angry I suffered so long when this small, safe treatment existed. I'm sharing this loudly because so many women silently endure these symptoms.",
          "Vaginal estrogen is local, low-dose, and safe even for many women who can't use systemic HRT. If any of these symptoms sound familiar, please ask your doctor."
        ]
      },
      {
        name: "Maya, 56",
        quote: "Postmenopause has been my most powerful chapter.",
        body: [
          "I dreaded menopause for most of my 40s. The narrative was all loss and decline.",
          "The transition itself was hard — sleep issues, hot flashes, mood swings for a few years. Hormone therapy helped enormously.",
          "Three years post-menopause, the picture is completely different. Hormonal turbulence is gone. My priorities are clearer. I have less patience for things that don't matter, and more energy for what does.",
          "I lift weights, walk daily, eat well, sleep deeply. I feel strong. I feel free.",
          "Menopause was the door, not the ending. Postmenopause is a chapter I wish someone had told me about with this much enthusiasm. There's life here. A lot of it."
        ]
      },
    ],
    myths: [
      { myth: "Menopause is just hot flashes.", fact: "It affects sleep, mood, joints, skin, libido — the full system." },
      { myth: "HRT is dangerous.", fact: "For most healthy people under 60, benefits outweigh risks. Ask a specialist." },
      { myth: "It's all downhill from here.", fact: "Many describe postmenopause as their most confident, free chapter." },
      { myth: "Menopause only happens in your 50s.", fact: "Perimenopause can start in your late 30s; early menopause is real and deserves care." },
      { myth: "You can't get pregnant during perimenopause.", fact: "Until 12 months without a period, contraception still matters." },
      { myth: "Weight gain in menopause is unavoidable.", fact: "Hormones make it harder, not impossible. Strength training and protein help significantly." },
      { myth: "Low libido is just part of getting older.", fact: "It's often treatable — hormonal, lifestyle, and relationship factors all play a role." },
      { myth: "Vaginal dryness is something to live with.", fact: "Vaginal estrogen and moisturizers are safe, simple, and life-changing." },
      { myth: "Brain fog in menopause means dementia.", fact: "Most menopause brain fog is temporary and improves after the transition." },
      { myth: "Only your gynecologist treats menopause.", fact: "Menopause-trained primary care doctors and specialists exist — find one who's up to date." },
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
