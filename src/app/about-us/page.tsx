import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'About Us | Mohabbath Matrimony',
  description: 'Learn about the story, values, and team behind Mohabbath Matrimony, operated by Miaga Technologies LLP.',
  alternates: {
    canonical: `${siteConfig.websiteUrl}/about-us`,
  },
  openGraph: {
    title: 'About Us | Mohabbath Matrimony',
    description: 'Learn about the story, values, and team behind Mohabbath Matrimony.',
    url: `${siteConfig.websiteUrl}/about-us`,
  },
};

export default function AboutUs() {
  return (
    <div className="pt-32 pb-40 bg-background min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-text font-sans text-xs tracking-[0.3em] uppercase mb-6">Our Heritage</span>
          <h1 className="font-serif text-5xl lg:text-7xl font-medium text-brand-text mb-8 tracking-tight leading-[1.1]">
            About <span className="italic font-light">Mohabbath.</span>
          </h1>
          <p className="text-xl text-foreground/60 font-light leading-relaxed max-w-2xl mx-auto mb-6">
            Bringing hearts together with trust, tradition, and technology.
          </p>
          <div className="inline-block bg-surface px-6 py-3 rounded-full border border-foreground/[0.08] text-xs md:text-sm text-foreground/80 font-medium tracking-wide">
            Mohabbath is a matrimony platform for families seeking marriage. It is not a dating app.
          </div>
        </div>

        <div className="bg-surface p-10 md:p-16 rounded-3xl luxury-shadow border border-foreground/[0.05] mb-12">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-serif prose-headings:font-medium prose-headings:text-brand-text prose-a:text-brand-text hover:prose-a:text-brand-text/80 prose-p:font-light prose-p:leading-relaxed prose-li:font-light">
            
            <h2>Our Story</h2>
            <p>
              Mohabbath was born out of a simple observation: finding a life partner in the modern world shouldn&apos;t mean compromising on traditional values. Our founders, deeply rooted in the cultural fabric of Kerala, realised that existing platforms either lacked the necessary privacy controls for families or ignored the nuanced religious and cultural preferences that matter most to the Muslim community. We set out to build a platform where trust is the foundation, and technology acts as a bridge between tradition and modern matchmaking.
            </p>

            <h2>Our Core Values</h2>
            <ul>
              <li><strong>Trust & Transparency:</strong> We believe every profile should be genuine. Through selfie verification and community guidelines, we maintain an environment where families can search with peace of mind.</li>
              <li><strong>Privacy Controls:</strong> We know how important privacy is, especially regarding photos and contact details. Mohabbath puts you in control of your digital footprint with granular visibility options.</li>
              <li><strong>Family & Tradition:</strong> Marriage is a union of families, not just individuals. Our platform is designed to respect family involvement and honor faith-based preferences seamlessly.</li>
            </ul>

            <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>

            <h2>Who We Are</h2>
            <p>
              Mohabbath is a premium matrimony platform managed and operated by <strong>{siteConfig.legalName}</strong> (LLP Identification Number: {siteConfig.llpNumber}), a technology firm based in Kochi, Kerala. We are dedicated to providing a secure, intuitive, and culturally respectful matchmaking experience for families.
            </p>

            <div className="mt-12 p-8 bg-background rounded-2xl border border-foreground/[0.05]">
              <h3 className="mt-0">Company Information</h3>
              <p className="mb-1 text-base"><strong>{siteConfig.legalName}</strong></p>
              <p className="mb-1 text-base">{siteConfig.address}</p>
              <p className="mb-1 text-base">LLP ID: {siteConfig.llpNumber}</p>
              <p className="mb-1 text-base">Phone: {siteConfig.phonePrimary}</p>
              <p className="mb-1 text-base">Support: {siteConfig.supportEmail}</p>
              <p className="mb-0 text-base mt-4">
                <a href={siteConfig.websiteUrl} target="_blank" rel="noopener noreferrer">
                  {siteConfig.websiteUrl}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
