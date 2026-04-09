import {
  Heart,
  Users,
  Building2,
  BookHeart,
  Star,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Support MUSE Foundation through donations, corporate partnerships, or legacy giving.",
};

const givingOptions = [
  {
    icon: Heart,
    title: "One-Time Donation",
    description:
      "Make an immediate impact with a single contribution to our grant pool. All donations over A$2 are tax-deductible.",
    features: [
      "Tax-deductible (DGR receipt issued)",
      "No minimum amount",
      "Immediate impact",
      "Choose a grant theme to support",
    ],
  },
  {
    icon: Star,
    title: "Regular Giving",
    description:
      "Set up a recurring donation to provide sustained support for our grant programs. Consistent funding enables long-term planning.",
    features: [
      "Monthly or quarterly options",
      "Annual impact statement",
      "Flexible amounts",
      "Easy to modify or cancel",
    ],
  },
  {
    icon: Users,
    title: "Founding Donors Circle",
    description:
      "Join a select group of 5–20 founding supporters who share our vision. Each founding donor understands that their contribution enters the charitable pool — not a commercial budget.",
    features: [
      "Exclusive founding member status",
      "Direct engagement with grant outcomes",
      "Invitation to annual review meeting",
      "Named recognition (optional)",
    ],
  },
  {
    icon: Building2,
    title: "Corporate Partnership",
    description:
      "Partner with MUSE Foundation through matched giving, themed grants, or corporate social responsibility programs.",
    features: [
      "Employee matching programs",
      "Co-branded themed grants",
      "CSR reporting support",
      "Clear charitable boundaries",
    ],
  },
  {
    icon: BookHeart,
    title: "Named & Thematic Funds",
    description:
      "Establish a named sub-fund under MUSE Foundation. Create a family or enterprise philanthropic vehicle with full DGR compliance.",
    features: [
      "Personalised fund naming",
      "Family legacy philanthropy",
      "DGR-compliant structuring",
      "Ongoing donor engagement",
    ],
  },
];

const amounts = [50, 100, 250, 500, 1000, 5000];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-muse-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-16 h-1 bg-muse-gold mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-muse-cream mb-6">
              Get Involved
            </h1>
            <p className="text-lg text-muse-cream/70 leading-relaxed">
              Your support enables real change. Whether through a one-time gift,
              regular giving, or a named fund, every contribution goes directly
              to qualified organisations creating public benefit.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Make a Donation"
            subtitle="All donations over A$2 are tax-deductible. You will receive a DGR-compliant receipt."
          />

          <Card hover={false} padding="lg">
            <h3 className="font-serif font-bold text-xl text-muse-dark mb-6 text-center">
              Select an Amount
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-6">
              {amounts.map((amt) => (
                <button
                  key={amt}
                  className="py-3 rounded-lg border border-muse-light-gray text-muse-dark font-semibold hover:border-muse-gold hover:bg-muse-gold/5 transition-all text-sm cursor-pointer"
                >
                  A${amt.toLocaleString()}
                </button>
              ))}
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-muse-dark mb-2">
                Custom Amount (AUD)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muse-gray">
                  A$
                </span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-muse-light-gray bg-white text-sm focus:outline-none focus:border-muse-gold focus:ring-1 focus:ring-muse-gold"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Donate Once
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Set Up Regular Giving
              </Button>
            </div>

            <p className="text-xs text-muse-gray text-center mt-4">
              This is a demo interface. In production, secure payment processing
              would be provided through Stripe or a similar gateway.
            </p>
          </Card>
        </div>
      </section>

      {/* Giving Options */}
      <section className="py-20 lg:py-28 bg-muse-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Ways to Give"
            subtitle="Choose the giving method that best suits your goals and circumstances."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {givingOptions.map((option) => {
              const Icon = option.icon;
              return (
                <Card key={option.title} padding="lg">
                  <div className="w-14 h-14 bg-muse-gold/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-muse-gold" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-muse-dark mb-3">
                    {option.title}
                  </h3>
                  <p className="text-sm text-muse-gray leading-relaxed mb-4">
                    {option.description}
                  </p>
                  <ul className="space-y-2">
                    {option.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muse-gray"
                      >
                        <CheckCircle2 className="w-4 h-4 text-muse-green-light flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-20 lg:py-28 bg-muse-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-1 bg-muse-gold mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-muse-cream mb-6">
            Why MUSE Foundation?
          </h2>
          <div className="space-y-6 text-muse-cream/70 leading-relaxed">
            <p>
              We are not just another charity. MUSE Foundation is a structured
              philanthropic platform — built on compliance, transparency, and a
              clear methodology for allocating funds where they create the most
              public benefit.
            </p>
            <p>
              Every dollar you contribute enters a charitable trust, governed by
              an independent board, and distributed exclusively to DGR-endorsed
              organisations that deliver measurable outcomes.
            </p>
            <p>
              This is not about supporting a commercial brand. This is about
              building a legacy of cultural stewardship, educational access, and
              community resilience — with the rigor that donors deserve and
              regulators require.
            </p>
          </div>
          <div className="mt-10">
            <Button href="/contact" variant="outline" size="lg">
              Contact Us to Learn More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
