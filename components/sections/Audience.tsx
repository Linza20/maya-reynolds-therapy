import Link from 'next/link';
import type { SiteContent } from '@/content/types';
import { Figure } from '@/components/ui/Figure';
import { Rich } from '@/components/ui/Rich';

/** Heading in a left gutter; three columns of image-then-text beside it. */
export function Audience({ content }: { content: SiteContent }) {
  const { audience } = content;
  return (
    <section id="about" className="bg-raised py-section">
      <div className="wide">
        <h2 className="max-w-sm text-h2">
          <Rich text={audience.heading} />
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:ml-[14%] lg:grid-cols-3">
          {audience.cards.map((card) => (
            <article key={card.title} className="flex flex-col">
              {card.image && <Figure media={card.image} ratio="aspect-[3/4]" />}
              <h3 className="mt-9 text-h3">
                {card.href ? (
                  <Link href={card.href} className="transition-colors hover:text-accent-ink">
                    {card.title}
                  </Link>
                ) : (
                  card.title
                )}
              </h3>
              <p className="mt-5 text-body">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
