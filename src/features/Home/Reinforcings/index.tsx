import React from 'react';
import styles from './styles.module.css';
import Logo from '@/partials/Logo';


const reinforcings = [
  {
    title: 'Easy Transfer',
    description: `Sisu supports native, NFT token swapping and contract data transfer. Move your assets cross chain seamlessly.`,
    imgURL: 'https://sisu.network/assets/convert.2e6b6431.svg',
    bgColor: 'rgb(255, 239, 237)',
  },
  {
    title: '100% Trustless',
    description: `No one holds a chain's private key. All transactions stay decentralized.`,
    imgURL: 'https://sisu.network/assets/trustless.8869ef2b.svg',
    bgColor: 'rgb(248, 237, 255)',
  },
  {
    title: 'Private Transactions',
    description: `Optional add-ons to make native token swapping private or obfuscated for extra security.`,
    imgURL: 'https://sisu.network/assets/fingerprint.37eb76f2.svg',
    bgColor: 'rgb(237, 241, 255)',
  },
]

const Reinforcings = () => {
  return (
    <div className={styles.reinforcings}>
      {
        reinforcings.map((reinforcing, index) => (
          <div className={styles.reinforcing} key={index} style={{backgroundColor: reinforcing.bgColor}}>
            <img className={styles.image} src={reinforcing.imgURL}/>
            <div className={styles.info}>
              <div className={styles.title}>{reinforcing.title}</div>
              <div className={styles.description}>{reinforcing.description}</div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Reinforcings;
