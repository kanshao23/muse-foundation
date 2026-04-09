"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/site";
import { Button } from "@/components/shared/Button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-muse-cream/95 backdrop-blur-md border-b border-muse-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-muse-dark rounded-lg flex items-center justify-center group-hover:bg-muse-green transition-colors">
              <span className="text-muse-gold font-serif font-bold text-lg">
                M
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="text-muse-dark font-serif font-bold text-lg">
                MUSE
              </span>
              <span className="text-muse-gray text-sm block -mt-1">
                Foundation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muse-charcoal hover:text-muse-gold transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button href="/grantmaking/apply" variant="outline" size="sm">
              Apply for a Grant
            </Button>
            <Button href="/get-involved" size="sm">
              Donate
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-muse-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-muse-cream border-t border-muse-light-gray">
          <div className="px-4 py-4 space-y-1">
            {navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 px-4 text-muse-charcoal hover:bg-muse-dark/5 rounded-lg font-medium"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button
                href="/grantmaking/apply"
                variant="outline"
                size="sm"
                className="w-full"
              >
                Apply for a Grant
              </Button>
              <Button href="/get-involved" size="sm" className="w-full">
                Donate
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
