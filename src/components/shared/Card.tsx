import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddings = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className,
  hover = true,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-muse-light-gray",
        hover && "hover:shadow-lg hover:-translate-y-1",
        "transition-all duration-300",
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
