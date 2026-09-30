import { getLegalContent } from "@/lib/markdown";
import ReactMarkdown from 'react-markdown';

export const metadata = {
  title: 'Contact Us | Mohabbath Matrimony',
  description: 'Get in touch with the Mohabbath team.',
};

export default function Contact() {
  const data = getLegalContent('contact-us');

  return (
    <div className="pt-32 pb-40 bg-background min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="text-center mb-20">
          <span className="inline-block text-brand-text font-sans text-xs tracking-[0.3em] uppercase mb-6">Support</span>
          <h1 className="font-serif text-5xl lg:text-7xl font-medium text-brand-text mb-8 tracking-tight leading-[1.1]">
            Contact <span className="italic font-light">Us.</span>
          </h1>
          <p className="text-xl text-foreground/60 font-light leading-relaxed max-w-2xl mx-auto">
            We are here to help you. Reach out to us with any questions, feedback, or concerns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 border-t border-foreground/[0.08] pt-16">
          {/* Contact Details from MD */}
          <div>
            <h2 className="text-3xl font-serif font-medium mb-8">Get in Touch</h2>
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-serif prose-headings:font-medium prose-headings:text-brand-text prose-a:text-brand-text hover:prose-a:text-brand-text/80 prose-p:font-light prose-p:leading-relaxed prose-li:font-light">
              {data ? (
                <ReactMarkdown>{data.content}</ReactMarkdown>
              ) : (
                <p>Contact information is currently unavailable.</p>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface p-10 lg:p-12 rounded-3xl luxury-shadow border border-foreground/[0.05]">
            <h2 className="text-3xl font-serif font-medium mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-foreground/80 mb-2 tracking-wide">Full Name</label>
                <input type="text" id="name" className="w-full px-5 py-4 rounded-xl border border-foreground/10 focus:border-brand-text focus:ring-1 focus:ring-brand-text outline-none bg-background transition-colors font-light" placeholder="Your name" />
              </div>
              
              <div>
                <label htmlFor="mobile" className="block text-sm font-light text-foreground/80 mb-2 tracking-wide">Registered Mobile Number</label>
                <input type="tel" id="mobile" className="w-full px-5 py-4 rounded-xl border border-foreground/10 focus:border-brand-text focus:ring-1 focus:ring-brand-text outline-none bg-background transition-colors font-light" placeholder="e.g. +91 98765 43210" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-light text-foreground/80 mb-2 tracking-wide">Email Address</label>
                <input type="email" id="email" className="w-full px-5 py-4 rounded-xl border border-foreground/10 focus:border-brand-text focus:ring-1 focus:ring-brand-text outline-none bg-background transition-colors font-light" placeholder="you@example.com" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-light text-foreground/80 mb-2 tracking-wide">Message</label>
                <textarea id="message" rows={4} className="w-full px-5 py-4 rounded-xl border border-foreground/10 focus:border-brand-text focus:ring-1 focus:ring-brand-text outline-none bg-background transition-colors font-light" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="button" className="w-full bg-foreground text-background px-8 py-5 rounded-full font-medium tracking-widest uppercase text-sm hover:bg-brand-text hover:text-white transition-all duration-500 transform hover:-translate-y-1 mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
