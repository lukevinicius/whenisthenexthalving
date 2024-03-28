import Link from 'next/link'
import { Countdown } from './countdown'
import Image from 'next/image'

import stakeMobileBanner from '@/assets/stake/Banners_320x100.gif'
import stakeDestktopBanner from '@/assets/stake/stakedesktop.gif'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 md:p-24 bg-zinc-900">
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm text-zinc-50 space-y-5">
        <p className="text-2xl md:text-5xl">
          When will the next Bitcoin halving be in 2024?
        </p>
        <div>
          <p>Countdown to Bitcoin Halving</p>
          <Countdown />
          <div className="text-center space-y-3">
            <p>
              Bitcoin block reward will decrease from 6.25 to 3.125 coins in
              approximately
            </p>
            <p>Estimated date & time of reward drop:</p>
            <p className="font-semibold">20 April 2024 17:40</p>
          </div>
        </div>
        <div className="pt-20 flex justify-center items-center">
          <Link href="https://stake.com/?c=74kRyiLI">
            <Image
              src={stakeMobileBanner}
              alt="stake-mobile-banner"
              className="md:hidden"
            />
            <Image src={stakeDestktopBanner} alt="stake-desktop-banner" />
          </Link>
        </div>
      </div>
    </main>
  )
}
