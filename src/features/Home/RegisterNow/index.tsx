import React from 'react';
import styles from './styles.module.css';
import Logo from '@/partials/Logo';

const RegisterNow = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.headline}>
        Sisu Network Project Timelines
      </div>
      <div className={styles.subline}>
        We want to keep our investors and community informed about each stage of Sisu's network building and growth phases for ultimate transparency.
      </div>
      <img className={styles.timeline} src="https://sisu.network/assets/timeline.09a20fa2.svg" alt="Timeline" />
    </div>
  );
};

export default RegisterNow;
