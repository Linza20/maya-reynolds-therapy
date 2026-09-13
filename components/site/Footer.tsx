import Link from 'next/link';
import type { SiteContent } from '@/content/types';

/** Brand and note on the left; navigate / team / contact columns on the right. */
export function Footer({ content }: { content: SiteContent }) {
  const { footer, brand } = content;
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wide py-section">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
          <div>
            {brand.logo ? (
              <img src={brand.logo} alt={brand.name} className="h-auto w-[min(340px,80%)]" />
            ) : (
              <p className="font-display text-h3">{brand.wordmark}</p>
            )}
            <p className="mt-10 max-w-md text-lead">{footer.note}</p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {footer.columns.map((column) => (
              <div key={column.heading}>
                <h2 className="label font-sans text-eyebrow uppercase tracking-[0.16em] opacity-70">
                  {column.heading}
                </h2>
                <ul className="mt-6 space-y-3">
                  {column.links?.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="transition-opacity hover:opacity-65">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  {column.lines?.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                {column.heading.toLowerCase().includes('contact') && (
                  <p className="mt-8 max-w-[22rem] italic opacity-80">{footer.serving}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 text-[0.85rem] opacity-70 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {footer.legal.map((link, i) => (
              <li key={link.label} className="flex items-center gap-3">
                <Link href={link.href} className="transition-opacity hover:opacity-60">
                  {link.label}
                </Link>
                {i < footer.legal.length - 1 && <span aria-hidden className="opacity-40">|</span>}
              </li>
            ))}
          </ul>
          <p>
            © {year} {brand.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
