import React from "react";

import ProductListItem from "./product-list-item";
import products from "./products";

const popularProducts = products.slice(0, 4).map((product, index) => ({
  ...product,
  isNew: index % 2 === 0,
  isPopular: true,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, augue eget cursus mattis.",
}));

export default function FirstScroll() {
  return (
    <div className="flex w-[80vw] flex-col gap-2 justify-center items-center animate-fadeIn">
      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {popularProducts.map((product) => (
          <ProductListItem key={product.id} {...product} className="w-full" />
        ))}
      </div>
    </div>
  );
}
