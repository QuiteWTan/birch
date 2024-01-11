"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { HiArrowTrendingUp } from 'react-icons/hi2'
import FAQ from '../FAQ'

const FifthSection = () => {
  const [drop, setDrop] = useState(-1)
  const Questions = [
    {
        Question:'What is Demy',
        Answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        Question:'What are your vision',
        Answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        Question:'What are your mission',
        Answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        Question:'Can Demy work on IOS ',
        Answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        Question:'Is it beginner friendly',
        Answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },

]
  return (
    <div className='w-full px-4 h-[1100px] md:h-[600px] py-6 my-6'>
      <div className='w-full h-full relative'>
        <button className='absolute -bottom-10 translate-y-[-50%] left-[50%] translate-x-[-50%] px-12 py-3 bg-dark text-white rounded-full z-50 border-4 border-white'>Get Started</button>
        <Image src={'/SS3.jpg'} alt='' width={500} height={500} className='absolute w-full h-full rounded-2xl object-cover brightness-75'/>

        <div className='absolute grid grid-rows-2 md:grid-rows-none md:grid-cols-2 p-6 w-full h-full justify-between gap-6 md:gap-2'>
          <div className='h-full flex flex-col justify-between font-urbanist col-span-1 text-white'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold '>Redefining design visual in a unique haven for you to find your own confidence in world</h1>
            <div className='flex flex-col gap-3'>
              <div className='max-w-80 h-48 relative' >
                <Image src={'/SS1.jpg'} alt='' width={500} height={500} className='h-full w-full absolute rounded-xl'/>
                <div className='bg-white text-black text-[25px] absolute top-[-20px] right-[-20px] rounded-full p-3'>
                  <HiArrowTrendingUp />
                </div>
              </div>
              <h1 className='text-sm md:text-base lg:text-lg  w-full max-w-96'>Redefining design visual in a unique haven for you to find your own confidence in world</h1>
            </div>
          </div>

          <div className='md:col-span-1 text-white font-roboto bg-white/10 backdrop-blur-md p-6 h-fit'>
            <div className="flex flex-col  w-full">
                <div className='flex flex-col py-6 gap-y-4 w-full'>
                      {
                      Questions.map((Q,index) => (
                        <FAQ Ques={Q.Question} Ans={Q.Answer} i={index} drop={drop} set={setDrop}/>
                      ))
                      }
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FifthSection
