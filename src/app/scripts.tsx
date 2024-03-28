import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

export function ScriptApp() {
  return (
    <>
      <head>
        {/* <meta name="google-adsense-account" content="ca-pub-9171417617926228" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9171417617926228"
          crossOrigin="anonymous"
        /> */}
      </head>
      <GoogleTagManager gtmId="GTM-PN2MJNS5" />
      <GoogleAnalytics gaId="G-PFVTVSCZQC" />
    </>
  )
}
