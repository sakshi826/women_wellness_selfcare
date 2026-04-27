import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronLeft, Newspaper, BookMarked } from "lucide-react";
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
  const Icon = isArticle ? Newspaper : BookMarked;
  const heading = isArticle ? (item as any).title : (item as any).name;
  const eyebrow = isArticle ? data.articles[i].title && "Article" : "Story";
  const body: string[] = (item as any).body ?? [];
  const quote = !isArticle ? (item as any).quote : undefined;

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-10 md:px-10 md:py-14">
        <header className="mb-10 flex items-start gap-4">
          <Link
            to={`/module/${slug}/${kind}`}
            aria-label="Back"
            className="mt-1 grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary"
          >
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <div className={`grid h-12 w-12 place-items-center rounded-2xl ${toneBg[tone]}`}>
            <Icon className={`h-6 w-6 ${toneFg[tone]}`} strokeWidth={1.75} />
          </div>
          <div>
            <p className={`text-xs font-semibold uppercase tracking-wider ${toneFg[tone]}`}>
              {data.title} · {eyebrow}
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight md:text-4xl">{heading}</h1>
            {isArticle && (item as any).summary && (
              <p className="mt-2 text-muted-foreground">{(item as any).summary}</p>
            )}
          </div>
        </header>

        <article className={`rounded-3xl ${toneBg[tone]}/60 p-2 shadow-soft`}>
          <div className="rounded-[20px] bg-card p-6 md:p-10">
            {quote && (
              <blockquote className={`mb-6 border-l-4 pl-4 text-xl italic leading-snug ${toneFg[tone]}`} style={{ borderLeftColor: `hsl(var(--pastel-${tone}-fg))` }}>
                "{quote}"
              </blockquote>
            )}
            <div className="space-y-6 md:space-y-7">
              {body.map((p, idx) => (
                <p
                  key={idx}
                  className={`text-[17px] md:text-[18px] leading-[1.8] text-foreground/90 ${
                    idx === 0
                      ? `first-letter:float-left first-letter:mr-2 first-letter:text-5xl first-letter:font-bold first-letter:leading-none ${toneFg[tone]}`
                      : ""
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleStory;
