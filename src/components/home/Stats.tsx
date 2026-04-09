import { HandCoins, Building2, BookOpen, Target } from "lucide-react";

const stats = [
  {
    icon: HandCoins,
    value: "A$500K+",
    label: "Total Grants Distributed",
    description: "Committed to cultural stewardship",
  },
  {
    icon: Building2,
    value: "10+",
    label: "Organisations Supported",
    description: "Across Australia",
  },
  {
    icon: BookOpen,
    value: "3",
    label: "Grant Themes",
    description: "Focused areas of impact",
  },
  {
    icon: Target,
    value: "4%",
    label: "Annual Distribution Rate",
    description: "Meeting regulatory requirements",
  },
];

export function Stats() {
  return (
    <section className="py-20 lg:py-28 bg-muse-dark relative overflow-hidden">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C4A265' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2l2 3.5-2 3z'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-muse-gold/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-muse-gold" />
                </div>
                <div className="text-3xl lg:text-4xl font-serif font-bold text-muse-cream mb-2">
                  {stat.value}
                </div>
                <div className="text-muse-gold font-medium text-sm mb-1">
                  {stat.label}
                </div>
                <div className="text-muse-cream/50 text-xs">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
