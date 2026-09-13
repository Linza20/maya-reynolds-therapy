import type { SiteContent } from './types';

/**
 * PART 1 — the clone. Copy, image assets and section order are taken from
 * conejovalleycounseling.com/home so that /clone and / can be diffed
 * side by side: identical layout components, different content + tokens.
 * Images are referenced from the original CDN for comparison purposes only.
 */

const CDN = 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10';

export const original: SiteContent = {
  theme: 'original',

  meta: {
    title: 'Counseling in Newbury Park, CA | Conejo Valley Family Counseling',
    description:
      'Counseling for adults, couples, and children in Newbury Park & across CA. EMDR, trauma & dissociation, special needs parenting, anxiety, & more. In-person & online.',
    canonical: 'https://www.conejovalleycounseling.com/',
    locality: 'Newbury Park',
    region: 'CA'
  },

  brand: {
    name: 'Conejo Valley Family Counseling',
    wordmark: 'Conejo Valley Family Counseling',
    logo: `${CDN}/7116bf54-a0e1-4128-81d8-24fd9960c7ed/Conejo+Valley+Counseling+Logo.png?format=1500w`
  },

  nav: [
    { label: 'About', href: '#about' },
    {
      label: 'Our Team',
      href: '#team',
      children: [
        { label: 'Jennifer Anderson, LMFT', href: '#team' },
        { label: 'Candace Bletscher, AMFT', href: '#team' },
        { label: 'Heather Williams-Baumgart, AMFT', href: '#team' },
        { label: 'Michaela Gorospe, AMFT', href: '#team' },
        { label: 'Samantha Johnson, AMFT', href: '#team' },
        { label: 'Autumn Bodily, AMFT', href: '#team' },
        { label: 'Andrea Watkins, APCC', href: '#team' },
        { label: 'Rosa Gomez, AMFT', href: '#team' },
        { label: 'Chad Flores, AMFT', href: '#team' }
      ]
    },
    {
      label: 'Specialties',
      href: '#services',
      children: [
        { label: 'Dissociation', href: '#services' },
        { label: 'Trauma', href: '#services' },
        { label: 'Special Needs Parenting', href: '#services' },
        { label: 'Couples', href: '#services' },
        { label: 'Children & Teens', href: '#services' },
        { label: 'Anxiety & Depression', href: '#services' },
        { label: 'Adoption', href: '#services' }
      ]
    },
    {
      label: 'Methods',
      href: '#approach',
      children: [
        { label: 'EMDR', href: '#approach' },
        { label: 'Brainspotting', href: '#approach' },
        { label: 'Somatic Therapy', href: '#approach' },
        { label: 'Parts Work Therapy', href: '#approach' }
      ]
    },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' }
  ],
  navCta: { label: 'Contact', href: '#contact' },
  headerScrollBack: true,

  hero: {
    eyebrow: 'Online & in-person counseling in Newbury Park & across CA',
    heading: 'Rebuild your foundation on solid ground and finally begin to *thrive*.',
    sub: 'Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.',
    cta: { label: 'Book an Appointment', href: '#contact' },
    images: [
      { src: '/images/clone/Jennifer_A_-_Images__66_.webp', alt: 'family therapy' },
      { src: `${CDN}/3643a7ac-ff62-4927-b96e-9e65ecff0521/Jennifer+A+-+Images+%2867%29.jpg`, alt: 'child therapy' }
    ]
  },

  intro: {
    heading: 'You’re holding onto hope that life can be better than it is right now.',
    lead: '*At Conejo Valley Family Counseling we want to make that hope a reality.*',
    body: "Whether you're an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.",
    image: {
      src: `${CDN}/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg`,
      alt: 'Sandy beach with gentle ocean waves and a cloudy sky.'
    },
    afterImage:
      'First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.'
  },

  audience: {
    heading: 'Who we *help*',
    cards: [
      {
        title: 'Adults',
        body: 'Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.',
        image: {
          src: '/images/clone/Jennifer_A_-_Images__8_.webp',
          alt: 'Two people sitting on a log at the beach, facing a lake with mountains in the background.'
        }
      },
      {
        title: 'Couples',
        href: '#services',
        body: 'Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.',
        image: {
          src: '/images/clone/Jennifer_A_-_Images__9_.webp',
          alt: 'A couple embracing on the beach at sunset.'
        }
      },
      {
        title: 'Children & Teens',
        href: '#services',
        body: 'Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.',
        image: {
          src: '/images/clone/Jennifer_A_-_Images__10_.webp',
          alt: 'A boy carrying a girl on a beach with waves in the background.'
        }
      }
    ]
  },

  banner: {
    image: {
      src: `${CDN}/27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png`,
      alt: 'Coastal scene'
    },
    overlay: 0.42,
    tone: 'dark',
    heading:
      'You deserve a place where your story is heard, valued, and understood. *Nothing will be too heavy for us to carry together.*'
  },

  expertise: {
    heading: 'Our areas of *expertise*',
    terms: [
      { label: 'Dissociation', href: '#services' },
      { label: 'Trauma', href: '#services' },
      { label: 'Family conflict', href: '#services' },
      { label: 'Special needs parenting', href: '#services' },
      { label: 'Depression', href: '#services' },
      { label: 'marriage', href: '#services' },
      { label: 'anxiety', href: '#services' },
      { label: 'relationships', href: '#services' },
      { label: 'children', href: '#services' },
      { label: 'teens', href: '#services' },
      { label: 'intimacy & connection', href: '#services' }
    ],
    trailing: '*…and more.*'
  },

  approach: {
    eyebrow: 'How we work',
    heading: 'We’re here to make a difference.',
    image: {
      src: `${CDN}/389808ad-7273-4e03-a32b-c172aa735f12/Jennifer+A+-+Images+%286%29.jpg`,
      alt: 'A woman and a child dancing on a sandy beach at sunset.'
    },
    lead: '*The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.*',
    body: [
      'Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.',
      'Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.'
    ],
    cta: { label: 'Learn more about us', href: '#about' }
  },

  services: {
    image: {
      src: `${CDN}/6f1501bf-74a5-4c57-a957-8ce4c5876848/Jennifer+A+-+Images+%285%29.jpg`,
      alt: 'Family of four standing on a beach, holding hands, facing the ocean at sunset.'
    },
    heading: 'Honoring where you’ve been *&* helping shape where you’re headed.',
    subheading: 'Our *specialties* include…',
    columns: 2,
    items: [
      {
        title: 'Trauma',
        href: '#contact',
        body: 'We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.'
      },
      {
        title: 'Dissociation',
        href: '#contact',
        body: 'The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.'
      },
      {
        title: 'EMDR',
        href: '#contact',
        body: 'Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.'
      },
      {
        title: 'Special Needs Parenting',
        href: '#contact',
        body: 'Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.'
      }
    ]
  },

  booking: {
    eyebrow: 'Schedule an appointment',
    heading: 'Find a therapist who is the right fit for *you*.',
    body: "Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.",
    cta: { label: 'Book now', href: '#contact' },
    image: {
      src: `${CDN}/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg`,
      alt: 'A person picking up seashells on a sandy beach.'
    }
  },

  footer: {
    image: {
      src: `${CDN}/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg`,
      alt: 'A person pointing at shells on the sandy beach with a child nearby.'
    },
    note: 'We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.',
    columns: [
      {
        heading: 'Navigate',
        links: [
          { label: 'Home', href: '#top' },
          { label: 'About', href: '#about' },
          { label: 'FAQs', href: '#faqs' },
          { label: 'Contact', href: '#contact' }
        ]
      },
      {
        heading: 'Contact',
        lines: [
          '925 Broadbeck Dr',
          'Suites 200 and 225',
          'Newbury Park, CA 91320',
          'info@conejovalleycounseling.com',
          '805.242.3120'
        ]
      },
      {
        heading: 'Our Team',
        links: [
          { label: 'Jennifer Anderson', href: '#team' },
          { label: 'Heather Williams-Baumgart', href: '#team' },
          { label: 'Autumn Bodily', href: '#team' },
          { label: 'Michaela Gorospe', href: '#team' },
          { label: 'Candace Bletscher', href: '#team' },
          { label: 'Samantha Johnson', href: '#team' },
          { label: 'Andrea Watkins', href: '#team' },
          { label: 'Rosa Gomez', href: '#team' },
          { label: 'Chad Flores', href: '#team' }
        ]
      }
    ],
    serving: 'Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi Valley',
    legal: [
      { label: 'Terms', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Disclaimer', href: '#' }
    ]
  }
};
