import React from 'react'
import { useForm } from 'react-hook-form'
import './ScheduleViewIngForm.scss'
// import ReCAPTCHA from 'react-google-recaptcha';

type ScheduleViewIngFroms = {
  name: string
  email: string
  phone: string
  preferredDate: string
  comments: string
}

const ScheduleViewIngForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ScheduleViewIngFroms>()

  const onSubmit = (data: ScheduleViewIngFroms) => {
    console.log(data)
    reset()
  }

  return (
    <div className='schedule-viewing-form-container'>
      <div className='schedule-viewing-form-wrapper'>
        <span>
          <h1>Request Information</h1>
        </span>
        <div className='line-shcedule-vewing'></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='schedule-viewing-form'
        >
          <label>Name</label>
          <input
            type='text'
            {...register('name', { required: true })}
            className={errors.name ? 'input-error' : ''}
          />

          <label>Email</label>
          <input
            type='email'
            {...register('email', { required: true })}
            className={errors.email ? 'input-error' : ''}
          />

          <label>Phone</label>
          <input
            type='number'
            {...register('phone', { required: true })}
            className={errors.phone ? 'input-error' : ''}
          />

          <label>Preferred Date</label>
          <input
            type='datetime-local'
            {...register('preferredDate', { required: true })}
            className={errors.preferredDate ? 'input-error' : ''}
          />

          <label>Additional Comments</label>
          <textarea
            placeholder='Minimum 10 characters'
            minLength={10}
            {...register('comments')}
            className={errors.comments ? 'input-error' : ''}
          />

          {/* <ReCAPTCHA sitekey={siteKey} /> */}
          {/* for recaptcha need to setup organization keys in google cloud*/}

          <div className='schedule-viewing-form-button-container'>
            <button type='submit'>SCHEDULE VIEWING</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ScheduleViewIngForm
