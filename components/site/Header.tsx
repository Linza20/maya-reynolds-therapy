'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { SiteContent } from '@/content/types';
import { Button } from '@/components/ui/Button';

export function Header({ content }: { content: SiteContent }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const scrollBack = content.headerScrollBack ?? false;

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (scrollBack) {
        // Squarespace "scroll-back": hide going down, reveal going up.
        setHidden(y > 220 && y > lastY.current);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollBack]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[transform,background-color,border-color] duration-300 ease-calm ${
        scrolled ? 'border-line bg-surface/95 backdrop-blur' : 'border-transparent bg-surface'
      } ${hidden && !open ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="wide flex h-[4.75rem] items-center justify-between gap-6 lg:h-[7rem]">
        <Link href="#top" className="min-w-0 leading-tight">
          {content.brand.logo ? (
            <img
              src={content.brand.logo}
              alt={content.brand.name}
              className="h-10 w-auto object-contain sm:h-12 lg:h-16"
            />
          ) : (
            <span className="block font-display text-[1.15rem] tracking-[0.01em] text-ink sm:text-[1.35rem]">
              {content.brand.wordmark}
            </span>
          )}
          {content.brand.tagline && (
            <span className="hidden text-[0.7rem] uppercase tracking-[0.14em] text-muted sm:block">
              {content.brand.tagline}
            </span>
          )}
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {content.nav.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="nav-link inline-flex items-center gap-1.5 py-2 text-[0.92rem] text-body transition-colors hover:text-accent-ink"
              >
                {item.label}
                {item.children && (
                  <svg viewBox="0 0 10 6" aria-hidden className="h-[5px] w-[9px] fill-none stroke-current" strokeWidth="1.4">
                    <path d="M1 1l4 4 4-4" />
                  </svg>
                )}
              </Link>
              {item.children && (
                <div className="pointer-events-none absolute left-1/2 top-full z-10 w-64 -translate-x-1/2 pt-2 opacity-0 transition-opacity duration-200 ease-calm group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                  <ul className="rounded-art border border-line bg-raised py-2 shadow-[0_18px_40px_-24px_rgb(var(--c-ink)/0.45)]">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="block px-5 py-2 text-[0.88rem] text-body transition-colors hover:bg-secondary-soft/60 hover:text-ink"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          <Button href={content.navCta.href} variant="outline" className="ml-2 px-8 py-3 text-[0.88rem]">
            {content.navCta.label}
          </Button>
        </nav>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-300 ease-calm ${open ? 'translate-y-[6px] rotate-45' : ''}`}
          />
          <span className={`block h-px w-6 bg-ink transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-300 ease-calm ${open ? '-translate-y-[6px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="max-h-[calc(100dvh-4.75rem)] overflow-y-auto border-t border-line bg-surface lg:hidden"
      >
        <nav aria-label="Mobile" className="wide py-6">
          <ul className="divide-y divide-line">
            {content.nav.map((item) => (
              <li key={item.label} className="py-1">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setExpanded((v) => (v === item.label ? null : item.label))}
                      aria-expanded={expanded === item.label}
                      className="flex w-full items-center justify-between py-3 text-left font-display text-[1.1rem] text-ink"
                    >
                      {item.label}
                      <span className="text-accent-ink">{expanded === item.label ? '–' : '+'}</span>
                    </button>
                    {expanded === item.label && (
                      <ul className="pb-3 pl-4">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="block py-2 text-[0.95rem] text-body"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-[1.1rem] text-ink"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Button href={content.navCta.href} className="mt-7 w-full">
            {content.navCta.label}
          </Button>
        </nav>
      </div>
    </header>
  );
}
