import { HandCoins, Building2, BookOpen, Target } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";

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
    <section className="bg-muse-dark relative overflow-hidden">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C4A265' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2l2 3.5-2 3z'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Stats Cards */}
      <div className="relative py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>

      {/* Grant Trend Chart */}
      <div className="relative pb-20 lg:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Growing Impact"
            subtitle="Grant distribution growth since inception"
            light
          />

          <div className="bg-muse-cream/5 rounded-2xl border border-muse-cream/10 p-6 md:p-8">
            {/* Chart */}
            <div className="relative h-48 md:h-64">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between text-right">
                <span className="text-[10px] text-muse-cream/40">A$300K</span>
                <span className="text-[10px] text-muse-cream/40">A$200K</span>
                <span className="text-[10px] text-muse-cream/40">A$100K</span>
                <span className="text-[10px] text-muse-cream/40">A$0</span>
              </div>

              {/* Chart area */}
              <div className="ml-14 h-full relative">
                {/* Grid lines */}
                <div className="absolute inset-0 bottom-8 flex flex-col justify-between">
                  <div className="border-t border-muse-cream/10" />
                  <div className="border-t border-muse-cream/10" />
                  <div className="border-t border-muse-cream/10" />
                  <div className="border-t border-muse-cream/10" />
                </div>

                {/* Area + Line SVG */}
                <svg
                  className="absolute inset-0 bottom-8 w-full"
                  viewBox="0 0 500 180"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C4A265" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#C4A265" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Area fill */}
                  <path
                    d="M0,180 L0,144 C41.67,136 83.33,128 125,108 C166.67,88 208.33,52 250,40 C291.67,28 333.33,22 375,18 C416.67,14 458.33,12 500,10 L500,180 Z"
                    fill="url(#areaGradient)"
                  />

                  {/* Line */}
                  <path
                    d="M0,144 C41.67,136 83.33,128 125,108 C166.67,88 208.33,52 250,40 C291.67,28 333.33,22 375,18 C416.67,14 458.33,12 500,10"
                    fill="none"
                    stroke="#C4A265"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Data points */}
                  <circle cx="0" cy="144" r="4" fill="#1A2F23" stroke="#C4A265" strokeWidth="2" />
                  <circle cx="125" cy="108" r="4" fill="#1A2F23" stroke="#C4A265" strokeWidth="2" />
                  <circle cx="250" cy="40" r="4" fill="#1A2F23" stroke="#C4A265" strokeWidth="2" />
                  <circle cx="375" cy="18" r="4" fill="#1A2F23" stroke="#C4A265" strokeWidth="2" />
                  <circle cx="500" cy="10" r="5" fill="#C4A265" stroke="#1A2F23" strokeWidth="2" />
                </svg>

                {/* X-axis labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between pt-2">
                  <span className="text-[10px] text-muse-cream/40">Year 1</span>
                  <span className="text-[10px] text-muse-cream/40">Year 2</span>
                  <span className="text-[10px] text-muse-cream/40">Year 3</span>
                  <span className="text-[10px] text-muse-cream/40">Year 4</span>
                  <span className="text-[10px] text-muse-cream/40">
                    <span className="text-muse-gold font-semibold">Current</span>
                  </span>
                </div>

                {/* Value callout on current */}
                <div className="absolute right-0 top-0 -translate-y-2 translate-x-2">
                  <div className="bg-muse-gold text-muse-dark text-xs font-bold px-2 py-1 rounded">
                    A$285K
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
