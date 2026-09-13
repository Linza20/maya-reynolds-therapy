import type { SiteContent } from '@/content/types';
import { Rich } from '@/components/ui/Rich';

/** Full-bleed image, darkened, with the line set left and large. */
export function Banner({ content }: { content: SiteContent }) {
  const { banner } = content;
  const overlay = banner.overlay ?? 0.45;
  const light = banner.tone === 'light';

  return (
    <section className="relative isolate flex min-h-[68vh] items-center overflow-hidden py-section">
      <img
        src={banner.image.src}
        alt={banner.image.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundColor: light
            ? `rgb(var(--c-surface) / ${overlay})`
            : `rgb(var(--c-ink) / ${overlay})`
        }}
      />
      <div className="wide">
        <h2 className={`max-w-4xl text-h2 ${light ? 'text-ink' : 'text-white'}`}>
          <Rich text={banner.heading} />
        </h2>
      </div>
    </section>
  );
}
