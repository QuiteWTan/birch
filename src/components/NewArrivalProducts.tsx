"use client"

import { getProducts } from "@/helpers";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import { Product } from "../../type";
import { motion } from "framer-motion";
import NewArrivalProductsData from "./NewArrivalProductsData";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const NewArrivalProducts = () => {
    const [productData, setProductData] = useState<Product[]>([]);
    const [slidesToShow, setSlidesToShow] = useState<number>(3);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { productData } = await getProducts();
                setProductData(productData);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchData();

        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth < 768) {
                setSlidesToShow(2);
            } else if (screenWidth < 1024) {
                setSlidesToShow(3);
            } else {
                setSlidesToShow(4);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        margin: 4
    };

    return (
        
      <Container>
        <h1 className='text-2xl md:text-3xl lg:text-5xl font-rubik mt-8 mb-2'>
            <span className="text-red-500">NEW ARRIVAL DESIGNS </span>
              BY REAL ARTISTS
              <br />
              FOR REAL PEOPLE
        </h1>
        <p className=' text-gray-400 font-urbanist pb-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </p>
        
        <Slider {...sliderSettings} className="flex gap-4 overflow-hidden">  
            {
                productData?.map((item: Product, index:number) => (
                    item?.isNew && <div key={index}><NewArrivalProductsData item={item}/></div>
                ))
            }
        </Slider>
      </Container>
    );
}

export default NewArrivalProducts
