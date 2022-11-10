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

  
  return (
    <div style={props.dark ? props.darkMode : props.lightMode} className='w-full items-center flex flex-col h-full md:h-screen overflow-hidden'>
        <div className='h-[40vh] w-full flex items-end' >
            <img src={Image} alt="/" className='w-[60%] mx-auto' />
        </div>
        <div className='w-full text-center my-2 p-2'>
            <h2 className='w-[250px] mx-auto text-[28px]'>Haraka, sending money is just a click away.</h2>
            <p className='text-[#869ab8] font-[300] w-[300px] mx-auto'>Register and send money to your friends and family.</p>
            <hr className='w-[20%] mx-auto my-4'/>
        </div>
        {user?.email ? (
          <button onClick={send} className='px-[1rem] flex items-center py-[.8rem] text-[#1b2A4E] rounded-[50rem] border border-[#1b2A4E] hover:bg-[#1b2A4E] hover:text-[#ffff] transition'>Transact<BsArrowRight className='ml-2'/></button>
        ) : ( 
          <button onClick={newUser} className='px-[1rem] flex items-center py-[.8rem] text-[#1b2A4E] rounded-[50rem] border border-[#1b2A4E] hover:bg-[#1b2A4E] hover:text-[#ffff] transition'>Get Started<BsArrowRight className='ml-2'/></button>
        )}
        <Footer />
    </div>
  )
}

export default Landingpage