import { Sprout, Target, Gem, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { grantProducts, assessmentCriteria } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grantmaking",
  description:
    "Learn about MUSE Foundation's grantmaking framework, funding products, and application process.",
};

const iconMap: Record<string, React.ElementType> = {
  Sprout,
  Target,
  Gem,
  Award,
};

const steps = [
  {
    step: "01",
    title: "Check Eligibility",
    description:
      "Verify your organisation is a DGR-endorsed entity and your project aligns with our grant themes.",
  },
  {
    step: "02",
    title: "Submit Application",
    description:
      "Complete our online application form with project details, budget, and supporting documents.",
  },
  {
    step: "03",
    title: "Initial Review",
    description:
      "Our team reviews applications for completeness, eligibility, and alignment with funding priorities.",
  },
  {
    step: "04",
    title: "Assessment & Due Diligence",
    description:
      "Detailed evaluation against our six assessment criteria, including governance and risk review.",
  },
  {
    step: "05",
    title: "Board Decision",
    description:
      "The Board of Directors makes the final grant decision with documented reasoning and conflict checks.",
  },
  {
    step: "06",
    title: "Grant Agreement & Funding",
    description:
      "Successful applicants receive a grant agreement, followed by funding and ongoing reporting requirements.",
  },
];

export default function GrantmakingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-muse-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-16 h-1 bg-muse-gold mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-muse-cream mb-6">
              Grantmaking Framework
            </h1>
            <p className="text-lg text-muse-cream/70 leading-relaxed">
              A structured, transparent approach to funding organisations that
              create lasting public benefit. Every grant follows a rigorous
              framework — from eligibility to impact reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Grant Products */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Grant Products"
            subtitle="Flexible funding instruments designed for different stages and scales of impact."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {grantProducts.map((product) => {
              const Icon = iconMap[product.icon] || Sprout;
              return (
                <Card key={product.id} padding="lg">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-muse-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-muse-gold" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-serif font-bold text-xl text-muse-dark">
                          {product.title}
                        </h3>
                        <span className="text-sm font-semibold text-muse-gold">
                          {product.range}
                        </span>
                      </div>
                      <p className="text-muse-gray text-sm leading-relaxed mb-4">
                        {product.description}
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        {product.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-xs text-muse-gray"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-muse-green-light flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Assessment Criteria */}
      <section className="py-20 lg:py-28 bg-muse-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Assessment Criteria"
            subtitle="Every application is evaluated against six key dimensions."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {assessmentCriteria.map((criterion, i) => (
              <Card key={criterion.title} padding="md">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-serif font-bold text-muse-gold/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-muse-dark mb-2">
                      {criterion.title}
                    </h3>
                    <p className="text-sm text-muse-gray leading-relaxed">
                      {criterion.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Application Process"
            subtitle="A clear, six-step pathway from eligibility check to grant agreement."
          />

          {/* Connected Flow Diagram */}
          <div className="relative">
            {/* SVG Connecting Lines (desktop only) */}
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block"
              viewBox="0 0 1200 400"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Row 1: step 1 → 2 → 3 */}
              <path d="M200 80 L400 80" stroke="#C4A265" strokeWidth="2" strokeDasharray="6 4" />
              <polygon points="395,75 405,80 395,85" fill="#C4A265" />
              <path d="M600 80 L800 80" stroke="#C4A265" strokeWidth="2" strokeDasharray="6 4" />
              <polygon points="795,75 805,80 795,85" fill="#C4A265" />
              {/* Turn down from step 3 */}
              <path d="M1000 140 L1000 200 L600 200 L600 240" stroke="#C4A265" strokeWidth="2" strokeDasharray="6 4" />
              <polygon points="595,235 600,245 605,235" fill="#C4A265" />
              {/* Row 2: step 4 → 5 → 6 */}
              <path d="M400 300 L200 300" stroke="#C4A265" strokeWidth="2" strokeDasharray="6 4" />
              <polygon points="205,295 195,300 205,305" fill="#C4A265" />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <div
                  key={step.step}
                  className="relative p-6 rounded-xl bg-muse-cream border border-muse-light-gray group hover:border-muse-gold/40 transition-colors"
                >
                  {/* Step number badge */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-muse-gold text-white rounded-full flex items-center justify-center font-serif font-bold text-sm">
                      {step.step}
                    </div>
                    {/* Connector arrow (mobile/tablet) */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden text-muse-gold">
                        <ArrowRight className="w-4 h-4 rotate-90 md:rotate-0" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-muse-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muse-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button href="/grantmaking/apply" size="lg">
              Start Your Application
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* What We Don't Fund */}
      <section className="py-16 bg-muse-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-muse-cream mb-6">
            Important Boundaries
          </h2>
          <p className="text-muse-cream/70 leading-relaxed mb-8">
            To maintain regulatory compliance and charitable integrity, MUSE
            Foundation does not fund:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Commercial business entities",
              "Political campaigns or lobbying",
              "Individuals (except through eligible organisations)",
              "Non-DGR organisations",
              "Activities outside our grant themes",
              "Any purpose that benefits commercial interests",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-left p-3 bg-muse-cream/5 rounded-lg"
              >
                <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0" />
                <span className="text-muse-cream/70 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
