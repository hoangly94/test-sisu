import type { NextPage } from 'next'
import React from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Home from '@/features/Home';

const IndexPage: NextPage = () => {
  return (
    <Home/>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default IndexPage
