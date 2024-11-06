import './onhover.scss'

interface OnHoverCardProps {
  title: string
  content: string
}

interface OnHoverProps {
  cardsData: OnHoverCardProps[]
}

export const OnHover: React.FC<OnHoverProps> = ({ cardsData }) => {
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
