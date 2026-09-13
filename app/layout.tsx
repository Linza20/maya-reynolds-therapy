import type { Metadata } from 'next';

/* Self-hosted fonts (no Google Fonts request at runtime).
   Redesign pairing: Fraunces (soft, human serif) + Karla (plain-spoken sans).
   Clone pairing: see the import block below. */
import '@fontsource-variable/fraunces/opsz.css';
import '@fontsource-variable/fraunces/opsz-italic.css';
import '@fontsource-variable/karla/index.css';
import '@fontsource-variable/karla/wght-italic.css';
/* Clone pairing: the original site's actual stack, read from its :root —
   --heading-font-font-family: "Cormorant Infant"; --body-font-font-family: "Muli"
   (Muli was renamed Mulish upstream). Sacramento covers the script emphasis
   word in the hero headline. */
import '@fontsource/cormorant-infant/300.css';
import '@fontsource/cormorant-infant/400.css';
import '@fontsource/cormorant-infant/400-italic.css';
import '@fontsource/mulish/300.css';
import '@fontsource/mulish/400.css';
import '@fontsource/sacramento/400.css';

import './globals.css';
import { maya } from '@/content/maya';

export const metadata: Metadata = {
  metadataBase: new URL(maya.meta.canonical),
  title: maya.meta.title,
  description: maya.meta.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: maya.meta.title,
    description: maya.meta.description,
    url: maya.meta.canonical,
    siteName: maya.brand.name,
    locale: 'en_US'
  },
  twitter: { card: 'summary_large_image', title: maya.meta.title, description: maya.meta.description },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
