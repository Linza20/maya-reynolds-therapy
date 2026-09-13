import type { SiteContent } from '@/content/types';
import { Rich } from '@/components/ui/Rich';

/** Heading across the left, two text columns beneath, image bleeding right. */
export function Intro({ content }: { content: SiteContent }) {
  const { intro } = content;
  return (
    <section className="py-section">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[74fr_26fr] lg:items-stretch lg:gap-0">
        <div className="padx lg:pr-[5vw]">
          <h2 className="max-w-3xl text-h2">
            <Rich text={intro.heading} />
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            <div>
              <p className="lead-caps text-lead text-ink">
                <Rich text={intro.lead} />
              </p>
              <p className="mt-8 text-body">{intro.body}</p>
            </div>
            <p className="text-body">{intro.afterImage}</p>
          </div>
        </div>

        <img
          src={intro.image.src}
          alt={intro.image.alt}
          loading="lazy"
          decoding="async"
          className="h-64 w-full object-cover sm:h-80 lg:h-full lg:min-h-[36rem]"
        />
      </div>
    </section>
  );
}
