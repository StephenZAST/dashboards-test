import React from 'react';
import styles from './Sidebar.module.css';
import { NavItemProps } from './types';

export const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, onClick }) => {
  return (
    <button 
      className={`${styles.navItem} ${isActive ? styles.active : ''}`}
      onClick={onClick}
      tabIndex={0}
      role="menuitem"
      aria-current={isActive ? 'page' : undefined}
    >
      <img src={icon} alt="" className={styles.navIcon} />
      <span className={styles.navLabel}>{label}</span>
    </button>
  );
};