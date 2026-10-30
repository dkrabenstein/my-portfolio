import { Icon } from "@/components/Icon";
import { aboutIntro } from "@/data/home";

export function PortraitPlaceholder() {
  const { portrait } = aboutIntro;

  return (
    <div className="flex h-[470px] w-full flex-col justify-between rounded border border-muted/30 bg-text/5 p-(--space-4) font-mono lg:w-[440px] lg:shrink-0">
      <div className="flex items-start justify-between">
        <span aria-hidden="true" className="text-xl text-muted">+</span>
        <p className="text-[11px] uppercase leading-[1.4] text-accent">{portrait.label}</p>
        <span aria-hidden="true" className="text-xl text-muted">+</span>
      </div>

      <div className="flex flex-col items-center gap-(--space-3) text-accent">
        <Icon name="user-round" size={96} />
        <p className="font-heading text-3xl font-medium">{portrait.prompt}</p>
      </div>

      <div className="flex items-end justify-between text-muted">
        <p className="text-[10px] leading-[1.6]">
          {portrait.noteLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <span aria-hidden="true" className="text-xl">+</span>
      </div>
    </div>
  );
}
