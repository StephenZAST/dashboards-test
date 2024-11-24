import React from 'react';
import { useDashboard } from './DashboardContext';
import styles from './ThemeToggle.module.css';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useDashboard();

  return (
    <button 
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};