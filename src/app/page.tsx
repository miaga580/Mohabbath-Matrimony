import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col selection:bg-brand-text selection:text-background overflow-hidden">
      {/* ── Hero Section ── */}
      <section className="relative bg-hero-gradient text-white pt-40 pb-32 lg:pt-48 lg:pb-40 min-h-[95vh] flex flex-col justify-center">
        {/* Ambient background effects */}
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-brand-purple/25 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/4 translate-y-1/4"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left: Text Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <div className="fade-in-up inline-flex items-center gap-4 mb-10 justify-center lg:justify-start">
              <span className="w-12 h-[1px] bg-brand-gold/50"></span>
              <span className="font-sans text-xs tracking-[0.3em] text-brand-gold uppercase shimmer">The Premium Matrimony Experience</span>
            </div>

            <h1 className="fade-in-up delay-100 font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em] leading-[1.08] mb-10">
              Find Your Match with <br className="hidden lg:block"/>
              <span className="italic text-brand-gold font-light">Trust & Tradition.</span>
            </h1>

            <p className="fade-in-up delay-200 text-lg lg:text-xl text-white/60 mb-14 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              An exclusive matrimony platform for Muslim families. Built for absolute privacy, driven by uncompromising values.
            </p>

            <div className="fade-in-up delay-300 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Link href="#download" className="group relative inline-flex items-center justify-center bg-gold-gradient text-black px-10 py-4 rounded-full font-medium tracking-widest text-sm uppercase transition-all duration-700 hover:shadow-[0_0_40px_rgba(254,238,140,0.35)] hover:-translate-y-1">
                Get the App
              </Link>
              <Link href="/how-it-works" className="inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-500 border border-white/20 rounded-full hover:bg-white/5">
                Discover How →
              </Link>
            </div>
          </div>

          {/* Right: Two Phone Mockups */}
          <div className="flex-shrink-0 relative hidden lg:flex items-end gap-5 fade-in-up delay-400">
            {/* Phone 1: Welcome Screen */}
            <div className="w-[230px] rounded-[2.5rem] border-[6px] border-white/15 overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-1000 bg-black">
              <img src="/mockup-welcome.png" alt="Mohabbath Welcome" className="w-full h-auto block" />
            </div>
            {/* Phone 2: Discover Screen */}
            <div className="w-[230px] rounded-[2.5rem] border-[6px] border-white/15 overflow-hidden shadow-2xl transform rotate-3 translate-y-12 hover:rotate-0 transition-transform duration-1000 bg-black">
              <img src="/mockup-discover.png" alt="Mohabbath Discover" className="w-full h-auto block" />
            </div>
            {/* Glow behind phones */}
            <div className="absolute -inset-16 bg-brand-gold/10 blur-[80px] -z-10 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ── Trust Badges ── */}
      <section className="py-20 bg-surface border-b border-foreground/[0.04]">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: "✓", title: "100% Verified Profiles", sub: "Live selfie verified" },
            { icon: "🔒", title: "Absolute Privacy", sub: "You control your digital footprint" },
            { icon: "🛡️", title: "Discreet & Secure", sub: "End-to-end safe environment" },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-5 group">
              <span className="text-3xl w-14 h-14 rounded-2xl bg-brand-text/10 flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110">{badge.icon}</span>
              <div>
                <h4 className="font-serif text-lg mb-1">{badge.title}</h4>
                <p className="text-sm text-foreground/50 font-light">{badge.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it Works ── */}
      <section className="py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
            <h2 className="font-serif text-5xl lg:text-7xl font-medium text-brand-text tracking-tight leading-[1.1]">
              The Journey to <br/> <span className="italic font-light">Forever.</span>
            </h2>
            <p className="text-foreground/50 font-light text-lg lg:text-xl max-w-md leading-relaxed lg:pb-3">
              A refined, effortless experience designed to honor your family's traditions.
            </p>
          </div>

          {/* Step 1 */}
          <div className="group flex flex-col md:flex-row items-center gap-12 lg:gap-20 border-t border-foreground/[0.08] py-16">
            <div className="md:w-1/2 order-2 md:order-1">
              <span className="text-7xl font-serif text-brand-text/30 font-light block mb-4 transition-colors duration-500 group-hover:text-brand-text/80">01</span>
              <h3 className="font-serif text-3xl mb-4 font-medium">Curate Your Profile</h3>
              <p className="text-foreground/60 font-light leading-relaxed text-lg">
                Register elegantly using your mobile number. Build a comprehensive portfolio detailing your cultural roots, faith practices, and family background.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
              <div className="w-[220px] rounded-[2.5rem] border-[6px] border-foreground/10 overflow-hidden luxury-shadow bg-white group-hover:scale-[1.03] transition-transform duration-700">
                <img src="/mockup-welcome.png" alt="Create Profile" className="w-full h-auto block" />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group flex flex-col md:flex-row items-center gap-12 lg:gap-20 border-t border-foreground/[0.08] py-16">
            <div className="md:w-1/2 flex justify-center">
              <div className="w-[220px] rounded-[2.5rem] border-[6px] border-foreground/10 overflow-hidden luxury-shadow bg-white group-hover:scale-[1.03] transition-transform duration-700">
                <img src="/mockup-discover.png" alt="Discover Matches" className="w-full h-auto block" />
              </div>
            </div>
            <div className="md:w-1/2">
              <span className="text-7xl font-serif text-brand-text/30 font-light block mb-4 transition-colors duration-500 group-hover:text-brand-text/80">02</span>
              <h3 className="font-serif text-3xl mb-4 font-medium">Discover Matches</h3>
              <p className="text-foreground/60 font-light leading-relaxed text-lg">
                Browse meticulously curated recommendations tailored to your values. Use our advanced premium filters to find the exact alignment you seek.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group flex flex-col md:flex-row items-center gap-12 lg:gap-20 border-t border-b border-foreground/[0.08] py-16">
            <div className="md:w-1/2 order-2 md:order-1">
              <span className="text-7xl font-serif text-brand-text/30 font-light block mb-4 transition-colors duration-500 group-hover:text-brand-text/80">03</span>
              <h3 className="font-serif text-3xl mb-4 font-medium">Connect Securely</h3>
              <p className="text-foreground/60 font-light leading-relaxed text-lg">
                Send proposals and engage in meaningful dialogue. Your contact details and photographs remain entirely under your exclusive control.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
              <div className="w-[220px] rounded-[2.5rem] border-[6px] border-foreground/10 overflow-hidden luxury-shadow bg-white group-hover:scale-[1.03] transition-transform duration-700">
                <img src="/mockup-chat.png" alt="Secure Chat" className="w-full h-auto block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section id="download" className="py-32 lg:py-40 relative overflow-hidden flex items-center justify-center min-h-[80vh]">
        <div className="absolute inset-0 bg-hero-gradient"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-4xl">
          <img src="/logo.png" alt="Mohabbath" className="w-20 h-20 mx-auto mb-12 rounded-2xl shadow-2xl" />
          <h2 className="font-serif text-5xl lg:text-7xl font-medium mb-10 text-white tracking-tight leading-[1.1]">
            Begin Your <br/> <span className="italic font-light text-brand-gold">Beautiful Story.</span>
          </h2>
          <p className="text-xl text-white/60 mb-16 font-light max-w-2xl mx-auto leading-relaxed">
            Download Mohabbath today and join thousands of families finding their perfect match with dignity, privacy, and trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="w-full sm:w-auto bg-gold-gradient text-black px-14 py-5 rounded-full font-medium tracking-widest uppercase text-sm hover:shadow-[0_0_40px_rgba(254,238,140,0.3)] transition-all duration-700 transform hover:-translate-y-1">
              App Store
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-14 py-5 rounded-full font-medium tracking-widest uppercase text-sm hover:bg-white/5 transition-all duration-700 transform hover:-translate-y-1">
              Google Play
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
