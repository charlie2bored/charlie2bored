'use client';

import { DarkModeProvider } from './DarkModeProvider';

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <DarkModeProvider>
      {children}
    </DarkModeProvider>
  );
}
