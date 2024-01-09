"use client"

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StateProps } from '../../../type'
import Container from '@/components/Container'
import CartItem from '@/components/CartItem'
import { resetCart } from '@/redux/slicer'
import PaymentForm from '@/components/PaymentForm'
import Link from 'next/link'

const CartPage = () => {
  const {productData} = useSelector((state:StateProps) => state.shopping)
  const dispatch = useDispatch();
  return (
    <Container>
        {
          productData.length > 0 ? 
          <Container>
            <h2 className='text-xl md:text-3xl lg:text-5xl font-semibold mb-2'> Cart</h2>
            <div>
              <CartItem/>
              <div className='flex items-center justify-end mt-2'>
                <button onClick={() => dispatch(resetCart())} className='bg-red-500 text-base font-semibold text-slate-100 py-2 px-6 hover:bg-red-700 hover:text-white duration-300 transition-all'>Drop Cart</button>
              </div>
              <PaymentForm/>
            </div>
          </Container>
          : 
          <div className='flex flex-col gap-y-6 items-center justify-center bg-white h-96 px-4 w-full'>
            <h1 className=' w-fit p-2 flex text-center text-xl md:text-3xl  font-bold font-urbanist'>
              Your Product Cart is Currently Empty
            </h1>
            <Link href={'/'}>
              <button className='bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-black/70 hover:text-white duration-300 '> Return To Shop</button>
            </Link>
          </div>
        }
        
    </Container>
  )
}

export default CartPage
