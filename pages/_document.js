import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import { config } from '../config/config'


export default class MyDocument extends Document {
  render () {
    return (
      <Html lang={config.locale.split('_')[0]}>
        <Head>
          <meta charSet='utf-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta name='description' content='Description' />
          <meta name='keywords' content='Keywords' />
          <link rel='manifest' href='/manifest.json' />
          <link href='/icons/16.png' rel='icon' type='image/png' sizes='16x16' />
          <link href='/icons/32.png' rel='icon' type='image/png' sizes='32x32' />
          <link rel='apple-touch-icon' href='/apple-icon.png'></link>
          <meta name='theme-color' content='#317EFB' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body> 
      </Html>
    ) 
  }
}