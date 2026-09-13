import type { SiteContent } from '@/content/types';
import { Rich } from '@/components/ui/Rich';

/**
 * <details>/<summary> keeps the accordion keyboard-accessible and working
 * without JavaScript. The marker is replaced with a themed +/– glyph.
 */
export function Faqs({ content }: { content: SiteContent }) {
  const faqs = content.faqs;
  if (!faqs) return null;

  return (
    <section id="faqs" className="py-section">
      <div className="wide grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          <p className="label font-sans text-eyebrow uppercase text-muted">{faqs.eyebrow}</p>
          <h2 className="mt-8 max-w-xs text-h2">
            <Rich text={faqs.heading} />
          </h2>
        </div>

        <div>
          {faqs.items.map((item) => (
            <details key={item.q} className="group border-t border-line last:border-b">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left marker:hidden [&::-webkit-details-marker]:hidden">
                <h3 className="text-[1.05rem] leading-snug text-ink sm:text-[1.15rem]">{item.q}</h3>
                <span
                  aria-hidden
                  className="mt-1 shrink-0 font-sans text-lg leading-none text-accent-ink transition-transform duration-300 ease-calm group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-prose pb-6 pr-10 text-[0.98rem] text-body">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
