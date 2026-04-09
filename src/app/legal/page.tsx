import { SectionTitle } from "@/components/shared/SectionTitle";
import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal & Privacy",
  description:
    "Privacy policy, donation terms, and legal information for MUSE Foundation.",
};

export default function LegalPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-muse-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-16 h-1 bg-muse-gold mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-muse-cream mb-6">
              Legal &amp; Privacy
            </h1>
            <p className="text-lg text-muse-cream/70 leading-relaxed">
              Transparency extends to how we handle your data and the terms
              under which we operate.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Privacy Policy */}
          <div className="mb-16">
            <SectionTitle title="Privacy Policy" centered={false} />

            <div className="prose prose-sm max-w-none text-muse-gray">
              <h3 className="font-serif font-bold text-muse-dark text-lg mt-8 mb-3">
                1. Information We Collect
              </h3>
              <p className="mb-4 leading-relaxed">
                {siteConfig.legalName} collects personal information that you
                voluntarily provide when interacting with our website, including
                but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Name and contact details (when using contact forms)</li>
                <li>Organisation information (for grant applications)</li>
                <li>Financial information (for donations)</li>
                <li>Website usage data (through analytics cookies)</li>
              </ul>

              <h3 className="font-serif font-bold text-muse-dark text-lg mt-8 mb-3">
                2. How We Use Your Information
              </h3>
              <p className="mb-4 leading-relaxed">
                We use collected information solely for the purposes of:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Processing grant applications and donations</li>
                <li>Communicating with you about your enquiry or application</li>
                <li>Fulfilling our legal and regulatory obligations</li>
                <li>
                  Improving our website and services (through anonymised
                  analytics)
                </li>
              </ul>

              <h3 className="font-serif font-bold text-muse-dark text-lg mt-8 mb-3">
                3. Information Sharing
              </h3>
              <p className="mb-4 leading-relaxed">
                We do not sell, trade, or rent personal information to third
                parties. Information may be shared with:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  Regulatory bodies as required by law (ACNC, ATO)
                </li>
                <li>
                  Professional advisors (auditors, legal counsel) under
                  confidentiality obligations
                </li>
                <li>
                  Payment processors (for donation transactions only)
                </li>
              </ul>

              <h3 className="font-serif font-bold text-muse-dark text-lg mt-8 mb-3">
                4. Data Security
              </h3>
              <p className="mb-4 leading-relaxed">
                We implement appropriate technical and organisational measures
                to protect personal information from unauthorised access,
                alteration, or disclosure.
              </p>

              <h3 className="font-serif font-bold text-muse-dark text-lg mt-8 mb-3">
                5. Your Rights
              </h3>
              <p className="mb-4 leading-relaxed">
                You have the right to access, correct, or request deletion of
                your personal information held by us. To exercise these rights,
                please contact us at {siteConfig.email}.
              </p>
            </div>
          </div>

          {/* Donation Terms */}
          <div className="mb-16">
            <SectionTitle title="Donation Terms" centered={false} />

            <div className="prose prose-sm max-w-none text-muse-gray">
              <h3 className="font-serif font-bold text-muse-dark text-lg mt-8 mb-3">
                1. Tax Deductibility
              </h3>
              <p className="mb-4 leading-relaxed">
                {siteConfig.legalName} is endorsed as a Deductible Gift
                Recipient (DGR). Donations of A$2 or more are tax-deductible. A
                receipt will be issued for all donations.
              </p>

              <h3 className="font-serif font-bold text-muse-dark text-lg mt-8 mb-3">
                2. Use of Funds
              </h3>
              <p className="mb-4 leading-relaxed">
                All donations are received into the {siteConfig.legalName} trust
                and are used exclusively for charitable purposes in accordance
                with our grantmaking framework and ACNC requirements. Funds are
                not used for commercial purposes.
              </p>

              <h3 className="font-serif font-bold text-muse-dark text-lg mt-8 mb-3">
                3. Refund Policy
              </h3>
              <p className="mb-4 leading-relaxed">
                Donations are generally non-refundable once a tax receipt has
                been issued. If you believe an error has occurred, please
                contact us within 7 days at {siteConfig.email}.
              </p>

              <h3 className="font-serif font-bold text-muse-dark text-lg mt-8 mb-3">
                4. Annual Distribution
              </h3>
              <p className="mb-4 leading-relaxed">
                As a public ancillary fund, {siteConfig.legalName} is required
                to distribute a minimum of {siteConfig.annualDistributionRate}{" "}
                of its net assets annually to eligible DGR-endorsed organisations.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mb-16">
            <SectionTitle title="Disclaimer" centered={false} />

            <div className="prose prose-sm max-w-none text-muse-gray">
              <p className="mb-4 leading-relaxed">
                The information on this website is provided for general
                informational purposes only. While we strive to keep information
                accurate and up-to-date, {siteConfig.legalName} makes no
                representations or warranties of any kind about the completeness,
                accuracy, or reliability of the information provided.
              </p>
              <p className="mb-4 leading-relaxed">
                This website does not constitute financial, legal, or tax
                advice. Donors and grant applicants should seek independent
                professional advice relevant to their specific circumstances.
              </p>
              <p className="leading-relaxed">
                {siteConfig.legalName} is an independent charitable entity,
                separate from any commercial organisation or business entity.
              </p>
            </div>
          </div>

          {/* Regulatory Information */}
          <div>
            <SectionTitle title="Regulatory Information" centered={false} />

            <div className="bg-muse-cream rounded-xl p-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-muse-dark uppercase tracking-wide mb-1">
                    Legal Name
                  </p>
                  <p className="text-sm text-muse-gray">
                    {siteConfig.legalName}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muse-dark uppercase tracking-wide mb-1">
                    ABN
                  </p>
                  <p className="text-sm text-muse-gray">{siteConfig.abn}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muse-dark uppercase tracking-wide mb-1">
                    ACNC Registration
                  </p>
                  <p className="text-sm text-muse-gray">{siteConfig.acnc}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muse-dark uppercase tracking-wide mb-1">
                    DGR Status
                  </p>
                  <p className="text-sm text-muse-gray">{siteConfig.dgr}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muse-dark uppercase tracking-wide mb-1">
                    Fund Type
                  </p>
                  <p className="text-sm text-muse-gray">
                    Public Ancillary Fund
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muse-dark uppercase tracking-wide mb-1">
                    Jurisdiction
                  </p>
                  <p className="text-sm text-muse-gray">
                    New South Wales, Australia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
