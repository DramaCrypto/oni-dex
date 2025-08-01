
"use client";

import React from 'react'
import { Carousel } from '@mantine/carousel';

export default function CustomCarousel({items}) {
    const itemClass = 'w-full'
    return (
        <Carousel
            withIndicators
            height={'auto'}
            slideSize="100%"
            // slideSize={{ base: '100%', sm: '50%', md: '20%' }}
            slideGap={{ base: 0, sm: 'md' }}
            loop
            align="start"
            className='w-full carousel1'
            controlSize={42}
            nextControlIcon={<i className="fas fa-chevron-right text-[#ccc] text-[20px]"></i>}
            previousControlIcon={<i className="fas fa-chevron-left text-[#ccc] text-[20px]"></i>}
        >
            {items}
        </Carousel>
    )
}
