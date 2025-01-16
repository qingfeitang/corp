import React from 'react'
import Hero from '@/components/hero'
import img from '../../../../public/scale.webp'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scale'
}
export default function page() {
  return (
    <div>
      <Hero imgUrl={img} altTxt='Scale' content='Scale'/>
    </div>
  )
}
