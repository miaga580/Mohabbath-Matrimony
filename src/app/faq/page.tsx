import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Mohabbath Matrimony',
  description: 'Find answers to common questions about Mohabbath, profile creation, privacy, and more.',
};

export default function FAQ() {
  const faqs = [
    {
      q: "Who can join Mohabbath?",
      a: "Mohabbath is exclusively for individuals who are legally eligible to marry. Women must be at least 18 years old and men must be at least 21 years old."
    },
    {
      q: "Which countries are supported?",
      a: "Currently, Mohabbath is designed for Muslim families  countries (UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman)."
    },
    {
      q: "Can I create a profile for my son, daughter, or sibling?",
      a: "Yes! Parents, siblings, and relatives can easily create and manage a profile on behalf of a family member. You can specify the relationship (e.g., Son, Daughter, Brother, Sister) during sign-up."
    },
    {
      q: "How does identity verification work?",
      a: "To ensure a safe community, we offer a live selfie verification feature. You will be asked to take a live selfie which is matched against your profile photo. Once verified, your profile receives a trusted verification badge."
    },
    {
      q: "Who can see my profile photos?",
      a: "Your main profile photo is visible to all members by default. However, you have full control over your other photos. You can set them to be visible to All Members, Premium Members, or only Members You Approve."
    },
    {
      q: "Is my phone number visible to everyone?",
      a: "No. Your phone number is strictly protected. It is only shared if a mutual contact-sharing request is approved and both members hold an active Premium membership."
    },
    {
      q: "How do proposals work?",
      a: "When you find a profile you like, you can 'Express Interest' by sending a proposal. The other person can review your profile and choose to accept or decline. Chat is only enabled after a proposal is mutually accepted."
    },
    {
      q: "Is it safe to chat on Mohabbath?",
      a: "Yes. Chat is only unlocked after a mutual proposal acceptance. If someone makes you uncomfortable, you can instantly and discreetly block or report them directly from the chat screen."
    },
    {
      q: "What is the 'Hide My Profile' feature?",
      a: "If you want to take a break from the platform without deleting your account, you can use 'Hide My Profile'. Your profile will be temporarily removed from discovery and search results until you choose to unhide it."
    },
    {
      q: "What are the benefits of a Premium membership?",
      a: "Premium members enjoy unlimited messaging, the ability to view verified phone numbers (upon mutual consent), insights into who visited or shortlisted their profile, and profile boosts for higher visibility."
    },
    {
      q: "How do I shortlist a profile to show my family?",
      a: "You can tap the 'Shortlist' icon on any profile you like. It will be saved in your Shortlist tab, allowing you to easily review it later with your family before deciding to send a proposal."
    },
    {
      q: "Can I filter matches by specific religious practices?",
      a: "Absolutely. You can filter profiles based on detailed faith practices, including Namaz frequency, Quran reading habits, Ramadan fasting, and Zakat."
    },
    {
      q: "How do I delete my account?",
      a: "You can delete your account directly from the app by going to Account Settings > Manage Account > Delete Account. For detailed instructions or manual requests, please visit our Data Deletion page."
    },
    {
      q: "What happens to my data if I delete my account?",
      a: "When you delete your account, your profile is removed or anonymised within 30 days, except for certain records we are required to keep by law (e.g., for security or dispute-resolution purposes)."
    },
    {
      q: "How do I report an inappropriate profile?",
      a: "Every profile and chat conversation has a 'Report' option in the top menu (⋮). You can select a reason and submit a confidential report to our Trust & Safety team. You can also choose to block the person simultaneously."
    }
  ];

  // Generate JSON-LD Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="py-24 bg-surface min-h-screen">
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-brand-text mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-foreground/80">
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, feel free to contact our support team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group bg-background rounded-2xl border border-foreground/10 shadow-sm [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg">
                <span className="pr-4">{faq.q}</span>
                <span className="transition duration-300 group-open:-rotate-180 text-brand-text">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-foreground/70">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
        
        <div className="mt-12 text-center p-8 bg-brand-purple/5 rounded-2xl border border-brand-purple/10">
          <h3 className="font-bold text-xl mb-2">Still need help?</h3>
          <p className="text-foreground/70 mb-4">Our support team is always ready to assist you.</p>
          <a href="/contact" className="inline-block bg-brand-purple text-white px-6 py-3 rounded-full font-bold hover:bg-brand-purple/90 transition-colors">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}

