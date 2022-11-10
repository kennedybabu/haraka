import React, { useState, useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import {FiSend} from "react-icons/fi"
import {GiPayMoney} from "react-icons/gi"

const Account = (props) => {
  const {user} = UserAuth()
  const [accBalance, setAccBalance] = useState(0) 
  const [error , setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const [uploadFunds, setUploadFunds] = useState(0)
  const [sendingAmount, setSendingAmount] = useState(0)
  const [receiverEmail, setReceiverEmail] = useState('')  

  const [sendingMoney, setSendingMoney] = useState(false)
  const [toppingUp, setToppingUp] = useState(false)

  function sendMoney() {
      if(sendingAmount > accBalance) {
          setError('You have insufficient funds, please top up.')
      } else if(receiverEmail && sendingAmount) {
          let total = parseInt(accBalance ) - parseInt(sendingAmount)
          setAccBalance(total)
          localStorage.setItem('accBalance', total)
      }
  }

  useEffect(() => {
    let prevBalance = JSON.parse(localStorage.getItem('accBalance'))
    if(prevBalance) {
      setAccBalance(prevBalance)
    } else {
      setAccBalance(0)
    }
  }, [])

  function topUp() {
      if(uploadFunds > 0){
        let total = parseInt(uploadFunds) + parseInt(accBalance)
        setAccBalance(total)
        localStorage.setItem('accBalance', total)
        setSuccessMessage(`Transfer of ${sendingAmount} to ${receiverEmail} successful`)
      } else {
        setError('Please input valid number')
      }
      setToppingUp(false)
  }

  function handleSend() {
    setSendingMoney(!sendingMoney)
  }

  function handleTopUp() {
    setToppingUp(!toppingUp)
  }

  const accDarkMode = {
    backgroundColor: '#74A4BC',
    color: '#1b2A4E'    
  }

  return (
    <div style={props.dark ? accDarkMode : props.lightMode} className='w-full px-2 min-h-[92vh] flex flex-col md:min-h-[95vh]'>
      <div className='mt-[100px] md:w-[60%] md:mx-auto'>
        <h4 className='tracking-wide'>User Details</h4>
        <p>Acc Email: <span className='font-bold'>{user?.email}</span></p>        
        <small>Balance: <span className='font-bold'>Ksh {accBalance}</span></small>
      </div>
      <div className='w-full flex items-center justify-between px-3 md:px-0 py-4 md:w-[60%] md:mx-auto'>
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
      <div className='border rounded-md my-2 p-2 md:w-[60%] md:mx-auto'>
          {/* alert messages */}
          {error ? <p className='bg-red-200 p-2'>{error}</p> : null}
          {successMessage ? <p className='bg-green-200 p-2'>{successMessage}</p> : null}
         <h2 className='py-2'>Send Money</h2>
        <div className='flex flex-col'>
             <label htmlFor="email" className='font-[300]'>send to</label>
             <input onChange={(e) => setReceiverEmail(e.target.value)} className='p-2 my-1' type="email" name='email' placeholder='email address' />
        </div>
         <div className='flex flex-col'>
             <label htmlFor="amount" className='font-[300]'>send amount</label>
             <input onChange={(e) => setSendingAmount(e.target.value)} className='p-2 my-1 bottom-border' type="number" placeholder='e.g 1,000' />
         </div>
         <button onClick={sendMoney}>Transfer</button>
      </div>
      ) : null }

      {/* top up */}
      {toppingUp ? (
        <div className='border rounded-md my-2 p-2 md:w-[60%] md:mx-auto'>
          {error ? <p className='bg-red-200 p-2'>{error}</p> : null}
          <h2 className='py-2'>Top Up From Mpesa* line</h2>
        <div className='flex flex-col'>
            <label htmlFor="amount">top up amount</label>
            <input className='bottom-border p-2 my-1' onChange={(e) => setUploadFunds(e.target.value)}  type="number" name='amount' placeholder='amount top up' />
        </div>          
        <button onClick={(e) => topUp()} className='border border-[gray] px-[10px] rounded-[25px]'>Top Up</button>
       </div>
      ) : null }

    </div>
  )
}

export default Account