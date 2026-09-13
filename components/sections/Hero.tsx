import type { SiteContent } from '@/content/types';
import { Button } from '@/components/ui/Button';
import { Rich } from '@/components/ui/Rich';

/**
 * Left image bleeds off the page edge, the text column sits centre-right, and
 * a narrow second image drops in at the right edge below the fold line.
 */
export function Hero({ content }: { content: SiteContent }) {
  const { hero } = content;
  return (
    <section id="top" className="relative">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[34fr_57fr_9fr] lg:gap-0">
        <img
          src={hero.images[0].src}
          alt={hero.images[0].alt}
          fetchPriority="high"
          decoding="async"
          className="h-[52vh] w-full object-cover sm:h-[62vh] lg:h-[84vh]"
        />

        <div className="settle padx py-6 lg:px-[5vw] lg:py-20">
          <p className="label font-sans text-eyebrow uppercase text-muted">{hero.eyebrow}</p>
          <h1 className="mt-10 text-h1">
            <Rich text={hero.heading} />
          </h1>
          <p className="mt-9 max-w-xl text-lead text-body">{hero.sub}</p>
          <Button href={hero.cta.href} className="mt-10">
            {hero.cta.label}
          </Button>
        </div>

        <img
          src={hero.images[1].src}
          alt={hero.images[1].alt}
          decoding="async"
          className="hidden h-[62vh] w-full self-end object-cover lg:block"
        />
      </div>
    </section>
  );
}
