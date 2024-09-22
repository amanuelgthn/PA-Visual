'use client'
import { useState, useEffect, useCallback } from 'react'
import { FaCreditCard, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa'
import './PaymentMethods.scss'
import ProfileModal from '@/app/components/ProfileSettings/ProfileModal/ProfileModal'

interface CardDetails {
  cardNumber: string
  expiryDate: string
  cvv: string
  cardholderName: string
}

interface PaymentMethodsState {
  cardExists: boolean
  isAddingCard: boolean
  details: CardDetails
  cardType: string | null
  isModalVisible: boolean
  errors: {
    cardNumber: string
    expiryDate: string
    cvv: string
    cardholderName: string
  }
}

const PaymentMethods = () => {
  const [cardData, setCardData] = useState<PaymentMethodsState>({
    cardExists: false,
    isAddingCard: false,
    details: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: '',
    },
    cardType: null,
    isModalVisible: false,
    errors: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: '',
    },
  })

  useEffect(() => {
    const storedCard = localStorage.getItem('cardDetails')
    if (storedCard) {
      const cardData = JSON.parse(storedCard)
      setCardData((prev) => ({
        ...prev,
        details: {
          cardNumber: cardData.cardNumber,
          expiryDate: cardData.expiryDate,
          cvv: cardData.cvv,
          cardholderName: cardData.cardholderName,
        },
        cardExists: true,
        cardType: detectCardType(cardData.cardNumber),
      }))
    }
  }, [])

  const resetForm = useCallback(() => {
    setCardData((prev) => ({
      ...prev,
      details: {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardholderName: '',
      },
      errors: { cardNumber: '', expiryDate: '', cvv: '', cardholderName: '' },
    }))
  }, [])

  const formatCardNumber = (number: string) => {
    return number.replace(/\s?/g, '').replace(/(\d{4})(?=\d)/g, '$1 ')
  }

  const detectCardType = (number: string) => {
    const cleanedNumber = number.replace(/\s/g, '')
    if (cleanedNumber.startsWith('4')) return 'Visa'
    if (cleanedNumber.startsWith('5')) return 'MasterCard'
    return null
  }

  const validateCardNumber = (number: string) => {
    const cardNumberRegex = /^[0-9\s]{19}$/
    const isValid = cardNumberRegex.test(number)
    setCardData((prev) => ({
      ...prev,
      cardType: isValid ? detectCardType(number) : null,
      errors: {
        ...prev.errors,
        cardNumber: isValid ? '' : 'Invalid card number',
      },
    }))
    return isValid
  }

  const validateExpiryDate = (date: string) => {
    const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/
    const isValid = expiryRegex.test(date)
    const [month, year] = date.split('/').map(Number)
    const now = new Date()
    const currentYear = now.getFullYear() % 100
    const currentMonth = now.getMonth() + 1

    const isExpired =
      year < currentYear || (year === currentYear && month < currentMonth)

    setCardData((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        expiryDate:
          isValid && !isExpired
            ? ''
            : isExpired
              ? 'Card is expired'
              : 'Invalid expiry date',
      },
    }))

    return isValid && !isExpired
  }

  const handleAddPaymentMethod = () => {
    const validationErrors = {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: '',
    }

    const isCardValid = validateCardNumber(cardData.details.cardNumber)
    if (!isCardValid) validationErrors.cardNumber = 'Invalid card number'

    if (!validateExpiryDate(cardData.details.expiryDate)) {
      validationErrors.expiryDate = 'Invalid expiry date'
    }

    if (cardData.details.cvv.length !== 3) {
      validationErrors.cvv = 'Invalid CVV'
    }

    if (!cardData.details.cardholderName) {
      validationErrors.cardholderName = 'Cardholder name is required'
    }

    if (Object.values(validationErrors).every((error) => error === '')) {
      const cardDetails = {
        ...cardData.details,
        cardType: detectCardType(cardData.details.cardNumber),
      }
      localStorage.setItem('cardDetails', JSON.stringify(cardDetails))
      setCardData((prev) => ({
        ...prev,
        cardExists: true,
        isAddingCard: false,
      }))
    } else {
      setCardData((prev) => ({
        ...prev,
        errors: validationErrors,
      }))
    }
  }

  const handleCancelAddCard = useCallback(() => {
    setCardData((prev) => ({ ...prev, isAddingCard: false }))
  }, [])

  const handleDeleteCard = useCallback(() => {
    setCardData((prev) => ({ ...prev, isModalVisible: true }))
  }, [])

  const handleConfirmDelete = useCallback(() => {
    localStorage.removeItem('cardDetails')
    resetForm()
    setCardData((prev) => ({
      ...prev,
      cardExists: false,
      isModalVisible: false,
    }))
  }, [resetForm])

  const handleCancelDelete = useCallback(() => {
    setCardData((prev) => ({ ...prev, isModalVisible: false }))
  }, [])

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const formattedValue = formatCardNumber(inputValue)
    setCardData((prev) => ({
      ...prev,
      details: { ...prev.details, cardNumber: formattedValue },
    }))
  }

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, '')
    let formattedValue = inputValue

    if (inputValue.length > 2) {
      formattedValue = `${inputValue.slice(0, 2)}/${inputValue.slice(2)}`
    }

    setCardData((prev) => ({
      ...prev,
      details: { ...prev.details, expiryDate: formattedValue },
    }))
  }

  return (
    <div className='payment-methods'>
      <h3>Payment Methods</h3>

      {!cardData.cardExists && !cardData.isAddingCard && (
        <div className='no-card'>
          <p>No card added</p>
          <button
            className='add-new-card'
            onClick={() =>
              setCardData((prev) => ({ ...prev, isAddingCard: true }))
            }
            aria-label='Add new card'
          >
            Add New Card
          </button>
        </div>
      )}

      {cardData.cardExists && !cardData.isAddingCard ? (
        <div className='card-details'>
          {cardData.cardType && (
            <p>
              {cardData.cardType} ending in{' '}
              {cardData.details.cardNumber.slice(-4)}
            </p>
          )}
          <div className='card-btn-actions'>
            <button
              className='delete-card'
              onClick={handleDeleteCard}
              aria-label='Delete card'
            >
              Delete card
            </button>
            <button
              className='add-new-card'
              onClick={() =>
                setCardData((prev) => ({ ...prev, isAddingCard: true }))
              }
              aria-label='Add new card'
            >
              Add New Card
            </button>
          </div>
        </div>
      ) : (
        cardData.isAddingCard && (
          <div className='form'>
            <div className='form-group'>
              <label htmlFor='card-number'>Card number</label>
              <div className='input-with-icon'>
                <input
                  type='text'
                  id='card-number'
                  placeholder='0000 0000 0000 0000'
                  aria-label='Card number'
                  value={cardData.details.cardNumber}
                  onChange={handleCardNumberChange}
                />
                <FaCreditCard className='icon' />
              </div>
              {cardData.errors.cardNumber && (
                <span className='error'>{cardData.errors.cardNumber}</span>
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
                    aria-label='Expiry date'
                    value={cardData.details.expiryDate}
                    onChange={handleExpiryDateChange}
                  />
                  <FaCalendarAlt className='icon' />
                </div>
                {cardData.errors.expiryDate && (
                  <span className='error'>{cardData.errors.expiryDate}</span>
                )}
              </div>

              <div className='form-group'>
                <label htmlFor='cvv'>CVC / CVV</label>
                <div className='input-with-icon'>
                  <input
                    type='text'
                    id='cvv'
                    placeholder='CVC / CVV'
                    aria-label='CVC / CVV'
                    value={cardData.details.cvv}
                    onChange={(e) =>
                      setCardData((prev) => ({
                        ...prev,
                        details: { ...prev.details, cvv: e.target.value },
                      }))
                    }
                  />
                  <FaInfoCircle className='icon' />
                </div>
                {cardData.errors.cvv && (
                  <span className='error'>{cardData.errors.cvv}</span>
                )}
              </div>
            </div>

            <div className='form-group'>
              <label htmlFor='cardholder-name'>Cardholder name</label>
              <div className='input-with-icon'>
                <input
                  type='text'
                  id='cardholder-name'
                  placeholder="Enter cardholder's full name"
                  aria-label='Cardholder name'
                  value={cardData.details.cardholderName}
                  onChange={(e) =>
                    setCardData((prev) => ({
                      ...prev,
                      details: {
                        ...prev.details,
                        cardholderName: e.target.value,
                      },
                    }))
                  }
                />
              </div>
              {cardData.errors.cardholderName && (
                <span className='error'>{cardData.errors.cardholderName}</span>
              )}
            </div>

            <div className='button-group'>
              <button
                type='button'
                className='add-payment'
                onClick={handleAddPaymentMethod}
                aria-label='Add payment method'
              >
                Add Payment Method
              </button>
              <button
                type='button'
                className='cancel-btn'
                onClick={handleCancelAddCard}
                aria-label='Cancel adding card'
              >
                Cancel
              </button>
            </div>
          </div>
        )
      )}

      {cardData.isModalVisible && (
        <ProfileModal
          title='Delete Card'
          message='Are you sure you want to delete this card?'
          confirmLabel='Confirm'
          cancelLabel='Cancel'
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
          isVisible={cardData.isModalVisible}
        />
      )}
    </div>
  )
}

export default PaymentMethods
