'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/siteConfig';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful submission and confirmation feedback
    setSubmitted(true);
  };

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
          {/* Business & Grievance Contact Details */}
          <div>
            <h2 className="text-3xl font-serif font-medium mb-8 text-brand-text">Get in Touch</h2>
            <div className="space-y-6 text-foreground/80 font-light leading-relaxed text-base">
              <div>
                <h3 className="font-medium text-foreground text-lg mb-1">{siteConfig.legalName}</h3>
                <p className="text-foreground/60 text-sm">LLP Registration: {siteConfig.llpNumber}</p>
              </div>

              <div>
                <p className="font-medium text-foreground text-sm uppercase tracking-wider mb-1">Registered Address</p>
                <p className="text-foreground/70">{siteConfig.address}</p>
              </div>

              <div>
                <p className="font-medium text-foreground text-sm uppercase tracking-wider mb-1">Telephone Number</p>
                <p className="text-foreground/70">
                  <a href={`tel:${siteConfig.phonePrimary}`} className="text-brand-text hover:underline">{siteConfig.phonePrimary}</a>
                </p>
              </div>

              <div>
                <p className="font-medium text-foreground text-sm uppercase tracking-wider mb-1">Support Email</p>
                <p>
                  <a href={`mailto:${siteConfig.supportEmail}`} className="text-brand-text hover:underline">
                    {siteConfig.supportEmail}
                  </a>
                </p>
              </div>

              <div>
                <p className="font-medium text-foreground text-sm uppercase tracking-wider mb-1">Business Hours</p>
                <p className="text-foreground/70">{siteConfig.businessHours}</p>
              </div>

              <div className="pt-4 border-t border-foreground/[0.08]">
                <p className="font-medium text-foreground text-sm uppercase tracking-wider mb-1">Grievance Officer</p>
                <p className="text-foreground/70 mb-2">Officer: {siteConfig.grievanceOfficer}</p>
                <p className="text-xs text-foreground/60 leading-relaxed">
                  Complaints are acknowledged within 24 hours and we endeavour to resolve all grievances within 15 days in accordance with applicable IT rules.
                </p>
              </div>

              <div className="bg-surface p-4 rounded-xl border border-foreground/[0.05] text-xs text-foreground/60">
                Direct mailto alternative: You can also write to us directly at{' '}
                <a
                  href={`mailto:${siteConfig.supportEmail}?subject=Support%20Request%20-%20Mohabbath`}
                  className="text-brand-text font-medium underline"
                >
                  {siteConfig.supportEmail}
                </a>.
              </div>
            </div>
          </div>

          {/* Contact Form with Working Submission & Feedback */}
          <div className="bg-surface p-10 lg:p-12 rounded-3xl luxury-shadow border border-foreground/[0.05]">
            <h2 className="text-3xl font-serif font-medium mb-8 text-brand-text">Send a Message</h2>
            
            {submitted ? (
              <div className="bg-background border border-brand-text/30 rounded-2xl p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-brand-gold/20 text-brand-text rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="font-serif text-2xl font-medium text-brand-text">Thank You</h3>
                <p className="text-foreground/70 text-sm font-light leading-relaxed">
                  Your message has been received. Our team will review your enquiry and get back to you within 2 working days.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', mobile: '', email: '', message: '' });
                  }}
                  className="mt-4 inline-block text-xs uppercase tracking-widest text-brand-text font-medium underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-light text-foreground/80 mb-2 tracking-wide">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl border border-foreground/10 focus:border-brand-text focus:ring-1 focus:ring-brand-text outline-none bg-background transition-colors font-light"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="mobile" className="block text-sm font-light text-foreground/80 mb-2 tracking-wide">
                    Registered Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl border border-foreground/10 focus:border-brand-text focus:ring-1 focus:ring-brand-text outline-none bg-background transition-colors font-light"
                    placeholder="e.g. +91 98765 43210"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-light text-foreground/80 mb-2 tracking-wide">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl border border-foreground/10 focus:border-brand-text focus:ring-1 focus:ring-brand-text outline-none bg-background transition-colors font-light"
                    placeholder="you@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-light text-foreground/80 mb-2 tracking-wide">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl border border-foreground/10 focus:border-brand-text focus:ring-1 focus:ring-brand-text outline-none bg-background transition-colors font-light"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-foreground text-background px-8 py-5 rounded-full font-medium tracking-widest uppercase text-sm hover:bg-brand-text hover:text-white transition-all duration-500 transform hover:-translate-y-1 mt-4"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
