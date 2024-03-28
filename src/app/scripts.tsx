import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

export function ScriptApp() {
  return (
    <>
      <GoogleTagManager gtmId="GTM-PN2MJNS5" />
      <GoogleAnalytics gaId="G-PFVTVSCZQC" />
    </>
  )
}
