import React from 'react'
import type { Metadata } from 'next'
import Hero from '@/components/hero'

export const metadata: Metadata = {
  title: 'Reliability',
}

export default function Page() {
  return (
    <Hero imgUrl="/3.jpg" altTxt='Reliability' content='my Reliability'/>
  )
}