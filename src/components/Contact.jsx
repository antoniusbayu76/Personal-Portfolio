import React from 'react'
import wa from '../assets/wa.png'
import gmail from '../assets/gmail.png'

const Contact = () => {
  return (
    <div name= 'contact' className='w-full h-screen/2 bg-[#3e3d49] flex justify-center items-center p-4'>
      <div className='max-w-[1000px] mx-auto px-4 flex flex-col items-center h-full w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-orange-500 text-white'>Contact Me</p>
        </div>
        <div className='w-full grid grid-cols-2 gap-4 text-center item-center py-8 text-white'>
            <div className='shadow-md shadow-[#575661] '>
                <img className='w-20 mx-auto' src={wa} alt='whatsapp icon'/>
                <p className='my-4 text-[10px] sm:text-base break-words'>+62-821-3596-4677</p>
            </div>
            <div className='shadow-md shadow-[#575661] '>
                <img className='w-20 mx-auto' src={gmail} alt='gmail icon'/>
                <p className='my-4 text-[10px] sm:text-base break-words'>antoniusbayu96@gmail.com</p>
            </div>
        </div>
        <div className='pb-8'>
            <p className='text-2xl font-bold text-white'>Lets Colaborate!</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
