import { Button } from "@/components/shared/Button";

export function CallToAction() {
  return (
    <section className="py-20 lg:py-28 bg-muse-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-muse-gold/10 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-1 bg-muse-gold mx-auto mb-8" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-muse-cream mb-6">
          Ready to Make a
          <br />
          <span className="text-muse-gold">Lasting Difference?</span>
        </h2>
        <p className="text-muse-cream/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you&apos;re seeking funding for a qualifying project or looking
          to contribute to meaningful change, we invite you to connect with us.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/grantmaking/apply" size="lg">
            Apply for a Grant
          </Button>
          <Button href="/get-involved" variant="outline" size="lg">
            Become a Donor
          </Button>
        </div>
      </div>
    </section>
  );
}
