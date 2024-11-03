import React from 'react'
import pyhton from '../assets/python.png'
import opencv from '../assets/opencv.png'
import tensor from '../assets/tf.png'
import yolo from '../assets/yolo.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/js.png'
import reacts from '../assets/react.png'

const Skills = () => {
  return (
    <div name='skills' className='p-10 bg-[#3e3d49]  text-white'>
        <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full w-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-orange-500'>Skilss</p>
                <p className='py-4'>These are tools I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#575661] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={pyhton} alt='pyhton icon'/>
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#575661] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={opencv} alt='opencv icon'/>
                    <p className='my-4'>OpenCV</p>
                </div>
                <div className='shadow-md shadow-[#575661] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={tensor} alt='tensorflow icon'/>
                    <p className='my-4'>Tensorflow</p>
                </div>
                <div className='shadow-md shadow-[#575661] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={yolo} alt='yolo icon'/>
                    <p className='my-4'>YOLO</p>
                </div>
                <div className='shadow-md shadow-[#575661] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt='html icon'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#575661] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt='css icon'/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#575661] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={javascript} alt='javascript icon'/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#575661] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={reacts} alt='react icon'/>
                    <p className='my-4'>React JS</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
