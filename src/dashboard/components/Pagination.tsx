import React from 'react';
import styles from '../Dashboard.module.css';
import { PaginationProps } from '../types';

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  const getPaginationRange = (current: number, total: number) => {
    // Start with the first page in the range
    const rangeStart = Math.max(1, current - 1);
    // Calculate the end of the range
    const rangeEnd = Math.min(total, rangeStart + 3);

    // Adjust range start if range end is too close to totalPages
    return Array.from({ length: rangeEnd - rangeStart + 1 }, (_, i) => rangeStart + i);
  };

  const paginationRange = getPaginationRange(currentPage, totalPages);

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className={styles.paginationButton}
      >
        &lt;
      </button>
      {paginationRange.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`${styles.paginationButton} ${currentPage === page ? styles.active : ''}`}
          aria-current={currentPage === page ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className={styles.paginationButton}
      >
        &gt;
      </button>
    </nav>
  );
};