import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll'
import profile from '../assets/profile.JPG'

const Home = () => {
  return (
    <div name= 'home' className='w-full h-screen bg-[#3e3d49]'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <div className='flex flex-row '>
                <div>
                    <p className='text-orange-500'> Hi, my name is</p>
                    <h2 className='text-3xl sm:text-4xl font-bold text-gray-200'>Antonius Wisang Bayu Nugraha</h2>
                    <h1 className='sm:text-xl font-bold text-gray-400'>Undergraduate in Electronics and Instrumentation Gadjah Mada University</h1>
                    <p className='text-gray-300 py-4 max-w-[300px] md:max-w-[700px] flex flex-row'>
                        I am a fifth-semester student at Gadjah Mada University, majoring in Electronics and Instrumentation. I have a keen interest in programming, 
                        especially in computer vision and machine learning. With nearly two years of experience in a research team and participation in national and 
                        international competitions, I am dedicated to advancing my knowledge and skills in this field.
                    </p>
                </div>
                <div className='hidden md:flex md:w-80 md:h-80'>
                    <img className='rounded-full object-cover w-full h-full' src={profile} alt='profile photo'/>
                </div>
            </div>
            <div>
                <Link to='work' smooth={true} duration={500} offset={-80}>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-orange-600'>View Work 
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3'/>
                        </span>
                    </button>
                </Link>
            </div>
        </div>
        
      
    </div>
  )
}

export default Home
