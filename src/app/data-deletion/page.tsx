export const metadata = {
  title: 'Data Deletion Request | Mohabbath Matrimony',
  description: 'Instructions on how to delete your Mohabbath account and request data deletion.',
};

export default function DataDeletion() {
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
          <h2 className="text-2xl font-bold mb-4">How to delete your account in the App</h2>
          <p className="text-foreground/70 mb-6">
            The fastest way to delete your account and all associated data is directly through the Mohabbath mobile app:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-foreground/80 mb-8 bg-surface p-6 rounded-2xl border">
            <li>Open the Mohabbath app and log in to your account.</li>
            <li>Go to the <strong>Profile</strong> tab on the bottom menu.</li>
            <li>Tap on <strong>Settings</strong> and select <strong>Account Settings</strong>.</li>
            <li>Tap on <strong>Manage Account</strong>.</li>
            <li>Select <strong>Delete Account</strong> and follow the on-screen prompts to confirm.</li>
          </ol>

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
            <h2 className="text-2xl font-bold mb-4">Manual Data Deletion Request Form</h2>
            <p className="text-foreground/70 mb-8">
              If you no longer have access to the app or your mobile number, you can request account deletion using the form below. Please note that manual requests may require additional identity verification and take up to 7 working days to process.
            </p>

            <form className="space-y-6 max-w-2xl">
              <div>
                <label htmlFor="registeredMobile" className="block text-sm font-medium text-foreground/80 mb-2">Registered Mobile Number (Required)</label>
                <input type="tel" id="registeredMobile" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none bg-surface" placeholder="e.g. +91 98765 43210" required />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">Contact Email (Required)</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none bg-surface" placeholder="you@example.com" required />
                <p className="text-xs text-foreground/50 mt-1">We need this to contact you for verification.</p>
              </div>
              
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-foreground/80 mb-2">Reason for Request (Optional)</label>
                <textarea id="reason" rows={3} className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none bg-surface" placeholder="Why are you leaving?"></textarea>
              </div>
              
              <button type="button" className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors">
                Submit Deletion Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
