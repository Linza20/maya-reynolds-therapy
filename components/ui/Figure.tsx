import type { Media } from '@/content/types';

type Props = {
  media: Media;
  /** Tailwind aspect utility, e.g. "aspect-[4/5]" */
  ratio?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Plain <img> rather than next/image so the project runs anywhere
 * (including static export) without an image optimisation server.
 */
export function Figure({ media, ratio = 'aspect-[4/3]', className = '', priority = false }: Props) {
  return (
    <figure className={`relative overflow-hidden rounded-art bg-secondary-soft ${ratio} ${className}`}>
      <img
        src={media.src}
        alt={media.alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </figure>
  );
}
