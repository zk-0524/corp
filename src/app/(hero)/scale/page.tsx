import React from 'react'
import type { Metadata } from 'next'
import Hero from '@/components/hero'


export const metadata: Metadata = {
  title: 'Scale'
}

export default function Page() {
  return (
    <Hero imgUrl="/4.jpg" altTxt='Scale' content='my Scale'/>
  )
}