'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Word-by-word mask reveal: each word rides up from behind a clipped line,
 * staggered. The effect people read as "expensive" on an awards-site
 * headline. Words stay real text in the DOM, so selection, search and
 * screen readers are unaffected.
 *
 * Under reduced motion the CSS in globals.css forces the words visible, so
 * nothing here can leave text hidden.
 */
export function RevealText({
  text,
  className,
  style,
  delay = 0,
  stagger = 0.045,
  as: Tag = 'span',
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  stagger?: number;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p';
}) {
  const words = text.split(' ');

  return (
    <Tag className={className} style={style}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
            <motion.span
              data-reveal-word
              className="inline-block will-change-transform"
              initial={{ y: '110%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.85,
                delay: delay + i * stagger,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </span>
    </Tag>
  );
}

/** Simple rise-and-fade for blocks that are not headlines. */
export function RevealBlock({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      data-reveal-word
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
