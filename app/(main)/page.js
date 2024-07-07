import Image from "next/image";
import CarouselMain from "./components/CarouselMain";
import FirstSection from "./components/FirstSection";
import FirstScroll from "./components/FirstScroll";
import SecondSection from "./components/SecondSection";
import SecondScroll from "./components/SecondScroll";
import ReviewSection from "./components/ReviewSection";
import ReviewTable from "./components/ReviewTable";
import SlickSlider from "./components/SlickSlider";
import EmblaCarouselPage from "./components/EmblaCarousel";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
export default function Home() {
  const OPTIONS = { dragFree: true, loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = [
    {
      src: '/images/picture1.webp',
      alt: 'Picture 1'
    },
    {
      src: '/images/picture2.webp',
      alt: 'Picture 2'
    },
    {
      src: '/images/picture3.webp',
      alt: 'Picture 3'
    },
  ]
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <EmblaCarouselPage slides={SLIDES} options={OPTIONS} />

      {/* <CarouselMain></CarouselMain> */}
      <FirstSection></FirstSection>
      <FirstScroll></FirstScroll>
      <SecondSection></SecondSection>
      <SecondScroll></SecondScroll>

      <ReviewSection></ReviewSection>
    </div>
  );
}
