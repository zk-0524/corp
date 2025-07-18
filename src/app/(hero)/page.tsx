import React from 'react';
import Hero from '@/components/hero'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <Hero imgUrl="/1.jpg" altTxt='Home' content='Welcome to my website!'/>
  )
}