'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const themeListeners = new Set<() => void>();

const subscribe = (callback: () => void) => {
  themeListeners.add(callback);
  const onStorage = (e: StorageEvent) => {
    if (e.key === 'theme') callback();
  };
  window.addEventListener('storage', onStorage);
  return () => {
    themeListeners.delete(callback);
    window.removeEventListener('storage', onStorage);
  };
};

const getSnapshot = (): Theme => {
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const getServerSnapshot = (): Theme => 'light';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // useSyncExternalStore returns the server snapshot during SSR and on the
  // first client render, then re-renders with the real client snapshot.
  // No setState-in-effect, no hydration mismatch.
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--bg-color-rgb', '0, 0, 0');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--text-secondary', '#a3a3a3');
      root.style.setProperty('--skills-color', '#d4d4d4');
      root.style.setProperty('--nav-bg', '#000000');
    } else {
      root.style.setProperty('--bg-color', '#ffffff');
      root.style.setProperty('--bg-color-rgb', '255, 255, 255');
      root.style.setProperty('--text-color', '#0a0a0a');
      root.style.setProperty('--text-secondary', '#525252');
      root.style.setProperty('--skills-color', '#404040');
      root.style.setProperty('--nav-bg', '#ffffff');
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', next);
    themeListeners.forEach((cb) => cb());
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted: true }}>
      {children}
    </ThemeContext.Provider>
  );
};
