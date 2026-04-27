import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronLeft, BookOpen, CircleDot, Heart, Lightbulb } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-10 md:px-10 md:py-14">
        <header className="mb-10 flex items-start gap-4">
          <Link
            to={`/module/${slug}`}
            aria-label="Back"
            className="mt-1 grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary"
          >
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <div className={`grid h-12 w-12 place-items-center rounded-2xl ${s.tile}`}>
            <Icon className={`h-6 w-6 ${s.icon}`} strokeWidth={2} />
          </div>
          <div>
            <p className={`text-sm font-semibold uppercase tracking-wider ${s.text}`}>
              {data.title}
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight md:text-4xl">{item.label}</h1>
          </div>
        </header>

        <article className={`rounded-3xl ${s.wrap} p-2 shadow-soft`}>
          <div className="rounded-[20px] bg-card p-6 md:p-10">
            <div className="space-y-6 md:space-y-7">
              {item.body.map((p, idx) => (
                <p
                  key={idx}
                  className={`text-[17px] md:text-[18px] leading-[1.8] text-foreground/90 ${
                    idx === 0
                      ? `first-letter:float-left first-letter:mr-2 first-letter:text-5xl first-letter:font-bold first-letter:leading-none ${s.text}`
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

export default Understanding;
