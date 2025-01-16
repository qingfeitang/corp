import React from 'react'
import Hero from '@/components/hero'
import img from '../../../../public/performance.webp'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Performance'
}
export default function page() {
  return (
    <div>
      <Hero imgUrl={img} altTxt='Performance' content='Performance'/>
    </div>
  )
}
