import Link from 'next/link';
import type { SiteContent } from '@/content/types';
import { Rich } from '@/components/ui/Rich';

/** Heading in a left gutter; the terms run as two ruled columns beside it. */
export function Expertise({ content }: { content: SiteContent }) {
  const { expertise } = content;
  const terms = [...expertise.terms, { label: expertise.trailing.replace(/\*/g, ''), href: '#' }];

  return (
    <section className="bg-raised py-section">
      <div className="wide grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <h3 className="max-w-xs text-h3">
          <Rich text={expertise.heading} />
        </h3>

        <ul className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
          {terms.map((term) => (
            <li key={term.label} className="border-b border-line">
              <Link
                href={term.href}
                className="label block py-5 font-sans text-[0.8rem] uppercase tracking-[0.16em] text-ink transition-colors hover:text-accent-ink"
              >
                {term.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
