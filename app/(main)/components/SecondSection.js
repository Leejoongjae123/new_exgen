import React from "react";
import {Link} from "@nextui-org/react";
export default function SecondSection() {
  return (
    <section class="bg-white dark:bg-gray-900 my-5">
      <div class="px-4 mx-auto max-w-screen-xl text-center lg:px-12">
        
        <Link href='https://www.naver.com' target="_blank">
        <h1 class="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-4xl dark:text-white">
          이벤트
        </h1>
        </Link>
        
      </div>
    </section>
  );
}