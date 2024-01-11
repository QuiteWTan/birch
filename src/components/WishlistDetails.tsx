"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { Product, StateProps } from '../../type'
import ProductsData from './ProductsData'

const WishlistDetails = () => {
    const {wishlist } = useSelector((state:StateProps) => state.shopping)
  return (
    <div>
      <h2 className='text-xl md:text-3xl lg:text-5xl font-semibold mb-2'>Wishlist</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
          {
            wishlist?.map((item :Product) =>(
              <div key={item._id}>
                <ProductsData item={item} />
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default WishlistDetails
