'use client'

import { useEffect } from 'react'

const MetricoolTracker = () => {
  useEffect(() => {
    const loadScript = (callback: () => void) => {
      const head = document.getElementsByTagName('head')[0]
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://tracker.metricool.com/resources/be.js'
      script.onratechange = callback
      script.onload = callback
      head.appendChild(script)
    }

    loadScript(() => {
      if (window.beTracker) {
        window.beTracker.t({ hash: '12f3548e76bbb911a29d630de2ec79e' })
      }
    })
  }, [])

  return null
}

export default MetricoolTracker
