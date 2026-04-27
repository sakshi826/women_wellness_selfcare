import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronLeft, Lightbulb, Newspaper, BookMarked, HelpCircle } from "lucide-react";
import { modules, type ModuleSlug } from "@/data/modules";
import { toneBg, toneFg } from "@/lib/tones";

type ResourceKey = "articles" | "tips" | "stories" | "myths";

const resourceMeta: Record<ResourceKey, { title: string; tone: keyof typeof toneBg; Icon: any }> = {
  articles: { title: "Articles", tone: "yellow", Icon: Newspaper },
  tips: { title: "Tips", tone: "blue", Icon: Lightbulb },
  stories: { title: "Stories", tone: "lilac", Icon: BookMarked },
  myths: { title: "Myths vs Facts", tone: "mint", Icon: HelpCircle },
};

const Resource = () => {
  const { slug, resource } = useParams<{ slug: ModuleSlug; resource: ResourceKey }>();
  const data = slug ? modules[slug as ModuleSlug] : undefined;
  const meta = resource ? resourceMeta[resource as ResourceKey] : undefined;
  if (!data || !meta) return <Navigate to="/" replace />;

  const { tone, Icon, title } = meta;

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-10 md:px-10 md:py-14">
        <header className="mb-10 flex items-start gap-4">
          <Link
            to={`/module/${slug}`}
            aria-label="Back"
            className="mt-1 grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary"
          >
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <div className={`grid h-11 w-11 place-items-center rounded-2xl ${toneBg[tone]}`}>
            <Icon className={`h-5 w-5 ${toneFg[tone]}`} strokeWidth={1.75} />
          </div>
          <div>
            <p className={`text-xs font-semibold uppercase tracking-wider ${toneFg[tone]}`}>
              {data.title}
            </p>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
          </div>
        </header>

        {resource === "articles" && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {data.articles.map((a) => (
              <article key={a.title} className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
                <h2 className="mb-2 text-base font-semibold">{a.title}</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground">{a.body}</p>
              </article>
            ))}
          </div>
        )}

        {resource === "tips" && (
          <ul className="space-y-3">
            {data.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3 rounded-2xl bg-pastel-blue/60 p-4 shadow-soft">
                <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-pastel-blue">
                  <Lightbulb className="h-4 w-4 text-pastel-blue-foreground" strokeWidth={2.5} />
                </div>
                <span className="text-sm leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        )}

        {resource === "stories" && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {data.stories.map((s) => (
              <blockquote key={s.name} className="rounded-2xl bg-pastel-lilac/60 p-5 shadow-soft">
                <p className="text-base italic leading-[1.75]">"{s.quote}"</p>
                <footer className="mt-3 text-xs font-semibold text-pastel-lilac-foreground">— {s.name}</footer>
              </blockquote>
            ))}
          </div>
        )}

        {resource === "myths" && (
          <div className="space-y-3">
            {data.myths.map((m, i) => (
              <div key={i} className="rounded-2xl bg-pastel-mint/50 p-5 shadow-soft">
                <p className="text-sm font-semibold text-pastel-mint-foreground">Myth: {m.myth}</p>
                <p className="mt-1.5 text-sm leading-relaxed">Fact: {m.fact}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Resource;
