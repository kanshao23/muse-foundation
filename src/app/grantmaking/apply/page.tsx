"use client";

import { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  ChevronRight,
  FileText,
  Building2,
  ClipboardList,
} from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";

const eligibilityQuestions = [
  {
    id: "dgr",
    question: "Is your organisation endorsed as a Deductible Gift Recipient (DGR)?",
    hint: "MUSE Foundation can only fund DGR-endorsed organisations as required by ATO regulations.",
  },
  {
    id: "registered",
    question: "Is your organisation registered with ACNC?",
    hint: "We require all grant recipients to be registered Australian charities.",
  },
  {
    id: "theme",
    question:
      "Does your project align with one of our grant themes (Financial Literacy, Cultural Heritage, or Youth Pathways)?",
    hint: "Your project must clearly fit within one of our three focus areas.",
  },
  {
    id: "governance",
    question:
      "Does your organisation have adequate governance and financial management capability?",
    hint: "Including financial reporting, board oversight, and compliance track record.",
  },
  {
    id: "commercial",
    question:
      "Is your project purely charitable and not for the benefit of any commercial entity?",
    hint: "Charity funds cannot be used to support commercial interests.",
  },
];

export default function ApplyPage() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showForm, setShowForm] = useState(false);

  const allYes = eligibilityQuestions.every((q) => answers[q.id] === true);
  const anyNo = eligibilityQuestions.some((q) => answers[q.id] === false);

  return (
    <>
      {/* Hero */}
      <section className="bg-muse-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-16 h-1 bg-muse-gold mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-muse-cream mb-6">
              Apply for a Grant
            </h1>
            <p className="text-lg text-muse-cream/70 leading-relaxed">
              Before submitting a formal application, please complete the
              eligibility check below. This helps ensure your project aligns
              with our funding requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility Check */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Eligibility Check"
            subtitle="Answer the following questions to determine if your organisation qualifies for MUSE Foundation funding."
            centered={false}
          />

          <div className="space-y-4">
            {eligibilityQuestions.map((q) => (
              <Card key={q.id} hover={false} padding="md">
                <p className="font-medium text-muse-dark mb-2">
                  {q.question}
                </p>
                <p className="text-xs text-muse-gray mb-4">{q.hint}</p>
                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      setAnswers((prev) => ({ ...prev, [q.id]: true }))
                    }
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                      answers[q.id] === true
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-muse-cream text-muse-gray border border-muse-light-gray hover:border-muse-gold"
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" /> Yes
                  </button>
                  <button
                    onClick={() =>
                      setAnswers((prev) => ({ ...prev, [q.id]: false }))
                    }
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                      answers[q.id] === false
                        ? "bg-red-50 text-red-700 border border-red-200"
                        : "bg-muse-cream text-muse-gray border border-muse-light-gray hover:border-muse-gold"
                    }`}
                  >
                    <XCircle className="w-4 h-4" /> No
                  </button>
                </div>
              </Card>
            ))}
          </div>

          {/* Result */}
          {allYes && (
            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl text-center">
              <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-serif font-bold text-lg text-green-800 mb-2">
                You May Be Eligible
              </h3>
              <p className="text-sm text-green-700 mb-4">
                Based on your responses, your organisation appears to meet our
                basic eligibility criteria. Please proceed to the application
                form.
              </p>
              <Button onClick={() => setShowForm(true)}>
                Proceed to Application
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {anyNo && (
            <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-xl text-center">
              <XCircle className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <h3 className="font-serif font-bold text-lg text-red-800 mb-2">
                Not Eligible at This Time
              </h3>
              <p className="text-sm text-red-700">
                Based on your responses, your organisation may not meet our
                current eligibility requirements. If your circumstances change,
                we welcome you to revisit this assessment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Application Form */}
      {showForm && (
        <section className="py-20 lg:py-28 bg-muse-cream" id="application-form">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="Grant Application Form"
              subtitle="Complete all fields below. Fields marked with * are required."
              centered={false}
            />

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thank you for your application. This is a demo form — in production, your submission would be received by the MUSE Foundation team."
                );
              }}
              className="space-y-8"
            >
              {/* Organisation Details */}
              <Card hover={false} padding="lg">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-5 h-5 text-muse-gold" />
                  <h3 className="font-serif font-bold text-lg text-muse-dark">
                    Organisation Details
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muse-dark mb-1">
                      Organisation Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-muse-light-gray bg-white text-sm focus:outline-none focus:border-muse-gold focus:ring-1 focus:ring-muse-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muse-dark mb-1">
                      ABN *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-muse-light-gray bg-white text-sm focus:outline-none focus:border-muse-gold focus:ring-1 focus:ring-muse-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muse-dark mb-1">
                      ACNC Registration Number
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-muse-light-gray bg-white text-sm focus:outline-none focus:border-muse-gold focus:ring-1 focus:ring-muse-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muse-dark mb-1">
                      DGR Status *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-muse-light-gray bg-white text-sm focus:outline-none focus:border-muse-gold focus:ring-1 focus:ring-muse-gold"
                    >
                      <option value="">Select...</option>
                      <option>Item 1 DGR</option>
                      <option>Item 2 DGR</option>
                      <option>Item 4 DGR</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muse-dark mb-1">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-muse-light-gray bg-white text-sm focus:outline-none focus:border-muse-gold focus:ring-1 focus:ring-muse-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muse-dark mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-muse-light-gray bg-white text-sm focus:outline-none focus:border-muse-gold focus:ring-1 focus:ring-muse-gold"
                    />
                  </div>
                </div>
              </Card>

              {/* Project Details */}
              <Card hover={false} padding="lg">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-5 h-5 text-muse-gold" />
                  <h3 className="font-serif font-bold text-lg text-muse-dark">
                    Project Details
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-muse-dark mb-1">
                      Project Title *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-muse-light-gray bg-white text-sm focus:outline-none focus:border-muse-gold focus:ring-1 focus:ring-muse-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muse-dark mb-1">
                      Grant Theme *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-muse-light-gray bg-white text-sm focus:outline-none focus:border-muse-gold focus:ring-1 focus:ring-muse-gold"
                    >
                      <option value="">Select a theme...</option>
                      <option>Financial Literacy & Value Education</option>
                      <option>Cultural Heritage Preservation</option>
                      <option>Youth Capability & Education Pathways</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muse-dark mb-1">
                      Grant Type *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-muse-light-gray bg-white text-sm focus:outline-none focus:border-muse-gold focus:ring-1 focus:ring-muse-gold"
                    >
                      <option value="">Select a type...</option>
                      <option>Small Grant (A$5K–20K)</option>
                      <option>Strategic Grant (A$25K–100K+)</option>
                      <option>Named/Thematic Fund</option>
                      <option>Annual Signature Grant</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muse-dark mb-1">
                      Requested Amount (AUD) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 30,000"
                      className="w-full px-4 py-2.5 rounded-lg border border-muse-light-gray bg-white text-sm focus:outline-none focus:border-muse-gold focus:ring-1 focus:ring-muse-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muse-dark mb-1">
                      Project Summary * (max 500 words)
                    </label>
                    <textarea
                      required
                      rows={5}
                      maxLength={3000}
                      className="w-full px-4 py-2.5 rounded-lg border border-muse-light-gray bg-white text-sm focus:outline-none focus:border-muse-gold focus:ring-1 focus:ring-muse-gold resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muse-dark mb-1">
                      Expected Outcomes *
                    </label>
                    <textarea
                      required
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-lg border border-muse-light-gray bg-white text-sm focus:outline-none focus:border-muse-gold focus:ring-1 focus:ring-muse-gold resize-none"
                    />
                  </div>
                </div>
              </Card>

              {/* Budget & Supporting Docs */}
              <Card hover={false} padding="lg">
                <div className="flex items-center gap-3 mb-6">
                  <ClipboardList className="w-5 h-5 text-muse-gold" />
                  <h3 className="font-serif font-bold text-lg text-muse-dark">
                    Budget & Supporting Documents
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-muse-dark mb-1">
                      Budget Overview *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Provide a summary budget breakdown for the requested funds..."
                      className="w-full px-4 py-2.5 rounded-lg border border-muse-light-gray bg-white text-sm focus:outline-none focus:border-muse-gold focus:ring-1 focus:ring-muse-gold resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muse-dark mb-1">
                      Additional Information
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Any additional context, links, or references..."
                      className="w-full px-4 py-2.5 rounded-lg border border-muse-light-gray bg-white text-sm focus:outline-none focus:border-muse-gold focus:ring-1 focus:ring-muse-gold resize-none"
                    />
                  </div>
                </div>
              </Card>

              <div className="flex items-start gap-3">
                <input type="checkbox" required id="declaration" className="mt-1" />
                <label htmlFor="declaration" className="text-sm text-muse-gray">
                  I declare that the information provided is accurate and
                  complete. I understand that MUSE Foundation may verify all
                  information and that providing false information may result in
                  disqualification. *
                </label>
              </div>

              <div className="flex justify-end">
                <Button type="submit" size="lg">
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Common questions about the application process."
          />

          <div className="space-y-4">
            {[
              {
                q: "How long does the review process take?",
                a: "We aim to acknowledge applications within 5 business days and complete initial review within 4–6 weeks. The full process from submission to decision typically takes 8–12 weeks.",
              },
              {
                q: "Can individuals apply for grants?",
                a: "No. MUSE Foundation only provides grants to eligible organisations that hold DGR endorsement. Individuals cannot apply directly.",
              },
              {
                q: "Is there a deadline for applications?",
                a: "We accept applications on a rolling basis. However, we recommend applying at least 3 months before your project start date to allow adequate review time.",
              },
              {
                q: "What happens after I submit?",
                a: "You will receive an acknowledgment email. Our team will review your application for eligibility and completeness, then contact you if additional information is needed.",
              },
              {
                q: "Can I apply for more than one grant?",
                a: "Yes, organisations may submit multiple applications for different projects. Each application is assessed independently.",
              },
            ].map((faq) => (
              <Card key={faq.q} hover={false} padding="md">
                <h4 className="font-semibold text-muse-dark mb-2">{faq.q}</h4>
                <p className="text-sm text-muse-gray leading-relaxed">
                  {faq.a}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
