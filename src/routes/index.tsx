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
      { title: "מפתחת AI | תיק עבודות – Tax Technology" },
      {
        name: "description",
        content:
          "תיק עבודות של מפתחת AI: ארכיטקטורת RAG, סוכנים אוטונומיים, Prompt Engineering ואינטגרציות API.",
      },
      { property: "og:title", content: "מפתחת AI | תיק עבודות – Tax Technology" },
      {
        property: "og:description",
        content: "פרויקטים נבחרים: GEO RADAR, Event-Driven RAG, MCP Browser Agent ועוד.",
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
            {projects.map((project, i) => (
              <div key={project.id} className={i === 0 ? "sm:col-span-2" : undefined}>
                <ProjectCard project={project} onOpen={() => openProject(project)} />
              </div>
            ))}
          </div>

        </section>
      </main>

      <ProjectDialog project={active} open={open} onOpenChange={setOpen} />
      <Footer />
    </div>
  );
}
