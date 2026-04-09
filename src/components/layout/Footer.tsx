import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig, navigation } from "@/data/site";
import { ComplianceBadge } from "@/components/shared/ComplianceBadge";

export function Footer() {
  return (
    <footer className="bg-muse-dark text-muse-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-muse-gold/20 rounded-lg flex items-center justify-center">
                <span className="text-muse-gold font-serif font-bold text-lg">
                  M
                </span>
              </div>
              <div>
                <span className="text-muse-cream font-serif font-bold text-lg">
                  MUSE
                </span>
                <span className="text-muse-cream/60 text-sm block -mt-1">
                  Foundation
                </span>
              </div>
            </Link>
            <p className="text-muse-cream/60 text-sm leading-relaxed mb-6">
              Empowering cultural stewardship through purposeful philanthropy.
              A public ancillary fund registered with ACNC.
            </p>
            <div className="space-y-2">
              <ComplianceBadge type="acnc" value={siteConfig.acnc} />
              <ComplianceBadge type="dgr" value={siteConfig.dgr} />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif font-bold text-muse-gold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muse-cream/70 hover:text-muse-gold transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/grantmaking/apply"
                  className="text-muse-cream/70 hover:text-muse-gold transition-colors text-sm"
                >
                  Apply for a Grant
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="text-muse-cream/70 hover:text-muse-gold transition-colors text-sm"
                >
                  Legal & Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Grant Products */}
          <div>
            <h3 className="font-serif font-bold text-muse-gold mb-4">
              Grant Programs
            </h3>
            <ul className="space-y-2">
              <li className="text-muse-cream/70 text-sm">Small Grants</li>
              <li className="text-muse-cream/70 text-sm">Strategic Grants</li>
              <li className="text-muse-cream/70 text-sm">
                Named &amp; Thematic Funds
              </li>
              <li className="text-muse-cream/70 text-sm">
                Annual Signature Grants
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-muse-gold mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-muse-gold mt-0.5 flex-shrink-0" />
                <span className="text-muse-cream/70 text-sm">
                  {siteConfig.email}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-muse-gold mt-0.5 flex-shrink-0" />
                <span className="text-muse-cream/70 text-sm">
                  {siteConfig.phone}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-muse-gold mt-0.5 flex-shrink-0" />
                <span className="text-muse-cream/70 text-sm">
                  {siteConfig.address}
                </span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-muse-cream/5 rounded-lg">
              <p className="text-muse-cream/50 text-xs">
                ABN: {siteConfig.abn}
              </p>
              <p className="text-muse-cream/50 text-xs mt-1">
                Annual minimum distribution rate: {siteConfig.annualDistributionRate}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muse-cream/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muse-cream/40 text-xs">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <p className="text-muse-cream/40 text-xs">
            MUSE Foundation is an independent charitable entity, separate from
            MUSE commercial operations.
          </p>
        </div>
      </div>
    </footer>
  );
}
