import React from 'react'
import './Transaction.scss'
import { VscArrowSmallDown, VscArrowSmallUp } from 'react-icons/vsc'
import { CiWarning } from 'react-icons/ci'
const Transaction = () => {
  return (
    <div className='transaction-wrapper'>
      {/* header */}
      <div className='title-header'>
        <h2>Transactions</h2>
        <span>23 - 30 August 2024</span>
      </div>
      {/* Newest */}
      <div className='transaction'>
        <h3>NEWEST</h3>
        {/* items1 */}
        <div className='items'>
          <div className='items-content'>
            {/* FAILED */}
            <div className='items-content-circle deduction-transaction'>
              <VscArrowSmallDown className='icon' />
            </div>
            <div className='items-content-desc'>
              <span>Pemu Ridge apartment</span>
              <span>27 August 2024, at 12:30 PM</span>
            </div>
          </div>
          <div className='items-price price'>
            <span className='price-deduction'>-$2500</span>
          </div>
        </div>
        {/* items2 */}
        <div className='items'>
          <div className='items-content'>
            {/* successs */}
            <div className='items-content-circle success'>
              <VscArrowSmallUp />
            </div>
            <div className='items-content-desc'>
              <span>Pemu Ridge apartment</span>
              <span>25 August 2024, at 16:30 PM</span>
            </div>
          </div>
          <div className='items-price'>
            <span className='price-sucess'>+$2500</span>
          </div>
        </div>
      </div>

      {/* Yesterday */}
      <div className='transaction'>
        <h3>YESTERDAY</h3>
        {/* items1 */}
        <div className='items'>
          <div className='items-content'>
            {/* PENDING */}
            <div className='items-content-circle pending'>
              <CiWarning className='icon' />
            </div>
            <div className='items-content-desc'>
              <span>Pemu Ridge apartment</span>
              <span>26 August 2024, at 05:00 AM</span>
            </div>
          </div>
          <div className='items-price'>
            <span className='price-pending'>Pending</span>
          </div>
        </div>
        {/* items2 */}
        <div className='items'>
          <div className='items-content'>
            {/* FAILED */}
            <div className='items-content-circle failed'>
              <VscArrowSmallDown />
            </div>
            <div className='items-content-desc'>
              <span>Pemu Ridge apartment</span>
              <span>25 August 2024, at 16:30 PM</span>
            </div>
          </div>
          <div className='items-price'>
            <span className='price-failed'>Failed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transaction
