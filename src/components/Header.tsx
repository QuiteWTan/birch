"use client"

import React from 'react'
import Container from './Container'
import Logo from './Logo'
import { IoIosSearch } from "react-icons/io";
import { FaUser, FaOpencart } from "react-icons/fa";
import { useSession, signIn, signOut } from 'next-auth/react'; 
import { IoExitOutline } from "react-icons/io5";
import Image from 'next/image';

const Header = () => {
  const {data:session} = useSession();
  console.log(session)
  
  return (
    <div className='bg-primary '>
        <Container className=' max-w-[1440px] py-2 h-full flex items-center md:gap-x-5 justify-between md:justify-start'>
            <Logo/>

            <div className=' items-center rounded-full border-2  px-2 py-2 md:px-4 text-gray-500 w-full border-lightText/80 focus-within:border-black group duration-300 transition-colors hidden md:flex'>
                <IoIosSearch className="text-[20px] mr-2 group-focus-within:text-black duration-300 transition-colors"/>
                <input type="text" placeholder='search for products' className='bg-transparent focus:outline-none border-l-2 border-gray-300 px-4 group-focus-within:border-black duration-300 transition-colors'/>
            </div>

            <div className='flex items-center gap-2'>
              <div className='flex items-center py-3 px-4 hover:bg-slate-600 bg-black text-white rounded-full gap-2 hover:bg-black/70 duration-500 relative'>
                <FaOpencart className="text-[20px]"/>
                <p className='hidden md:block'>$0.00</p>
                <p className='absolute -top-1 -right-1 bg-white rounded-full flex items-center justify-center text-black w-5 h-5 shadow-xl border'> 0</p>
              </div>

              {
                session ? 
                  <div onClick={ () => signOut()} className='flex items-center bg-gray-200 hover:bg-gray-300 py-2 px-2 md:px-4 rounded-full gap-2 font-urbanist duration-500 cursor-pointer font-bold'>
                    {
                      session?.user?.image ? 
                      <div className='relative w-8 h-8 rounded-full overflow-hidden flex items-center justify-center'>
                        <Image src={session?.user?.image as string} alt=''  width={0} height={0} className='absolute w-full h-full object-fill'/> 
                      </div>
                      : 
                      <IoExitOutline className= "text-[24px]"/>
                    }
                    <p>Logout</p>
                  </div> 
                  
                  :

                  <div onClick={() => signIn()} className='flex items-center bg-gray-200 hover:bg-gray-300 py-3 px-4 rounded-full gap-2 font-urbanist duration-500 cursor-pointer font-bold w-fit'>
                    <FaUser />
                    <p>Login/Register</p>
                  </div>
              }
            </div>
        </Container>
        <Container className='max-w-[1440px] py-2 h-full flex items-center md:gap-x-5 justify-between md:justify-start  md:hidden'>
          <div className='flex items-center rounded-full border-2  px-2 py-2 md:px-4 text-gray-500 w-full border-lightText/80 focus-within:border-black group duration-300 transition-colors'>
                <IoIosSearch className="text-[20px] mr-2 group-focus-within:text-black duration-300 transition-colors"/>
                <input type="text" placeholder='search for products' className='bg-transparent focus:outline-none border-l-2 border-gray-300 px-4 group-focus-within:border-black duration-300 transition-colors'/>
            </div>
        </Container>
    </div>
  )
}

export default Header
