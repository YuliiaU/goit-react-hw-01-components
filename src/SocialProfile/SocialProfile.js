import React from 'react';
import PropTypes from 'prop-types';
import styles from './SocialProfile.module.css';

const SocialProfile = ({ name, tag, location, avatar, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img className={styles.avatar} src={avatar} alt={name} width="100" />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      {Object.entries(stats).map(stat => (
        <li className={styles.item} key={stat[1]}>
          <span className={styles.label}>{stat[0]}</span>
          <span className={styles.quantity}>{stat[1]}</span>
        </li>
      ))}
    </ul>
  </div>
);

SocialProfile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default SocialProfile;
