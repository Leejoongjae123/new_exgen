'use client'
import React from "react";
import { Button,Image,Link } from "@nextui-org/react";
import Script from 'next/script'

function FloatingButton() {
  return (
    <div className="fixed bottom-5 right-5">
      <Link href='https://channel.io/ko?utm_source=google&utm_medium=cpc&utm_campaign=common&utm_content=%EC%B1%84%ED%8C%85%20%EC%86%94%EB%A3%A8%EC%85%98&utm_term=&gad_source=1&gclid=Cj0KCQjw1qO0BhDwARIsANfnkv-vyo2XmhEcNTYZR1p6uv_Hh6tTRabj1ihP6Mm-BCkV__X09jZd5LsaAlHqEALw_wcB'>
      <Image src="/images/channeltalk.png" alt="채널톡" width={50} height={50}></Image>
      </Link>
    </div>
  )

}

export default FloatingButton;
