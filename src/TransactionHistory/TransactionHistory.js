import React from 'react';
import PropTypes from 'prop-types';
import transaction from './transactions.json';
import styles from './TransactionHistory.module.css';

const TransactionHistory = () => (
  <table className={styles.history}>
    <thead className={styles.head}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transaction.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;
