# MUSE Foundation Website

The official website for **MUSE Foundation** — a public ancillary fund dedicated to empowering cultural stewardship through purposeful philanthropy.

## 🏛️ About

MUSE Foundation supports organisations that advance:

- **Financial Literacy & Value Education** — Building financial capability and long-term economic resilience
- **Cultural Heritage Preservation** — Preserving traditions, craftsmanship, and cultural knowledge
- **Youth Capability & Education Pathways** — Empowering young Australians through non-traditional education

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.app/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: TypeScript
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://motion.dev/)

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, themes, stats, featured grants |
| `/about` | Mission, governance, compliance information |
| `/grantmaking` | Grant framework, products, assessment criteria |
| `/grantmaking/apply` | Eligibility check + grant application form |
| `/get-involved` | Donation options, corporate partnerships |
| `/impact` | Case stories, annual data, impact reporting |
| `/contact` | Contact form and information |
| `/legal` | Privacy policy, donation terms, disclaimer |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/kanshao23/muse-foundation.git
cd muse-foundation

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

- **Primary Color**: Deep Forest Green (`#1A2F23`)
- **Accent Color**: Gold/Bronze (`#C4A265`)
- **Background**: Warm Cream (`#FAFAF5`)
- **Typography**: Serif headings + Sans-serif body text

## 📋 Compliance

This website is designed to support the regulatory requirements of a public ancillary fund in Australia:

- ACNC registration display
- DGR status disclosure
- ABN visibility
- Annual distribution rate (4%) transparency
- Clear separation from commercial entities
- Privacy policy and donation terms

## 📦 Deployment

### Vercel (Recommended)

1. Connect the GitHub repository to [Vercel](https://vercel.com)
2. Deploy automatically on push

### Static Export

The site can be configured for static export by adding `output: 'export'` to `next.config.ts`.

## 📝 Customization

- **Site config**: `src/data/site.ts` — Foundation details, navigation, themes
- **Colors**: `src/app/globals.css` — CSS custom properties
- **Components**: `src/components/` — Reusable UI components

## 📄 License

© 2026 MUSE Foundation Ltd. All rights reserved.
