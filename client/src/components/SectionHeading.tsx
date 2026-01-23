import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, centered = false, light = false, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-20", centered && "text-center", className)}>
      {subtitle && (
        <span className={cn(
          "block text-xs font-bold uppercase tracking-[0.2em] mb-4",
          light ? "text-primary" : "text-primary"
        )}>
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        "text-4xl md:text-5xl lg:text-6xl font-serif leading-tight",
        light ? "text-white" : "text-foreground"
      )}>
        {title}
      </h2>
    </div>
  );
}
