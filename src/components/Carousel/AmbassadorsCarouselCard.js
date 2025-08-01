"use client";
import Link from 'next/link';
import React from 'react'
import starBadge from "@/assets/icons/star_01.svg";
import { Carousel } from '@mantine/carousel';
export default function AmbassadorsCarouselCard({ data }) {
  const itemClass = 'w-full'

  return (
    <Carousel.Slide className={itemClass}>
      <div className="relative px-10 z-[2] w-full">
        <div className="w-full flex flex-col items-center justify-center gap-5 mb-5">
          <div className="w-[90%] p-[6px] rounded-full overflow-hidden bg-[#4068CB55]">
            <div
              className="p-[4px] rounded-full overflow-hidden"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #21135A 0%, #7064E9 22.5%, #4729C0 84%, #0F1021 100%)",
              }}
            >
              <Link href={data.link2} target="_blank" className=" ">
                <img
                  src={data.imgUrl}
                  alt=""
                  className="w-full h-full rounded-full "
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center justify-cetner">
            <Link href={data.link1} target="_blank" className=" ">
              <h4 className="flex text-white w-600 text-center whitespace-nowrap">
                {data.name} <img src={starBadge.src} alt="" className="ml-3" />
              </h4>
            </Link>

            <p className="">{data.followers}</p>
            <p className="text-center text-[13px]">{data.desc}</p>
            <Link
              href={data.link2}
              target="_blank"
              className=" whitespace-nowrap text-[13px] underline hover:underline hover:text-[#EA04D8]"
            >
              official announcement
            </Link>
          </div>
        </div>
        <div
          className="w-full h-[24px]"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #8228BF 0%, rgba(47, 22, 82, 0) 100%)",
          }}
        ></div>
      </div>
    </Carousel.Slide>
  )
}
