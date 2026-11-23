import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Contact | Mohabbath Matrimony',
  description: 'Get in touch with Miaga Technologies LLP for Mohabbath Matrimony support, feedback, and general inquiries.',
  alternates: {
    canonical: `${siteConfig.websiteUrl}/contact`,
  },
  openGraph: {
    title: 'Contact | Mohabbath Matrimony',
    description: 'Get in touch with Miaga Technologies LLP for Mohabbath Matrimony support, feedback, and general inquiries.',
    url: `${siteConfig.websiteUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
