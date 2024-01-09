"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Product, StateProps } from '../../type'
import Image from 'next/image'
import FormattedPrice from './FormattedPrice'
import { resetOrder } from '@/redux/slicer'
import Link from 'next/link'

const OrderDetails = () => {
    const dispatch = useDispatch()
    const {orderData} = useSelector((state:StateProps) => state?.shopping)
    const [totalAmount, setTotalAmount] = useState(0)
    useEffect(() => {
        let amount = 0;
        orderData?.order?.map((item:Product) => (
          amount += item.quantity * item.price
        ))
        setTotalAmount(amount)
      }, [orderData.order])
    return (
       <div>
            {
                orderData?.order?.length > 0 ?
                <div className='p-4 bg-white rounded-md font-urbanist'>
                <div className='grid grid-cols-7 uppercase text-sm font-medium py-2 border-b-[1px] border-b-gray-300'>
                    <p className='col-span-4'>Items</p>
                    <p className='flex items-center justify-center'>Quantity</p>
                    <p className='flex items-center justify-center'>Unit Price</p>
                    <p className='flex items-center justify-center'>Amount</p>
                </div>
                <div className='py-2 flex flex-col justify-center gap-2'>
                    {
                        orderData?.order?.map((item:Product) => (
                            <div key={item._id} className='py-2 border-b-[1xp] border-gray-400 grid grid-cols-7 items-center'>
                                <div className='col-span-4 flex items-center gap-2 text-sm'>
                                    <Image src={item?.image} alt='' width={500} height={500} className='w-12 h-12 object-cover'/>
                                    <div>
                                        <h3 className='text-base font-semibold'>{item?.title}</h3>
                                        <p>{item?.description}</p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center'>
                                    {item?.quantity}
                                </div>
                                <div className='flex items-center justify-center'>
                                    <FormattedPrice amount={item?.price}/>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <FormattedPrice amount={item?.price * item?.quantity}/>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='text-lg font-medium py-2 border-b-[1px] border-b-gray-300'>
                    <p>Payment Details</p>
                </div>
                <p className='my-2'>Total Paid : <span className='font-bold text-lg'><FormattedPrice amount={totalAmount}/></span></p>
                <button onClick={() => dispatch(resetOrder())} className='bg-black py-2 px-6 hover:bg-black/70 text-white duration-300 mt-4'>Reset Order</button>
            </div> 
            :
            <div className='flex flex-col gap-y-6 items-center justify-center bg-white h-96 px-4 w-full'>
                <h1 className=' w-fit p-2 flex text-center text-xl md:text-3xl  font-bold font-urbanist'>
                Your Order Page is Currently Empty
                </h1>
                <Link href={'/'}>
                <button className='bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-black/70 hover:text-white duration-300 '> Return To Shop</button>
                </Link>
            </div>
            }
       </div>
    )
}

export default OrderDetails
