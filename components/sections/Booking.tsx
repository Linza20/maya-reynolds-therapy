import type { SiteContent } from '@/content/types';
import { Button } from '@/components/ui/Button';
import { Rich } from '@/components/ui/Rich';

/** Narrow image at the left edge, text centre, large image bleeding right. */
export function Booking({ content }: { content: SiteContent }) {
  const { booking, footer } = content;
  return (
    <section id="contact" className="py-section">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[12fr_53fr_35fr] lg:gap-0">
        <img
          src={footer.image.src}
          alt={footer.image.alt}
          loading="lazy"
          decoding="async"
          className="hidden h-[30rem] w-full self-center object-cover lg:block"
        />

        <div className="padx lg:px-[5vw]">
          <p className="label font-sans text-eyebrow uppercase text-muted">{booking.eyebrow}</p>
          <h2 className="mt-12 max-w-2xl text-h2">
            <Rich text={booking.heading} />
          </h2>
          <p className="mt-8 max-w-2xl text-body">{booking.body}</p>
          <Button href={booking.cta.href} variant="outline" className="mt-10">
            {booking.cta.label}
          </Button>
        </div>

        <img
          src={booking.image.src}
          alt={booking.image.alt}
          loading="lazy"
          decoding="async"
          className="h-72 w-full object-cover sm:h-96 lg:h-[46rem]"
        />
      </div>
    </section>
  );
}
