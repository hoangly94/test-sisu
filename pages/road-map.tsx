import type { NextPage } from 'next'
import React from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Roadmap from '@/features/Roadmap';

const IndexPage: NextPage = () => {
  return (
    <Roadmap/>
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
