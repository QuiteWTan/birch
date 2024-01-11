import React, { useEffect, useState } from 'react'
import { Product, StateProps } from '../../type'
import Image from 'next/image'
import FormattedPrice from './FormattedPrice'
import { BiCartAdd } from 'react-icons/bi'
import { CiBookmark } from "react-icons/ci";
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, addToWishlist, removeFromWishlist } from '@/redux/slicer'
import { isProductInWishlist } from '@/redux/selector'
import { FaBookmark } from "react-icons/fa";

const SingleProduct = ({product} : any) => {
    const { wishlist }  = useSelector((state:StateProps) => state.shopping);
    const dispatch = useDispatch()
    const [isWishlist, setIsWishlist] = useState(false);


    useEffect(() => {
        const checkWishlist = () => {
            const check = wishlist.find((item : Product) => item?._id === product?._id)
            if(check){
                setIsWishlist(true)
                toast.success("Removed from wishlist")
            }else{
                setIsWishlist(false)
                toast.success ("added to wishlist")
            }
        }
        checkWishlist()
    }, [wishlist])
    
    return (
        <div className='grid lg:grid-cols-2  gap-5 p-4 rounded-lg bg-white'>
            <div>
                <Image src={product?.image} alt='' width={500 } height={500} className='w-full max-h-[500px] md:max-h-[400px] object-cover rounded-lg'/>
            </div>
            <div className='flex flex-col  gap-y-4 md:gap-y-10'>
                <div className='font-urbanist'>
                    <p className='font-bold text-2xl md:text-3xl lg:text-5xl'>{product?.title}</p>
                    <p className='text-lg md:text-2xl lg:text-3xl mt-4 border-black border-2  px-4 py-2 rounded-full shadow-md w-fit'><FormattedPrice amount={product?.price}/>
                    </p>
                </div>
                <p className='text-gray-400  text-sm '>{product?.description}</p>
                <div className='text-sm text-gray-400 flex flex-col'>
                    <span>SKU: 
                        <span className='text-black font-bold'>{product?._id}
                    </span>
                    </span>
                    <span>Category: 
                        <span className='text-black font-bold'> {product?.category}</span>
                    </span>
                </div>
                <div className='flex items-center gap-2 md:gap-4'>
                    <button className='bg-gray-700 text-white py-2 px-2 md:py-3 md:px-4 tracking-wide rounded-sm hover:bg-black duration-500 transition-all text-[20px] md:text-[26px] flex items-center justify-center hover:scale-105 gap-2' onClick={ () => dispatch(addToCart(product) ) && toast.success(`${product?.title} added to cart`)}>
                        <BiCartAdd className=""/>
                        <h1 className='hidden md:block text-sm font-bold'>Add To Cart</h1>
                    </button>
                    {isWishlist ? (
                        <button className=' shadow-md border py-2 px-2 md:py-3 md:px-4 tracking-wide rounded-sm  duration-500 transition-all text-[20px] md:text-[26px] flex items-center justify-center hover:scale-105 gap-2' 
                        onClick={() => dispatch(removeFromWishlist(product))}>
                            <FaBookmark/>
                            
                            <h1 className='hidden md:block text-sm font-bold'>Added to Wishlist</h1>
                        </button>
                    ) : (
                        
                        <button className=' shadow-md border py-2 px-2 md:py-3 md:px-4 tracking-wide rounded-sm  duration-500 transition-all text-[20px] md:text-[26px] flex items-center justify-center hover:scale-105 gap-2' 
                        onClick={() =>  dispatch(addToWishlist(product))}>
                            <CiBookmark />
                            <h1 className='hidden md:block text-sm font-bold'>Wishlist</h1>
                        </button>
                    )}
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default SingleProduct
