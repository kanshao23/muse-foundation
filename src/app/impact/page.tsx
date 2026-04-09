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

          {/* Theme Distribution — Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Donut Chart */}
            <div className="flex justify-center">
              <div className="relative">
                <svg width="280" height="280" viewBox="0 0 280 280" className="transform -rotate-90">
                  {/* Background circle */}
                  <circle cx="140" cy="140" r="110" fill="none" stroke="#E8E6E1" strokeWidth="32" />
                  {/* Cultural Heritage: 40% = 144deg */}
                  <circle
                    cx="140" cy="140" r="110" fill="none"
                    stroke="#3D6B50" strokeWidth="32"
                    strokeDasharray={`${2 * Math.PI * 110 * 0.40} ${2 * Math.PI * 110 * (1 - 0.40)}`}
                    strokeDashoffset="0"
                    strokeLinecap="round"
                  />
                  {/* Financial Literacy: 35% = 126deg, starts after Cultural Heritage */}
                  <circle
                    cx="140" cy="140" r="110" fill="none"
                    stroke="#C4A265" strokeWidth="32"
                    strokeDasharray={`${2 * Math.PI * 110 * 0.35} ${2 * Math.PI * 110 * (1 - 0.35)}`}
                    strokeDashoffset={`${-2 * Math.PI * 110 * 0.40}`}
                    strokeLinecap="round"
                  />
                  {/* Youth Pathways: 25% = 90deg, starts after Financial Literacy */}
                  <circle
                    cx="140" cy="140" r="110" fill="none"
                    stroke="#A8873E" strokeWidth="32"
                    strokeDasharray={`${2 * Math.PI * 110 * 0.25} ${2 * Math.PI * 110 * (1 - 0.25)}`}
                    strokeDashoffset={`${-2 * Math.PI * 110 * 0.75}`}
                    strokeLinecap="round"
                  />
                </svg>
                {/* Center label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-muse-dark">A$285K</span>
                  <span className="text-xs text-muse-gray">Total Distributed</span>
                </div>
              </div>
            </div>

            {/* Legend + Bar Chart */}
            <div className="space-y-6">
              <h3 className="font-serif font-bold text-xl text-muse-dark">
                Distribution by Theme
              </h3>
              {annualData.themes.map((theme) => {
                const colors: Record<string, string> = {
                  "Financial Literacy": "bg-muse-gold",
                  "Cultural Heritage": "bg-muse-green-light",
                  "Youth Pathways": "bg-muse-gold-dark",
                };
                const dotColors: Record<string, string> = {
                  "Financial Literacy": "bg-muse-gold",
                  "Cultural Heritage": "bg-muse-green-light",
                  "Youth Pathways": "bg-muse-gold-dark",
                };
                return (
                  <div key={theme.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${dotColors[theme.name]}`} />
                        <span className="text-sm font-medium text-muse-dark">
                          {theme.name}
                        </span>
                      </div>
                      <span className="text-sm text-muse-gray font-medium">
                        {theme.amount} ({theme.percentage}%)
                      </span>
                    </div>
                    <div className="h-4 bg-muse-cream-dark rounded-full overflow-hidden">
                      <div
                        className={`h-full ${colors[theme.name]} rounded-full transition-all duration-700`}
                        style={{ width: `${theme.percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Grant Amount by Quarter — Bar Chart */}
          <div className="mt-16">
            <h3 className="font-serif font-bold text-xl text-muse-dark mb-2 text-center">
              Quarterly Grant Distribution
            </h3>
            <p className="text-sm text-muse-gray text-center mb-8">
              Tracking grant output across the fiscal year
            </p>

            <div className="bg-muse-cream rounded-2xl p-6 md:p-8">
              <div className="flex items-end justify-center gap-6 md:gap-10 h-52 md:h-64">
                {[
                  { label: "Q1", value: 45, amount: "A$45K" },
                  { label: "Q2", value: 72, amount: "A$72K" },
                  { label: "Q3", value: 90, amount: "A$90K" },
                  { label: "Q4", value: 78, amount: "A$78K" },
                ].map((quarter) => (
                  <div key={quarter.label} className="flex flex-col items-center gap-2">
                    <span className="text-xs font-medium text-muse-dark">{quarter.amount}</span>
                    <div className="w-12 md:w-16 bg-muse-cream-dark rounded-t-lg relative overflow-hidden" style={{ height: "200px" }}>
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-muse-gold to-muse-gold-light rounded-t-lg transition-all duration-700"
                        style={{ height: `${quarter.value}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-muse-gray">{quarter.label}</span>
                  </div>
                ))}
              </div>
            </div>
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
