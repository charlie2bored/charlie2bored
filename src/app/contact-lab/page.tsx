import type { Metadata } from 'next';
import ContactLab from './ContactLab';

/**
 * Throwaway lab for the contact and closing section. Not linked from the site
 * and not in the sitemap — delete once it is settled, like the other labs.
 */
export const metadata: Metadata = {
  title: 'Contact lab',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ContactLab />;
}
