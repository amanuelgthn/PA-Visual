'use client'
import { FC, useState } from 'react'
import './Testimonial.scss'

interface TestimonialProps {
  testimonial: string
  isEditable: boolean
  onSave?: (newTestimonial: string) => void
}

const Testimonial: FC<TestimonialProps> = ({
  testimonial,
  isEditable,
  onSave,
}) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonial)

  const handleSave = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (onSave) {
      onSave(currentTestimonial)
    }
  }

  return (
    <div className='testimonial'>
      <h3>Testimonial</h3>
      {isEditable ? (
        <div className='testimonial-edit'>
          <textarea
            value={currentTestimonial}
            onChange={(e) => setCurrentTestimonial(e.target.value)}
            placeholder='Write your testimonial...'
          />
          <button type='button' className='save-button' onClick={handleSave}>
            Save
          </button>
        </div>
      ) : (
        <p>{testimonial}</p>
      )}
    </div>
  )
}

export default Testimonial
