'use client'
import { FC, useState, useEffect } from 'react'
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
  const [isEditMode, setIsEditMode] = useState(false)

  // Sync currentTestimonial with prop if it changes
  useEffect(() => {
    setCurrentTestimonial(testimonial)
  }, [testimonial])

  const handleSave = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (onSave && currentTestimonial !== testimonial) {
      onSave(currentTestimonial)
    }
    setIsEditMode(false)
  }

  const handleCancel = () => {
    setCurrentTestimonial(testimonial)
    setIsEditMode(false)
  }

  return (
    <div className='testimonial'>
      <h3>Testimonial</h3>

      {isEditable ? (
        isEditMode ? (
          <div className='testimonial-edit'>
            <textarea
              value={currentTestimonial}
              onChange={(e) => setCurrentTestimonial(e.target.value)}
              placeholder='Write your testimonial...'
            />
            <div className='button-group'>
              <button
                type='button'
                className='save-btn'
                onClick={handleSave}
                disabled={currentTestimonial === testimonial}
              >
                Save
              </button>
              <button
                type='button'
                className='cancel-btn'
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            type='button'
            className='edit-btn'
            onClick={() => setIsEditMode(true)}
          >
            Edit Testimonial
          </button>
        )
      ) : (
        <p>{testimonial}</p>
      )}
    </div>
  )
}

export default Testimonial
