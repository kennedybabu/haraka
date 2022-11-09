import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import {MdOutlineDarkMode} from "react-icons/md"
import {BsSun} from 'react-icons/bs'

const Navbar = (props) => {
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
    <div style={props.dark ? props.darkMode : props.lightMode} className='w-full h-[60px] flex items-center justify-between px-2 text-[#1b2a4e]'>
        <Link to='/'>
            <p className='text-[24px]'>Har<span className='text-[#335eea]'>a</span>ka</p>
        </Link>
        <div className='h-full flex items-center text-[14px]'>
            <div className='mr-2' onClick={props.hanldeDarkMode}>
                {props.dark ? <BsSun className='cursor-pointer'/> : <MdOutlineDarkMode className='cursor-pointer'/>}
            </div>
            {user?.email ? 
            (                
                <div className='flex items-center font-[300]'>
                    <Link to='/account'>
                        <p>Account</p>
                    </Link>
                    <span className='px-1'>|</span>
                    <p onClick={handleLogout} className='cursor-pointer'>logout</p>
                </div>
            ): (
                <Link to='/login'>
                    <p className='font-[300]'>login</p>
                </Link>
            )}
          
        </div>
    </div>
  )
}

export default Navbar