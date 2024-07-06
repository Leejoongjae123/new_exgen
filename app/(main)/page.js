import Image from 'next/image'
import CarouselMain from './components/CarouselMain';
import FirstSection from './components/FirstSection';
import FirstScroll from './components/FirstScroll';
import SecondSection from './components/SecondSection';
import SecondScroll from './components/SecondScroll';
import ReviewSection from './components/ReviewSection';

export default function Home() {
  return (
    <div className='w-full'>
      <CarouselMain></CarouselMain>
      <FirstSection></FirstSection>
      <FirstScroll></FirstScroll>
      <SecondSection></SecondSection>
      <SecondScroll></SecondScroll>
      <ReviewSection></ReviewSection>
    </div>
  )
}
