export const metadata = {
  title: 'Premium Benefits | Mohabbath Matrimony',
  description: 'Upgrade your Mohabbath experience with premium benefits like unlimited messaging and profile boosts.',
};

export default function Premium() {
  const benefits = [
    {
      title: "Unlimited Dialogue",
      description: "Converse freely and deeply with your accepted matches without any restrictive limits."
    },
    {
      title: "Verified Contacts",
      description: "Request and view authenticated phone numbers of other premium members upon mutual consent."
    },
    {
      title: "Exclusive Insights",
      description: "Discover exactly who has been viewing and shortlisting your profile."
    },
    {
      title: "Priority Visibility",
      description: "Elevate your profile's standing in Discovery to receive significantly more high-quality matches."
    },
    {
      title: "Advanced Privacy",
      description: "Unlock nuanced visibility controls exclusively reserved for premium members."
    },
    {
      title: "Refined Search",
      description: "Find exactly what you seek with highly granular, premium-only search filters."
    }
  ];

  return (
    <div className="pt-32 pb-40 bg-surface min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl text-center">
        <div className="mb-24">
          <span className="inline-block text-brand-text font-sans text-xs tracking-[0.3em] uppercase mb-6">Mohabbath Premium</span>
          <h1 className="font-serif text-5xl lg:text-7xl font-medium text-brand-text mb-8 tracking-tight leading-[1.1]">
            Elevate Your <span className="italic font-light">Search.</span>
          </h1>
          <p className="text-xl text-foreground/60 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Take the decisive step in finding your perfect match with our exclusive suite of premium privileges.
          </p>
          <div className="inline-flex items-center justify-center px-8 py-3 border border-brand-text/30 text-brand-text rounded-full text-xs uppercase tracking-widest font-medium">
            Plans available exclusively in-app
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-background p-10 rounded-3xl luxury-shadow border border-foreground/[0.03] group hover:-translate-y-2 transition-transform duration-700">
              <span className="text-4xl font-serif text-brand-text opacity-40 font-light mb-6 block transition-opacity duration-500 group-hover:opacity-100">0{index + 1}</span>
              <h3 className="text-xl font-serif font-medium mb-4 text-brand-text">{benefit.title}</h3>
              <p className="text-foreground/60 font-light leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-32 pt-16 border-t border-foreground/[0.05]">
          <p className="text-foreground/60 font-light text-xl mb-8">Ready to unlock these privileges?</p>
          <button className="bg-foreground text-background px-12 py-5 rounded-full font-medium tracking-widest uppercase text-sm hover:bg-brand-text hover:text-white transition-all duration-500 transform hover:-translate-y-1">
            Download to Upgrade
          </button>
        </div>
      </div>
    </div>
  );
}
