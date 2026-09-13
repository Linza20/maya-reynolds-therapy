import Link from 'next/link';
import type { SiteContent } from '@/content/types';
import { Rich } from '@/components/ui/Rich';

/**
 * Two movements: a large image on the left with the statement headline beside
 * it, then a left heading gutter with the specialty grid running to its right.
 */
export function Services({ content }: { content: SiteContent }) {
  const { services } = content;
  const cols = services.columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2';

  return (
    <section id="services" className="bg-raised py-section">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[53fr_47fr] lg:gap-0">
        <img
          src={services.image.src}
          alt={services.image.alt}
          loading="lazy"
          decoding="async"
          className="h-72 w-full object-cover sm:h-96 lg:h-[42rem]"
        />
        <h2 className="padx max-w-2xl text-h2 lg:px-[5vw]">
          <Rich text={services.heading} />
        </h2>
      </div>

      <div className="wide mt-24 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2.1fr] lg:gap-16">
        <h3 className="max-w-xs text-h3">
          <Rich text={services.subheading} />
        </h3>

        <div className={`grid grid-cols-1 gap-x-14 gap-y-16 sm:grid-cols-2 ${cols}`}>
          {services.items.map((item) => (
            <article key={item.title} className="flex flex-col">
              <h4 className="text-h3">{item.title}</h4>
              <p className="mt-6 flex-1 text-body">{item.body}</p>
              {item.href && (
                <Link
                  href={item.href}
                  className="label mt-8 self-start border-b border-ink/45 pb-1.5 font-sans text-[0.8rem] uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink"
                >
                  Learn more
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
