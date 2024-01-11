import Image from 'next/image'
import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

const FirstSection = () => {
  return (
    <div className='grid md:grid-cols-2  min-h-[700px] md:max-h-[800px] h-full mt-2 rounded-2xl w-full overflow-hidden font-urbanist'>
        <div className='flex flex-col relative min-h-[700px] py-4 sm:px-6 md:max-h-[100vh]'>
            <h1 className='font-roboto font-bold  text-3xl lg:text-6xl '>Real Design For <br /> Real People</h1>
            
            <div className='flex items-center gap-2 mt-4'><h1 className='font-bold text-lg w-fit'>Lets Get Acquinted </h1><hr  className='w-full border-4 border-black'/></div>
            <div className='text-sm flex items-center gap-4 text-justify mt-5 flex-col md:flex-row w-full'>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </h1>
                <button className='px-6 py-3 bg-black text-white flex items-center gap-4 text-lg rounded-full'>
                    More
                    <FaLocationArrow />
                </button>
            </div>
            <div className='flex items-center my-4 w-full justify-center'>
                <div className='flex flex-col border-r-2 px-6 py-2'>
                    <h1 className='font-archivo text-xl md:text-2xl lg:text-3xl font-bold'>115k+</h1>
                    <p className='text-sm md:text-base lg:text-lg font-mono'>Products</p>
                </div>
                <div className='flex flex-col border-r-2 px-6 py-2'>
                    <h1 className='font-archivo text-xl md:text-2xl lg:text-3xl font-bold'>54k+</h1>
                    <p className='text-sm md:text-base lg:text-lg font-mono'>Customers</p>
                </div>
                <div className='flex flex-col px-6 py-2'>
                    <h1 className='font-archivo text-xl md:text-2xl lg:text-3xl font-bold'>4k+</h1>
                    <p className='text-sm md:text-base lg:text-lg font-mono'>Branches</p>
                </div>
            </div>
            <div className='w-full h-full relative'>
                <Image src={'/Company.jpg'} width={500} height={500} alt='' className='h-full w-full object-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'/>

            </div>
        </div>

        <div className='h-full overflow-hidden w-full relative'>
            <Image src={'/Company1.jpg'} alt='' width={500} height={500}  className='max-h-[100vh] h-full object-cover w-full brightness-75'/>
            <div className='font-urbanist flex items-center absolute top-4 right-4 text-base cursor-pointer'>
                <h1 className='px-4 py-2 rounded-full bg-white text-black font-bold'>
                    Contact Us
                </h1>
                {/* <div className='bg-white text-black p-3 rounded-full text-[16px]'>
                    <FaRegUser />
                </div> */}
            </div>
            <div className='grid grid-cols-2 w-40 sm:w-48 md:w-64 h-20 md:h-24 bg-white p-2 absolute left-4 top-4 rounded-lg'>
                <div className='flex flex-col  justify-between'>
                    <h1 className='text-xs md:text-sm font-bold'>Jakarta Pusat <br />Indonesia</h1>
                    <button className='text-[9px] md:text-[14px] p-2 rounded-full flex items-center justify-center bg-black text-white w-fit'><FaLocationArrow /></button>
                </div>
                <div className='w-full h-full relative'>
                    <Image src={'/Company1.jpg'} width={500} height={500} alt='' className='h-full w-full object-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'/>
                </div>
            </div>
            <div className='absolute bottom-0 right-0 rounded-se-3xl border-white border-4 p-6 max-w-[600px] w-full ml-[10%] overflow-hidden'>
                <div className='flex flex-col gap-y-6'>
                   <h1 className='text-white max-w-[500px] w-full text-xs md:text-sm'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</h1> 
                   <div className='flex items-center justify-between'>
                        <button className='py-3 px-6 rounded-full bg-white text-black font-bold w-fit'>
                            Get Started 
                        </button>
                        <button className='border-2 border-white px-6 py-3 rounded-full text-white'> 
                            Know More
                        </button>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FirstSection


