'use client'
import React, { useEffect, useState } from 'react'
import { ItemProps, Product, StateProps } from '../../type'
import Image from 'next/image'
import { calculatePercent } from '@/helpers'
import FormattedPrice from './FormattedPrice'
import { BiCartAdd } from "react-icons/bi";
import { FaStar, FaRegStar } from "react-icons/fa";
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { isProductInWishlist } from '@/redux/selector'
import { FaBookmark, FaRegBookmark  } from "react-icons/fa";
import { addToCart, addToWishlist, removeFromWishlist } from '@/redux/slicer'
import toast, { Toaster } from 'react-hot-toast'

const NewArrivalProductsData = ({item} : ItemProps) => {
    const dispatch = useDispatch();
    const { wishlist }  = useSelector((state:StateProps) => state.shopping);
    const [isWishlist, setIsWishlist] = useState(false);

    useEffect(() => {
        const checkWishlist = () => {
            const check = wishlist?.find((product : Product) => item?._id === product?._id)
            if(check){
                setIsWishlist(true)
            }else{
                setIsWishlist(false)
            }
        }
        checkWishlist()
    }, [])
    const startArray = Array.from({length: item?.rating}, (_, index) => (
        <span key={item._id}>
          <FaStar className="text-yellow-500 text-[16px] md:text-[18px]"/>
        </span>
    ))

      return (
        <Link href={{ pathname: "/product", query: { _id: item?._id } }} >
            <div className='md:min-w-[300px] md:max-w-[300px] rounded-lg overflow-hidden'>
                <div className='w-full h-56 md:h-80 group overflow-hidden relative'>
                    <Image src={item?.image} alt="" width={500} height={500} className="w-full h-full object-cover group-hover:scale-105 rounded-t-lg"/>
                    {
                    item?.isNew && <span className='absolute right-2 top-2 font-medium text-xs py-1 px-4 rounded-full bg-white group-hover:bg-white/50 duration-500 transition-all group-hover:text-yellow-700'>New Arrival</span>
                    }
                    {
                        isWishlist ? 
                        <div className='absolute top-2 left-2 text-[20px] md:text-[25px]'>
                            <FaBookmark/>
                        </div>
                        :
                        <div className='absolute top-2 left-2 text-[20px] md:text-[25px]'>
                            <FaRegBookmark/>
                        </div>
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
                        <button onClick={ () => dispatch(addToCart(item) ) && toast.success(`${item?.title} added to cart`)} className='bg-gray-700 text-white py-2 px-2 md:px-4 tracking-wide rounded-full hover:bg-black duration-500 transition-all text-[20px] md:text-[26px] flex items-center justify-center gap-2'>
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
            <Toaster/>
        </Link>
      )
}

export default NewArrivalProductsData
