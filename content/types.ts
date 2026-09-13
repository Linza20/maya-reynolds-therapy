/**
 * Both the clone (/clone) and the redesign (/) render the SAME section
 * components. Only this content object and the theme token set change.
 * That is how "layout preserved, everything else redesigned" is enforced
 * structurally rather than by eyeballing it.
 */

export type Media = { src: string; alt: string };

export type Link = { label: string; href: string };

export type NavItem = Link & { children?: Link[] };

export type Card = {
  title: string;
  href?: string;
  body: string;
  image?: Media;
};

export type Faq = { q: string; a: string };

export type SiteContent = {
  theme: 'original' | 'maya';

  meta: {
    title: string;
    description: string;
    canonical: string;
    locality: string;
    region: string;
  };

  brand: {
    name: string;
    wordmark: string;
    /** Image logo, when the brand uses one instead of a typeset wordmark. */
    logo?: string;
    tagline?: string;
  };

  nav: NavItem[];
  navCta: Link;
  /** Squarespace 'scroll-back': header hides going down, returns going up. */
  headerScrollBack?: boolean;

  hero: {
    eyebrow: string;
    heading: string;
    sub: string;
    cta: Link;
    images: [Media, Media];
  };

  intro: {
    heading: string;
    lead: string;
    body: string;
    image: Media;
    afterImage: string;
  };

  audience: {
    heading: string;
    cards: Card[];
  };

  banner: {
    image: Media;
    heading: string;
    /** Overlay strength over the background image, 0-1. */
    overlay?: number;
    /** 'light' = dark text on a lightly veiled image; 'dark' = light text on a heavy veil. */
    tone?: 'light' | 'dark';
  };

  expertise: {
    heading: string;
    terms: Link[];
    trailing: string;
  };

  approach: {
    eyebrow: string;
    heading: string;
    image: Media;
    lead: string;
    body: string[];
    cta: Link;
  };

  services: {
    image: Media;
    heading: string;
    subheading: string;
    columns: 2 | 3;
    items: Card[];
  };

  /** Part 3 — new section, absent from the original template. */
  office?: {
    eyebrow: string;
    heading: string;
    body: string[];
    images: Media[];
    details: { label: string; value: string }[];
  };

  faqs?: {
    eyebrow: string;
    heading: string;
    items: Faq[];
  };

  booking: {
    eyebrow: string;
    heading: string;
    body: string;
    cta: Link;
    image: Media;
  };

  footer: {
    image: Media;
    note: string;
    columns: { heading: string; links?: Link[]; lines?: string[] }[];
    serving: string;
    legal: Link[];
  };
};
