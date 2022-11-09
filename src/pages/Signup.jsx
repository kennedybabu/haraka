import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
    <div>
        <div>
            <p>sign up</p>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' autoComplete='email'/>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' autoComplete='current-password'/>
                <button>Sign Up</button>
            </form>
            <div>
              <span> <p>Already signed up? </p></span><Link to='/login'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Signup