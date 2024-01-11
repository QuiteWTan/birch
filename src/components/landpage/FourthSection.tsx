import Image from 'next/image'
import React from 'react'
import { FaExpandArrowsAlt } from "react-icons/fa";
import Logo from '../Logo';
import { PEOPLE_URL } from '@/constants/data';

const FourthSection = () => {
  const name = ['Company Place 1', 'Company Place 2', 'Company Place 3']
  const elements = Array.from({length:3}).map((_,index) => (
    <div className='w-full h-[100px] md:h-[200px] relative font-urbanist' key={index}>
      <Image src={`/SS${index+1}.jpg`} alt='' width={500} height={500} className='rounded-md h-full absolute'/>
      <div className='absolute top-2 left-2 border-white border-2 rounded-full text-white text-[16px] md:text-[20px] p-2'>
        <FaExpandArrowsAlt />
      </div>
      <div className='flex w-full justify-between items-center text-white bg-white/10 backdrop-blur-xl p-2 absolute bottom-0 '>
        <h1>{name[index]}</h1>
        <h1>0{index+1}</h1>
      </div>
    </div>
  ))
  return (
    <div className='flex flex-col md:flex-row w-full my-6 px-4 gap-3 items-center'>
      <div className='w-full md:w-[65%]'>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-2'>
            {
             elements
            }
        </div>
        <div className='flex flex-col mt-4 gap-3 font-roboto '>
          <h1 className='text-3xl md:text-4xl lg:text-5xl max-w-[600px] font-bold'>Discovering the charms using Birch Products</h1>
          <p className='text-xs md:text-sm max-w-[750px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
      <div className='w-full md:w-[35%] flex flex-col gap-3 font-roboto bg-white shadow-md border-2 p-2 md:p-4'>
        <Logo/>
        <p className='text-xs md:text-sm max-w-[750px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <div className='flex items-center gap-2 backdrop-blur-2xl bg-white/30 p-4 rounded-2xl'>
          <span className='flex -space-x-4 overflow-hidden'>
            {
              PEOPLE_URL.map((url, index)=>(
                <Image
                className='inline-block h-10 w-10 rounded-full'
                  src={url}
                  key={index}
                  alt='people'
                  width={40}
                  height={40}
                />
              ))
            }
          </span>
          <p className='font-bold '>54K + happy clients</p>
        </div>
        <button className='bg-black p-3 rounded-full px-6 text-white'>Start Now</button>
      </div>
    </div>
  )
}

export default FourthSection
