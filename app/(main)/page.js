import Image from "next/image";
import CarouselMain from "./components/CarouselMain";
import FirstSection from "./components/FirstSection";
import FirstScroll from "./components/FirstScroll";
import SecondSection from "./components/SecondSection";
import SecondScroll from "./components/SecondScroll";
import ReviewSection from "./components/ReviewSection";
import ReviewTable from "./components/ReviewTable";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <CarouselMain></CarouselMain>
      <FirstSection></FirstSection>
      <FirstScroll></FirstScroll>
      <SecondSection></SecondSection>
      <SecondScroll></SecondScroll>
      {/* <ReviewTable></ReviewTable> */}
      <ReviewSection></ReviewSection>
    </div>
  );
}
