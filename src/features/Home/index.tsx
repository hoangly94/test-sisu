import React from 'react';
import styles from './styles.module.css';
import Header from '@/features/Header';
import Banner from './Banner';
import Milestones from './Reinforcings';
import Features from './Features';
import RegisterNow from '@/partials/RegisterNow';
import Footer from '../Footer';

const Home = () => {
  return (
    <>
      <Header/>
      <div className={styles.home}>
        <Banner/>
        <Milestones/>
        <RegisterNow/>
        <Features/>
        <RegisterNow/>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
