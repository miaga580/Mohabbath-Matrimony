import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Pricing & Premium Membership | Mohabbath Matrimony',
  description: 'View transparent membership plans and pricing for Mohabbath Matrimony. Unlock extended messaging, contact sharing, and profile boosts.',
  alternates: {
    canonical: `${siteConfig.websiteUrl}/premium`,
  },
  openGraph: {
    title: 'Pricing & Premium Membership | Mohabbath Matrimony',
    description: 'View transparent membership plans and pricing for Mohabbath Matrimony.',
    url: `${siteConfig.websiteUrl}/premium`,
  },
};

export default function Premium() {
  const benefits = [
    {
      title: "Extended messaging",
      description: "Converse freely with your accepted matches in a secure and respectful environment."
    },
    {
      title: "Verified Contacts",
      description: "Request and view authenticated contact numbers of matches upon mutual consent."
    },
    {
      title: "Profile Insights",
      description: "Discover which interested profiles have viewed and shortlisted your profile."
    },
    {
      title: "Priority Visibility",
      description: "Elevate your profile's standing in recommendations to receive more relevant matches."
    },
    {
      title: "Privacy Controls",
      description: "Unlock granular photo and contact visibility controls designed for your comfort."
    },
    {
      title: "Refined Search",
      description: "Find exactly what you seek with highly granular faith and family lifestyle filters."
    }
  ];

  return (
    <div className="pt-32 pb-40 bg-surface min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl text-center">
        {/* Hero Header */}
        <div className="mb-20">
          <span className="inline-block text-brand-text font-sans text-xs tracking-[0.3em] uppercase mb-6">Transparent Membership</span>
          <h1 className="font-serif text-5xl lg:text-7xl font-medium text-brand-text mb-8 tracking-tight leading-[1.1]">
            Plans & <span className="italic font-light">Pricing.</span>
          </h1>
          <p className="text-xl text-foreground/60 font-light leading-relaxed max-w-2xl mx-auto mb-8">
            Honest, transparent pricing designed to assist your family in finding a compatible life partner.
          </p>
          <div className="inline-flex items-center justify-center px-8 py-3 border border-brand-text/30 text-brand-text rounded-full text-xs uppercase tracking-widest font-medium">
            {siteConfig.plansPurchaseNote}
          </div>
        </div>

        {/* Pricing Cards Section */}
        <section id="pricing" className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 text-left mb-12 max-w-4xl mx-auto">
            {siteConfig.plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-background rounded-3xl p-8 lg:p-10 flex flex-col justify-between border transition-transform duration-500 hover:-translate-y-1 ${
                  plan.popular
                    ? 'border-brand-text shadow-xl ring-1 ring-brand-text'
                    : 'border-foreground/10 luxury-shadow'
                }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-widest font-semibold py-1 px-4 rounded-full ${
                    plan.popular ? 'bg-brand-text text-white shadow-md' : 'bg-surface border border-brand-text/30 text-brand-text'
                  }`}>
                    {plan.badge}
                  </div>
                )}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-serif font-medium text-brand-text">{plan.name}</h3>
                    <span className="text-xs uppercase tracking-widest text-foreground/50 font-medium py-1 px-2.5 bg-surface rounded-full border border-foreground/5">
                      {plan.duration}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 my-4">
                    <span className="text-4xl font-bold font-sans">₹{plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-foreground/40 text-lg line-through font-light">₹{plan.originalPrice}</span>
                    )}
                    {plan.monthlyEquivalent && (
                      <span className="text-brand-text font-medium text-sm ml-auto">({plan.monthlyEquivalent})</span>
                    )}
                  </div>

                  <p className="text-xs text-foreground/50 font-light mb-6">
                    {siteConfig.taxNote}
                  </p>
                  <ul className="space-y-3 border-t border-foreground/[0.06] pt-6 mb-8 text-sm text-foreground/70 font-light">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <span className="text-brand-text font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-foreground/[0.06] text-center">
                  <span className="text-xs uppercase tracking-widest text-foreground/50 font-medium">
                    Available in App
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Profile Boost Add-on Packages Section */}
          <div className="bg-background border border-foreground/10 rounded-3xl p-8 lg:p-10 max-w-4xl mx-auto luxury-shadow text-left mb-12">
            <div className="text-center mb-8">
              <span className="inline-block text-xs uppercase tracking-widest text-brand-gold bg-brand-text px-3 py-1 rounded-full font-medium mb-3">
                Extra Profile Boosts
              </span>
              <h3 className="text-2xl lg:text-3xl font-serif font-medium text-brand-text mb-2">
                Get Extra Profile Boosts
              </h3>
              <p className="text-foreground/70 font-light text-sm max-w-lg mx-auto">
                {siteConfig.boostNote} (Note: Pricing may be updated inside the app).
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-6">
              {siteConfig.boostPackages.map((boost, bIdx) => (
                <div
                  key={bIdx}
                  className={`relative p-6 rounded-2xl flex flex-col items-center text-center justify-between border transition-all duration-300 ${
                    boost.popular
                      ? 'border-brand-text bg-surface shadow-md ring-1 ring-brand-text'
                      : 'border-foreground/10 bg-background hover:border-foreground/20'
                  }`}
                >
                  {boost.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-text text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-0.5 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div className="w-full">
                    <span className="text-2xl mb-2 block">⚡</span>
                    <h4 className="font-serif text-xl font-medium text-brand-text mb-1">{boost.title}</h4>
                    <p className="text-xs text-foreground/50 font-light mb-3">{boost.duration}</p>
                    <div className="text-2xl font-bold font-sans my-2">₹{boost.price}</div>
                    {boost.savings && (
                      <span className="text-xs text-amber-700 bg-amber-100 font-medium px-2 py-0.5 rounded-full">
                        {boost.savings}
                      </span>
                    )}
                  </div>
                  <div className="mt-6 pt-3 border-t border-foreground/5 w-full text-center">
                    <span className="text-[11px] uppercase tracking-wider text-foreground/40 font-medium">
                      In-App Purchase
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-foreground/50 text-center font-light">
              Boost duration: 24 hours per boost &bull; {siteConfig.taxNote}
            </p>
          </div>

          {/* Digital Service & Refund Disclosure */}
          <div className="max-w-3xl mx-auto bg-brand-purple/5 border border-brand-purple/10 rounded-2xl p-6 text-sm text-foreground/70 font-light leading-relaxed">
            <p className="mb-2">
              {siteConfig.pricingNote}
            </p>
            <p>
              Please read our{' '}
              <Link href="/refund-and-cancellation-policy" className="text-brand-text font-medium underline underline-offset-2 hover:opacity-80">
                Refund & Cancellation Policy
              </Link>{' '}
              and{' '}
              <Link href="/shipping-and-delivery" className="text-brand-text font-medium underline underline-offset-2 hover:opacity-80">
                Shipping & Delivery Policy
              </Link>{' '}
              for comprehensive terms regarding digital fulfillment.
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <div className="border-t border-foreground/[0.08] pt-24 mb-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-brand-text mb-4">
              Why Upgrade to Premium?
            </h2>
            <p className="text-foreground/60 font-light max-w-xl mx-auto">
              Unlock advanced tools curated to give serious marriage-seekers the best alliance experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-background p-10 rounded-3xl luxury-shadow border border-foreground/[0.03] group hover:-translate-y-1 transition-transform duration-500">
                <span className="text-4xl font-serif text-brand-text opacity-40 font-light mb-6 block transition-opacity duration-500 group-hover:opacity-100">0{index + 1}</span>
                <h3 className="text-xl font-serif font-medium mb-4 text-brand-text">{benefit.title}</h3>
                <p className="text-foreground/60 font-light leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Under Development Call to Action */}
        <div className="pt-16 border-t border-foreground/[0.05]">
          <p className="text-foreground/60 font-light text-xl mb-6">Mohabbath mobile applications are currently under development for Android and iOS.</p>
          <div className="inline-flex items-center px-6 py-3 rounded-full text-xs uppercase tracking-widest font-medium bg-brand-gold/20 text-brand-text border border-brand-gold/40">
            Apps Under Development
          </div>
        </div>
      </div>
    </div>
  );
}
