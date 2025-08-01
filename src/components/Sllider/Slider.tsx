import React from 'react'
import { Carousel } from "@material-tailwind/react";

export default function Slider({items}) {
  return (
    // @ts-ignore
    <Carousel className="rounded-xl" autoplay loop>
      {items}
    </Carousel>
  )
}
