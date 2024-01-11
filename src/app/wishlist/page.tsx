import Container from '@/components/Container'
import WishlistDetails from '@/components/WishlistDetails'
import React from 'react'

const page = () => {

  return (
    <div>
      <Container className={'!p-6 bg-white rounded-md mt-4'}>
        <WishlistDetails/>
      </Container>
    </div>
  )
}

export default page
