import React from 'react';
import PropTypes from 'prop-types';
import statisticalData from './statistical-data.json';
import styles from './Statistics.module.css';

const r = () => Math.floor(Math.random() * 256);
const randomColor = () => 'rgb(' + r() + ',' + r() + ',' + r() + ', 0.9)';

const Statistics = ({ title }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>Upload stats</h2>

    <ul className={styles.list}>
      {statisticalData.map(({ id, label, percentage }) => (
        <li
          className={styles.item}
          key={id}
          style={{ backgroundColor: randomColor() }}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
