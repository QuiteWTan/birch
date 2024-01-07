import Banner from '@/components/Banner'
import NewArrivalProducts from '@/components/NewArrivalProducts';
import Products from '@/components/Products';
import Image from 'next/image'

export default async function Home() {
  return (
    <main > 
     <Banner/>
      <NewArrivalProducts/>
     <Products/>
    </main>
  )
}
