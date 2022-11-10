import React from 'react'
import {BsArrowRight} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import Footer from '../components/Footer'
import Image from "../assets/solution.svg"



const Landingpage = (props) => {
  const {user} = UserAuth()
  const navigate = useNavigate()

  function send() {
    navigate('/account')
  }

  function newUser() {
    navigate('/login')
  }

  const landingDarkMode = {
    backgroundColor: '#74A4BC',
    color: '1b2A4E'    
  }

  
  return (
    <div style={props.dark ? landingDarkMode : props.lightMode} className='w-full items-center flex flex-col h-full md:h-full lg:overflow-hidden lg:flex-row'>
        <div className='h-[40vh] w-full flex items-end lg:w-[45%]' >
            <img src={Image} alt="/" className='w-[60%] mx-auto' />
        </div>
        <div className='lg:flex flex-col flex fe items-center lg:items-start'>
          <div className='w-full text-center lg:text-left my-2 p-2'>
              <h2 className='w-[250px] mx-auto lg:ml-0 text-[28px]'>Haraka, <span className='bg-green-500 p-[2px]'>sending</span> money as easy as a click away.</h2>
              <p className='text-[#6E6362] font-[300] w-[300px] mx-auto'>Register and send money to your friends and family.</p>
              <hr className='w-[20%] mx-auto my-4'/>
          </div>
          {user?.email ? (
            <button onClick={send} className='px-[1rem] flex items-center py-[.8rem] text-[#1b2A4E] rounded-[50rem] border border-[#1b2A4E] hover:bg-[#1b2A4E] hover:text-[#ffff] transition'>Transact<BsArrowRight className='ml-2'/></button>
          ) : ( 
            <button onClick={newUser} className='px-[1rem] flex items-center py-[.8rem] text-[#1b2A4E] rounded-[50rem] border border-[#1b2A4E] hover:bg-[#1b2A4E] hover:text-[#ffff] transition'>Get Started<BsArrowRight className='ml-2'/></button>
          )}
        </div>
        <Footer />
    </div>
  )
}

export default Landingpage