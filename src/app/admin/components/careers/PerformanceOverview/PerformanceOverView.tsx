import React from 'react'
import './PerformanceOverView.scss'

type PerformanceOverViewProps = {
  pageType: 'dashboard' | 'property'
}

const PerformanceOverView = ({ pageType }: PerformanceOverViewProps) => {
  return (
    <section className='globalStyles'>
      <section className='summaryTitle'>
        {/* Include the summary title content here if needed */}
      </section>

      <div className='totalsWrapper'>
        {pageType === 'dashboard' && (
          <>
            {/* You can include any static content or components here */}
            {/* For example, an "Add New Job" section or other dashboard elements */}
          </>
        )}
      </div>
    </section>
  )
}

export default PerformanceOverView
