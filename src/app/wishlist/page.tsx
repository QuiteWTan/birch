"use client"

import Container from '@/components/Container'
import React from 'react'
import { useSelector } from 'react-redux'
import { Product, StateProps } from '../../../type'
import ProductsData from '@/components/ProductsData'

const page = () => {
  const {wishlist } = useSelector((state:StateProps) => state.shopping)

  return (
    <div c>
      <Container className={'!p-6 bg-white rounded-md mt-4'}>
        <h2 className='text-xl md:text-3xl lg:text-5xl font-semibold mb-2'>Wishlist</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
          {
            wishlist?.map((item :Product) =>(
              <ProductsData item={item}/>
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default page
