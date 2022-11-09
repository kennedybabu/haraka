import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
    const {user, logOut} = UserAuth()

    
  return (
    <div>
        <Link to='/'>
            <p>haraka</p>
        </Link>
        <div>
            <Link to='/login'>
                <p>login</p>
            </Link>
            <Link to='/signup'>
                <p>Signup</p>
            </Link>
          
        </div>
    </div>
  )
}

export default Navbar