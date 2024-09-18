'use client'
import './BillingHistory.scss'

const BillingHistory = () => {
  // Billing data as an array of objects
  const billingData = [
    {
      date: 'Jul 15, 2023',
      description: 'Premium Membership - Monthly',
      amount: '$59.99',
    },
    {
      date: 'Jun 15, 2023',
      description: 'Premium Membership - Monthly',
      amount: '$59.99',
    },
    {
      date: 'May 15, 2023',
      description: 'Premium Membership - Monthly',
      amount: '$59.99',
    },
  ]

  return (
    <div className='billing-history'>
      <h3>Billing History</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {billingData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.description}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BillingHistory
