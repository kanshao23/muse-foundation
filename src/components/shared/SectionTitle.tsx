import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      <div
        className={cn(
          centered && "mx-auto",
          "w-16 h-1 bg-muse-gold mb-6"
        )}
      />
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4",
          light ? "text-muse-cream" : "text-muse-dark"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg md:text-xl max-w-2xl leading-relaxed",
            centered && "mx-auto",
            light ? "text-muse-cream/80" : "text-muse-gray"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
