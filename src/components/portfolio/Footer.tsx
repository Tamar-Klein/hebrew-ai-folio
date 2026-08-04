import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
  { href: "https://github.com", label: "GitHub", Icon: Github },
  { href: "mailto:hello@example.com", label: "hello@example.com", Icon: Mail },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/60 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 sm:flex-row sm:justify-between">
        <p className="font-display text-sm text-muted-foreground">
          © {new Date().getFullYear()} · מהנדס תוכנה AI. נבנה בקוד, לא בתבנית.
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-3">
          {links.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
            >
              <Icon className="size-4" />
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
