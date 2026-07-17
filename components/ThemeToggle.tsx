'use client';

import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = nextTheme;
    localStorage.setItem('theme', nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle flex h-9 w-9 items-center justify-center rounded-xl border border-white/8 bg-white/[0.035] text-white/55 transition-colors hover:text-white"
      aria-label="Toggle light and dark theme"
      title="Toggle color theme"
    >
      <Sun className="theme-icon-light" size={16} aria-hidden="true" />
      <Moon className="theme-icon-dark" size={16} aria-hidden="true" />
    </button>
  );
};

export default ThemeToggle;
