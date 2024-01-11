"use client"
import {getTrendingProducts } from '@/helpers';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { HiArrowTrendingUp } from "react-icons/hi2";
import { Product } from '../../../type';

const ThirdSection = () => {
    const [productDatas, setProductData] = useState<Product[]>([]);
    const [imagesToShow, setImagesToShow] = useState<number>(0);
    const showImage = (index:number)=> {
        setImagesToShow(index)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { trendingProducts } = await getTrendingProducts();
                setProductData(trendingProducts);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchData();
    }, [productDatas]);
    
    return (
        <div className='my-6 px-8 gap-1'>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-rubik mt-8 mb-2'>
                <span className="text-red-500">NEW ARRIVAL DESIGNS </span>
                BY REAL ARTISTS
                <br />
                FOR REAL PEOPLE
            </h1>
            <p className=' text-gray-400 font-urbanist pb-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
            </p>
            <div className='flex w-full mt-6 h-[500px] gap-1 font-urbanist'>
                {
                    productDatas?.slice(0, 3).map((item:Product, index:number) => (
                        
                        <div className={`${imagesToShow === index ? 'w-[50%]' : 'w-[25%]'} relative h-full duration-300 transition-all overflow-hidden`}>
                            <div className='w-full'>
                                <Image src={item?.image} alt='' width={500} height={500} className=' h-[500px] absolute object-cover rounded-lg w-full'/>
                            </div>
                            
                            <h1 className={` ${imagesToShow === index ? 'block' : 'hidden md:block'} absolute top-2 left-2 bg-white py-2 px-6 font-bold rounded-lg`}>{item?.category}</h1>
                            <div className='w-full absolute bottom-0 bg-black/20 backdrop-blur-2xl p-4 text-white flex flex-col gap-4'>

                                <h1 className={`${imagesToShow === index ? 'block' : 'hidden md:block'} text-sm md:text-2xl lg:text-3xl font-bold `}>{item?.title}</h1>
                                <p className={`${imagesToShow === index ? 'block' : 'hidden'} text-xs sm:text-sm`}>{item?.description}</p>
                                <button className={`${imagesToShow === index ? 'block' : 'hidden md:block'} bg-white py-2 w-full items-center text-[12px] md:text-[20px] text-black justify-between rounded-full font-bold gap-4 px-2 md:px-6 hidden md:flex `}>
                                    Interested ?
                                    <HiArrowTrendingUp className={`${imagesToShow === index ? 'block' : 'hidden'}`}/>
                                </button>
                            </div>
                            {
                                imagesToShow === index ?
                                null
                                :
                                <div onClick={() => showImage(index)} className='bg-white text-black text-[25px] absolute top-2 right-2 rounded-full p-3'>
                                    <HiArrowTrendingUp />
                                </div>
                            }
                        </div> 
                    ))
                }
            </div>
        </div>
    )
}

export default ThirdSection
