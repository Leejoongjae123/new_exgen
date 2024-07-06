"use client";

import React, { useEffect, useState, useRef } from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { Icon } from "@iconify/react";

import CardReview from "./card-review";
import reviews from "./reviews";

export default function ReviewSection() {
  return (
    <section
      className="w-[80vw] md:w-[80vw] my-5 flex flex-col flex-center items items-center"
    >
      <header className="w-full flex-col flex  mb-8 items-center justify-between gap-4 md:px-2">
        <div className="flex justify-around items-center gap-2">
          <h1 className="text-medium font-semibold md:text-large">Reviews</h1>
          <div className="flex items-center gap-1">
            <Icon
              className="text-warning-500"
              icon="solar:star-bold"
              width={20}
            />
            <span className="text-medium font-semibold md:text-large">4.4</span>
            <span className="text-right text-small text-default-500 lg:text-medium">
              (Based on {reviews.length} reviews)
            </span>
          </div>
        </div>
        <div className=" flex w-full items-center justify-center gap-4">
          <Input
            fullWidth
            aria-label="Search"
            className="w-72"
            labelPlacement="outside"
            placeholder="Search reviews"
            startContent={<Icon icon="solar:magnifer-linear" />}
          />

          <Select
            aria-label="Sort by"
            className="w-40"
            defaultSelectedKeys={["most_recent"]}
            labelPlacement="outside"
          >
            <SelectItem key="most_recent" value="most_recent">
              Most recent
            </SelectItem>
            <SelectItem key="most_helpful" value="most_helpful">
              Most helpful
            </SelectItem>
            <SelectItem key="highest_rating" value="highest_rating">
              Highest rating
            </SelectItem>
          </Select>
        </div>
      </header>
      <div className="w-full flex flex-col gap-4">
        {reviews.map((review, index) => (
          <CardReview key={index} {...review} />
        ))}
      </div>
    </section>
  );
}
