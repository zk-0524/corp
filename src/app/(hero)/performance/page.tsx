import React from 'react'
import type { Metadata } from 'next'
import Hero from '@/components/hero'

export const metadata: Metadata = {
  title: 'Performance',
}

export default function Page() {
  return (
    <Hero imgUrl="/2.jpg" altTxt='Performance' content='my PerformanceSrc!'/>
  )
}
