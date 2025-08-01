"use client";
import React from 'react'
import { Carousel } from '@mantine/carousel';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';

export default function NewsCarouselCard({ data, rate = 'pb-[100%]' }) {
  const itemClass = 'w-full'

  return (
    <Carousel.Slide className={itemClass}>
    <Link href={`${data?.link}`}>
      <div className="w-full rounded-2xl flex items-center justify-center   bg-gradient-to-b from-[#D603AD] to-[#8228BF] p-[2px]">
        <div className={`relative bg-[#0F1021] w-full h-0 rounded-2xl overflow-hidden ${rate}`}>
          <div className='absolute w-full h-full left-0 top-0'>
            <ExportedImage
              src={data?.imgUrl}
              alt="background"
              className="w-full h-full object-cover"
              // @ts-ignore
              placeholder=""
            />
          </div>
          <div className='absolute w-full h-auto left-0 bottom-0'>
            <div className='w-full flex flex-col items-start p-1  bg-gradient-to-r from-[#351547] to-[#3e3e71]'>
              <span className='bg-gradient-to-r from-[#dd00ac] to-[#7130c3] px-5 rounded-full text-[#fff] text-[12px] uppercase'>{data?.type}</span>
              <div className='flex gap-5 p-1 px-5'>
                <p className="text-white line-clamp-2 text-[12px]">
                  {data?.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
    </Carousel.Slide>
  )
}
