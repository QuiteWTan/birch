"use client"

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Product, StateProps } from '../../type'
import Image from 'next/image'
import { FaTrashAlt } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { decreaseQuantity, deleteProduct, increaseQuantity } from '@/redux/slicer'
import FormattedPrice from './FormattedPrice'


const CartItem = () => {
  const { productData } = useSelector((state:StateProps) => state?.shopping)
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col gap-y-2 '>
      <div className='hidden lg:inline-flex items-center justify-between font-semibold bg-white p-2'>
        <p className='w-1/3'>Product</p>
        <p className='w-1/3 flex items-center justify-center'>Quantity</p>
        <p className='w-1/3 flex items-center justify-end'>Subtotal</p>
      </div >
      <div className='flex flex-col gap-y-2'>
        {
            productData?.map((item: Product) => (
              <div key={item._id} className='w-full bg-white p-4 flex flex-col md:flex-row items-center justify-between gap-4'>
                <div className='flex items-center gap-x-3 w-full md:w-1/3'>
                  <span className='text-[20px] md:text-[24px] hover:text-red-600 cursor-pointer duration-500' onClick={() => dispatch(deleteProduct(item?._id))}>
                    <FaTrashAlt />
                  </span>
                  <Image src={item?.image} width={500} height={500} alt='' className='w-20 h-20 object-cover' loading='lazy'/>
                </div>
                  <div className='flex items-center justify-start gap-x-1  w-fit md:w-auto text-lg'>
                    <span onClick={() => dispatch(decreaseQuantity(item))} className='cursor-pointer p-2 bg-black text-white'>
                      <FaMinus/>
                    </span>
                    <span className='px-4 py-2 border-[2px] border-black rounded-md'>{item?.quantity}</span>
                    <span onClick={() => dispatch(increaseQuantity(item))} className='cursor-pointer p-2 bg-black text-white'>
                      <FaPlus/>
                    </span>
                </div>
                <div className='w-full md:w-1/3 flex items-end justify-start md:justify-end'>
                  <p className='text-lg font-bold '>
                    <FormattedPrice amount={item?.quantity *item?.price}/>
                  </p>
                </div>
              </div>
            ))
          }
      </div>  
    </div>
  )
}

export default CartItem;
