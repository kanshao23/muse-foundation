"use client";

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-muse-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-16 h-1 bg-muse-gold mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-muse-cream mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muse-cream/70 leading-relaxed">
              Whether you have a question about grants, donations, or
              partnerships, we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <SectionTitle
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll respond within 3–5 business days."
                centered={false}
              />

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "Thank you for your message. This is a demo form — in production, your message would be sent to the MUSE Foundation team."
                  );
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muse-dark mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-muse-light-gray bg-white text-sm focus:outline-none focus:border-muse-gold focus:ring-1 focus:ring-muse-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muse-dark mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-muse-light-gray bg-white text-sm focus:outline-none focus:border-muse-gold focus:ring-1 focus:ring-muse-gold"
                    />
                  </div>
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

                <div>
                  <label className="block text-sm font-medium text-muse-dark mb-1">
                    Organisation (if applicable)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg border border-muse-light-gray bg-white text-sm focus:outline-none focus:border-muse-gold focus:ring-1 focus:ring-muse-gold"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muse-dark mb-1">
                    Subject *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-muse-light-gray bg-white text-sm focus:outline-none focus:border-muse-gold focus:ring-1 focus:ring-muse-gold"
                  >
                    <option value="">Select a topic...</option>
                    <option>General Enquiry</option>
                    <option>Grant Application Query</option>
                    <option>Donation or Giving</option>
                    <option>Corporate Partnership</option>
                    <option>Named Fund Enquiry</option>
                    <option>Media or Press</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muse-dark mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-lg border border-muse-light-gray bg-white text-sm focus:outline-none focus:border-muse-gold focus:ring-1 focus:ring-muse-gold resize-none"
                  />
                </div>

                <Button type="submit">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <SectionTitle
                title="Contact Details"
                subtitle=""
                centered={false}
              />

              <div className="space-y-6">
                <Card hover={false} padding="md">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-muse-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-muse-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-muse-dark mb-1">
                        Email
                      </h4>
                      <p className="text-sm text-muse-gray">
                        {siteConfig.email}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card hover={false} padding="md">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-muse-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-muse-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-muse-dark mb-1">
                        Phone
                      </h4>
                      <p className="text-sm text-muse-gray">
                        {siteConfig.phone}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card hover={false} padding="md">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-muse-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-muse-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-muse-dark mb-1">
                        Address
                      </h4>
                      <p className="text-sm text-muse-gray">
                        {siteConfig.address}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card hover={false} padding="md">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-muse-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-muse-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-muse-dark mb-1">
                        Office Hours
                      </h4>
                      <p className="text-sm text-muse-gray">
                        Monday – Friday: 9:00 AM – 5:00 PM AEST
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-muse-cream rounded-xl border border-muse-light-gray">
                <h4 className="font-serif font-bold text-muse-dark mb-3">
                  For Grant Enquiries
                </h4>
                <p className="text-sm text-muse-gray leading-relaxed mb-4">
                  If you have questions about the grant application process,
                  please review our FAQ page first. For specific enquiries,
                  contact us using the subject &quot;Grant Application
                  Query.&quot;
                </p>
                <Button href="/grantmaking/apply" variant="outline" size="sm">
                  View Application Page
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
