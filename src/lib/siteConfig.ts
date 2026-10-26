export interface PlanItem {
  name: string;
  price: string;
  totalPrice?: string;
  originalPrice?: string;
  duration: string;
  monthlyEquivalent?: string;
  badge?: string;
  features: string[];
  popular?: boolean;
}

export interface BoostPackage {
  title: string;
  boostCount: number;
  price: string;
  originalPrice?: string;
  savings?: string;
  duration: string;
  popular?: boolean;
}

export const siteConfig = {
  legalName: "Miaga Technologies LLP",
  brandName: "Mohabbath",
  address: "3F, Harvard, Skyline, Edachira, Kakkanad, Kochi, Kerala – 682030",
  phonePrimary: "+91 85901 85661",
  supportEmail: "info@mohabbathmatrimony.com",
  businessHours: "Monday–Saturday, 9:00 AM – 6:00 PM IST",
  llpNumber: "ADB-2543",
  grievanceOfficer: "Mithilaj Abdul",
  appLive: false,
  playStoreUrl: "",
  appStoreUrl: "",
  websiteUrl: "https://www.mohabbathmatrimony.com",
  taxNote: "[TAX_NOTE]", // e.g., "Inclusive of all taxes" or "Plus applicable taxes"
  pricingNote:
    "Premium and Profile Boost are digital services, activated in your account after payment is confirmed. See our Refund and Cancellation Policy.",
  plansPurchaseNote: "Plans are purchased inside the Mohabbath app",
  plans: [
    {
      name: "Spark",
      price: "1,797",
      originalPrice: "1,999",
      duration: "3 Months",
      monthlyEquivalent: "₹599/mo",
      badge: "Limited-Time Offer",
      features: [
        "Extended messaging with accepted matches",
        "Contact requests upon mutual consent",
        "Insights into who viewed your profile",
        "Profile Boost included",
        "Visibility restriction & privacy controls",
        "All refined search filters",
      ],
      popular: false,
    },
    {
      name: "Soulmate",
      price: "2,694",
      originalPrice: "2,999",
      duration: "6 Months",
      monthlyEquivalent: "₹449/mo",
      badge: "Best Value · Save 25%",
      features: [
        "Extended messaging with accepted matches",
        "Contact requests upon mutual consent",
        "Insights into who viewed your profile",
        "Profile Boost included",
        "Visibility restriction & privacy controls",
        "All refined search filters",
      ],
      popular: true,
    },
  ] as PlanItem[],
  boostPackages: [
    {
      title: "1 Boost",
      boostCount: 1,
      price: "49",
      duration: "24 Hours per boost",
      popular: false,
    },
    {
      title: "5 Boosts",
      boostCount: 5,
      price: "199",
      savings: "Save 19%",
      duration: "24 Hours per boost",
      popular: true,
    },
    {
      title: "3 Boosts",
      boostCount: 3,
      price: "129",
      savings: "Save 12%",
      duration: "24 Hours per boost",
      popular: false,
    },
  ] as BoostPackage[],
  boostNote: "Each boost puts your profile at the top of recommendations for 24 hours.",
};
