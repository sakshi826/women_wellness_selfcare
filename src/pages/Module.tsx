import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, BookOpen, CircleDot, Heart, Lightbulb, Star, Moon, HeartHandshake, Bike, Smile, Newspaper, BookMarked, HelpCircle } from "lucide-react";
import { modules, type ModuleSlug, TRACKERS } from "@/data/modules";
import { iconMap } from "@/lib/icons";
import { toneBg, toneFg, understandingTile } from "@/lib/tones";

const understandingIcons = [BookOpen, CircleDot, Heart, Lightbulb];

const trackerStyles: Record<string, { tone: string; Icon: any; href: string }> = {
  Energy: { tone: "rose", Icon: Star, href: "https://platform.mantracare.com/therapy/trackers/energy-tracker" },
  Sleep: { tone: "lilac", Icon: Moon, href: "https://web.mantracare.com/app/sleep" },
  "Self Care": { tone: "pink", Icon: Heart, href: "https://platform.mantracare.com/therapy/trackers/care-tracker" },
  BMI: { tone: "mint", Icon: HeartHandshake, href: "https://platform.mantracare.com/bmi-calculator-new" },
  "Physical Activity": { tone: "peach", Icon: Bike, href: "https://platform.mantracare.com/therapy/trackers/physical-activity-log" },
  Mood: { tone: "yellow", Icon: Smile, href: "https://platform.mantracare.com/mood_tracker/" },
};

const resourceStyles = [
  { key: "Articles", path: "articles", tone: "yellow", Icon: Newspaper },
  { key: "Tips", path: "tips", tone: "blue", Icon: Lightbulb },
  { key: "Stories", path: "stories", tone: "lilac", Icon: BookMarked },
  { key: "Myths", path: "myths", tone: "mint", Icon: HelpCircle },
] as const;

const Module = () => {
  const { slug } = useParams<{ slug: ModuleSlug }>();
  const data = slug ? modules[slug as ModuleSlug] : undefined;
  if (!data) return <Navigate to="/" replace />;

  const HeaderIcon = iconMap[data.iconKey as keyof typeof iconMap];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
        {/* Header */}
        <header className="mb-12 flex items-start gap-4">
          <Link
            to="/"
            aria-label="Back"
            className="mt-1 grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary"
          >
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <div className={`grid h-11 w-11 place-items-center rounded-2xl ${toneBg[data.tone]}`}>
            <HeaderIcon className={`h-5 w-5 ${toneFg[data.tone]}`} strokeWidth={1.75} />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{data.title}</h1>
            <p className="mt-1 text-muted-foreground">{data.subtitle}</p>
          </div>
        </header>

        {/* Understanding */}
        <section className="mb-12">
          <h2 className="mb-5 text-2xl font-bold tracking-tight">Understanding {data.title}</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {data.understanding.map((u, i) => {
              const Icon = understandingIcons[i];
              const s = understandingTile[u.tone];
              return (
                <Link
                  key={u.label}
                  to={`/module/${slug}/understanding/${i}`}
                  className={`flex flex-col gap-6 rounded-2xl p-5 shadow-soft ${s.wrap} transition-transform hover:-translate-y-0.5`}
                >
                  <div className={`grid h-12 w-12 place-items-center rounded-xl ${s.tile}`}>
                    <Icon className={`h-6 w-6 ${s.icon}`} strokeWidth={2} />
                  </div>
                  <span className={`text-sm font-semibold leading-snug ${s.text}`}>{u.label}</span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Trackers */}
        <section className="mb-12">
          <h2 className="mb-5 text-2xl font-bold tracking-tight">Trackers</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {TRACKERS.map((t) => {
              const meta = trackerStyles[t];
              const tone = meta.tone as keyof typeof toneBg;
              const Icon = meta.Icon;
              return (
                <a
                  key={t}
                  href={meta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between rounded-2xl border border-border/60 ${toneBg[tone]}/50 px-4 py-3.5 text-left shadow-soft transition-transform hover:-translate-y-0.5`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`grid h-9 w-9 place-items-center rounded-xl ${toneBg[tone]}`}>
                      <Icon className={`h-4 w-4 ${toneFg[tone]}`} strokeWidth={2} />
                    </div>
                    <span className={`text-sm font-semibold ${toneFg[tone]}`}>{t}</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 ${toneFg[tone]}`} />
                </a>
              );
            })}
          </div>
        </section>

        {/* Resources — link to dedicated pages */}
        <section className="mb-12">
          <h2 className="mb-5 text-2xl font-bold tracking-tight">Resources</h2>
          <div className="space-y-3">
            {resourceStyles.map((r) => {
              const tone = r.tone as keyof typeof toneBg;
              const Icon = r.Icon;
              return (
                <Link
                  key={r.key}
                  to={`/module/${slug}/${r.path}`}
                  className={`flex items-center justify-between rounded-2xl border-l-4 ${toneBg[tone]}/60 px-4 py-4 shadow-soft transition-transform hover:translate-x-0.5`}
                  style={{ borderLeftColor: `hsl(var(--pastel-${tone}-fg))` }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`grid h-10 w-10 place-items-center rounded-xl ${toneBg[tone]}`}>
                      <Icon className={`h-4 w-4 ${toneFg[tone]}`} strokeWidth={2} />
                    </div>
                    <span className={`text-sm font-semibold underline decoration-2 underline-offset-4 ${toneFg[tone]}`}>
                      {r.key}
                    </span>
                  </div>
                  <div className={`grid h-8 w-8 place-items-center rounded-full ${toneBg[tone]}`}>
                    <ChevronRight className={`h-4 w-4 ${toneFg[tone]}`} />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Module;
