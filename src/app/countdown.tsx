'use client'

import { useState } from 'react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

export function Countdown() {
  const [timeOut, setTimeOut] = useState('')
  // transform the final date to a dayjs object
  const finalDate = dayjs('2024-04-20T02:25:00.999Z')
  const interval = setInterval(() => {
    const duration = dayjs.duration(dayjs(finalDate).diff(dayjs()))
    if (duration.asMilliseconds() <= 0) {
      clearInterval(interval)
      return
    }

    if (duration.asDays() >= 1) {
      setTimeOut(
        duration.format('DD [days] HH [hours] mm [minutes] ss [seconds]'),
      )
    } else if (duration.asHours() >= 1) {
      setTimeOut(duration.format('HH [hours] mm [minutes] ss [seconds]'))
    } else if (duration.asMinutes() >= 1) {
      setTimeOut(duration.format('mm [minutes] ss [seconds]'))
    } else {
      setTimeOut(duration.format('ss [seconds]'))
    }
  }, 1000)

  return (
    <div className="my-10 w-full rounded-xl bg-zinc-900 text-zinc-50">
      <p className="text-center text-3xl md:text-7xl">{timeOut}</p>
    </div>
  )
}
