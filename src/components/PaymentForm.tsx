import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Product, StateProps } from '../../type'
import FormattedPrice from './FormattedPrice'
import { loadStripe } from '@stripe/stripe-js'
import { useSession } from 'next-auth/react'
import { resetCart, resetOrder, saveOrder } from '@/redux/slicer'
import toast, { Toaster } from 'react-hot-toast'

const PaymentForm = () => {
    const dispatch = useDispatch();
    const {productData, userInfo} = useSelector((state:StateProps) => state?.shopping)
    const [totalAmount, setTotalAmount] = useState(0)
    useEffect(() => {
        let amount = 0;
        productData?.map((item:Product) => (
        amount += item.quantity * item.price
        ))
        setTotalAmount(amount)
    }, [productData])

    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
    const {data:session} = useSession();
    const handleCheckout = async() => {
        const stripe = await stripePromise;
        const response = await fetch("http://localhost:3000/api/checkout", {
            method:"POST",
            headers:{"Content-Type" : "application/json"},
            body:JSON.stringify({
                items: productData,
                email: session?.user?.email
            })
        })
        const data = await response.json()

        if(response.ok){
            await dispatch(saveOrder({order:productData, id: data.id}))
            stripe?.redirectToCheckout({ sessionId: data.id})
            dispatch(resetCart())
        }else{
            toast.error("Failed Checkout")
        }
    }

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
                <button onClick={handleCheckout} className='bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-black/70 hover:text-white duration-300 '>Proceed to Checkout</button>
                : 
                <div>
                    <button className='bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-black/70 cursor-not-allowed hover:text-white duration-300 '>Proceed to Checkout</button>
                    <p className='text-red-500 mt-1 font-semibold animate-pulse'>Please login to continue</p>
                </div>
            }
            <Toaster/>
        </div>
    )
}

export default PaymentForm
