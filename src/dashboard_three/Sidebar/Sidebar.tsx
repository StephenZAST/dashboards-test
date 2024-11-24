import React from 'react';
import styles from './Sidebar.module.css';
import { NavItem } from './NavItem';
import { SidebarProps } from './types';

export const Sidebar: React.FC<SidebarProps> = ({ items, logo, onSignOut }) => {
  return (
    <nav className={styles.sidebar} role="navigation">
      <div className={styles.sidebarContent}>
        <header className={styles.logoWrapper}>
          <img src={logo} alt="Dashboard Logo" className={styles.logo} />
        </header>
        
        <div className={styles.navItems} role="menu">
          {items.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              label={item.label}
              isActive={item.isActive}
              onClick={item.onClick}
            />
          ))}
        </div>

        <button 
          className={styles.signOutButton}
          onClick={onSignOut}
          tabIndex={0}
        >
          <img src="https://cdn.builder.io/api/v1/image/assets/d706677ec2b549059d642cb9fb9fad8c/3dbd9267bb1dabb16414e9e8aa060025308e2a3ad6e3303a855591eacc3cfca9?apiKey=d706677ec2b549059d642cb9fb9fad8c&" alt="" className={styles.signOutIcon} />
          <span>Sign Out</span>
        </button>
      </div>
    </nav>
  );
};