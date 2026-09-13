import type { SiteContent } from '@/content/types';
import { Figure } from '@/components/ui/Figure';
import { Rich } from '@/components/ui/Rich';

/**
 * PART 3 — a section that does not exist in the original template.
 * It reuses the 5/7 split, the eyebrow treatment, the hairline rules and the
 * section rhythm established elsewhere on the page, so it reads as part of the
 * site rather than as an addition to it.
 */
export function Office({ content }: { content: SiteContent }) {
  const office = content.office;
  if (!office) return null;

  const [lead, ...rest] = office.images;

  return (
    <section id="office" className="bg-secondary-soft/55 py-section">
      <div className="wide">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="font-sans text-eyebrow uppercase text-accent-ink">{office.eyebrow}</p>
            <h2 className="mt-5 text-h2">
              <Rich text={office.heading} />
            </h2>
            <div className="mt-6 space-y-5 text-body">
              {office.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <dl className="mt-10">
              {office.details.map((detail) => (
                <div key={detail.label} className="border-t border-line py-4 sm:flex sm:gap-6">
                  <dt className="font-sans text-[0.78rem] uppercase tracking-[0.14em] text-muted sm:w-28 sm:shrink-0 sm:pt-[3px]">
                    {detail.label}
                  </dt>
                  <dd className="mt-1 text-[0.98rem] text-ink sm:mt-0">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-7">
            <Figure media={lead} ratio="aspect-[4/3]" />
            {rest.length > 0 && (
              <div
                className={`mt-4 grid gap-4 sm:mt-6 sm:gap-6 ${
                  rest.length === 1 ? 'grid-cols-1' : 'grid-cols-2'
                }`}
              >
                {rest.map((image) => (
                  <Figure
                    key={image.src}
                    media={image}
                    ratio={rest.length === 1 ? 'aspect-[16/9]' : 'aspect-square'}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
