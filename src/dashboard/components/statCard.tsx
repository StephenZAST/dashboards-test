import React from 'react';
import styles from '../Dashboard.module.css';
import { MetricCardProps } from '../types';

interface Props extends MetricCardProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const MetricCard: React.FC<Props> = ({
  title,
  value,
  percentageChange,
  isPositive,
  fromValue,
}) => {
  return (
    <article className={styles.metricCard}>
      <header className={styles.metricHeader}>
        <h3 className={styles.metricTitle}>{title}</h3>
        <p className={styles.metricValue}>{value}</p>
      </header>
      <footer className={styles.metricFooter}>
        <span
          className={`${styles.badge} ${
            isPositive ? styles.positive : styles.negative
          }`}
        >
          {percentageChange}
        </span>
        {fromValue && <span className={styles.fromValue}>From {fromValue}</span>}
      </footer>
    </article>
  );
};
