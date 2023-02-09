import { useTranslation } from 'next-i18next';
import React from 'react';
import styles from './styles.module.css';
import Header from '@/features/Header';
import Banner from './Banner';
import Milestones from './Milestones';
import Footer from '../Footer';

const Roadmap = () => {
  return (
    <>
      <Header/>
      <div className={styles.home}>
        <Banner/>
        <Milestones/>
      </div>
      <Footer/>
    </>
  );
};

export default Roadmap;
