import React from 'react';
import styles from './styles.module.css';
import Logo from '@/partials/Logo';
import Button from '@/partials/Button';

const Banner = () => {
  return (
    <div className={styles.banner}>

      <div className={styles.info}>
        <div className={styles.headline}>
          Unify the Fragmented Blockchain World
        </div>
        <div className={styles.subline}>
          Blockchain world is fragmented. Everyone is living in their own chain. Sisu network is the decentralized cross-chain communication network that allows native & NFT tokens swapping or remote contract execution for a more seamless blockchain experience.
        </div>
        <Button href='https://discord.gg/DT7xAKCQJD'>Join our community</Button>
      </div>
      <img className={styles.img} src="https://sisu.network/assets/slider-pic.772e7577.svg" alt="Timeline" />
    </div>
  );
};

export default Banner;
