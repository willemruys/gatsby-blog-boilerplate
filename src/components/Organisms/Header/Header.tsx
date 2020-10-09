import React from "react"
import { Heading } from "rebass"
import { Hero, ScrollDownIndicator } from "react-landing-page"

export interface HeaderProps {
  backGroundImage: string
  color: string
}

export const Header = () => {
  return (
    <Hero
      color="black"
      bg="grey"
      backgroundImage="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
    >
      <Heading>Name</Heading>
      <ScrollDownIndicator />
    </Hero>
  )
}
