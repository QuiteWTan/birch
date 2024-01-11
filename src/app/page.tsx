import Container from '@/components/Container';
import FifthSection from '@/components/landpage/FifthSection';
import FirstSection from '@/components/landpage/FirstSection';
import FourthSection from '@/components/landpage/FourthSection';
import SecondSection from '@/components/landpage/SecondSection';
import ThirdSection from '@/components/landpage/ThirdSection';


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
