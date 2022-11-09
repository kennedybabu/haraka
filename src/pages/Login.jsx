import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <div>
        <div>
            <p>Login</p>
            <form>
                <input type="email" placeholder='Email' autoComplete='email'/>
                <input type="password" placeholder='password' autoComplete='current-password'/>
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