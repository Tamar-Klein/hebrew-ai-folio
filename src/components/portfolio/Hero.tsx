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
          מהנדס תוכנה · בינה מלאכותית גנרטיבית
        </span>

        <h1 className="reveal mt-8 font-display text-4xl leading-[1.15] font-bold tracking-tight text-balance sm:text-6xl md:text-7xl">
          בונה מערכות <span className="text-gradient">AI</span> שעובדות
          <br className="hidden sm:block" /> גם מחוץ למעבדה
        </h1>

        <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          מפיתוח מודלים ועד לפרודקשן: סוכנים חכמים, מערכות RAG ותשתיות דאטה — עם דגש על דיוק,
          מהירות ועלות. תכנון ארכיטקטורה, מדידה אמיתית ותוצאות עסקיות.
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button variant="hero" size="xl" onClick={scrollToProjects}>
            צפו בעבודות שלי
            <ArrowLeft className="size-4" />
          </Button>
          <Button variant="glass" size="xl" asChild>
            <a href="#contact">דברו איתי</a>
          </Button>
        </div>

        <dl className="reveal mt-16 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { k: "+6", v: "שנות ניסיון" },
            { k: "+25", v: "מודלים בפרודקשן" },
            { k: "99.9%", v: "זמינות שירות" },
            { k: "×4", v: "שיפור ביצועים" },
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
