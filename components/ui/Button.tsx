import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: 'solid' | 'outline' | 'quiet';
  className?: string;
};

const base =
  'btn inline-flex items-center justify-center font-sans text-[0.95rem] tracking-[0.02em] px-7 py-3.5 rounded-art transition-colors duration-300 ease-calm';

/* The btn--* classes are override hooks: the clone theme reshapes primary
   buttons into Squarespace's "outline / underline" style without the call
   sites knowing anything about it. See the end of app/globals.css. */
const variants = {
  solid: 'btn--solid bg-primary text-surface hover:bg-primary-soft',
  outline: 'btn--outline border border-primary/35 text-primary hover:bg-primary hover:text-surface',
  quiet: 'btn--quiet text-accent-ink underline underline-offset-[6px] decoration-accent/60 hover:decoration-accent-ink px-0 py-0'
} as const;

export function Button({ href, children, variant = 'solid', className = '' }: Props) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
