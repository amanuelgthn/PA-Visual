import React from 'react'
import { DescriptionCard } from '../DescriptionCards/DescriptionCards'
import './DescriptionSections.scss'

export const DescriptionSections = () => {
  return (
    <div className='Description-container'>
      <DescriptionCard
        title='Property Sales and Acquisitions'
        description="Whether you're buying or selling a luxury property, our experienced real estate advisors are here to guide you through the process. From identifying the perfect property to negotiating the best deal, we'll ensure a seamless and successful transaction from start to finish."
        subHeaders={[
          'Property search and selection',
          'Market analysis and pricing strategy',
          'Negotiation and closing assistance',
          'Property marketing and promotion',
        ]}
      />

      <DescriptionCard
        title='REAL ESTATE INVESTMENT ADVISORY'
        description='Maximize your real estate investments with our expert investment advisory services. Our team of investment specialists will help you identify lucrative opportunities, analyze potential risks, and develop a tailored investment strategy to meet your financial goals'
        subHeaders={[
          'Investment property analysis',
          'Risk assessment and mitigation',
          'Portfolio diversification strategy',
          'Rental property management',
        ]}
      />

      <DescriptionCard
        title='Architecture and Interior Design'
        description="Create your dream space with our team of skilled architects and interior designers. From conceptualization to execution, we'll work closely with you to design and build a custom home that reflects your unique style and taste."
        subHeaders={[
          'Architectural design and planning',
          'Material and finish selection',
          'Interior space planning and layout',
          'Project management and construction oversight',
        ]}
      />

      <DescriptionCard
        title='Property Management'
        description="Ensure the long-term success of your real estate investment with our professional property management services. From tenant screening to maintenance and repairs, we'll handle all aspects of property management so you can enjoy hassle-free ownership."
        subHeaders={[
          'Tenant screening and lease management',
          'Rent collection and accounting',
          'Maintenance and repair coordination',
          'Property inspections and reporting',
        ]}
      />
    </div>
  )
}
