import { Fragment } from "react";

const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Zamienia linki w formacie [tekst](/adres/) na elementy <a>, resztę zostawia jako tekst. */
export function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(linkPattern)) {
    const index = match.index ?? 0;
    parts.push(text.slice(lastIndex, index));
    parts.push(
      <a key={index} href={match[2]}>
        {match[1]}
      </a>,
    );
    lastIndex = index + match[0].length;
  }

  parts.push(text.slice(lastIndex));

  return <Fragment>{parts}</Fragment>;
}
