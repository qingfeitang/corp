import React from 'react'
import Hero from '@/components/hero'
import img from '../../../../public/reliability.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reliability'
}
export default function page() {
  return (
    <div>
      <Hero imgUrl={img} altTxt='Reliability' content='Reliability'/>
    </div>
  )
}
