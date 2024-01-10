"use client"

import Container from '@/components/Container'
import { getSingleProduct, getTrendingProducts } from '@/helpers'
import React, { useEffect, useState } from 'react'
import { Product } from '../../../type';
import NewArrivalProductsData from '@/components/NewArrivalProductsData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import SingleProduct from '@/components/SingleProduct';
type Props = {
  searchParams : { [key:string] : string | string[] | undefined}
}

const ProductPage = ({searchParams}: Props) => {
    const _idString = searchParams?._id
    const _id = Number(_idString)
    const product = getSingleProduct(_id);

    const [productData, setProductData] = useState<Product[]>([]);
    const [slidesToShow, setSlidesToShow] = useState<number>(3);

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
      <div className='my-2'>
        <Container>
          <SingleProduct product={product}/>
          <div>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-rubik mt-8 mb-2'>
              <span className="text-blue-900">TRENDING PRODUCT DESIGNS </span>
                BY REAL ARTISTS
                <br />
                FOR REAL PEOPLE
            </h1>
            <Slider {...sliderSettings} className="flex gap-8 overflow-hidden">  
            {
                productData?.map((item: Product, index:number) => (
                    item?.isNew && <div key={index}><NewArrivalProductsData item={item} key={item._id} /></div>
                ))
            }
            </Slider>
          </div>
        </Container>
      </div>
    )
}

export default ProductPage
