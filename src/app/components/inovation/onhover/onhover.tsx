import './onhover.scss'

interface OnHoverCardProps {
  title: string
  content: string
}

const cardsData: OnHoverCardProps[] = [
  {
    title: 'Predictive Modeling',
    content: `By analyzing historical data and market trends, we can develop predictive models to forecast property prices, rental yields, and investment returns, helping our clients make informed decisions.`,
  },
  {
    title: 'Customer Segmentation',
    content: `Data analytics helps us better understand our clients' preferences, behaviors, and needs, allowing us to tailor services and marketing efforts.`,
  },
  {
    title: 'Performance Monitoring',
    content: `We use data analytics to track the performance of our properties, investments, and marketing campaigns, optimizing strategies for maximum efficiency.`,
  },
]

export const OnHover = () => {
  return (
    <div className='wrapper-onhover'>
      {cardsData.map((card, index) => (
        <div key={index} className='card-onhover'>
          <div className='card-header'>
            <h1>{card.title}</h1>
            <div className='circle'></div>
          </div>
          <div className='card-content'>
            <p>{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
