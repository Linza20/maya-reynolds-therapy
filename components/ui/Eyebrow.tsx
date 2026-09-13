export function Eyebrow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-sans text-eyebrow uppercase text-accent-ink ${className}`}>
      <span className="inline-block border-b border-accent/60 pb-1">{children}</span>
    </p>
  );
}
