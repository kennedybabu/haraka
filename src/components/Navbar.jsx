import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
    const {user, logOut} = UserAuth()
    const navigate = useNavigate()

    const handleLogout = async() => {
        try {
            await logOut()
            navigate('/')
        } catch(error) {
            console.log(error)
        }
    }


  return (
    <div>
        <Link to='/'>
            <p>haraka</p>
        </Link>
        <div>
            {/* <Link to='/login'>
                <p>login</p>
            </Link>
            <Link to='/signup'>
                <p>Signup</p>
            </Link> */}
            {user?.email ? 
            (
                
                <div>
                    <Link to='/account'>
                        <p>Account</p>
                    </Link>
                    <p onClick={handleLogout}>logout</p>
                </div>
            ): (
                <Link to='/login'>
                    <p>login</p>
                </Link>
            )}
          
        </div>
    </div>
  )
}

export default Navbar