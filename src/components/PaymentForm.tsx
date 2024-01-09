import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Product, StateProps } from '../../type'
import FormattedPrice from './FormattedPrice'

const PaymentForm = () => {
    const {productData, userInfo} = useSelector((state:StateProps) => state?.shopping)
    const [totalAmount, setTotalAmount] = useState(0)
    useEffect(() => {
        let amount = 0;
        productData?.map((item:Product) => (
        amount += item.quantity * item.price
        ))
        setTotalAmount(amount)
    }, [productData])
    return (
        <div className='bg-white p-4 mt-2 rounded-md '>
            <h1 className='text-lg md:text-xl lg:text-2xl font-bold'>Cart Totals</h1>
            <div className='border-b-[1px] border-b-slate-300 py-2 flex flex-col gap-3'>
                <div className='max-w-lg flex items-center justify-between'>
                    <p className='uppercase font-medium'>Subtotal</p>
                    <p><FormattedPrice amount={totalAmount}/></p>
                </div>
                <div className='max-w-lg flex items-center justify-between'>
                    <p className='uppercase font-medium'>Shipping</p>
                    <p><FormattedPrice amount={20}/></p>
                </div>
                <div className='max-w-lg flex items-center justify-between'>
                    <p className='uppercase font-medium'>Total Price</p>
                    <p><FormattedPrice amount={totalAmount + 20}/></p>
                </div>              
            </div>
            {
                userInfo ? 
                <button className='bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-black/70 hover:text-white duration-300 '>Proceed to Checkout</button>
                : 
                <div>
                    <button className='bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-black/70 cursor-not-allowed hover:text-white duration-300 '>Proceed to Checkout</button>
                    <p className='text-red-500 mt-1 font-semibold animate-pulse'>Please login to continue</p>
                </div>
            }
        </div>
    )
}

export default PaymentForm
