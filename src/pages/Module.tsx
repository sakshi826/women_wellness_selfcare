import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronDown, ChevronLeft, ChevronRight, BookOpen, CircleDot, Heart, Lightbulb, Star, Moon, HeartHandshake, Bike, Smile, Newspaper, BookMarked, HelpCircle } from "lucide-react";
import { modules, type ModuleSlug, type ModuleContent, TRACKERS } from "@/data/modules";
import { iconMap } from "@/lib/icons";
import { toneBg, toneFg, understandingTile } from "@/lib/tones";

type ResourceKey = "Articles" | "Tips" | "Stories" | "Myths";

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
  { key: "Articles", tone: "yellow", Icon: Newspaper },
  { key: "Tips", tone: "blue", Icon: Lightbulb },
  { key: "Stories", tone: "lilac", Icon: BookMarked },
  { key: "Myths", tone: "mint", Icon: HelpCircle },
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
          <h2 className="mb-4 text-sm font-semibold tracking-wide">Understanding {data.title}</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {data.understanding.map((u, i) => {
              const Icon = understandingIcons[i];
              const s = understandingTile[u.tone];
              return (
                <div key={u.label} className={`flex flex-col gap-6 rounded-2xl p-5 shadow-soft ${s.wrap}`}>
                  <div className={`grid h-12 w-12 place-items-center rounded-xl ${s.tile}`}>
                    <Icon className={`h-6 w-6 ${s.icon}`} strokeWidth={2} />
                  </div>
                  <span className={`text-sm font-semibold leading-snug ${s.text}`}>{u.label}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Trackers */}
        <section className="mb-12">
          <h2 className="mb-4 text-sm font-semibold tracking-wide">Trackers</h2>
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

        {/* Resources — collapsible */}
        <section className="mb-12">
          <h2 className="mb-4 text-sm font-semibold tracking-wide">Resources</h2>
          <div className="space-y-3">
            {resourceStyles.map((r) => (
              <ResourceAccordion
                key={r.key}
                resourceKey={r.key as ResourceKey}
                tone={r.tone as keyof typeof toneBg}
                Icon={r.Icon}
                data={data}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

interface ResourceAccordionProps {
  resourceKey: ResourceKey;
  tone: keyof typeof toneBg;
  Icon: React.ComponentType<any>;
  data: ModuleContent;
}

const ResourceAccordion = ({ resourceKey, tone, Icon, data }: ResourceAccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-2xl border-l-4 ${toneBg[tone]}/60 shadow-soft transition-all`}
      style={{ borderLeftColor: `hsl(var(--pastel-${tone}-fg))` }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-4 py-4 text-left transition-colors hover:bg-black/[0.02]"
      >
        <div className="flex items-center gap-3">
          <div className={`grid h-10 w-10 place-items-center rounded-xl ${toneBg[tone]}`}>
            <Icon className={`h-4 w-4 ${toneFg[tone]}`} strokeWidth={2} />
          </div>
          <span className={`text-sm font-semibold underline decoration-2 underline-offset-4 ${toneFg[tone]}`}>
            {resourceKey}
          </span>
        </div>
        <div className={`grid h-8 w-8 place-items-center rounded-full ${toneBg[tone]} transition-transform ${open ? "rotate-180" : ""}`}>
          <ChevronDown className={`h-4 w-4 ${toneFg[tone]}`} />
        </div>
      </button>

      {open && (
        <div className="space-y-3 border-t border-border/40 bg-card/60 p-4 md:p-5">
          {resourceKey === "Articles" && (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {data.articles.map((a) => (
                <article key={a.title} className="rounded-xl border border-border/60 bg-card p-4 shadow-soft">
                  <h3 className="mb-1.5 text-sm font-semibold">{a.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                </article>
              ))}
            </div>
          )}

          {resourceKey === "Tips" && (
            <ul className="space-y-2">
              {data.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl bg-pastel-blue/60 p-3.5">
                  <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-pastel-blue">
                    <Lightbulb className="h-3.5 w-3.5 text-pastel-blue-foreground" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          )}

          {resourceKey === "Stories" && (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {data.stories.map((s) => (
                <blockquote key={s.name} className="rounded-xl bg-pastel-lilac/60 p-4">
                  <p className="text-sm italic leading-relaxed">"{s.quote}"</p>
                  <footer className="mt-2 text-xs font-semibold text-pastel-lilac-foreground">— {s.name}</footer>
                </blockquote>
              ))}
            </div>
          )}

          {resourceKey === "Myths" && (
            <div className="space-y-2.5">
              {data.myths.map((m, i) => (
                <div key={i} className="rounded-xl bg-pastel-mint/50 p-4">
                  <p className="text-sm font-semibold text-pastel-mint-foreground">Myth: {m.myth}</p>
                  <p className="mt-1 text-sm leading-relaxed">Fact: {m.fact}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Module;
