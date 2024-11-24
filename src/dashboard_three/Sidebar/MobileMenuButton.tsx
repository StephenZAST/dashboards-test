import React from 'react';
import styles from './MobileMenuButton.module.css';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button 
      className={`${styles.menuButton} ${isOpen ? styles.open : ''}`}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label="Toggle menu"
    >
      <span className={styles.menuIcon}></span>
    </button>
  );
};