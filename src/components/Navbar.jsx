import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import {MdOutlineDarkMode} from "react-icons/md"
import {BsSun} from 'react-icons/bs'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {AiOutlineCloseCircle} from "react-icons/ai"

const Navbar = (props) => {
    const {user, logOut} = UserAuth()
    const navigate = useNavigate()
    const [nav, setNav] = useState(false)

    const handleLogout = async() => {
        try {
            await logOut()
            navigate('/')
        } catch(error) {
            console.log(error)
        }
        setNav(false)
    }

    const mobileNavLightMode = {
        backgroundColor: '#fffff',
        color: '#1b2a4e'
    }

    const mobileNavDarkMode = {
        backgroundColor: '#1b2a4e',
        color: 'white'
    }

  return (
    <div style={props.dark ? props.darkMode : props.lightMode} className='w-full h-[60px] flex items-center justify-between px-2 text-[#1b2a4e]'>
        <Link to='/'>
            <p className='text-[24px]'>Har<span className='text-[#335eea]'>a</span>ka</p>
        </Link>


        <div className='hidden md:flex h-full  items-center text-[14px]'>
            <div className='mr-2' onClick={props.handleDarkMode}>
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

        {/* mobile navbar  toggle*/}
        <div className='flex md:hidden z-20'>
            <div onClick={(e) => setNav(!nav)}>               
                {nav ? <AiOutlineCloseCircle /> : <HiOutlineMenuAlt1 /> }
            </div>
        </div>        

        {/* mobile menu */}
        {nav ? (
            <div style={props.dark ? mobileNavDarkMode : mobileNavLightMode} className='absolute w-full backdrop-blur-md left-0 h-screen top-0 flex flex-col items-center justify-center'>
                  <div className='mr-2' onClick={props.handleDarkMode}>
                {props.dark ? <BsSun className='cursor-pointer' onClick={(e) => setNav(false)}/> : <MdOutlineDarkMode className='cursor-pointer' onClick={(e) => setNav(false)}/>}
            </div>
               
                {user?.email ? 
                    (                
                        <div className='flex items-center font-[300] flex-col'>
                            <Link to='/account' onClick={(e) => setNav(false)}>
                                <p>Account</p>
                            </Link>                            
                            <p onClick={handleLogout} className='cursor-pointer'>logout</p>
                        </div>
                    ): (
                        <Link to='/login'>
                            <p className='font-[300]' onClick={(e) => setNav(false)}>login</p>
                        </Link>
                )} 
            </div>
        ): null }

    </div>
  )
}

export default Navbar