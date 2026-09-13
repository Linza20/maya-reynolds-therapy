import type { Metadata } from 'next';
import { HomePage } from '@/components/site/HomePage';
import { original } from '@/content/original';

/**
 * Part 1 — the clone, rendered by the same components as the redesign.
 * Kept out of the index so it never competes with the live site in search.
 */
export const metadata: Metadata = {
  title: original.meta.title,
  description: original.meta.description,
  robots: { index: false, follow: false }
};

export default function ClonePage() {
  return <HomePage content={original} />;
}
