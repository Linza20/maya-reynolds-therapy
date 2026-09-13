type Props = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: 'surface' | 'raised' | 'mist' | 'ink';
};

const tones = {
  surface: 'bg-surface',
  raised: 'bg-raised',
  mist: 'bg-secondary-soft/55',
  ink: 'bg-primary text-surface'
} as const;

export function Section({ id, children, className = '', tone = 'surface' }: Props) {
  return (
    <section id={id} className={`${tones[tone]} py-section ${className}`}>
      <div className="shell">{children}</div>
    </section>
  );
}
