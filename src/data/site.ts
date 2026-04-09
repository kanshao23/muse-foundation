export const siteConfig = {
  name: "MUSE Foundation",
  legalName: "MUSE Foundation Ltd",
  description:
    "A public ancillary fund dedicated to empowering cultural stewardship through purposeful philanthropy.",
  url: "https://musefoundation.org.au",
  abn: "00 000 000 000",
  acnc: "Pending Registration",
  dgr: "Endorsed as a Deductible Gift Recipient",
  email: "info@musefoundation.org.au",
  phone: "+61 0 0000 0000",
  address: "Sydney, NSW, Australia",
  annualDistributionRate: "4%",
};

export const navigation = {
  main: [
    { label: "About", href: "/about" },
    { label: "Grantmaking", href: "/grantmaking" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Impact", href: "/impact" },
    { label: "Contact", href: "/contact" },
  ],
  cta: [
    { label: "Apply for a Grant", href: "/grantmaking/apply" },
    { label: "Donate", href: "/get-involved" },
  ],
};

export const themes = [
  {
    id: "financial-literacy",
    title: "Financial Literacy & Value Education",
    shortTitle: "Financial Literacy",
    icon: "BookOpen",
    description:
      "Supporting programs that build financial capability, value awareness, and long-term economic resilience in communities across Australia.",
    color: "muse-gold",
  },
  {
    id: "cultural-heritage",
    title: "Cultural Heritage Preservation",
    shortTitle: "Cultural Heritage",
    icon: "Landmark",
    description:
      "Preserving and celebrating cultural traditions, craftsmanship, and heritage through education, documentation, and community engagement.",
    color: "muse-green-light",
  },
  {
    id: "youth-pathways",
    title: "Youth Capability & Education Pathways",
    shortTitle: "Youth Pathways",
    icon: "GraduationCap",
    description:
      "Empowering young Australians through non-traditional education pathways, mentorship, and capability-building programs.",
    color: "muse-gold-dark",
  },
];

export const grantProducts = [
  {
    id: "small-grants",
    title: "Small Grants",
    range: "A$5,000 – A$20,000",
    description:
      "Ideal for pilot projects, early-stage partnerships, and smaller organisations. Quick to deploy, designed to build the Foundation's external presence and accumulate impact cases.",
    icon: "Sprout",
    features: [
      "Pilot project support",
      "Early-stage partnerships",
      "Quick deployment cycle",
      "Community-level impact",
    ],
  },
  {
    id: "strategic-grants",
    title: "Strategic Grants",
    range: "A$25,000 – A$100,000+",
    description:
      "For established educational, cultural, and research institutions. Designed to create meaningful impact and lasting institutional relationships.",
    icon: "Target",
    features: [
      "Established institution partnerships",
      "Multi-year funding available",
      "Research & education focus",
      "Measurable outcomes",
    ],
  },
  {
    id: "named-funds",
    title: "Named & Thematic Funds",
    range: "Custom",
    description:
      "Allow donors, families, and enterprises to establish themed sub-funds under MUSE Foundation, creating a personalised philanthropic vehicle with full compliance.",
    icon: "Gem",
    features: [
      "Personalised fund naming",
      "Family & enterprise giving",
      "DGR-compliant structuring",
      "Ongoing donor engagement",
    ],
  },
  {
    id: "signature-grants",
    title: "Annual Signature Grants",
    range: "Flagship",
    description:
      "One to two flagship grants each year that define the Foundation's identity and demonstrate its commitment to cultural stewardship.",
    icon: "Award",
    features: [
      "Cultural Stewardship Grant",
      "Future Value Education Grant",
      "Craft & Legacy Preservation Grant",
      "Annual showcase events",
    ],
  },
];

export const assessmentCriteria = [
  {
    title: "Mission Alignment",
    description:
      "How well the project aligns with MUSE Foundation's grant themes and charitable purposes.",
  },
  {
    title: "Project Feasibility",
    description:
      "Clear plan, realistic timeline, and evidence of organisational capacity to deliver.",
  },
  {
    title: "Budget Reasonableness",
    description:
      "Transparent, justified budget with appropriate allocation of resources.",
  },
  {
    title: "Beneficiary Impact",
    description:
      "Number of beneficiaries reached and potential for lasting positive change.",
  },
  {
    title: "Governance & Delivery",
    description:
      "Strong organisational governance, compliance track record, and delivery capability.",
  },
  {
    title: "Risk & Reputation",
    description:
      "Assessment of reputational, operational, and financial risks.",
  },
];
