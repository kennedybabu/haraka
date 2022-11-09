import React from 'react'

const Landingpage = () => {
  return (
    <div className='w-full items-center flex flex-col h-full px-2'>
        <div className='min-h-[40vh]'>
            here
        </div>
        <div className='w-full text-center'>
            <h2 className='w-[250px] mx-auto text-[28px]'>Haraka, sending money is just a click away.</h2>
            <p className='text-[#869ab8] font-[300] w-[300px] mx-auto'>Register and send money to your friends and family.</p>
            <hr className='w-[20%] mx-auto my-4'/>
        </div>
        <button className='px-[1rem] py-[.8rem] text-[#1b2A4E] rounded-[50rem] border border-[#1b2A4E]'>Get Started</button>
    </div>
  )
}

export default Landingpage