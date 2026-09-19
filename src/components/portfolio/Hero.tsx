import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative isolate overflow-hidden">
      <div className="hero-aura absolute inset-0 -z-10" />
      <div className="grid-lines absolute inset-0 -z-10" />

      <div className="mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="reveal glass-panel rounded-full px-4 py-1.5 text-xs tracking-wide text-muted-foreground">
           AI Engineering
        </span>
<h1 className="reveal mt-8 font-display text-5xl leading-[1.15] font-bold tracking-tight text-balance sm:text-6xl md:text-7xl">
           <span className="text-gradient">תמר קליין</span>
        </h1>
        <h2 className="reveal mt-8 font-display text-5xl leading-[1.15] font-bold tracking-tight text-balance sm:text-6xl md:text-7xl">
          מפתחת <span className="text-gradient">AI</span>
        </h2>

        <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          מתמחה בארכיטקטורת RAG, פיתוח סוכני AI אוטונומיים, Prompt Engineering מתקדם ואינטגרציות
          API.
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button variant="hero" size="xl" onClick={scrollToProjects}>
            צפו בפרויקטים
            <ArrowLeft className="size-4" />
          </Button>
       
        </div>

        <dl className="reveal mt-16 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { k: "#1", v: "מקום ראשון בהאקתון AI" },
            { k: "RAG", v: "ארכיטקטורות ידע ארגוני" },
            { k: "Agents", v: "סוכנים אוטונומיים" },
            { k: "API", v: "אינטגרציות ואוטומציה" },
          ].map((s) => (
            <div key={s.v} className="glass-panel rounded-xl px-4 py-5">
              <dt className="font-display text-2xl font-bold text-primary">{s.k}</dt>
              <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
            </div>
          ))}
        </dl>

      </div>
    </section>
  );
}
