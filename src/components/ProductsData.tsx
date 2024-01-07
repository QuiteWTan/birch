'use client'
import React from 'react'
import { ItemProps, Product } from '../../type'
import Image from 'next/image'
import { calculatePercent } from '@/helpers'
import FormattedPrice from './FormattedPrice'
import { BiCartAdd } from "react-icons/bi";
import { FaStar, FaRegStar } from "react-icons/fa";
import Link from 'next/link'

const ProductsData = ({item} : ItemProps) => {
  const startArray = Array.from({length: item?.rating}, (_, index) => (
    <span>
      <FaStar className="text-yellow-500 text-[16px] md:text-[18px]"/>
    </span>
  ))
  return (
    <Link href={{ pathname: "/product", query: { _id: item?._id } }}>
      <div className='w-full rounded-lg overflow-hidden'>
        <div className='w-full h-56 md:h-80 group overflow-hidden relative'>
          <Image src={item?.image} alt="" width={500} height={500} className="w-full h-full object-cover group-hover:scale-105 rounded-t-lg"/>
          {
            item?.isNew && <span className='absolute right-2 top-2 font-medium text-xs py-1 px-4 rounded-full bg-white group-hover:bg-white/50 duration-500 transition-all group-hover:text-yellow-700'>New Arrival</span>
          }
        </div>

        <div className='border-[1px] border-slate-300 border-t-0 px-2 pt-2 pb-4 flex flex-col gap-y-1 bg-white rounded-b-lg'>
          <p className='text-sm md:text-base font-bold lg:text-xl font-urbanist'>{item?.title}</p>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-1'>{startArray}</div>
            <div className='border-[1px] bg-gray-800 text-white py-1 md:py-2 px-2 md:px-4 rounded-full text-xs sm:text-sm w-fit font-bold'>
              <p>{calculatePercent(item?.price, item?.oldPrice)}% off</p>   
            </div>
            
          </div>
        
          <div className='flex items-center justify-between'>
            <button className='bg-gray-700 text-white py-2 px-2 md:px-4 tracking-wide rounded-full hover:bg-black duration-500 transition-all text-[20px] md:text-[26px] flex items-center justify-center hover:scale-105 gap-2'>
              <BiCartAdd className=""/>
              <h1 className='hidden md:block text-sm font-bold'>Add To Cart</h1>
            </button>
            <div>
              <p className='text-slate-500 line-through text-sm'>
                <FormattedPrice amount={item?.oldPrice}/>
              </p>
              <p className='font-bold text-lg'>
                <FormattedPrice amount={item?.price}/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductsData
