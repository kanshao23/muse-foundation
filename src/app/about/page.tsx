import { Shield, Users, Scale, Eye, Heart } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card } from "@/components/shared/Card";
import { ComplianceBadge } from "@/components/shared/ComplianceBadge";
import { Button } from "@/components/shared/Button";
import { siteConfig, themes } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about MUSE Foundation's mission, governance structure, and commitment to transparent philanthropy.",
};

const values = [
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Every grant decision, every dollar distributed, is documented and reportable. We believe donors and the public deserve full visibility.",
  },
  {
    icon: Scale,
    title: "Accountability",
    description:
      "We operate under ACNC governance standards, with clear policies on conflict of interest, decision-making, and fund allocation.",
  },
  {
    icon: Heart,
    title: "Purpose",
    description:
      "Our charitable purpose is clear and unwavering: to support organisations that advance education, culture, and community capability.",
  },
  {
    icon: Users,
    title: "Stewardship",
    description:
      "We see ourselves as stewards, not owners, of the funds entrusted to us. Every allocation must serve the public benefit.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-muse-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-16 h-1 bg-muse-gold mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-muse-cream mb-6">
              About MUSE Foundation
            </h1>
            <p className="text-lg text-muse-cream/70 leading-relaxed">
              MUSE Foundation is a public ancillary fund established to support
              charitable organisations that advance education, cultural
              preservation, and community capability across Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                title="Our Mission"
                subtitle=""
                centered={false}
              />
              <p className="text-muse-gray leading-relaxed mb-6">
                We exist to channel philanthropic capital towards organisations
                that create lasting public benefit — through financial literacy,
                cultural heritage preservation, and youth capability building.
              </p>
              <p className="text-muse-gray leading-relaxed mb-6">
                As a public ancillary fund, we provide a structured, compliant
                platform for donors to contribute to these causes, ensuring
                every dollar reaches qualified, verified organisations that can
                deliver real outcomes.
              </p>
              <p className="text-muse-gray leading-relaxed">
                We are an independent charitable entity. MUSE Foundation is
                separate from, and does not fund, any commercial operations or
                business entities.
              </p>
            </div>
            <div className="bg-muse-cream rounded-2xl p-8">
              <h3 className="font-serif font-bold text-xl text-muse-dark mb-6">
                Grant Themes
              </h3>
              <div className="space-y-4">
                {themes.map((theme) => (
                  <div
                    key={theme.id}
                    className="p-4 bg-white rounded-lg border border-muse-light-gray"
                  >
                    <h4 className="font-semibold text-muse-dark mb-2">
                      {theme.title}
                    </h4>
                    <p className="text-sm text-muse-gray">
                      {theme.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-muse-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide every decision at MUSE Foundation."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} padding="lg">
                  <div className="w-12 h-12 bg-muse-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-muse-gold" />
                  </div>
                  <h3 className="font-serif font-bold text-muse-dark mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muse-gray leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Governance"
            subtitle="Robust governance is the foundation of trust. Here's how we ensure accountability."
          />

          {/* Governance Structure Chart */}
          <div className="flex justify-center mb-14">
            <svg
              viewBox="0 0 800 300"
              className="w-full max-w-3xl h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Connecting lines */}
              <line x1="400" y1="70" x2="400" y2="110" stroke="#C4A265" strokeWidth="2" />
              <line x1="150" y1="140" x2="650" y2="140" stroke="#C4A265" strokeWidth="2" />
              <line x1="150" y1="140" x2="150" y2="170" stroke="#C4A265" strokeWidth="2" />
              <line x1="400" y1="140" x2="400" y2="170" stroke="#C4A265" strokeWidth="2" />
              <line x1="650" y1="140" x2="650" y2="170" stroke="#C4A265" strokeWidth="2" />
              <line x1="150" y1="220" x2="150" y2="250" stroke="#C4A265" strokeWidth="1.5" strokeDasharray="4 3" />
              <line x1="400" y1="220" x2="400" y2="250" stroke="#C4A265" strokeWidth="1.5" strokeDasharray="4 3" />
              <line x1="650" y1="220" x2="650" y2="250" stroke="#C4A265" strokeWidth="1.5" strokeDasharray="4 3" />

              {/* Top node: Board of Directors */}
              <rect x="290" y="20" width="220" height="50" rx="10" fill="#1A2F23" />
              <text x="400" y="42" textAnchor="middle" fill="#C4A265" fontSize="11" fontWeight="600" fontFamily="serif">BOARD OF DIRECTORS</text>
              <text x="400" y="58" textAnchor="middle" fill="#FAFAF5" fontSize="9" fontFamily="sans-serif">Strategic oversight &amp; grant approval</text>

              {/* Middle nodes */}
              <rect x="60" y="170" width="180" height="50" rx="8" fill="#2A4A38" />
              <text x="150" y="192" textAnchor="middle" fill="#C4A265" fontSize="10" fontWeight="600" fontFamily="serif">GRANT COMMITTEE</text>
              <text x="150" y="208" textAnchor="middle" fill="#FAFAF5" fontSize="8" fontFamily="sans-serif">Assessment &amp; recommendation</text>

              <rect x="310" y="170" width="180" height="50" rx="8" fill="#2A4A38" />
              <text x="400" y="192" textAnchor="middle" fill="#C4A265" fontSize="10" fontWeight="600" fontFamily="serif">COMPLIANCE</text>
              <text x="400" y="208" textAnchor="middle" fill="#FAFAF5" fontSize="8" fontFamily="sans-serif">ACNC &amp; ATO obligations</text>

              <rect x="560" y="170" width="180" height="50" rx="8" fill="#2A4A38" />
              <text x="650" y="192" textAnchor="middle" fill="#C4A265" fontSize="10" fontWeight="600" fontFamily="serif">FINANCE &amp; AUDIT</text>
              <text x="650" y="208" textAnchor="middle" fill="#FAFAF5" fontSize="8" fontFamily="sans-serif">Fund management &amp; reporting</text>

              {/* Bottom detail boxes */}
              <rect x="50" y="250" width="200" height="36" rx="6" fill="#FAFAF5" stroke="#C4A265" strokeWidth="1" />
              <text x="150" y="265" textAnchor="middle" fill="#2C2C2C" fontSize="8" fontFamily="sans-serif">Application review · Due diligence</text>
              <text x="150" y="278" textAnchor="middle" fill="#6B6B6B" fontSize="7" fontFamily="sans-serif">Conflict of interest checks</text>

              <rect x="300" y="250" width="200" height="36" rx="6" fill="#FAFAF5" stroke="#C4A265" strokeWidth="1" />
              <text x="400" y="265" textAnchor="middle" fill="#2C2C2C" fontSize="8" fontFamily="sans-serif">Annual reporting · DGR maintenance</text>
              <text x="400" y="278" textAnchor="middle" fill="#6B6B6B" fontSize="7" fontFamily="sans-serif">Regulatory filings</text>

              <rect x="550" y="250" width="200" height="36" rx="6" fill="#FAFAF5" stroke="#C4A265" strokeWidth="1" />
              <text x="650" y="265" textAnchor="middle" fill="#2C2C2C" fontSize="8" fontFamily="sans-serif">Minimum 4% distribution · Audit</text>
              <text x="650" y="278" textAnchor="middle" fill="#6B6B6B" fontSize="7" fontFamily="sans-serif">Public financial disclosure</text>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card padding="lg">
              <h3 className="font-serif font-bold text-lg text-muse-dark mb-4">
                Board of Directors
              </h3>
              <p className="text-sm text-muse-gray leading-relaxed mb-4">
                The Foundation is governed by an independent board responsible
                for all grant-making decisions, compliance oversight, and
                strategic direction.
              </p>
              <ul className="space-y-2 text-sm text-muse-gray">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-muse-gold rounded-full" />
                  Strategic oversight
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-muse-gold rounded-full" />
                  Grant approval authority
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-muse-gold rounded-full" />
                  Compliance monitoring
                </li>
              </ul>
            </Card>

            <Card padding="lg">
              <h3 className="font-serif font-bold text-lg text-muse-dark mb-4">
                Decision Process
              </h3>
              <p className="text-sm text-muse-gray leading-relaxed mb-4">
                Every grant follows a structured pathway: nomination, initial
                review, due diligence, assessment, and final board approval.
              </p>
              <ul className="space-y-2 text-sm text-muse-gray">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-muse-gold rounded-full" />
                  Written conflict-of-interest policy
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-muse-gold rounded-full" />
                  Documented decision trail
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-muse-gold rounded-full" />
                  Regular board meetings
                </li>
              </ul>
            </Card>

            <Card padding="lg">
              <h3 className="font-serif font-bold text-lg text-muse-dark mb-4">
                Financial Oversight
              </h3>
              <p className="text-sm text-muse-gray leading-relaxed mb-4">
                All funds are managed with full audit capability. Annual
                financial reporting meets ACNC and ATO requirements.
              </p>
              <ul className="space-y-2 text-sm text-muse-gray">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-muse-gold rounded-full" />
                  Annual audit
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-muse-gold rounded-full" />
                  Minimum 4% annual distribution
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-muse-gold rounded-full" />
                  Public reporting
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 lg:py-28 bg-muse-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Compliance & Registration"
            subtitle="Full regulatory compliance is non-negotiable for MUSE Foundation."
            light
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ComplianceBadge type="acnc" value={siteConfig.acnc} />
            <ComplianceBadge type="dgr" value={siteConfig.dgr} />
            <ComplianceBadge type="abn" value={siteConfig.abn} />
            <div className="flex items-center gap-3 px-4 py-3 bg-muse-cream/5 rounded-lg border border-muse-cream/10">
              <Shield className="w-5 h-5 text-muse-gold flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-muse-cream uppercase tracking-wide">
                  Fund Type
                </p>
                <p className="text-sm text-muse-cream/70">
                  Public Ancillary Fund
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button href="/grantmaking" variant="outline">
              Learn About Our Grantmaking
            </Button>
          </div>
        </div>
      </section>

      {/* Independence Statement */}
      <section className="py-16 bg-muse-gold/5 border-y border-muse-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muse-dark font-medium text-lg leading-relaxed">
            <strong>Independence Statement:</strong> MUSE Foundation is an
            independent charitable entity. It is separate from and does not
            provide funding to any commercial business or for-profit enterprise.
            All grants are made exclusively to qualifying deductible gift
            recipients (DGRs) in accordance with ATO and ACNC requirements.
          </p>
        </div>
      </section>
    </>
  );
}
