import { getSingleProduct } from '@/helpers'
import React from 'react'

type Props = {
  searchParams : { [key:string] : string | string[] | undefined}
}

const ProductPage = ({searchParams}: Props) => {
    const _idString = searchParams?._id
    const _id = Number(_idString)
    const product = getSingleProduct(_id);
    
    return (
      <div>
        Test
      </div>
    )
}

export default ProductPage
