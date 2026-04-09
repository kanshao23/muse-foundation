import { ArrowRight } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { SectionTitle } from "@/components/shared/SectionTitle";

const cases = [
  {
    title: "Financial Literacy for New Australians",
    category: "Financial Literacy",
    description:
      "Supporting a DGR-registered education centre to deliver financial capability workshops for recently arrived migrants and refugees in Western Sydney.",
    amount: "A$35,000",
    status: "Active",
  },
  {
    title: "Indigenous Craft Preservation Program",
    category: "Cultural Heritage",
    description:
      "Funding the documentation and teaching of traditional Aboriginal weaving techniques in partnership with a registered cultural organisation.",
    amount: "A$50,000",
    status: "Active",
  },
  {
    title: "Youth Apprenticeship Pathway",
    category: "Youth Pathways",
    description:
      "Enabling a non-traditional education provider to create apprenticeship pathways for young people in heritage trades and artisanal crafts.",
    amount: "A$25,000",
    status: "Completed",
  },
];

export function FeaturedGrants() {
  return (
    <section className="py-20 lg:py-28 bg-muse-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Grants"
          subtitle="Real projects, real impact. Here are some of the initiatives we're proud to support."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl border border-muse-light-gray overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              {/* Category bar */}
              <div className="h-2 bg-muse-gold" />

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-muse-gold uppercase tracking-wide">
                    {item.category}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      item.status === "Active"
                        ? "bg-green-50 text-green-700"
                        : "bg-muse-cream-dark text-muse-gray"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-muse-dark mb-3 group-hover:text-muse-gold transition-colors">
                  {item.title}
                </h3>

                <p className="text-muse-gray text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-muse-light-gray">
                  <span className="text-muse-dark font-serif font-bold">
                    {item.amount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/impact" variant="secondary">
            View All Impact Stories
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
