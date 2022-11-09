import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error, setError] = useState('')
  const {user, login} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(email,password)
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <div className='w-full h-full'>
    
        <div className='w-[350px] mx-auto flex flex-col px-2 items-center'>
            <p className='uppercase'>Login</p>
            {error? <p>{error}</p> : null}
            <form onSubmit={handleSubmit} className='mx-auto flex flex-col'>
                <input className='p-2 my-1' onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' autoComplete='email'/>
                <input className='p-2 my-1' onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' autoComplete='current-password'/>
                <button className='my-1 rounded-[5px] h-[36px] bg-[#6c8aec] text-[#ffff] '>Login</button>
                <div className='w-full flex justify-between'>
                  <span><small>Need an account? </small></span><Link to='/signup'><small className='cursor-pointer'>Sign Up</small></Link>
                </div>
            </form>            
        </div>
    
    </div>
  )
}

export default Login