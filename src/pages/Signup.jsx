import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {user, signUp} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(email,password)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className='w-full'>      
        <div className='w-[350px] mx-auto flex flex-col px-2 items-center'>
            <p className='uppercase'>Sign Up</p>
            <form onSubmit={handleSubmit} className='mx-auto flex flex-col'>
                <input className='p-2 my-1' onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' autoComplete='email'/>
                <input className='p-2 my-1' onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' autoComplete='current-password'/>
                <button className='my-1 rounded-[5px] h-[36px] bg-[#6c8aec] text-[#ffff] '>Sign Up</button>
                <div className='w-full flex justify-between'>
                  <span><small>Already signed Up? </small></span><Link to='/login'><small className='cursor-pointer'>login</small></Link>
                </div>
            </form>            
        </div>
    </div>
  )
}

export default Signup