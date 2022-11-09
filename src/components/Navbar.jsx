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
    <div className='w-full h-[60px] flex items-center justify-between px-2 text-[#1b2a4e]'>
        <Link to='/'>
            <p className='text-[24px]'>Har<span className='text-[#335eea]'>a</span>ka</p>
        </Link>
        <div className='h-full flex items-center'>
          
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