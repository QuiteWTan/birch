import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link
          href={"/"} className='text-2xl md:text-4xl font-semibold hover:text-gray-500 cursor-pointer duration-300 font-urbanist mx-2 md:mx-4 '>
        BIRCH.
    </Link>
  )
}

export default Logo
