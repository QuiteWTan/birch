import Banner from '@/components/Banner'
import Products from '@/components/Products';
import { getProduct } from '@/helpers'
import Image from 'next/image'

export default async function Home() {
  return (
    <main > 
     <Banner/>
     <Products/>
    </main>
  )
}
