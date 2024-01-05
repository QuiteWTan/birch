import { getProduct } from '@/helpers';
import React from 'react'

const Products = async () => {
    const products = await getProduct();
  return (
    <div>
      
    </div>
  )
}

export default Products
