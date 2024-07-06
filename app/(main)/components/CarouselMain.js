"use client";
import { useRef, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Image } from "@nextui-org/react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselMain() {
  const plugin = useRef(Autoplay({ delay: 1000, stopOnInteraction: true }));
  const images = [
    {
      image: "/images/picture1.webp",
    },
    {
      image: "/images/picture2.webp",
    },
    {
      image: "/images/picture3.webp",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="flex w-full h-1/2 justify-center items-center mt-5"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-[80vw]">
        {images.map((elem, index) => (
          <CarouselItem className="w-full" key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex w-full items-center justify-center p-6">
                  <Image
                    width={300}
                    alt="NextUI hero Image"
                    src={elem.image}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
