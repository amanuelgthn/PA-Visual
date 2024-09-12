'use client'
import { FaCreditCard, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa'
import './PaymentMethods.scss'

const PaymentMethods = () => {
  const handleAddPaymentMethod = () => {
    console.log('Payment Method Added')
  }

  const handleDeleteCard = () => {
    console.log('Card Deleted')
  }

  return (
    <div className='payment-methods'>
      <h3>Payment Methods</h3>
      <div className='card-details'>
        <p>MasterCard ending in 5667</p>
        <button className='delete-card' onClick={handleDeleteCard}>
          Delete card
        </button>
      </div>
      <div className='form'>
        <div className='form-group'>
          <label htmlFor='card-number'>Card number</label>
          <div className='input-with-icon'>
            <input
              type='text'
              id='card-number'
              placeholder='0000 0000 0000 0000'
            />
            <FaCreditCard className='icon' />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group'>
            <label htmlFor='expiry-date'>Expiry date</label>
            <div className='input-with-icon'>
              <input type='text' id='expiry-date' placeholder='MM / YY' />
              <FaCalendarAlt className='icon' />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='cvv'>CVC / CVV</label>
            <div className='input-with-icon'>
              <input type='text' id='cvv' placeholder='CVC / CVV' />
              <FaInfoCircle className='icon' />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='cardholder-name'>Cardholder name</label>
          <div className='input-with-icon'>
            <input
              type='text'
              id='cardholder-name'
              placeholder="Enter cardholder's full name"
            />
          </div>
        </div>
      </div>
      <button
        type='button'
        className='add-payment'
        onClick={handleAddPaymentMethod}
      >
        Add Payment Method
      </button>
    </div>
  )
}

export default PaymentMethods
