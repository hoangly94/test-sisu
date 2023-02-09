import React from 'react';
import styles from './styles.module.css';
import Logo from '@/partials/Logo';


const milestones = [
  {
    name: 'Tail',
    title: 'Cross Chain Token Swap',
    description: `This is a testnet for swapping non-native tokens cross chain, including common tokens like ERC20 and NFT. Sisu dev team will work with other crypto teams who want to build DEX to release their testnet version.
    <br/><br/>
    Sisu testnet and validator's group will be private at this stage.`,
    imgURL: 'https://sisu.network/assets/roadmap-convert.1fb8a841.svg',
    bgColor: '#e6edfc',
  },
  {
    name: 'Talon',
    title: 'Native Coin Swapping',
    description: `This stage enables user to do native coins/token swapping instead of using wrapped tokens.
    <br/><br/>
    Liquidity provider can stake their contribution on testnet in reward for Sisu's tokens.`,
    imgURL: 'https://sisu.network/assets/roadmap-trustless.636b03e2.svg',
    bgColor: '#ffefed',
  },
  {
    name: 'Spine',
    title: 'API Hub for Cross Chain Contracts',
    description: `Sisu deploys contract gateway at different chains and let developers interact with remote contracts through the gateway using their familiar languages, instead of learning multiple blockchain languages.
    <br/><br/>
    The source code and testnet are also opened for public at this stage.
    `,
    imgURL: 'https://sisu.network/assets/roadmap-api-hub.37af4da6.svg',
    bgColor: '#f8edff',
  },
  {
    name: 'Fang',
    title: 'Private Transaction',
    description: 'Many users do care about the privacy of their transaction. The Fang deployment offers users an option to shield their transaction with minor additional cost.',
    imgURL: 'https://sisu.network/assets/roadmap-fingerprint.a341628c.svg',
    bgColor: '#eff3ff',
  },
  {
    name: 'Heart',
    title: 'Mainnet',
    description: `The mainnet is launched and deployed on various blockchains with their ecosystems.
    <br/><br/>
    You can enjoy all the features of Sisu at this stage that you see in testnet.`,
    imgURL: 'https://sisu.network/assets/roadmap-launch.4cfe90cd.svg',
    bgColor: '#e6edfc',
  },
]

const Milestones = () => {
  return (
    <div className={styles.milestones}>
      {
        milestones.map((milestone, index) => (
          <div className={styles.milestone} key={index} style={{backgroundColor: milestone.bgColor}}>
            <img className={styles.image} src={milestone.imgURL} alt="Timeline" />
            <div className={styles.info}>
              <div className={styles.name}>{`${index}. ${milestone.name}`}</div>
              <div className={styles.title}>{milestone.title}</div>
              <div className={styles.description} dangerouslySetInnerHTML={{__html:milestone.description}}></div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Milestones;
