import { Button } from "@/components/shared/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muse-dark via-muse-green to-muse-dark" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4A265' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-block mb-6">
          <span className="text-muse-gold/80 text-sm tracking-[0.3em] uppercase font-medium">
            Public Ancillary Fund
          </span>
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
