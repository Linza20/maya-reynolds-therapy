import { Fragment } from 'react';

/**
 * The original marks emphasis two ways, and the distinction is by length:
 * a one- or two-word emphasis is set in a script face ("thrive", "you",
 * "help", "expertise"), while a longer emphasised clause is set in italic
 * serif ("Nothing will be too heavy for us to carry together."). `*text*`
 * in the content layer picks the right one automatically.
 */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (!(part.startsWith('*') && part.endsWith('*'))) {
          return <Fragment key={i}>{part}</Fragment>;
        }
        const inner = part.slice(1, -1);
        const short = inner.trim().split(/\s+/).length <= 2;
        return (
          <em key={i} className={short ? 'em-script' : 'em-phrase'}>
            {inner}
          </em>
        );
      })}
    </>
  );
}
