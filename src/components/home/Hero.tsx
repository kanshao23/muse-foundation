import { Button } from "@/components/shared/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muse-dark via-muse-green to-muse-dark" />

      {/* Decorative SVG Pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C4A265" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating decorative circles */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-muse-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-muse-gold/5 rounded-full blur-3xl" />

      {/* Geometric accent shapes */}
      <svg
        className="absolute top-20 right-[15%] w-24 h-24 text-muse-gold/10"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="1" transform="rotate(15 50 50)" />
        <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="0.5" transform="rotate(-10 50 50)" />
      </svg>

      <svg
        className="absolute bottom-32 left-[10%] w-20 h-20 text-muse-gold/8"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      {/* Gold accent line on left */}
      <div className="absolute left-8 top-1/3 bottom-1/3 w-px bg-gradient-to-b from-transparent via-muse-gold/30 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-block mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-muse-gold/60" />
            <span className="text-muse-gold/80 text-sm tracking-[0.3em] uppercase font-medium">
              Public Ancillary Fund
            </span>
            <div className="w-8 h-px bg-muse-gold/60" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-muse-cream leading-tight mb-8">
          Empowering Cultural
          <br />
          <span className="text-muse-gold">Stewardship</span>
        </h1>

        <p className="text-lg sm:text-xl text-muse-cream/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          Through purposeful philanthropy, we support organisations that preserve
          heritage, build financial capability, and create pathways for the next
          generation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/grantmaking/apply" variant="primary" size="lg">
            Apply for a Grant
          </Button>
          <Button href="/get-involved" variant="outline" size="lg">
            Support Our Mission
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muse-cream/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muse-gold rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
