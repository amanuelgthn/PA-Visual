import './aboutSection.scss'

interface AboutCardProps {
  title: string
  description: string
}

const aboutData: AboutCardProps[] = [
  {
    title: 'Property Management',
    description: `AI-powered systems help us efficiently manage and maintain our clients' 
        properties by automating tasks such as rent collection, maintenance scheduling, 
        and tenant communication.`,
  },
  {
    title: 'Market Analysis',
    description: `AI algorithms analyze vast amounts of real estate data to provide us with valuable 
        insights into market trends, property values, and investment opportunities, allowing 
        us to make informed decisions and recommendations to our clients.`,
  },
  {
    title: 'Customer Service',
    description: `AI tools improve our customer service by providing faster responses, predictive analysis, 
        and personalized support, ensuring client satisfaction.`,
  },
]

export const AboutSection = () => {
  return (
    <div className='about-container'>
      {aboutData.map((card, index) => (
        // Add a key prop to the div element
        <div key={index} className='about-card'>
          <h1 className='card-title'>{card.title}</h1>
          <p className='card-description'>{card.description}</p>
        </div>
      ))}
    </div>
  )
}
