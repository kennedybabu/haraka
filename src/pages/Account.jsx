import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'

const Account = () => {
  const {user} = UserAuth()
  const [balance, setBalance] = useState(0) 

  function sendMoney(accBalance, sendAmount, senderAddress) {

  }

  return (
    <div className='w-full px-2'>
      <div className=''>
        <h4>User Details</h4>
        <p>Acc Email: {user?.email}</p>
        <p>Acc balance:</p>
        <small>Balance: {balance}</small>
      </div>
    </div>
  )
}

export default Account