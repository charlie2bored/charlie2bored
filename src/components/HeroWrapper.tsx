'use client';

import { Hero } from './Hero';
import { DarkModeProvider } from './DarkModeProvider';

export function HeroWrapper() {
  return (
    <DarkModeProvider>
      <Hero />
    </DarkModeProvider>
  );
}
