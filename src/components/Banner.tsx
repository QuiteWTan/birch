"use client"

import React from 'react'
import Container from './Container'
import Model1 from '@/images/Model1.jpg'
import Model2 from '@/images/Model2.jpg'
import Model3 from '@/images/Model3.jpg'
import Image from 'next/image'
import { IoMdArrowRoundDown } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <Container className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4 my-2 md:max-h-[600px] overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
        >
          <div className='w-full h-full rounded-xl overflow-hidden bg-slate-100 relative'>
            <Image src={Model1} alt="" width={0} height={0} className="w-full h-full object-fill absolute brightness-75"/>
            <div className='absolute w-full flex items-center justify-center bottom-4 gap-4 md:gap-8'>

              <div className='group bg-white px-4 md:px-8 py-2 md:py-3 rounded-full flex items-center gap-4'>
                <h1 className='text-sm md:text-base font-bold font-rowdies group-hover:translate-x-5 duration-500 transition-all'>LEARN MORE</h1>
                <div className='w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:translate-x-5 duration-500 transition-all'>
                  <IoMdArrowRoundDown  className="text-[24px] text-white"/>
                </div>
              </div>

              <div className='group border-white border-2 px-4 md:px-8 py-2 md:py-3 rounded-full flex items-center gap-4 text-white'>
                <h1 className='text-sm md:text-base font-bold font-rowdies group-hover:translate-x-5 duration-500 transition-all'>SHOP NOW</h1>
                <div className='w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:translate-x-5 duration-500 transition-all'>
                  <FaBagShopping className="text-[20px] text-black"/>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.4 }}
          >
          <div className='w-full grid grid-cols-2 grid-rows-5 h-[600px] gap-2 md:gap-4'>
            <div className='row-span-3 col-span-2 w-full h-full relative p-6 flex justify-between flex-col bg-gray-300 rounded-xl bg-getapp'>
              <h1 className='text-2xl md:text-3xl lg:text-5xl font-rowdies'>
                REAL DESIGNS 
                <br />
                BY REAL ARTISTS
                <br />
                FOR REAL PEOPLE
              </h1>
              <p className='text-sm font-bold font-archivo'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
              </p>
            </div>
            <div className='row-span-2 col-span-2 grid grid-cols-2 gap-2 md:gap-4 h-full font-archivo'>
              <div className='w-full h-full rounded-xl overflow-hidden bg-slate-100 relative group'>
                <Image src={Model2} alt="" width={0} height={0} className="w-full h-full object-cover absolute brightness-75 group-hover:scale-110 duration-500 transition-all"/>
                <h1 className='text-sm md:text-lg lg:text-2xl xl:text-3xl font-bold absolute bottom-4 w-full px-4 text-white duration-500 transition-all group-hover:-translate-y-5'>#TRENDING2024</h1>
              </div>
              <div className='w-full h-full rounded-xl overflow-hidden bg-slate-100 relative group'>
                <Image src={Model3} alt="" width={0} height={0} className="w-full h-full object-cover absolute brightness-75 group-hover:scale-110 duration-500 transition-all"/>
                <h1 className='text-sm md:text-lg lg:text-2xl xl:text-3xl font-bold absolute bottom-4 w-full text-white px-4 duration-500 transition-all group-hover:-translate-y-5'>#OLDBUTGOLD</h1>
              </div>
            </div>
          </div>
        </motion.div>
  
    </Container>
 
  )
}

export default Banner
