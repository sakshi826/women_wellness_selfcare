import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronLeft, Newspaper, BookMarked, Clock, Sparkles, ArrowUp } from "lucide-react";
import { modules, type ModuleSlug } from "@/data/modules";
import { toneBg, toneFg } from "@/lib/tones";

type Kind = "articles" | "stories";

const ArticleStory = () => {
  const { slug, kind, index } = useParams<{ slug: ModuleSlug; kind: Kind; index: string }>();
  const data = slug ? modules[slug as ModuleSlug] : undefined;
  const i = Number(index);
  if (!data || (kind !== "articles" && kind !== "stories") || isNaN(i)) return <Navigate to="/" replace />;

  const isArticle = kind === "articles";
  const item = isArticle ? data.articles[i] : data.stories[i];
  if (!item) return <Navigate to={`/module/${slug}/${kind}`} replace />;

  const tone = (isArticle ? "yellow" : "lilac") as keyof typeof toneBg;
  const accent = `hsl(var(--pastel-${tone}-fg))`;
  const Icon = isArticle ? Newspaper : BookMarked;
  const heading = isArticle ? (item as any).title : (item as any).name;
  const eyebrow = isArticle ? "Article" : "Story";
  const summary = isArticle ? (item as any).summary : undefined;
  const body: string[] = (item as any).body ?? [];
  const quote = !isArticle ? (item as any).quote : undefined;

  const words = body.join(" ").split(/\s+/).filter(Boolean).length;
  const mins = Math.max(2, Math.round(words / 220));

  return (
    <div className="min-h-screen bg-background">
      {/* Editorial hero */}
      <header className="relative overflow-hidden border-b border-border/40">
        <div className={`absolute inset-0 ${toneBg[tone]} opacity-90`} />
        <div
          className="absolute -right-20 -top-24 h-72 w-72 rounded-full opacity-50 blur-3xl"
          style={{ background: accent }}
        />
        <div
          className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full opacity-25 blur-3xl"
          style={{ background: accent }}
        />

        <div className="relative mx-auto max-w-3xl px-6 pb-14 pt-8 md:px-10 md:pb-20 md:pt-10">
          <Link
            to={`/module/${slug}/${kind}`}
            aria-label="Back"
            className="inline-flex items-center gap-1.5 rounded-full bg-card/80 px-3 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur transition-colors hover:bg-card"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            Back to {isArticle ? "Articles" : "Stories"}
          </Link>

          <div className="mt-10 flex items-center gap-3">
            <span className="h-px w-10" style={{ background: accent, opacity: 0.5 }} />
            <p className={`text-[10px] font-bold uppercase tracking-[0.28em] ${toneFg[tone]}`}>
              {data.title} · {eyebrow}
            </p>
          </div>

          <h1 className="mt-4 text-[34px] font-bold leading-[1.1] tracking-tight text-foreground md:text-[56px]">
            {heading}
          </h1>

          {summary && (
            <p className="mt-4 max-w-2xl text-[16px] leading-[1.65] text-foreground/65 md:text-[18px]">
              {summary}
            </p>
          )}

          {/* Meta strip */}
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/55">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {mins} min read
            </span>
            <span className="text-foreground/30">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-3 w-3" fill="currentColor" style={{ color: accent }} />
              Reviewed by experts
            </span>
            <span className="text-foreground/30">·</span>
            <span className="font-mono">No. {String(i + 1).padStart(2, "0")}</span>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="mx-auto max-w-3xl px-6 py-14 md:px-10 md:py-20">
        <article className="relative">
          {/* Floating icon medallion */}
          <div
            className="absolute -top-20 right-0 hidden h-14 w-14 place-items-center rounded-2xl bg-card shadow-card md:grid"
            style={{ color: accent }}
          >
            <Icon className="h-6 w-6" strokeWidth={1.5} />
          </div>

          {quote && (
            <blockquote
              className={`mb-10 rounded-2xl ${toneBg[tone]} p-6 text-[20px] font-medium italic leading-snug text-foreground/85 md:p-8 md:text-[22px]`}
              style={{ borderLeft: `4px solid ${accent}` }}
            >
              "{quote}"
            </blockquote>
          )}

          <div className="space-y-7 md:space-y-8">
            {body.map((p, idx) => (
              <p
                key={idx}
                className={`text-[17px] leading-[1.85] tracking-[-0.005em] text-foreground/85 md:text-[18.5px] ${
                  idx === 0
                    ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[64px] first-letter:font-bold first-letter:leading-[0.85]"
                    : ""
                }`}
                style={
                  idx === 0
                    ? ({ "--tw-text-opacity": 1 } as any)
                    : undefined
                }
              >
                {idx === 0 ? (
                  <>
                    <span style={{ color: accent }} className="float-left mr-3 mt-1 text-[64px] font-bold leading-[0.85]">
                      {p.charAt(0)}
                    </span>
                    {p.slice(1)}
                  </>
                ) : (
                  p
                )}
              </p>
            ))}
          </div>

          {/* End-of-article footer */}
          <footer className="mt-16 border-t border-border/60 pt-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-[0.22em] ${toneFg[tone]}`}>
                  End of {eyebrow.toLowerCase()}
                </p>
                <p className="mt-1 text-sm text-foreground/55">
                  Thanks for reading. Take what serves you, leave the rest.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-3.5 py-2 text-xs font-semibold text-foreground/70 transition-colors hover:bg-secondary"
                >
                  <ArrowUp className="h-3.5 w-3.5" />
                  Top
                </button>
                <Link
                  to={`/module/${slug}/${kind}`}
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
                  style={{ background: accent }}
                >
                  More {isArticle ? "articles" : "stories"}
                </Link>
              </div>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
};

export default ArticleStory;
