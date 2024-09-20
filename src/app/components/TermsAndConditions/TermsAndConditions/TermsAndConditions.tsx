'use client'

import React, { useState } from 'react'
import '@fontsource/montserrat'
import './TermsAndConditionsComponent.scss'

const sectionData = [
  {
    title: 'TERMS AND CONDITIONS',
    content: [
      `These Terms and Conditions outline Global Property's commitment to protecting the privacy and security of personal data provided by its clients. We handle all personal data in accordance with applicable data protection laws, including but not limited to the General Data Protection Regulation (GDPR), where applicable.`,
    ],
  },
  {
    title: 'DATA COLLECTION AND USE',
    content: [
      'Global Property collects personal data from clients only to the extent necessary for providing agreed services. This data may include, but is not limited to, names, contact details, financial information, and any other details required for the fulfillment of contractual obligations.',
      'Clients’ personal data will be used strictly for the purposes outlined in the agreement between the parties. These purposes may include the provision of services, communication with clients, and compliance with legal requirements.',
      'Global Property ensures that personal data will not be used for other purposes unless explicit consent has been provided by the client.',
    ],
  },
  {
    title: 'DATA RETENTION',
    content: [
      "Global Property will retain clients' personal data for [a time period], or as required by applicable laws and regulations.",
      'Once the retention period has expired, personal data will be securely deleted or anonymized to prevent unauthorized access or further use.',
    ],
  },
  {
    title: 'DATA SHARING AND DISCLOSURE',
    content: [
      "Global Property will not share clients' personal data with third parties without obtaining prior consent unless required by law or for the performance of services as outlined in the agreement.",
      'In cases where third-party processors are engaged to handle personal data on behalf of Global Property, they will be required to adhere to strict confidentiality and data protection standards.',
    ],
  },
  {
    title: "CLIENT'S RIGHTS",
    content: [
      'Clients have the right to access, correct, erase, or restrict the processing of their personal data at any time, in accordance with applicable data protection laws. Clients also have the right to object to the processing of their personal data and to request data portability.',
      'Any requests to exercise these rights must be submitted in writing to Global Property. We will respond to such requests within the legally required timeframes.',
    ],
  },
  {
    title: 'DATA SECURITY',
    content: [
      "Global Property implements appropriate technical and organizational measures to protect clients' personal data from unauthorized access, accidental loss, or disclosure. We continuously review our data protection practices to ensure the highest standards of security.",
    ],
  },
  {
    title: 'DATA BREACH NOTIFICATION',
    content: [
      "In the event of a data breach involving clients' personal data, Global Property will notify affected clients as soon as possible, and no later than [a number] days after becoming aware of the breach. The notification will include information about the nature of the breach, the data involved, and the steps being taken to mitigate any potential impact.",
    ],
  },
  {
    title: 'AMENDMENTS',
    content: [
      'Global Property reserves the right to update or modify these terms and conditions at any time in response to changes in applicable laws or internal practices. Clients will be notified of any significant changes in writing or through the company’s official communication channels.',
    ],
  },
  {
    title: 'GOVERNING LAW',
    content: [
      'These terms and conditions are governed by the laws of [jurisdiction]. Any disputes relating to data privacy shall be resolved in the courts of [jurisdiction].',
      "By using Global Property's services, clients agree to the collection, use, and protection of their personal data as outlined in these terms and conditions.",
    ],
  },
]

const TermsAndConditionsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const handleClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className='TermsAndConditionsSection'>
      <div className='leftContainer'>
        <ul>
          {sectionData.map((section, index) => (
            <li key={index}>
              <button
                className={activeIndex === index ? 'active' : ''}
                onClick={() => handleClick(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`section-content-${index}`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className='rightContainer'>
        {activeIndex !== null && (
          <div>
            <h1>{sectionData[activeIndex].title}</h1>
            <ul>
              {sectionData[activeIndex].content.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

export default TermsAndConditionsSection
