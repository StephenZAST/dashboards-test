import React from 'react';
import styles from '../Dashboard.module.css';

interface SearchBarProps {
  placeholder: string;
  onSearch: (value: string) => void;
  theme: string;
  setTheme: (theme: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch,  }) => {
  return (
    <form className={styles.searchForm} role="search">
      <label htmlFor="search" className="visually-hidden">
        Search
      </label>
      <input
        type="search"
        id="search"
        className={styles.searchInput}
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
      />
    </form>
  );
};
