import React from 'react'
import Image, { StaticImageData } from 'next/image';

interface IProps {
  imgUrl: string | StaticImageData;
  altTxt: string;
  content: string;
}

export default function Hero(props: IProps) {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image src={props.imgUrl} fill style={{ objectFit: 'cover' }} alt={props.altTxt}/>
        <div className="absolute inset-0 bg-gradient-to-t from-black-950 to-sky-300"></div>
      </div>
      <div className="flex justify-center pt-40">
        <h1 className="text-5xl text-white">{props.content}</h1>
      </div>
    </div>
  )
}