'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import dynamic from 'next/dynamic';

const EggPanels = dynamic(() => import('@/components/drive/eggs/EggPanels'), { ssr: false });

export type Density = 'comfortable' | 'compact';
export type Panel = 'settings' | 'help' | 'details' | 'apps' | 'shortcuts' | 'stage' | 'bored' | null;

type Settings = {
  theme: 'light' | 'dark';
  density: Density;
  recruiterMode: boolean;
  confetti: boolean;
};

const DEFAULTS: Settings = {
  theme: 'light',
  density: 'comfortable',
  recruiterMode: true,
  confetti: true,
};

type EggsContextType = {
  settings: Settings;
  setSetting: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
  panel: Panel;
  openPanel: (panel: Exclude<Panel, null>) => void;
  closePanel: () => void;
  fireConfetti: () => void;
};

const EggsContext = createContext<EggsContextType | undefined>(undefined);

export const useEggs = () => {
  const ctx = useContext(EggsContext);
  if (!ctx) throw new Error('useEggs must be used within EggsProvider');
  return ctx;
};

const STORAGE_KEY = 'gd-settings';

function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    const parsed = { ...DEFAULTS, ...JSON.parse(raw) };
    if (parsed.density !== 'comfortable' && parsed.density !== 'compact') {
      parsed.density = 'comfortable';
    }
    return parsed;
  } catch {
    return DEFAULTS;
  }
}

export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function EggsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<Settings>(DEFAULTS);
  const [panel, setPanel] = useState<Panel>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setSettings(loadSettings());
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = settings.theme;
    root.dataset.density = settings.density;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      /* private mode: settings just don't persist */
    }
  }, [settings]);

  const setSetting = useCallback(<K extends keyof Settings>(key: K, value: Settings[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, []);

  const openPanel = useCallback((next: Exclude<Panel, null>) => {
    restoreFocusRef.current = document.activeElement as HTMLElement;
    setPanel(next);
  }, []);

  const closePanel = useCallback(() => {
    setPanel(null);
    restoreFocusRef.current?.focus?.();
    restoreFocusRef.current = null;
  }, []);

  const fireConfetti = useCallback(() => {
    if (!settings.confetti || prefersReducedMotion()) return;
    import('canvas-confetti').then(({ default: confetti }) => {
      confetti({ particleCount: 120, spread: 75, origin: { y: 0.3 } });
      confetti({ particleCount: 60, angle: 60, spread: 55, origin: { x: 0 } });
      confetti({ particleCount: 60, angle: 120, spread: 55, origin: { x: 1 } });
    });
  }, [settings.confetti]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const typing = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;
      if (e.key === 'Escape') {
        setPanel((prev) => {
          if (prev) restoreFocusRef.current?.focus?.();
          return null;
        });
        return;
      }
      if (typing) return;
      if (e.key === '/') {
        const search = document.querySelector<HTMLInputElement>('input[role="combobox"]');
        if (search) {
          e.preventDefault();
          search.focus();
        }
      } else if (e.key === '?') {
        e.preventDefault();
        restoreFocusRef.current = document.activeElement as HTMLElement;
        setPanel('shortcuts');
      } else if (e.key === 'v') {
        window.dispatchEvent(new CustomEvent('gd-toggle-view'));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <EggsContext.Provider value={{ settings, setSetting, panel, openPanel, closePanel, fireConfetti }}>
      {children}
      {panel && <EggPanels />}
    </EggsContext.Provider>
  );
}
