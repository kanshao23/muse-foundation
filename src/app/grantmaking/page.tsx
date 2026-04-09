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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.step}
                className="relative p-6 rounded-xl bg-muse-cream border border-muse-light-gray"
              >
                <span className="text-4xl font-serif font-bold text-muse-gold/20 absolute top-4 right-4">
                  {step.step}
                </span>
                <h3 className="font-serif font-bold text-lg text-muse-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muse-gray leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
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
