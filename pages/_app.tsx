import '../src/styles/fonts.css'
import '../src/styles/global.css'
import '../src/styles/variables.css'
import '../src/styles/sezy-design.css'
import type { AppProps } from 'next/app'
import React from 'react';
import { store } from '@/store';
import { Provider as ReduxProvider } from 'react-redux';
import { appWithTranslation } from "next-i18next";
import nextI18nextConfig from 'next-i18next.config';
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>

<style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps}/>
    </ReduxProvider>
  )
}

export default appWithTranslation(MyApp, { i18n: nextI18nextConfig });
