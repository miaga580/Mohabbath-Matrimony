import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Sans_Malayalam } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const notoMalayalam = Noto_Sans_Malayalam({ subsets: ["malayalam"], variable: "--font-noto-malayalam" });

export const metadata: Metadata = {
  title: "Mohabbath Matrimony | Find Your Perfect Match with Trust & Tradition",
  description: "The trusted matrimony platform for Muslim families. Connect with verified profiles and find your perfect match today.",
  openGraph: {
    title: "Mohabbath Matrimony",
    description: "The trusted matrimony platform for Muslim families.",
    url: "https://www.mohabbathmatrimony.com",
    siteName: "Mohabbath Matrimony",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohabbath Matrimony",
    description: "The trusted matrimony platform for Muslim families.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${notoMalayalam.variable} antialiased min-h-screen flex flex-col`}>
        {/* Header Placeholder */}
        <header className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-xl border-b border-foreground/[0.03]">
          <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-12">
            <a href="/" className="flex items-center gap-3 group">
              <img src="/logo.png" alt="Mohabbath Logo" className="w-9 h-9 rounded-xl shadow-sm transition-transform group-hover:scale-105 duration-500" />
              <span className="font-serif text-2xl font-medium tracking-tight text-brand-text">MOHABBATH</span>
            </a>
            <nav className="hidden md:flex gap-8 items-center">
              <a href="/" className="text-sm font-medium tracking-wide text-foreground/70 hover:text-brand-text transition-colors duration-300">Home</a>
              <a href="/how-it-works" className="text-sm font-medium tracking-wide text-foreground/70 hover:text-brand-text transition-colors duration-300">How it Works</a>
              <a href="/premium" className="text-sm font-medium tracking-wide text-foreground/70 hover:text-brand-text transition-colors duration-300">Premium</a>
              <a href="/contact" className="text-sm font-medium tracking-wide text-foreground/70 hover:text-brand-text transition-colors duration-300">Contact</a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="hidden md:inline-flex bg-foreground text-background px-6 py-2.5 rounded-full text-sm font-medium tracking-wide hover:bg-brand-text hover:text-white transition-all duration-300">
                Download App
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        {/* Footer Placeholder */}
        <footer className="border-t border-foreground/[0.03] bg-surface py-20 mt-auto">
          <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
            <div className="md:col-span-1">
              <span className="font-serif text-2xl font-medium tracking-tight text-brand-text block mb-6">MOHABBATH</span>
              <p className="text-sm text-foreground/60 leading-relaxed font-light">
                The trusted matrimony platform for Muslim families. Built on trust, designed for tradition.
              </p>
            </div>
            <div>
              <h3 className="font-sans text-sm font-semibold tracking-widest uppercase mb-6 text-foreground/80">Company</h3>
              <ul className="space-y-4 text-sm font-light text-foreground/60">
                <li><a href="/about-us" className="hover:text-brand-text transition-colors duration-300">About Us</a></li>
                <li><a href="/contact" className="hover:text-brand-text transition-colors duration-300">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-sm font-semibold tracking-widest uppercase mb-6 text-foreground/80">Legal</h3>
              <ul className="space-y-4 text-sm font-light text-foreground/60">
                <li><a href="/terms-and-conditions" className="hover:text-brand-text transition-colors duration-300">Terms & Conditions</a></li>
                <li><a href="/privacy-policy" className="hover:text-brand-text transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="/refund-and-cancellation-policy" className="hover:text-brand-text transition-colors duration-300">Refund Policy</a></li>
                <li><a href="/shipping-and-delivery" className="hover:text-brand-text transition-colors duration-300">Shipping & Delivery</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-sm font-semibold tracking-widest uppercase mb-6 text-foreground/80">Trust & Safety</h3>
              <ul className="space-y-4 text-sm font-light text-foreground/60">
                <li><a href="/privacy-and-safety" className="hover:text-brand-text transition-colors duration-300">Privacy & Safety</a></li>
                <li><a href="/child-safety-standards" className="hover:text-brand-text transition-colors duration-300">Child Safety Standards</a></li>
                <li><a href="/data-deletion" className="hover:text-brand-text transition-colors duration-300">Data Deletion</a></li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-foreground/[0.03] text-sm text-foreground/40 font-light flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col gap-2 md:gap-1 text-center md:text-left">
              <span>&copy; {new Date().getFullYear()} Miaga Technologies LLP. All rights reserved.</span>
              <span>
                Managed and developed by{' '}
                <a href="https://www.zartek.in/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-text transition-colors underline decoration-foreground/20 underline-offset-2">
                  Zartek Technologies
                </a>
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
