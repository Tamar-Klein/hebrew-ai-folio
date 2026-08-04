import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Hero } from "@/components/portfolio/Hero";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ProjectDialog } from "@/components/portfolio/ProjectDialog";
import { Footer } from "@/components/portfolio/Footer";
import { projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "מהנדס תוכנה AI | תיק עבודות" },
      {
        name: "description",
        content:
          "תיק עבודות של מהנדס תוכנה AI: מערכות RAG, סוכנים חכמים, ראייה ממוחשבת ועיבוד שפה בעברית.",
      },
      { property: "og:title", content: "מהנדס תוכנה AI | תיק עבודות" },
      {
        property: "og:description",
        content: "פרויקטים נבחרים בבינה מלאכותית גנרטיבית — מהמחקר ועד לפרודקשן.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [active, setActive] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const openProject = (project: Project) => {
    setActive(project);
    setOpen(true);
  };

  return (
    <div dir="rtl" lang="he" className="min-h-screen bg-background text-right">
      <main>
        <Hero />

        <section id="projects" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
          <header className="max-w-2xl">
            <span className="text-xs tracking-[0.2em] text-primary uppercase">Selected Work</span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">פרויקטים נבחרים</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              לחצו על כל כרטיס כדי לצפות בדמו וידאו, במצגת המלאה ובפרטים הטכניים של הארכיטקטורה.
            </p>
          </header>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={() => openProject(project)} />
            ))}
          </div>
        </section>
      </main>

      <ProjectDialog project={active} open={open} onOpenChange={setOpen} />
      <Footer />
    </div>
  );
}
