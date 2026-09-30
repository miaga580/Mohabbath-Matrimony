export const metadata = {
  title: 'Privacy & Safety | Mohabbath Matrimony',
  description: 'Learn how Mohabbath protects your privacy and keeps our community safe.',
};

export default function PrivacyAndSafety() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-serif text-4xl lg:text-5xl font-bold text-brand-text mb-8 text-center">
          Privacy & Safety
        </h1>
        <p className="text-lg text-center text-foreground/80 mb-16 max-w-2xl mx-auto">
          Your privacy is our priority. We provide the tools you need to stay in control of your personal information.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-brand-text">🔒</span> Photo Visibility Options
            </h2>
            <p className="text-foreground/70 mb-4">
              Your main profile photo is visible to all members, but you have complete control over your additional photos. You can set them to be visible to:
            </p>
            <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
              <li><strong>All Members:</strong> Anyone on the platform can view them.</li>
              <li><strong>Premium Members:</strong> Only users with an active subscription can view them.</li>
              <li><strong>Members I Approve:</strong> Photos remain hidden until you explicitly accept a request or a proposal.</li>
              <li><strong>Hidden:</strong> Kept private for your eyes only.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-brand-text">🛡️</span> Discreet Blocking & Reporting
            </h2>
            <p className="text-foreground/70 mb-4">
              If someone makes you uncomfortable, you can block them instantly. Blocking is completely discreet—the blocked member will simply no longer see your profile, and they are not notified. You can also report profiles to our Trust & Safety team for review.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-brand-text">👁️</span> Hide My Profile
            </h2>
            <p className="text-foreground/70 mb-4">
              Need a break? You can temporarily hide your profile at any time. When hidden, you won't appear in Discovery or Search results, giving you the space you need without deleting your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-brand-text">📞</span> Contact Details Protection
            </h2>
            <p className="text-foreground/70">
              Your phone number is never shared publicly. It is only shared through our secure contact-sharing feature when both members consent and hold active Premium memberships.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
