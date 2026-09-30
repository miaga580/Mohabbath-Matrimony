export const metadata = {
  title: 'How It Works | Mohabbath Matrimony',
  description: 'Learn how to create a profile, discover matches, and connect safely on Mohabbath.',
};

export default function HowItWorks() {
  return (
    <div className="pt-32 pb-40 bg-background min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="mb-20 md:w-2/3">
          <span className="inline-block text-brand-text font-sans text-xs tracking-[0.3em] uppercase mb-6">Getting Started</span>
          <h1 className="font-serif text-5xl lg:text-7xl font-medium text-brand-text mb-8 tracking-tight leading-[1.1]">
            How Mohabbath <span className="italic font-light">Works.</span>
          </h1>
          <p className="text-xl text-foreground/60 font-light leading-relaxed max-w-2xl">
            We've made it simple to find your life partner while maintaining the highest standards of privacy and tradition.
          </p>
        </div>

        <div className="space-y-24">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center group">
            <div className="md:w-1/2 order-2 md:order-1">
              <span className="text-6xl font-serif text-brand-text/30 font-light block mb-4 group-hover:text-brand-text/70 transition-colors duration-500">01</span>
              <h2 className="text-3xl font-serif font-medium mb-5">Create Your Profile</h2>
              <p className="text-foreground/60 font-light leading-relaxed text-lg mb-6">
                Register easily using your mobile number with OTP verification. You can create a profile for yourself, your son, daughter, brother, or sister.
              </p>
              <ul className="space-y-3 text-foreground/60 font-light">
                <li className="flex gap-3"><span className="text-brand-text mt-1">•</span>Add basic details like age, location, and education.</li>
                <li className="flex gap-3"><span className="text-brand-text mt-1">•</span>Share your cultural roots, faith, and practices.</li>
                <li className="flex gap-3"><span className="text-brand-text mt-1">•</span>Upload 2-6 photos (you control who sees them).</li>
              </ul>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
              <div className="w-[240px] rounded-[2.5rem] border-[6px] border-foreground/10 overflow-hidden luxury-shadow bg-white group-hover:scale-[1.03] transition-transform duration-700">
                <img src="/mockup-welcome.png" alt="Create Profile" className="w-full h-auto block" />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center group">
            <div className="md:w-1/2 flex justify-center">
              <div className="w-[240px] rounded-[2.5rem] border-[6px] border-foreground/10 overflow-hidden luxury-shadow bg-white group-hover:scale-[1.03] transition-transform duration-700">
                <img src="/mockup-verify.png" alt="Verify Your Identity" className="w-full h-auto block" />
              </div>
            </div>
            <div className="md:w-1/2">
              <span className="text-6xl font-serif text-brand-text/30 font-light block mb-4 group-hover:text-brand-text/70 transition-colors duration-500">02</span>
              <h2 className="text-3xl font-serif font-medium mb-5">Verify Your Identity</h2>
              <p className="text-foreground/60 font-light leading-relaxed text-lg">
                Build trust with other members by completing our live selfie verification. This confirms you are the person in your profile photos and helps keep our community safe.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center group">
            <div className="md:w-1/2 order-2 md:order-1">
              <span className="text-6xl font-serif text-brand-text/30 font-light block mb-4 group-hover:text-brand-text/70 transition-colors duration-500">03</span>
              <h2 className="text-3xl font-serif font-medium mb-5">Discover & Connect</h2>
              <p className="text-foreground/60 font-light leading-relaxed text-lg mb-6">
                Browse recommended profiles tailored to your preferences, or search using specific filters.
              </p>
              <ul className="space-y-3 text-foreground/60 font-light">
                <li className="flex gap-3"><span className="text-brand-text mt-1">•</span>Send proposals to profiles you like.</li>
                <li className="flex gap-3"><span className="text-brand-text mt-1">•</span>Your contact details stay hidden until mutual connection.</li>
                <li className="flex gap-3"><span className="text-brand-text mt-1">•</span>Once accepted, chat safely within the app.</li>
              </ul>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center gap-5">
              <div className="w-[190px] rounded-[2rem] border-[5px] border-foreground/10 overflow-hidden luxury-shadow bg-white group-hover:scale-[1.03] transition-transform duration-700 -rotate-2">
                <img src="/mockup-discover.png" alt="Discover Matches" className="w-full h-auto block" />
              </div>
              <div className="w-[190px] rounded-[2rem] border-[5px] border-foreground/10 overflow-hidden luxury-shadow bg-white group-hover:scale-[1.03] transition-transform duration-700 rotate-2 translate-y-10">
                <img src="/mockup-chat.png" alt="Chat Safely" className="w-full h-auto block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
