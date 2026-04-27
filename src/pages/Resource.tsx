import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Lightbulb, Newspaper, BookMarked, HelpCircle, Quote, Sparkles, X, Check, Clock } from "lucide-react";
import { modules, type ModuleSlug } from "@/data/modules";
import { toneBg, toneFg } from "@/lib/tones";

type ResourceKey = "articles" | "tips" | "stories" | "myths";

const resourceMeta: Record<ResourceKey, { title: string; tone: keyof typeof toneBg; Icon: any; tagline: string }> = {
  articles: { title: "Articles", tone: "yellow", Icon: Newspaper, tagline: "Deep dives & expert reads" },
  tips: { title: "Tips", tone: "blue", Icon: Lightbulb, tagline: "Quick wins for everyday wellness" },
  stories: { title: "Stories", tone: "lilac", Icon: BookMarked, tagline: "Voices from the community" },
  myths: { title: "Myths vs Facts", tone: "mint", Icon: HelpCircle, tagline: "Setting the record straight" },
};

const Resource = () => {
  const { slug, resource } = useParams<{ slug: ModuleSlug; resource: ResourceKey }>();
  const data = slug ? modules[slug as ModuleSlug] : undefined;
  const meta = resource ? resourceMeta[resource as ResourceKey] : undefined;
  if (!data || !meta) return <Navigate to="/" replace />;

  const { tone, Icon, title, tagline } = meta;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero band */}
      <div className={`${toneBg[tone]} border-b border-border/40`}>
        <div className="mx-auto max-w-4xl px-6 pb-12 pt-8 md:px-10 md:pb-14 md:pt-10">
          <Link
            to={`/module/${slug}`}
            aria-label="Back"
            className="mb-8 inline-flex items-center gap-1.5 rounded-full bg-card/70 px-3 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur transition-colors hover:bg-card"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            Back to {data.title}
          </Link>
          <div className="flex items-start gap-4">
            <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-card shadow-soft`}>
              <Icon className={`h-7 w-7 ${toneFg[tone]}`} strokeWidth={1.75} />
            </div>
            <div>
              <p className={`text-[11px] font-bold uppercase tracking-[0.18em] ${toneFg[tone]}`}>
                {data.title}
              </p>
              <h1 className="mt-1.5 text-3xl font-bold tracking-tight md:text-[40px]">{title}</h1>
              <p className="mt-1.5 text-sm text-foreground/65">{tagline}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12 md:px-10 md:py-14">
        {/* Articles — magazine-style cards */}
        {resource === "articles" && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {data.articles.map((a, i) => {
              const words = (a.body?.join(" ") ?? a.summary ?? "").split(/\s+/).length;
              const mins = Math.max(2, Math.round(words / 220));
              return (
                <Link
                  key={a.title}
                  to={`/module/${slug}/articles/read/${i}`}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/50 bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <div className={`absolute right-0 top-0 h-28 w-28 -translate-y-10 translate-x-10 rounded-full ${toneBg[tone]} opacity-70 blur-2xl`} />
                  <div className="relative">
                    <div className="mb-4 flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1 rounded-full ${toneBg[tone]} px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${toneFg[tone]}`}>
                        <Newspaper className="h-3 w-3" />
                        Article {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-foreground/55">
                        <Clock className="h-3 w-3" />
                        {mins} min
                      </span>
                    </div>
                    <h2 className="mb-2.5 text-lg font-bold leading-snug tracking-tight group-hover:underline">
                      {a.title}
                    </h2>
                    <p className="line-clamp-3 text-[14px] leading-[1.65] text-foreground/70">
                      {a.summary ?? a.body?.[0]}
                    </p>
                    <div className={`mt-5 inline-flex items-center gap-1.5 text-xs font-semibold ${toneFg[tone]}`}>
                      Read article
                      <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Tips — numbered, alternating accent */}
        {resource === "tips" && (
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {data.tips.map((tip, i) => (
              <li
                key={i}
                className="group relative flex gap-4 overflow-hidden rounded-2xl border border-border/50 bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <div className={`absolute left-0 top-0 h-full w-1 ${toneBg[tone].replace("bg-", "bg-")}`} style={{ background: `hsl(var(--pastel-${tone}-fg))` }} />
                <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${toneBg[tone]}`}>
                  <span className={`text-base font-bold tabular-nums ${toneFg[tone]}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className={`mb-1.5 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider ${toneFg[tone]}`}>
                    <Sparkles className="h-3 w-3" fill="currentColor" />
                    Daily tip
                  </div>
                  <p className="text-[15px] font-medium leading-[1.6] text-foreground/85">{tip}</p>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Stories — quote-style cards with avatar initials */}
        {resource === "stories" && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {data.stories.map((s, i) => {
              const initials = s.name.split(/\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase();
              return (
                <Link
                  key={s.name}
                  to={`/module/${slug}/stories/read/${i}`}
                  className="group relative block overflow-hidden rounded-3xl border border-border/50 bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <Quote className={`absolute right-5 top-5 h-12 w-12 ${toneFg[tone]} opacity-15`} fill="currentColor" />
                  <div className="relative">
                    <p className="line-clamp-4 text-[16px] font-medium italic leading-[1.65] text-foreground/85">
                      “{s.quote}”
                    </p>
                    <div className="mt-5 flex items-center gap-3 border-t border-border/50 pt-4">
                      <div className={`grid h-10 w-10 place-items-center rounded-full ${toneBg[tone]} text-sm font-bold ${toneFg[tone]}`}>
                        {initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-foreground">{s.name}</p>
                        <p className="text-[11px] uppercase tracking-wider text-foreground/50">Community story</p>
                      </div>
                      <ChevronRight className={`h-4 w-4 ${toneFg[tone]} transition-transform group-hover:translate-x-1`} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Myths — split layout with myth (red-ish) and fact (mint) badges */}
        {resource === "myths" && (
          <div className="space-y-5">
            {data.myths.map((m, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-3xl border border-border/50 bg-card shadow-soft"
              >
                <div className="grid md:grid-cols-2">
                  {/* Myth side */}
                  <div className="relative bg-pastel-rose/60 p-6 md:p-7">
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-card/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-pastel-rose-foreground">
                      <X className="h-3 w-3" strokeWidth={3} />
                      Myth #{String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-[15px] font-medium leading-[1.6] text-foreground/85 line-through decoration-pastel-rose-foreground/40 decoration-2">
                      {m.myth}
                    </p>
                  </div>
                  {/* Fact side */}
                  <div className="relative bg-pastel-mint/60 p-6 md:p-7">
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-card/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-pastel-mint-foreground">
                      <Check className="h-3 w-3" strokeWidth={3} />
                      Fact
                    </div>
                    <p className="text-[15px] font-medium leading-[1.6] text-foreground/85">
                      {m.fact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Resource;
