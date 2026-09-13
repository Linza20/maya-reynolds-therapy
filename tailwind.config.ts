import type { Config } from 'tailwindcss';

/**
 * Every colour is a CSS variable defined in app/globals.css.
 * Swapping `data-theme` on <body> re-skins the entire site — no class rewrites.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--c-primary) / <alpha-value>)',
          soft: 'rgb(var(--c-primary-soft) / <alpha-value>)'
        },
        secondary: {
          DEFAULT: 'rgb(var(--c-secondary) / <alpha-value>)',
          soft: 'rgb(var(--c-secondary-soft) / <alpha-value>)'
        },
        accent: {
          DEFAULT: 'rgb(var(--c-accent) / <alpha-value>)',
          ink: 'rgb(var(--c-accent-ink) / <alpha-value>)'
        },
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        raised: 'rgb(var(--c-raised) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        body: 'rgb(var(--c-body) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)'
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif']
      },
      fontSize: {
        // Minor-third-ish scale, clamped for fluid responsiveness
        eyebrow: ['0.78rem', { lineHeight: '1.5', letterSpacing: '0.16em' }],
        h1: ['clamp(2.4rem, 1.35rem + 4.4vw, 4.75rem)', { lineHeight: '1.06', letterSpacing: '-0.018em' }],
        h2: ['clamp(1.85rem, 1.2rem + 2.7vw, 3.1rem)', { lineHeight: '1.14', letterSpacing: '-0.014em' }],
        h3: ['clamp(1.45rem, 1.1rem + 1.5vw, 2.15rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        h4: ['clamp(1.15rem, 1rem + 0.6vw, 1.4rem)', { lineHeight: '1.3' }],
        lead: ['clamp(1.06rem, 1rem + 0.35vw, 1.28rem)', { lineHeight: '1.7' }]
      },
      maxWidth: {
        prose: '68ch',
        shell: '1240px'
      },
      spacing: {
        section: 'clamp(4.5rem, 3rem + 6vw, 8.5rem)',
        gutter: 'clamp(1.25rem, 0.6rem + 2.6vw, 3.5rem)'
      },
      borderRadius: {
        art: '2px'
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.22, 0.61, 0.36, 1)'
      }
    }
  },
  plugins: []
};
export default config;
