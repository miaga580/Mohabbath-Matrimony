import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'For Families | Mohabbath Matrimony',
  description: 'Create and manage a matrimonial profile for your son, daughter, brother, or sister on Mohabbath.',
  alternates: {
    canonical: `${siteConfig.websiteUrl}/for-families`,
  },
  openGraph: {
    title: 'For Families | Mohabbath Matrimony',
    description: 'Create and manage a matrimonial profile for your son, daughter, brother, or sister on Mohabbath.',
    url: `${siteConfig.websiteUrl}/for-families`,
  },
};

export default function ForFamilies() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-serif text-4xl lg:text-5xl font-bold text-brand-text mb-8 text-center">
          For Families
        </h1>
        <p className="text-lg text-center text-foreground/80 mb-16 max-w-2xl mx-auto">
          We understand that finding the right life partner is a family decision. Mohabbath is designed to involve loved ones every step of the way.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-surface p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Create on Behalf</h2>
            <p className="text-foreground/70">
              Parents, siblings, and relatives can easily create and manage a profile for their loved ones. Simply select &quot;Son&quot;, &quot;Daughter&quot;, &quot;Brother&quot;, or &quot;Sister&quot; during sign-up.
            </p>
          </div>
          <div className="bg-surface p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Shared Decision Making</h2>
            <p className="text-foreground/70">
              Use our Shortlist feature to save profiles you like, and discuss them with your family before sending a proposal.
            </p>
          </div>
        </div>

        <div className="text-center bg-brand-purple text-white p-12 rounded-3xl">
          <h2 className="font-serif text-3xl font-bold mb-6">Ready to find an alliance for your loved one?</h2>
          <p className="mb-8 text-white/80 max-w-xl mx-auto">
            Mohabbath provides an alliance platform rooted in faith, cultural values, and privacy for Muslim families.
          </p>
          {siteConfig.appLive && siteConfig.playStoreUrl ? (
            <a
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold hover:bg-white transition-colors"
            >
              Download the App Now
            </a>
          ) : (
            <span className="inline-block bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded-full font-medium tracking-widest text-xs uppercase">
              Android & iOS Apps Under Development
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
