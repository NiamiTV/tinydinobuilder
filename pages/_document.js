/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/x-icon" href="/tinydinosassets-main/logo-transparent.png"/>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Design your own Tiny Dino!"/>
        <meta name="keywords" content="Tiny Din0, NFT, cc0, eight_00_eight"/>
        <meta name="author" content="808"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}