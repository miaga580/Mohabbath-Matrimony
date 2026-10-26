import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Features | Mohabbath Matrimony',
  description: 'Explore privacy controls, faith alignment, and selfie verification features designed for Muslim families on Mohabbath.',
  alternates: {
    canonical: `${siteConfig.websiteUrl}/features`,
  },
  openGraph: {
    title: 'Features | Mohabbath Matrimony',
    description: 'Explore privacy controls, faith alignment, and selfie verification features designed for Muslim families on Mohabbath.',
    url: `${siteConfig.websiteUrl}/features`,
  },
};

export default function Features() {
  const features = [
    {
      title: "Family-Friendly Profiles",
      description: "Profiles can be managed by the candidate or by parents and siblings. All communication options respect family involvement and tradition."
    },
    {
      title: "Detailed Faith Alignment",
      description: "Find a partner who shares your religious values with nuanced filters for Namaz frequency, Quran reading, Ramadan fasting, and Zakat."
    },
    {
      title: "Privacy Controls",
      description: "You decide precisely who sees your photographs. Choose between All Members, Premium Members, or strictly Members You Approve."
    },
    {
      title: "Smart Shortlisting",
      description: "Curate profiles you appreciate to your Shortlist and review them later in privacy with your family before initiating a proposal."
    },
    {
      title: "Selfie Verification",
      description: "Our live selfie check feature ensures that profiles correspond to genuine applicants, supporting safety and authenticity."
    },
    {
      title: "Secure Dialogue",
      description: "Engage in meaningful conversations within a respectful environment. Chat is only enabled after mutual proposal acceptance."
    }
  ];

  return (
    <div className="pt-32 pb-40 bg-background min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="mb-24 md:w-2/3">
          <span className="inline-block text-brand-text font-sans text-xs tracking-[0.3em] uppercase mb-6">The Platform</span>
          <h1 className="font-serif text-5xl lg:text-7xl font-medium text-brand-text mb-8 tracking-tight leading-[1.1]">
            Designed for <span className="italic font-light">Elegance</span> & Trust.
          </h1>
          <p className="text-xl text-foreground/60 font-light leading-relaxed max-w-2xl">
            Every feature is crafted to help Muslim families connect for marriage with dignity, safety, and cultural respect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 border-t border-foreground/[0.08]">
          {features.map((feature, index) => (
            <div key={index} className="py-12 border-b border-foreground/[0.08] group">
              <span className="text-3xl font-serif text-brand-text opacity-40 font-light mb-6 block transition-opacity duration-500 group-hover:opacity-100">0{index + 1}</span>
              <h3 className="text-2xl font-serif font-medium mb-4">{feature.title}</h3>
              <p className="text-foreground/60 font-light leading-relaxed text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
