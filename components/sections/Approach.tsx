import type { SiteContent } from '@/content/types';
import { Button } from '@/components/ui/Button';
import { Rich } from '@/components/ui/Rich';

/** Label, headline, two text columns, image bleeding off the right edge. */
export function Approach({ content }: { content: SiteContent }) {
  const { approach } = content;
  return (
    <section id="approach" className="bg-secondary-soft/70 py-section">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[78fr_22fr] lg:items-stretch lg:gap-0">
        <div className="padx lg:pr-[5vw]">
          <p className="label font-sans text-eyebrow uppercase text-muted">{approach.eyebrow}</p>
          <h2 className="mt-12 max-w-3xl text-h2">
            <Rich text={approach.heading} />
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            <div>
              <p className="lead-caps text-lead text-ink">
                <Rich text={approach.lead} />
              </p>
              <p className="mt-8 text-body">{approach.body[0]}</p>
            </div>
            <div className="space-y-6 text-body">
              {approach.body.slice(1).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <Button href={approach.cta.href} className="mt-12">
            {approach.cta.label}
          </Button>
        </div>

        <img
          src={approach.image.src}
          alt={approach.image.alt}
          loading="lazy"
          decoding="async"
          className="h-72 w-full object-cover object-top sm:h-96 lg:h-full lg:max-h-[44rem] lg:min-h-[34rem]"
        />
      </div>
    </section>
  );
}
