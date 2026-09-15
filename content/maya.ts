import type { SiteContent } from './types';

/**
 * PART 2 — every string below traces back to Dr. Maya Reynolds' profile:
 * PsyD, licensed clinical psychologist, Santa Monica CA 90401; adults only;
 * anxiety / trauma / burnout; high-achieving professionals, entrepreneurs and
 * creatives; CBT, EMDR, mindfulness-based and body-oriented techniques;
 * warm, collaborative, grounded; trauma-informed with careful pacing,
 * safety and stabilization; in-person plus secure telehealth across
 * California; a quiet, private office with natural light, comfortable
 * seating and an uncluttered environment.
 *
 * `*text*` renders as italic emphasis (see components/ui/Rich.tsx).
 */

const BOOK = { label: 'Book a consultation', href: '#contact' };

export const maya: SiteContent = {
  theme: 'maya',

  meta: {
    title: 'Anxiety, Trauma & Burnout Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD',
    description:
      'Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in Santa Monica, CA offering therapy for anxiety, trauma and burnout. CBT, EMDR and mindfulness-based care. In-person in Santa Monica and secure telehealth across California.',
    canonical: 'https://mayareynoldstherapy.netlify.app/',
    locality: 'Santa Monica',
    region: 'CA'
  },

  brand: {
    name: 'Dr. Maya Reynolds, PsyD',
    wordmark: 'Maya Reynolds',
    tagline: 'Licensed Clinical Psychologist · Santa Monica, CA'
  },

  nav: [
    { label: 'About', href: '#about' },
    {
      label: 'Services',
      href: '#services',
      children: [
        { label: 'Anxiety & Overthinking', href: '#services' },
        { label: 'Trauma Therapy & EMDR', href: '#services' },
        { label: 'Burnout & Chronic Stress', href: '#services' }
      ]
    },
    {
      label: 'Approach',
      href: '#approach',
      children: [
        { label: 'Cognitive Behavioral Therapy', href: '#approach' },
        { label: 'EMDR', href: '#approach' },
        { label: 'Mindfulness-Based Practice', href: '#approach' },
        { label: 'Body-Oriented Techniques', href: '#approach' }
      ]
    },
    { label: 'Our Office', href: '#office' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' }
  ],
  navCta: BOOK,

  hero: {
    eyebrow: 'In-person in Santa Monica · Secure telehealth across California',
    heading:
      'Anxiety, trauma and burnout therapy in Santa Monica for adults who look *fine* on the outside.',
    sub: 'Dr. Maya Reynolds, PsyD is a licensed clinical psychologist helping capable, driven people quiet the worry, heal what is still unresolved, and build a way of living that holds.',
    cta: BOOK,
    images: [
      { src: '/images/hero-shore.webp', alt: 'The Santa Monica therapy office: sofa, artwork and tall windows' },
      { src: '/images/hero-room.webp', alt: 'Tall windows and an armchair in the Santa Monica therapy office' }
    ]
  },

  intro: {
    heading: 'You have handled the hard things. *Holding it together* should not be one of them.',
    lead: '*Therapy is where you get to stop performing and start understanding.*',
    body: 'Most of the adults I work with in Santa Monica are thoughtful, capable and self-aware. From the outside, everything looks handled. Inside, there is constant worry, a body that will not switch off, and a quiet sense of always bracing for what is next. You do not have to arrive with it figured out.',
    image: {
      src: '/images/intro-horizon.webp',
      alt: 'Daylight through the office windows onto the seating area'
    },
    afterImage:
      'What you are carrying is real, and it makes sense. Anxiety, trauma responses and burnout are not character flaws. They are a nervous system doing its best with what it has been given. In therapy we slow that system down enough to understand it, then give it better options. The work is warm and collaborative, and it moves at a pace you can trust.'
  },

  audience: {
    heading: 'Who I *work with*',
    cards: [
      {
        title: 'Adults living with anxiety',
        body: 'Constant worry, racing thoughts, panic symptoms, tension you carry in your body, nights where sleep will not come. Using CBT and mindfulness-based practice, we lower the volume and give you skills that work in a real week, not just in the room.',
        image: {
          src: '/images/who-anxiety.webp',
          alt: 'Soft curtains and a plant in a quiet corner of the Santa Monica office'
        }
      },
      {
        title: 'Professionals, founders and creatives in burnout',
        body: 'Years of pushing through leave people depleted, disconnected and unsure who they are outside the work. We rebuild sustainable routines, honest boundaries and self-compassion, without asking you to give up the ambition that got you here.',
        image: {
          src: '/images/who-burnout.webp',
          alt: 'An armchair beside the window, set for an unhurried session'
        }
      },
      {
        title: 'Adults carrying trauma',
        body: 'Whether it was one event or a long-standing pattern from childhood or past relationships, trauma keeps shaping safety, confidence and connection. Care here is trauma-informed and carefully paced, with EMDR introduced only when you are ready for it.',
        image: {
          src: '/images/who-trauma.webp',
          alt: 'The sofa and bookshelves in the private counseling room'
        }
      }
    ]
  },

  banner: {
    image: {
      src: '/images/banner-fog.webp',
      alt: 'The calm, uncluttered counseling room in Santa Monica'
    },
    overlay: 0.55,
    tone: 'dark',
    heading:
      'Nothing you bring here will be too much to sit with. *We go at the pace your nervous system can trust.*'
  },

  expertise: {
    heading: 'Areas of *focus*',
    terms: [
      { label: 'anxiety', href: '#services' },
      { label: 'panic symptoms', href: '#services' },
      { label: 'overthinking', href: '#services' },
      { label: 'trauma', href: '#services' },
      { label: 'complex trauma', href: '#services' },
      { label: 'burnout', href: '#services' },
      { label: 'chronic stress', href: '#services' },
      { label: 'perfectionism', href: '#services' },
      { label: 'sleep difficulty', href: '#services' },
      { label: 'boundaries', href: '#services' },
      { label: 'self-compassion', href: '#services' },
      { label: 'nervous system regulation', href: '#approach' }
    ],
    trailing: '*…and the things that are hard to name yet.*'
  },

  approach: {
    eyebrow: 'About Dr. Maya Reynolds',
    heading: 'Practical tools, and the *deeper work* underneath them.',
    image: {
      src: '/images/maya-portrait.webp',
      alt: 'Portrait of Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica'
    },
    lead: '*I am a licensed clinical psychologist in Santa Monica, California, working with adults on anxiety, trauma and burnout.*',
    body: [
      'I work with adults navigating anxiety, panic, trauma and burnout. Many arrive feeling functional on the outside while quietly managing constant worry, tension in the body, difficulty sleeping, or a sense of always bracing for something to go wrong. Others are dealing with earlier experiences that still shape their relationships, confidence and sense of safety.',
      'Sessions are structured enough to feel supportive, and still leave room for reflection and depth. I integrate evidence-based methods including cognitive behavioral therapy (CBT), EMDR, mindfulness-based practices and body-oriented techniques, to help you understand both the emotional and the physiological sides of what you are experiencing.',
      'Therapy works best when you feel respected, understood and actively involved in the process. The goal is not only symptom relief: it is insight, resilience, and a stronger relationship with yourself over time. If you are looking for a therapist who combines practical tools with depth-oriented work, and who understands the realities of living and working in a fast-paced environment, I may be a good fit.'
    ],
    cta: { label: 'Read more about my background', href: '#faqs' }
  },

  services: {
    image: {
      src: '/images/services-light.webp',
      alt: 'Daylight across the seating area of the Santa Monica counseling office'
    },
    heading: 'Understanding what happened to you, *and* what happens next.',
    subheading: 'How I can *help*',
    columns: 3,
    items: [
      {
        title: 'Anxiety & Overthinking',
        body: 'For chronic worry, racing thoughts, panic symptoms and the physical tension that comes with them. We use Cognitive Behavioral Therapy to interrupt the thought patterns that keep anxiety fed, and mindfulness and breath-and-body skills to settle the nervous system in the moment. The goal is not to think less. It is to stop being run by it.',
        href: '#contact'
      },
      {
        title: 'Trauma Therapy & EMDR',
        body: 'Carefully paced work for single-incident trauma and for complex, long-standing patterns from childhood or past relationships. We begin with safety and stabilization, and move to EMDR, Eye Movement Desensitization and Reprocessing, when it is the right time. Memories stop being something you brace against and become something you can hold.',
        href: '#contact'
      },
      {
        title: 'Burnout & Chronic Stress',
        body: 'For high-achieving professionals, entrepreneurs and creatives who feel disconnected from themselves after years of pushing through stress. We look honestly at perfectionism, high internal pressure and the beliefs underneath the drive, then rebuild routines and self-compassion you can actually sustain in a demanding life.',
        href: '#contact'
      }
    ]
  },

  office: {
    eyebrow: 'Our office',
    heading: 'A quiet, private space in *Santa Monica*.',
    body: [
      'The office at 123th Street 45 W in Santa Monica is a quiet, private space designed to feel calm and grounding. Natural light, comfortable seating, an uncluttered room. Clients often share that the space itself helps them feel more at ease when they arrive.',
      'Sessions here are unhurried, and the room is arranged so that privacy is the default rather than something you have to ask for. If crossing town is the thing standing between you and starting, secure telehealth sessions are available to clients located anywhere in California.'
    ],
    images: [
      {
        src: '/images/office-room.webp',
        alt: 'The Santa Monica counseling room: sofa, armchair and daylight through tall windows'
      },
      {
        src: '/images/office-chairs.webp',
        alt: 'Comfortable seating and bookshelves in the office, arranged for an unhurried conversation'
      }
    ],
    details: [
      { label: 'Where', value: '123th Street 45 W, Santa Monica, CA 90401' },
      { label: 'Sessions', value: 'In-person in Santa Monica, or secure telehealth across California' },
      { label: 'The room', value: 'Natural light, comfortable seating, calm and uncluttered' },
      { label: 'Privacy', value: 'A private room where sessions stay unhurried and confidential' }
    ]
  },

  faqs: {
    eyebrow: 'Common questions',
    heading: 'Before you *reach out*',
    items: [
      {
        q: 'Do you offer online therapy, or only in-person sessions in Santa Monica?',
        a: 'Both. You can meet me in person at the Santa Monica office, or we can work over secure telehealth if you are located anywhere in California. Plenty of clients mix the two: in-person when they can, video when the week gets loud.'
      },
      {
        q: 'Who do you work with?',
        a: 'Adults. Most of the people I see are navigating anxiety, panic, trauma, burnout or chronic stress, and many of them are high-achieving professionals, entrepreneurs and creatives who look composed from the outside and feel exhausted underneath.'
      },
      {
        q: 'What kind of therapy do you practice?',
        a: 'My work is evidence-based and trauma-informed. I integrate Cognitive Behavioral Therapy, EMDR, mindfulness-based practice and body-oriented techniques, and I choose between them based on what you are working on rather than applying one method to everyone.'
      },
      {
        q: 'Will you make me talk about my trauma straight away?',
        a: 'No. Trauma work is paced deliberately, and it starts with safety and stabilization. We only move into processing, including EMDR, once there is enough steadiness to make that useful. You set the pace, and you can say stop at any point.'
      },
      {
        q: 'What happens in a first session?',
        a: 'Mostly listening. I want to understand what brought you in, what you have already tried, and what you would like to be different. By the end we will have a working sense of where to start and how often to meet, and you will have a feel for whether the fit is right.'
      },
      {
        q: 'How do I get started?',
        a: 'Book a consultation and tell me a little about what is going on. We will talk through what you are looking for and whether this is the right fit, then find a time that works.'
      }
    ]
  },

  booking: {
    eyebrow: 'Schedule a consultation',
    heading: 'Finding the right therapist is most of the work. *Let us find out if that is me.*',
    body: 'Reaching out takes something, and the fit between you and your therapist matters more than any method on a list. A consultation is a low-stakes conversation about what is going on and whether this is the right place for it. No commitment, no pressure to explain everything at once.',
    cta: BOOK,
    image: {
      src: '/images/booking-path.webp',
      alt: 'Wood floor and rug in the Santa Monica therapy office'
    }
  },

  footer: {
    image: {
      src: '/images/footer-water.webp',
      alt: 'The Santa Monica office, set up for in-person sessions'
    },
    note: 'Getting started should be simple. You are welcome in the Santa Monica office, or we can meet over secure video from anywhere in California, whichever makes it likelier that you actually begin.',
    columns: [
      {
        heading: 'Navigate',
        links: [
          { label: 'Home', href: '#top' },
          { label: 'About', href: '#about' },
          { label: 'Our Office', href: '#office' },
          { label: 'FAQs', href: '#faqs' },
          { label: 'Contact', href: '#contact' }
        ]
      },
      {
        heading: 'Contact',
        lines: [
          '123th Street 45 W',
          'Santa Monica, CA 90401',
          '@mayareynoldspsyd.com'
        ]
      },
      {
        heading: 'Services',
        links: [
          { label: 'Anxiety & Overthinking', href: '#services' },
          { label: 'Trauma Therapy & EMDR', href: '#services' },
          { label: 'Burnout & Chronic Stress', href: '#services' },
          { label: 'Telehealth across California', href: '#office' }
        ]
      }
    ],
    serving:
      'Serving Santa Monica, Venice, Brentwood, Pacific Palisades, Culver City, Marina del Rey & telehealth clients across California.',
    legal: [
      { label: 'Terms', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Disclaimer', href: '#' },
      { label: 'Good Faith Estimate', href: '#' }
    ]
  }
};
