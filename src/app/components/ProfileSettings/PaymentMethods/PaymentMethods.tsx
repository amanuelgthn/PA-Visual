'use client'
import { useState, useEffect } from 'react'
import { FaCreditCard, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa'
import './PaymentMethods.scss'
import ProfileModal from '@/app/components/ProfileSettings/ProfileModal/ProfileModal'

const PaymentMethods = () => {
  const [cardExists, setCardExists] = useState(false)
  const [isAddingCard, setIsAddingCard] = useState(false)
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [cardholderName, setCardholderName] = useState('')
  const [cardType, setCardType] = useState<string | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [errors, setErrors] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  })

  // Load card details from localStorage when the component mounts
  useEffect(() => {
    const storedCard = localStorage.getItem('cardDetails')
    if (storedCard) {
      const cardData = JSON.parse(storedCard)
      setCardNumber(cardData.cardNumber)
      setExpiryDate(cardData.expiryDate)
      setCvv(cardData.cvv)
      setCardholderName(cardData.cardholderName)
      setCardType(cardData.cardType)
      setCardExists(true)
    }
  }, [])

  const resetForm = () => {
    setCardNumber('')
    setExpiryDate('')
    setCvv('')
    setCardholderName('')
    setErrors({ cardNumber: '', expiryDate: '', cvv: '' })
  }

  const detectCardType = (number: string) => {
    const cleanedNumber = number.replace(/\s/g, '')
    if (cleanedNumber.startsWith('4')) return 'Visa'
    if (cleanedNumber.startsWith('5')) return 'MasterCard'
    return null
  }

  const validateCardNumber = (number: string) => {
    const cardNumberRegex = /^[0-9]{16}$/
    const isValid = cardNumberRegex.test(number.replace(/\s/g, ''))
    if (isValid) {
      setCardType(detectCardType(number))
    } else {
      setCardType(null)
    }
    return isValid
  }

  const validateExpiryDate = (date: string) => {
    const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/
    return expiryRegex.test(date)
  }

  const handleAddPaymentMethod = () => {
    const validationErrors = { cardNumber: '', expiryDate: '', cvv: '' }

    if (!validateCardNumber(cardNumber)) {
      validationErrors.cardNumber = 'Invalid card number'
    }

    if (!validateExpiryDate(expiryDate)) {
      validationErrors.expiryDate = 'Invalid expiry date'
    }

    if (cvv.length !== 3) {
      validationErrors.cvv = 'Invalid CVV'
    }

    if (
      validationErrors.cardNumber === '' &&
      validationErrors.expiryDate === '' &&
      validationErrors.cvv === ''
    ) {
      const cardData = {
        cardNumber,
        expiryDate,
        cvv,
        cardholderName,
        cardType: detectCardType(cardNumber),
      }

      localStorage.setItem('cardDetails', JSON.stringify(cardData))
      setCardExists(true)
      setIsAddingCard(false)
    } else {
      setErrors(validationErrors)
    }
  }

  const handleCancelAddCard = () => {
    resetForm()
    setIsAddingCard(false)
  }

  const handleDeleteCard = () => {
    setIsModalVisible(true)
  }

  const handleConfirmDelete = () => {
    localStorage.removeItem('cardDetails')
    setCardExists(false)
    setIsModalVisible(false)
  }

  const handleCancelDelete = () => {
    setIsModalVisible(false)
  }

  return (
    <div className='payment-methods'>
      <h3>Payment Methods</h3>

      {!cardExists && !isAddingCard && (
        <div className='no-card'>
          <p>No card added</p>
          <button
            className='add-new-card'
            onClick={() => setIsAddingCard(true)}
          >
            Add New Card
          </button>
        </div>
      )}

      {cardExists && !isAddingCard ? (
        <div className='card-details'>
          {cardType && (
            <p>
              {cardType} ending in {cardNumber.slice(-4)}
            </p>
          )}
          <div className='card-btn-actions'>
            <button className='delete-card' onClick={handleDeleteCard}>
              Delete card
            </button>
            <button
              className='add-new-card'
              onClick={() => setIsAddingCard(true)}
            >
              Add New Card
            </button>
          </div>
        </div>
      ) : (
        isAddingCard && (
          <div className='form'>
            <div className='form-group'>
              <label htmlFor='card-number'>Card number</label>
              <div className='input-with-icon'>
                <input
                  type='text'
                  id='card-number'
                  placeholder='0000 0000 0000 0000'
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
                <FaCreditCard className='icon' />
              </div>
              {errors.cardNumber && (
                <span className='error'>{errors.cardNumber}</span>
              )}
            </div>

            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor='expiry-date'>Expiry date</label>
                <div className='input-with-icon'>
                  <input
                    type='text'
                    id='expiry-date'
                    placeholder='MM / YY'
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                  <FaCalendarAlt className='icon' />
                </div>
                {errors.expiryDate && (
                  <span className='error'>{errors.expiryDate}</span>
                )}
              </div>

              <div className='form-group'>
                <label htmlFor='cvv'>CVC / CVV</label>
                <div className='input-with-icon'>
                  <input
                    type='text'
                    id='cvv'
                    placeholder='CVC / CVV'
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                  <FaInfoCircle className='icon' />
                </div>
                {errors.cvv && <span className='error'>{errors.cvv}</span>}
              </div>
            </div>

            <div className='form-group'>
              <label htmlFor='cardholder-name'>Cardholder name</label>
              <div className='input-with-icon'>
                <input
                  type='text'
                  id='cardholder-name'
                  placeholder="Enter cardholder's full name"
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                />
              </div>
            </div>

            <div className='button-group'>
              <button
                type='button'
                className='add-payment'
                onClick={handleAddPaymentMethod}
              >
                Add Payment Method
              </button>
              <button
                type='button'
                className='cancel-btn'
                onClick={handleCancelAddCard}
              >
                Cancel
              </button>
            </div>
          </div>
        )
      )}

      {isModalVisible && (
        <ProfileModal
          title='Delete Card'
          message='Are you sure you want to delete this card?'
          confirmLabel='Confirm'
          cancelLabel='Cancel'
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
          isVisible={isModalVisible}
        />
      )}
    </div>
  )
}

export default PaymentMethods
