'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

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

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Get initial theme without causing re-renders
  const getInitialTheme = (): Theme => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      return savedTheme || systemTheme;
    }
    return 'light';
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const mounted = true; // Always true on client side

  // Apply theme when it changes - use direct DOM manipulation
  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--bg-color-rgb', '0, 0, 0');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--text-secondary', '#a3a3a3');
      root.style.setProperty('--skills-color', '#d4d4d4');
      root.style.setProperty('--nav-bg', '#000000');
      localStorage.setItem('theme', 'dark');
    } else {
      root.style.setProperty('--bg-color', '#ffffff');
      root.style.setProperty('--bg-color-rgb', '255, 255, 255');
      root.style.setProperty('--text-color', '#0a0a0a');
      root.style.setProperty('--text-secondary', '#525252');
      root.style.setProperty('--skills-color', '#404040');
      root.style.setProperty('--nav-bg', '#ffffff');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
};
