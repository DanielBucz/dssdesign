import { Fragment } from "react";

const tokenPattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;

/**
 * Zamienia linki w formacie [tekst](/adres/) na elementy <a>, a **tekst** na <strong>.
 * Resztę zostawia jako tekst.
 */
export function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(tokenPattern)) {
    const index = match.index ?? 0;
    parts.push(text.slice(lastIndex, index));
    if (match[3] !== undefined) {
      parts.push(
        <strong key={index}>
          <RichText text={match[3]} />
        </strong>,
      );
    } else {
      parts.push(
        <a key={index} href={match[2]}>
          {match[1]}
        </a>,
      );
    }
    lastIndex = index + match[0].length;
  }

  parts.push(text.slice(lastIndex));

  return <Fragment>{parts}</Fragment>;
}
