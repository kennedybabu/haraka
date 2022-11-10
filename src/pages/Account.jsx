import React, { useState, useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import {FiSend} from "react-icons/fi"
import {GiPayMoney} from "react-icons/gi"

const Account = (props) => {
  const {user} = UserAuth()
  const [accBalance, setAccBalance] = useState(0) 

  const [uploadFunds, setUploadFunds] = useState('')
  const [receiverEmail, setReceiverEmail] = useState('')  

  const [sendingMoney, setSendingMoney] = useState(false)
  const [toppingUp, setToppingUp] = useState(false)

  function sendMoney(accBalance, sendAmount, receiverEmail) {

  }

  let total

  function topUp(uploadFunds, accBalance) {
    let amount = parseInt(uploadFunds)
    
    total = amount + parseInt(accBalance)
    
    console.log(typeof accBalance)
    setAccBalance(total)
  }

  function handleSend() {
    setSendingMoney(!sendingMoney)
  }

  function handleTopUp() {
    setToppingUp(!toppingUp)
  }


  return (
    <div style={props.dark ? props.darkMode : props.lightMode} className='w-full px-2 min-h-[92vh] flex flex-col'>
      <div className='mt-[100px]'>
        <h4>User Details</h4>
        <p>Acc Email: {user?.email}</p>        
        <small>Balance: Ksh {accBalance}</small>
      </div>
      <div className='w-full flex items-center justify-between px-3 py-4'>
        <div style={props.dark ? props.lightMode : props.darkMode} onClick={handleTopUp} className='flex items-center  border border-[grey] px-2 rounded-[25px]'>
          <GiPayMoney className='mr-1 text-white' style={props.dark ? props.lightMode : props.darkMode}/>
          top up
        </div>
        <div style={props.dark ? props.lightMode : props.darkMode} onClick={handleSend} className='flex items-center border border-[grey] px-2 rounded-[25px]'>
          <FiSend className='mr-1' style={props.dark ? props.lightMode : props.darkMode}/>
           send Money
        </div>
      </div>

      {/* transfer funds  */}
      {sendingMoney ? (
      <div className='border rounded-md my-2 p-2'>
         <h2 className='py-2'>Send Money</h2>
        <div className='flex flex-col'>
             <label htmlFor="email" className='font-[300]'>send to</label>
             <input className='p-2 my-1' type="email" name='email' placeholder='email address' />
        </div>
         <div className='flex flex-col'>
             <label htmlFor="amount" className='font-[300]'>send amount</label>
             <input className='p-2 my-1 bottom-border' type="number" placeholder='e.g 1,000' />
         </div>
         <button>Transfer</button>
      </div>
      ) : null }

      {/* top up */}
      {toppingUp ? (
        <div className='border rounded-md my-2 p-2'>
          <h2 className='py-2'>Top Up From Mpesa* line</h2>
        <div className='flex flex-col'>
            <label htmlFor="amount">top up amount</label>
            <input className='bottom-border p-2 my-1' onChange={(e) => setUploadFunds(e.target.value)}  type="number" name='amount' placeholder='amount top up' />
        </div>          
        <button onClick={topUp} disabled={true} className='border border-[gray] px-[10px] rounded-[25px]'>Top Up</button>
       </div>
      ) : null }

    </div>
  )
}

export default Account