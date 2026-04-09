import {
  BookOpen,
  Landmark,
  GraduationCap,
  TrendingUp,
  Download,
} from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Explore the impact of MUSE Foundation's grantmaking through case stories and annual reporting.",
};

const caseStories = [
  {
    category: "Financial Literacy",
    icon: BookOpen,
    title: "Building Financial Confidence in Western Sydney",
    recipient: "Community Education Centre (DGR-endorsed)",
    amount: "A$35,000",
    duration: "12 months",
    background:
      "Many recently arrived migrants and refugees face significant barriers to understanding the Australian financial system, from banking to taxation to consumer rights.",
    approach:
      "MUSE Foundation funded a series of 24 financial capability workshops delivered in partnership with a registered education centre in Western Sydney.",
    outcomes: [
      "320+ participants across 8 community groups",
      "95% reported improved financial confidence",
      "78% opened their first Australian bank account",
      "Ongoing program adopted by 3 additional centres",
    ],
    quote:
      "For the first time, I understood how superannuation works in Australia. This knowledge changed how I plan for my family's future.",
    author: "Program participant, Auburn NSW",
  },
  {
    category: "Cultural Heritage",
    icon: Landmark,
    title: "Preserving Aboriginal Weaving Traditions",
    recipient: "Cultural Arts Organisation (DGR-endorsed)",
    amount: "A$50,000",
    duration: "18 months",
    background:
      "Traditional Aboriginal weaving techniques are at risk of being lost as elder practitioners age and fewer young people take up the craft.",
    approach:
      "Funded a documentation and teaching program that paired elder weavers with apprentices, creating both a digital archive and live workshop series.",
    outcomes: [
      "6 elder-mentor pairings established",
      "200+ hours of technique documented on video",
      "12 public exhibitions across regional NSW",
      "Curriculum developed for school integration",
    ],
    quote:
      "When I see young hands weaving the patterns my grandmother taught me, I know our stories will continue.",
    author: "Elder weaver, Northern Rivers",
  },
  {
    category: "Youth Pathways",
    icon: GraduationCap,
    title: "Heritage Trades Apprenticeship Program",
    recipient: "Non-Traditional Education Provider (DGR-endorsed)",
    amount: "A$25,000",
    duration: "6 months (pilot)",
    background:
      "Many young people in regional areas lack access to vocational training in heritage trades such as stone masonry, timber framing, and traditional finishing.",
    approach:
      "Pilot program connecting young people (16–24) with master tradespeople for hands-on apprenticeship experience in heritage building techniques.",
    outcomes: [
      "15 apprentices placed across 5 heritage sites",
      "3 apprentices offered ongoing employment",
      "Partnership with 2 TAFE colleges established",
      "Program model adopted for expansion",
    ],
    quote:
      "I never thought working with my hands could feel this meaningful. Now I'm restoring buildings that are older than my grandparents.",
    author: "Apprentice, age 19, Blue Mountains",
  },
];

const annualData = {
  year: "2025–2026",
  totalReceived: "A$620,000",
  totalDistributed: "A$285,000",
  grantsCount: 8,
  orgsSupported: 6,
  themes: [
    { name: "Financial Literacy", percentage: 35, amount: "A$99,750" },
    { name: "Cultural Heritage", percentage: 40, amount: "A$114,000" },
    { name: "Youth Pathways", percentage: 25, amount: "A$71,250" },
  ],
};

export default function ImpactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-muse-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-16 h-1 bg-muse-gold mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-muse-cream mb-6">
              Our Impact
            </h1>
            <p className="text-lg text-muse-cream/70 leading-relaxed">
              Real projects, measurable outcomes. Here&apos;s how MUSE
              Foundation grants are creating lasting change in communities across
              Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Annual Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={`Annual Overview: ${annualData.year}`}
            subtitle="A snapshot of our grantmaking activity and fund allocation."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-muse-cream rounded-xl">
              <div className="text-3xl font-serif font-bold text-muse-dark mb-1">
                {annualData.totalReceived}
              </div>
              <div className="text-sm text-muse-gray">
                Total Donations Received
              </div>
            </div>
            <div className="text-center p-6 bg-muse-cream rounded-xl">
              <div className="text-3xl font-serif font-bold text-muse-gold mb-1">
                {annualData.totalDistributed}
              </div>
              <div className="text-sm text-muse-gray">
                Total Grants Distributed
              </div>
            </div>
            <div className="text-center p-6 bg-muse-cream rounded-xl">
              <div className="text-3xl font-serif font-bold text-muse-dark mb-1">
                {annualData.grantsCount}
              </div>
              <div className="text-sm text-muse-gray">Grants Awarded</div>
            </div>
            <div className="text-center p-6 bg-muse-cream rounded-xl">
              <div className="text-3xl font-serif font-bold text-muse-dark mb-1">
                {annualData.orgsSupported}
              </div>
              <div className="text-sm text-muse-gray">
                Organisations Supported
              </div>
            </div>
          </div>

          {/* Theme Distribution */}
          <h3 className="font-serif font-bold text-xl text-muse-dark mb-6 text-center">
            Distribution by Theme
          </h3>
          <div className="max-w-2xl mx-auto space-y-4">
            {annualData.themes.map((theme) => (
              <div key={theme.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-muse-dark">
                    {theme.name}
                  </span>
                  <span className="text-sm text-muse-gray">
                    {theme.amount} ({theme.percentage}%)
                  </span>
                </div>
                <div className="h-3 bg-muse-cream-dark rounded-full overflow-hidden">
                  <div
                    className="h-full bg-muse-gold rounded-full transition-all duration-500"
                    style={{ width: `${theme.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="secondary" size="md">
              <Download className="w-4 h-4 mr-2" />
              Download Full Annual Report (PDF)
            </Button>
            <p className="text-xs text-muse-gray mt-3">
              Full annual report will be available after the Foundation&apos;s
              first complete financial year.
            </p>
          </div>
        </div>
      </section>

      {/* Case Stories */}
      <section className="py-20 lg:py-28 bg-muse-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Grant Case Stories"
            subtitle="Behind every grant is a story of impact. Here are some of the projects we're proud to have supported."
          />

          <div className="space-y-16">
            {caseStories.map((story) => {
              const Icon = story.icon;
              return (
                <div
                  key={story.title}
                  className="bg-white rounded-2xl border border-muse-light-gray overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Sidebar */}
                    <div className="bg-muse-dark p-8 lg:p-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-muse-gold/20 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-muse-gold" />
                        </div>
                        <span className="text-muse-gold text-sm font-semibold uppercase tracking-wide">
                          {story.category}
                        </span>
                      </div>

                      <h3 className="font-serif font-bold text-xl text-muse-cream mb-6">
                        {story.title}
                      </h3>

                      <div className="space-y-4">
                        <div>
                          <p className="text-xs text-muse-cream/50 uppercase tracking-wide mb-1">
                            Recipient
                          </p>
                          <p className="text-sm text-muse-cream/80">
                            {story.recipient}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muse-cream/50 uppercase tracking-wide mb-1">
                            Grant Amount
                          </p>
                          <p className="text-sm text-muse-cream/80 font-semibold">
                            {story.amount}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muse-cream/50 uppercase tracking-wide mb-1">
                            Duration
                          </p>
                          <p className="text-sm text-muse-cream/80">
                            {story.duration}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2 p-8 lg:p-10">
                      <div className="mb-6">
                        <h4 className="font-semibold text-muse-dark mb-2">
                          Background
                        </h4>
                        <p className="text-sm text-muse-gray leading-relaxed">
                          {story.background}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-muse-dark mb-2">
                          Our Approach
                        </h4>
                        <p className="text-sm text-muse-gray leading-relaxed">
                          {story.approach}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-muse-dark mb-3">
                          Outcomes
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {story.outcomes.map((outcome) => (
                            <div
                              key={outcome}
                              className="flex items-start gap-2 p-3 bg-muse-cream rounded-lg"
                            >
                              <TrendingUp className="w-4 h-4 text-muse-green-light mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muse-gray">
                                {outcome}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quote */}
                      <blockquote className="border-l-4 border-muse-gold pl-4 py-2 bg-muse-gold/5 rounded-r-lg">
                        <p className="text-sm text-muse-dark italic mb-2">
                          &ldquo;{story.quote}&rdquo;
                        </p>
                        <cite className="text-xs text-muse-gray">
                          — {story.author}
                        </cite>
                      </blockquote>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
