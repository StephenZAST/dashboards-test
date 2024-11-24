import React from 'react';
import styles from '../Dashboard.module.css';
import { CustomerData } from '../types';

interface CustomerTableProps {
  customers: CustomerData[];
  theme: string;
  setTheme: (theme: string) => void;
}

export const CustomerTable: React.FC<CustomerTableProps> = ({ customers }) => {
  return (
    <section className={styles.customerTable}>
      <header className={styles.tableHeader}>
        <h2>All Customers</h2>
        <p className={styles.activeMembers}>Active Members</p>
      </header>
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Company</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Country</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.name}</td>
                <td>{customer.company}</td>
                <td>{customer.phone}</td>
                <td>{customer.email}</td>
                <td>{customer.country}</td>
                <td>
                  <span className={`${styles.status} ${styles[customer.status]}`}>
                    {customer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};