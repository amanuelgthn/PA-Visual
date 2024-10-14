import React from 'react'
import './PerformanceOverView.scss'

type PerformanceOverViewProps = {
  pageType: 'dashboard' | 'property'
}

const PerformanceOverView = ({ pageType }: PerformanceOverViewProps) => {
  return (
    <section className='globalStyles'>
      <section className='summaryTitle'></section>

      <div className='totalsWrapper'>{pageType === 'dashboard' && <></>}</div>
    </section>
  )
}

export default React.memo(PerformanceOverView)
