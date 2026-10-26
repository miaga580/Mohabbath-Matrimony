import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Data Deletion Request | Mohabbath Matrimony',
  description: 'Instructions on how to delete your Mohabbath account and request personal data deletion.',
  alternates: {
    canonical: `${siteConfig.websiteUrl}/data-deletion`,
  },
  openGraph: {
    title: 'Data Deletion Request | Mohabbath Matrimony',
    description: 'Instructions on how to delete your Mohabbath account and request personal data deletion.',
    url: `${siteConfig.websiteUrl}/data-deletion`,
  },
};

export default function DataDeletionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
