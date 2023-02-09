import React from 'react';
import styles from './styles.module.css';
import Logo from '@/partials/Logo';


const features = [
  {
    title: 'Supported Chains',
    imgURL: 'https://sisu.network/assets/logos.9d797205.svg',
  },
  {
    title: 'Decentralized Token Swapping',
    description: `Centralized exchanges can be more vulnerable to single point of failure. Sisu uses advanced cryptography algorithms for cross-chain communication that stays secure, decentralized, and with no private keys.`,
    imgURL: 'https://sisu.network/assets/decentralized.56f8d8ac.svg',
    checkedList: [
      'Swap native and NFT tokens cross-chain.',
      'No single point of failure.',
      'Secure and traceable communication.',
      '100% “trustless”',
    ],
  },
  {
    title: 'Cross-chain API Hub',
    description: `Different chains can often have different smart contract languages that makes it harder to work cross-chain. Sisu allows developers to interact with cross-chain contracts as if they were a single chain.`,
    imgURL: 'https://sisu.network/assets/api.796ec0c7.svg',
    checkedList: [
      'Interact cross-chain without learning a new language.',
      'Less effort dealing with updates.',
      'Secure and traceable communication.',
      'Write a contract once that you can use across chains.',
    ],
  },
  {
    title: 'Private Transactions',
    description: `Sisu supports privacy and security across our network. Small add-ons allow private transfers across chains.`,
    imgURL: 'https://sisu.network/assets/private.6ff5123e.svg',
    checkedList: [
      'Shielded cross-train transactions',
      'Optional privacy add-on features.',
    ],
  },
  {
    title: 'Apps that Can Interact With SiSu',
    imgURL: 'https://sisu.network/assets/app-logos.0ac3f089.svg',
  },
]

const Features = () => {
  return (
    <div className={styles.features}>
      {
        features.map((feature, featureIndex) => (
          <div className={styles.feature} key={featureIndex} >
            <div className={styles.info}>
              <div className={styles.title}>{feature.title}</div>
              <div className={styles.description}>
                {feature.description}
              </div>
              <ul className={styles.checkedList}>
              {
                feature.checkedList?.map((checkedItem, checkedItemIndex)=>(
                  <li key={checkedItemIndex}>{checkedItem}</li>
                ))
              }
              </ul>
            </div>
            <img className={styles.image} src={feature.imgURL}/>
          </div>
        ))
      }
    </div>
  );
};

export default Features;
