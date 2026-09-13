import type { SiteContent } from '@/content/types';
import { buildJsonLd } from '@/lib/seo';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { Hero } from '@/components/sections/Hero';
import { Intro } from '@/components/sections/Intro';
import { Audience } from '@/components/sections/Audience';
import { Banner } from '@/components/sections/Banner';
import { Expertise } from '@/components/sections/Expertise';
import { Approach } from '@/components/sections/Approach';
import { Services } from '@/components/sections/Services';
import { Office } from '@/components/sections/Office';
import { Faqs } from '@/components/sections/Faqs';
import { Booking } from '@/components/sections/Booking';

/**
 * Section order is identical for both themes. Office and FAQs render only
 * when the content object supplies them, so the clone stays faithful to the
 * original page while the redesign gains the new section.
 */
export function HomePage({ content }: { content: SiteContent }) {
  return (
    <div data-theme={content.theme} className="min-h-dvh bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(content)) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary focus:px-5 focus:py-3 focus:text-surface"
      >
        Skip to content
      </a>
      <Header content={content} />
      <main id="main">
        <Hero content={content} />
        <Intro content={content} />
        <Audience content={content} />
        <Banner content={content} />
        <Expertise content={content} />
        <Approach content={content} />
        <Services content={content} />
        <Office content={content} />
        <Faqs content={content} />
        <Booking content={content} />
      </main>
      <Footer content={content} />
    </div>
  );
}
