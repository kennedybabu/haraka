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
    <div>
        <div>
        <div>
            <p>Login</p>
            {error? <p>{error}</p> : null}
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' autoComplete='email'/>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' autoComplete='current-password'/>
                <button>Login</button>
            </form>
            <div>
              <span> <p>Need an account? </p></span><Link to='/signup'>Sign Up</Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login