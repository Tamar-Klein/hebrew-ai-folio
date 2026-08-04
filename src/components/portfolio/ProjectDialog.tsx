import { Github, Presentation } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/data/projects";

type Props = {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ProjectDialog({ project, open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        dir="rtl"
        className="glass-panel max-h-[90vh] max-w-4xl overflow-y-auto rounded-2xl p-0 text-right"
      >
        {project && (
          <div className="p-6 sm:p-8">
            <DialogHeader className="text-right">
              <DialogTitle className="font-display text-2xl font-bold sm:text-3xl">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                {project.short}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="rounded-full border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-normal text-primary"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <h4 className="text-sm font-medium text-muted-foreground">דמו וידאו</h4>
              <div className="aspect-video overflow-hidden rounded-xl border border-border bg-secondary/40">
                <iframe
                  src={project.videoUrl}
                  title={`דמו וידאו – ${project.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="size-full"
                />
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <h4 className="text-sm font-medium text-muted-foreground">מצגת הפרויקט</h4>
              <div className="aspect-video overflow-hidden rounded-xl border border-border bg-secondary/40">
                <iframe
                  src={project.slidesUrl}
                  title={`מצגת – ${project.title}`}
                  allowFullScreen
                  className="size-full"
                />
              </div>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github className="size-4" />
                  צפה בקוד ב-GitHub
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href={project.slidesFullUrl} target="_blank" rel="noreferrer">
                  <Presentation className="size-4" />
                  למצגת המלאה
                </a>
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
