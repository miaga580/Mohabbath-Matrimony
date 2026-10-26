import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Contact Us | Mohabbath Matrimony',
  description: 'Get in touch with the Mohabbath team and Grievance Officer for support and inquiries.',
  alternates: {
    canonical: `${siteConfig.websiteUrl}/contact`,
  },
  openGraph: {
    title: 'Contact Us | Mohabbath Matrimony',
    description: 'Get in touch with the Mohabbath team and Grievance Officer for support and inquiries.',
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
