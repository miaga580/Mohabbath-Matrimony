'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/siteConfig';

export default function DataDeletion() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    registeredMobile: '',
    email: '',
    reason: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Data Deletion Request - ${formData.registeredMobile}`);
    const body = encodeURIComponent(
      `Registered Mobile: ${formData.registeredMobile}\n` +
      `Contact Email: ${formData.email}\n` +
      `Reason for Request: ${formData.reason || 'Not specified'}\n`
    );
    window.location.href = `mailto:${siteConfig.supportEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-brand-text mb-4">
            Delete Account & Data
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            You have the right to request the deletion of your account and personal data from Mohabbath at any time.
          </p>
        </div>

        <div className="bg-background p-8 md:p-12 rounded-3xl shadow-sm border border-foreground/5 mb-12">
          <h2 className="text-2xl font-bold mb-4">What happens to your data?</h2>
          <p className="text-foreground/70 mb-4">
            As stated in Section 6 of our Privacy Policy:
          </p>
          <ul className="list-disc list-inside text-foreground/70 space-y-2 mb-8 ml-2">
            <li>When you delete your account, we remove or anonymise your profile within 30 days.</li>
            <li>Your profile, photos, and messages will immediately stop being visible to other members.</li>
            <li>We may keep certain records (such as transaction history or reports of Terms violations) strictly for legal, accounting, security, and dispute-resolution purposes, as required by law.</li>
          </ul>

          <div className="border-t pt-12 mt-12">
            <h2 className="text-2xl font-bold mb-4">Data Deletion Request Form</h2>
            <p className="text-foreground/70 mb-6">
              To request the deletion of your account and associated personal data, please submit the request form below. Our compliance team will verify your details and process your request within 7 working days.
            </p>
            <p className="text-xs text-foreground/60 mb-8">
              Alternatively, email our grievance officer directly at{' '}
              <a href={`mailto:${siteConfig.supportEmail}?subject=Data%20Deletion%20Request`} className="text-brand-text underline">
                {siteConfig.supportEmail}
              </a>.
            </p>

            {submitted ? (
              <div className="bg-surface border border-brand-text/30 rounded-2xl p-8 text-center space-y-4 max-w-2xl">
                <div className="w-12 h-12 bg-brand-gold/20 text-brand-text rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="font-serif text-2xl font-medium text-brand-text">Request Prepared</h3>
                <p className="text-foreground/70 text-sm font-light leading-relaxed">
                  Your email client has been opened with your data deletion request pre-filled to <span className="font-medium text-brand-text">{siteConfig.supportEmail}</span>. Once sent, our compliance team will process your request within 7 working days.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ registeredMobile: '', email: '', reason: '' });
                  }}
                  className="mt-4 inline-block text-xs uppercase tracking-widest text-brand-text font-medium underline underline-offset-4"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
                <div>
                  <label htmlFor="registeredMobile" className="block text-sm font-medium text-foreground/80 mb-2">Registered Mobile Number (Required) *</label>
                  <input
                    type="tel"
                    id="registeredMobile"
                    required
                    value={formData.registeredMobile}
                    onChange={(e) => setFormData({ ...formData, registeredMobile: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none bg-surface"
                    placeholder="e.g. +91 98765 43210"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">Contact Email (Required) *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none bg-surface"
                    placeholder="you@example.com"
                  />
                  <p className="text-xs text-foreground/50 mt-1">We need this to contact you for verification.</p>
                </div>
                
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-foreground/80 mb-2">Reason for Request (Optional)</label>
                  <textarea
                    id="reason"
                    rows={3}
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none bg-surface"
                    placeholder="Why are you requesting account deletion?"
                  ></textarea>
                </div>
                
                <button type="submit" className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors">
                  Submit Deletion Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
