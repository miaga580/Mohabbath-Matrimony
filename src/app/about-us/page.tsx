export const metadata = {
  title: 'About Us | Mohabbath Matrimony',
  description: 'Learn about the story, values, and team behind Mohabbath.',
};

export default function AboutUs() {
  return (
    <div className="pt-32 pb-40 bg-background min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-20">
          <span className="inline-block text-brand-text font-sans text-xs tracking-[0.3em] uppercase mb-6">Our Heritage</span>
          <h1 className="font-serif text-5xl lg:text-7xl font-medium text-brand-text mb-8 tracking-tight leading-[1.1]">
            About <span className="italic font-light">Mohabbath.</span>
          </h1>
          <p className="text-xl text-foreground/60 font-light leading-relaxed max-w-2xl mx-auto">
            Bringing hearts together with trust, tradition, and technology.
          </p>
        </div>

        <div className="bg-surface p-10 md:p-16 rounded-3xl luxury-shadow border border-foreground/[0.05] mb-12">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-serif prose-headings:font-medium prose-headings:text-brand-text prose-a:text-brand-text hover:prose-a:text-brand-text/80 prose-p:font-light prose-p:leading-relaxed prose-li:font-light">
            
            <h2>Our Story</h2>
            <p>
              Mohabbath was born out of a simple observation: finding a life partner in the modern world shouldn&apos;t mean compromising on traditional values. Our founders, deeply rooted in the cultural fabric of Kerala, realised that existing platforms either lacked the necessary privacy controls for families or ignored the nuanced religious and cultural preferences that matter most to the Muslim community. We set out to build a platform where trust is the foundation, and technology acts as a bridge between tradition and modern matchmaking.
            </p>

            <h2>Our Core Values</h2>
            <ul>
              <li><strong>Trust & Transparency:</strong> We believe every profile should be genuine. Through strict verification and community guidelines, we maintain an environment where families can search with peace of mind.</li>
              <li><strong>Privacy First:</strong> We know how important privacy is, especially regarding photos and contact details. Mohabbath puts you in complete control of your digital footprint.</li>
              <li><strong>Family & Tradition:</strong> Marriage is a union of families, not just individuals. Our platform is designed to respect family involvement and honor faith-based preferences seamlessly.</li>
            </ul>

            <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>

            <h2>Who We Are</h2>
            <p>
              Mohabbath is a premium matchmaking platform managed and developed as a proud product of <strong>Miaga Technologies LLP</strong>, a technology company headquartered in Kochi, Kerala. We are a dedicated team committed to building a secure, intuitive, and culturally respectful matchmaking experience for our community.
            </p>

            <div className="mt-12 p-8 bg-background rounded-2xl border border-foreground/[0.05]">
              <h3 className="mt-0">Company Information</h3>
              <p className="mb-1 text-base"><strong>Miaga Technologies LLP</strong></p>
              <p className="mb-1 text-base">3F, Harvard, Skyline Ivy League,</p>
              <p className="mb-1 text-base">Edachira, Kakkanad, Kochi, Kerala – 682030</p>
              <p className="mb-0 text-base mt-4">
                <a href="https://miagatech.com" target="_blank" rel="noopener noreferrer">www.miagatech.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
