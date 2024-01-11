import Image from 'next/image';
import React from 'react'
import { FaUserFriends } from "react-icons/fa";

const SecondSection = () => {
    return (
        <div className='my-8 px-4  sm:px-20 lg:px-24 w-full flex flex-col gap-4 relative'>
            <Image src={'/SS1.jpg'} width={500} height={500} alt='' className='w-20 h-20 rounded-full absolute top-12 left-4'/>
            <Image src={'/SS2.jpg'} width={500} height={500} alt='' className='w-20 h-20 rounded-full absolute top-0 left-80'/>
            <Image src={'/SS3.jpg'} width={500} height={500} alt='' className='w-20 h-20 rounded-full absolute bottom-4 left-44'/>
            <h1 className='self-end text-right font-roboto text-4xl md:text-5xl lg:text-7xl max-w-[1200px] z-30'> 
                Building Visions & <br />
                creating visual products with Birch 
            </h1> 
            <div className='self-end z-30'>
                <h1 className='max-w-[800px] font-roboto'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </h1>
                <button className='mt-4 px-6 py-4 bg-black w-fit text-white text-base md:text-xl flex items-center rounded-full gap-4 '>
                    <h1>Join Us</h1>
                    <FaUserFriends className="text-[25px]"/>
                </button>
            </div>
            
        </div>
    )
}

export default SecondSection
