import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronLeft, BookOpen, CircleDot, Heart, Lightbulb, Clock, Sparkles } from "lucide-react";
import { modules, type ModuleSlug } from "@/data/modules";
import { understandingTile } from "@/lib/tones";

const understandingIcons = [BookOpen, CircleDot, Heart, Lightbulb];

const Understanding = () => {
  const { slug, index } = useParams<{ slug: ModuleSlug; index: string }>();
  const data = slug ? modules[slug as ModuleSlug] : undefined;
  const i = Number(index);
  if (!data || isNaN(i) || !data.understanding[i]) return <Navigate to="/" replace />;

  const item = data.understanding[i];
  const s = understandingTile[item.tone];
  const Icon = understandingIcons[i] ?? BookOpen;

  // Reading metadata
  const wordCount = item.body.join(" ").split(/\s+/).length;
  const readMinutes = Math.max(1, Math.round(wordCount / 220));

  // First paragraph is lead; the rest are article body
  const [lead, ...rest] = item.body;

  // Promote ~1/3 of remaining paragraphs to pull-quotes for visual rhythm
  const pullQuoteIndex = rest.length >= 4 ? Math.floor(rest.length / 2) : -1;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero band */}
      <div className={`${s.wrap} border-b border-border/40`}>
        <div className="mx-auto max-w-3xl px-6 pb-12 pt-8 md:px-10 md:pb-16 md:pt-10">
          <Link
            to={`/module/${slug}`}
            aria-label="Back"
            className="mb-8 inline-flex items-center gap-1.5 rounded-full bg-card/70 px-3 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur transition-colors hover:bg-card"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            Back to {data.title}
          </Link>

          <div className="flex items-start gap-4">
            <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${s.tile} shadow-soft`}>
              <Icon className={`h-7 w-7 ${s.icon}`} strokeWidth={2} />
            </div>
            <div className="min-w-0">
              <p className={`text-[11px] font-bold uppercase tracking-[0.18em] ${s.text}`}>
                {data.title} · Chapter {i + 1}
              </p>
              <h1 className="mt-2 text-3xl font-bold leading-[1.15] tracking-tight md:text-[40px]">
                {item.label}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-foreground/60">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {readMinutes} min read
                </span>
                <span className="h-1 w-1 rounded-full bg-foreground/30" />
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5" />
                  {item.body.length} sections
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="mx-auto max-w-3xl px-6 py-12 md:px-10 md:py-16">
        {/* Lead paragraph */}
        {lead && (
          <p className={`mb-12 text-xl font-medium leading-[1.6] tracking-[-0.005em] text-foreground md:text-[22px] first-letter:float-left first-letter:mr-3 first-letter:text-[64px] first-letter:font-bold first-letter:leading-[0.9] first-letter:${s.text}`}>
            {lead}
          </p>
        )}

        {/* Numbered sections */}
        <div className="space-y-10 md:space-y-12">
          {rest.map((p, idx) => {
            if (idx === pullQuoteIndex) {
              return (
                <figure key={idx} className="my-2">
                  <div className={`relative rounded-2xl ${s.wrap} px-6 py-7 md:px-9 md:py-9`}>
                    <Sparkles className={`absolute -top-3 left-6 h-6 w-6 ${s.text}`} fill="currentColor" />
                    <blockquote className={`text-lg font-semibold leading-[1.55] md:text-xl ${s.text}`}>
                      “{p}”
                    </blockquote>
                  </div>
                </figure>
              );
            }
            return (
              <section key={idx} className="group flex gap-5 md:gap-6">
                <div className="flex flex-col items-center pt-1.5">
                  <span className={`text-xs font-bold tabular-nums ${s.text}`}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className={`mt-2 h-full w-px bg-border`} aria-hidden />
                </div>
                <p className="text-[17px] leading-[1.85] text-foreground/85 md:text-[18px]">
                  {p}
                </p>
              </section>
            );
          })}
        </div>

        {/* Closing card */}
        <div className={`mt-16 rounded-2xl border border-border/50 ${s.wrap} p-6 md:p-8`}>
          <p className={`text-[11px] font-bold uppercase tracking-[0.18em] ${s.text}`}>
            Keep exploring
          </p>
          <h3 className="mt-2 text-xl font-bold tracking-tight md:text-2xl">
            More on {data.title}
          </h3>
          <p className="mt-1.5 text-sm text-foreground/70">
            Browse trackers, articles, tips and stories curated for this topic.
          </p>
          <Link
            to={`/module/${slug}`}
            className={`mt-5 inline-flex items-center gap-2 rounded-full ${s.tile} px-5 py-2.5 text-sm font-semibold ${s.icon} shadow-soft transition-transform hover:-translate-y-0.5`}
          >
            <ChevronLeft className="h-4 w-4" />
            Back to {data.title}
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Understanding;
