import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <Card
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      className="glass-panel card-hover group cursor-pointer overflow-hidden rounded-2xl p-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={`תצוגה מקדימה של הפרויקט ${project.title}`}
          loading="lazy"
          width={1280}
          height={800}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.short}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="rounded-full border-border bg-secondary/40 px-3 py-1 text-[11px] font-normal text-muted-foreground"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
