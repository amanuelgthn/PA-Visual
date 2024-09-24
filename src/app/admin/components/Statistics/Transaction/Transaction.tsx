import React from 'react'
import './Transaction.scss'
import { VscArrowSmallDown, VscArrowSmallUp } from 'react-icons/vsc'
import { CiWarning } from 'react-icons/ci'
import { format, isWithinInterval, subDays, isToday } from 'date-fns'

interface TransactionItem {
  name: string
  date: string
  time: string
  status: 'deduction' | 'success' | 'pending' | 'failed'
  amount?: string
}

const transactionData: TransactionItem[] = [
  {
    name: 'Pemu Ridge apartment',
    date: '24 September 2024',
    time: '12:30 PM',
    status: 'deduction',
    amount: '-$2500',
  },
  {
    name: 'Pemu Ridge apartment',
    date: '24 September 2024',
    time: '12:30 PM',
    status: 'success',
    amount: '+$2500',
  },
  {
    name: 'Pemu Ridge apartment',
    date: '24 September 2024',
    time: '05:00 AM',
    status: 'pending',
    amount: 'Pending',
  },
  {
    name: 'Pemu Ridge apartment',
    date: '21 September 2024',
    time: '16:30 PM',
    status: 'failed',
    amount: 'Failed',
  },
  {
    name: 'Pemu Ridge apartment',
    date: '20 September 2024',
    time: '10:00 AM',
    status: 'deduction',
    amount: '-$1800',
  },
  {
    name: 'Pemu Ridge apartment',
    date: '19 September 2024',
    time: '11:00 AM',
    status: 'success',
    amount: '+$3200',
  },
]

// Calculate date range for the past 7 days
const calculateDateRange = (): { start: Date; end: Date } => {
  const today = new Date()
  const weekStart = subDays(today, 7)
  return { start: weekStart, end: today }
}

const isTransactionInDateRange = (transactionDate: string): boolean => {
  const { start, end } = calculateDateRange()
  const parsedTransactionDate = new Date(transactionDate)
  return isWithinInterval(parsedTransactionDate, { start, end })
}

const sortTransactionsByDate = (
  transactions: TransactionItem[],
): TransactionItem[] => {
  return transactions.sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`)
    const dateB = new Date(`${b.date} ${b.time}`)
    return dateB.getTime() - dateA.getTime()
  })
}

const Transaction: React.FC = () => {
  // Filter and sort transactions
  const filteredTransactions = sortTransactionsByDate(
    transactionData.filter((transaction) =>
      isTransactionInDateRange(transaction.date),
    ),
  )

  // Separated transactions from  newest (today) and previous (last 7 days but not today)
  const newestTransactions = filteredTransactions.filter((item) =>
    isToday(new Date(item.date)),
  )
  const previousTransactions = filteredTransactions.filter(
    (item) => !isToday(new Date(item.date)),
  )

  return (
    <div className='transaction-wrapper'>
      {/* header */}
      <div className='title-header'>
        <h2>Transactions</h2>
        <span>
          {format(subDays(new Date(), 7), 'dd')} -{' '}
          {format(new Date(), 'dd MMMM yyyy')}
        </span>
      </div>

      {filteredTransactions.length > 0 ? (
        <>
          {/* Newest (Today) */}
          {newestTransactions.length > 0 && (
            <div className='transaction'>
              <h3>NEWEST</h3>
              {newestTransactions.map((item, index) => (
                <div className='items' key={index}>
                  <div className='items-content'>
                    <div
                      className={`items-content-circle ${
                        item.status === 'deduction'
                          ? 'deduction-transaction'
                          : item.status === 'success'
                            ? 'success'
                            : item.status === 'pending'
                              ? 'pending'
                              : 'failed'
                      }`}
                    >
                      {item.status === 'deduction' ||
                      item.status === 'failed' ? (
                        <VscArrowSmallDown className='icon' />
                      ) : item.status === 'success' ? (
                        <VscArrowSmallUp className='icon' />
                      ) : (
                        <CiWarning className='icon' />
                      )}
                    </div>
                    <div className='items-content-desc'>
                      <span>{item.name}</span>
                      <span>
                        {item.date}, at {item.time}
                      </span>
                    </div>
                  </div>
                  <div className='items-price'>
                    {item.amount ? (
                      <span
                        className={
                          item.status === 'deduction'
                            ? 'price-deduction'
                            : item.status === 'success'
                              ? 'price-success'
                              : item.status === 'failed'
                                ? 'price-failed'
                                : 'price-pending'
                        }
                      >
                        {item.amount}
                      </span>
                    ) : (
                      <span>{item.status}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Previous (Last 7 Days but not Today) */}
          {previousTransactions.length > 0 && (
            <div className='transaction'>
              <h3>PREVIOUS</h3>
              {previousTransactions.map((item, index) => (
                <div className='items' key={index}>
                  <div className='items-content'>
                    <div
                      className={`items-content-circle ${
                        item.status === 'deduction'
                          ? 'deduction-transaction'
                          : item.status === 'success'
                            ? 'success'
                            : item.status === 'pending'
                              ? 'pending'
                              : 'failed'
                      }`}
                    >
                      {item.status === 'deduction' ||
                      item.status === 'failed' ? (
                        <VscArrowSmallDown className='icon' />
                      ) : item.status === 'success' ? (
                        <VscArrowSmallUp className='icon' />
                      ) : (
                        <CiWarning className='icon' />
                      )}
                    </div>
                    <div className='items-content-desc'>
                      <span>{item.name}</span>
                      <span>
                        {item.date}, at {item.time}
                      </span>
                    </div>
                  </div>
                  <div className='items-price'>
                    {item.amount ? (
                      <span
                        className={
                          item.status === 'deduction'
                            ? 'price-deduction'
                            : item.status === 'success'
                              ? 'price-success'
                              : item.status === 'failed'
                                ? 'price-failed'
                                : 'price-pending'
                        }
                      >
                        {item.amount}
                      </span>
                    ) : (
                      <span>{item.status}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className='no-data-to-show'>No data to display yet</div>
      )}
    </div>
  )
}

export default Transaction
