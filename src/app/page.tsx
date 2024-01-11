import Banner from '@/components/Banner'
import Container from '@/components/Container';
import NewArrivalProducts from '@/components/NewArrivalProducts';
import Products from '@/components/Products';
import FifthSection from '@/components/landpage/FifthSection';
import FirstSection from '@/components/landpage/FirstSection';
import FourthSection from '@/components/landpage/FourthSection';
import SecondSection from '@/components/landpage/SecondSection';
import ThirdSection from '@/components/landpage/ThirdSection';
import Image from 'next/image'

export default async function Home() {

  return (
    <main > 
        <Container className={' rounded-md overflow-hidden mt-4'}>
          <FirstSection/>
          <SecondSection/>
          <ThirdSection/>
          <FourthSection/>
          <FifthSection/>
        </Container>
    </main>
  )
}
