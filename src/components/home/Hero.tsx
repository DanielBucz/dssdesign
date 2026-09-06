"use client";

import { motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import Link from "next/link";
import { PointerEvent } from "react";

const headlineLines = [
  { text: "TWORZYMY", accent: false },
  { text: "MARKI,", accent: true },
  { text: "KTÓRE ZOSTAJĄ", accent: false },
  { text: "W PAMIĘCI.", accent: false },
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useTransform(pointerY, [-1, 1], reduceMotion ? [0, 0] : [8, -8]);
  const rotateY = useTransform(pointerX, [-1, 1], reduceMotion ? [0, 0] : [-10, 10]);
  const glowX = useTransform(pointerX, [-1, 1], reduceMotion ? ["50%", "50%"] : ["42%", "58%"]);
  const glowY = useTransform(pointerY, [-1, 1], reduceMotion ? ["50%", "50%"] : ["56%", "44%"]);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  }

  return (
    <section className="hero" aria-labelledby="hero-title" onPointerMove={handlePointerMove}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow">WEB DESIGN / UX/UI / DEVELOPMENT</p>
        <h1 id="hero-title" className="hero-title">
          {headlineLines.map((line, index) => (
            <motion.span
              key={line.text}
              className={line.accent ? "accent-text" : undefined}
              initial={reduceMotion ? false : { y: "110%", opacity: 0 }}
              animate={reduceMotion ? undefined : { y: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: index * 0.11, ease: [0.22, 1, 0.36, 1] }}
            >
              {line.text}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="hero-lead"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          Strategia, design i technologia. Złożone w całość, żeby działało,
          wyglądało i sprzedawało.
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.62, ease: "easeOut" }}
        >
          <Link className="hero-cta" href="#projekty">
            <span>Zobacz projekty</span>
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="assembly-object"
        aria-hidden="true"
        style={{ rotateX, rotateY }}
        initial={reduceMotion ? false : { scale: 0.92, y: 20 }}
        animate={reduceMotion ? undefined : { scale: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span className="assembly-light" style={{ left: glowX, top: glowY }} />
        <span className="assembly-grid-card" />
        <span className="assembly-sheet assembly-sheet-back">
          <span>DSS</span>
          <i />
        </span>
        <span className="assembly-sheet assembly-sheet-front">
          <span>SKŁAD</span>
          <i />
        </span>
        <span className="assembly-sheet assembly-sheet-accent" />
        <span className="assembly-rule assembly-rule-a" />
        <span className="assembly-rule assembly-rule-b" />
        <span className="assembly-crop assembly-crop-a" />
        <span className="assembly-crop assembly-crop-b" />
      </motion.div>

      <div className="scroll-cue" aria-hidden="true">
        <span>PRZEWIŃ W DÓŁ</span>
        <i />
      </div>
    </section>
  );
}
