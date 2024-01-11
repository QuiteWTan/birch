import Banner from '@/components/Banner'
import NewArrivalProducts from '@/components/NewArrivalProducts'
import Products from '@/components/Products'
import React from 'react'

const HomePage = () => {
  return (
    <main > 
     <Banner/>
      <NewArrivalProducts/>
     <Products/>
    </main>
  )
}

export default HomePage
