import React from 'react'
import homeSrc from '../../../public/home.webp'
import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home'
}
export default function page() {
  return (
    <Hero imgUrl={homeSrc} altTxt='Home' content='Welcome to our website'/>
  )
}
