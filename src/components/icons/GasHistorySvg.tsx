"use client";
import React, { FC } from 'react'

interface Props {
  className?: string
  width?: number
  height?: number
}

const CasHistorySvg: FC<Props> = (props) => {

  const { className, width, height } = props;

  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height={height ?? 24} width={width ?? 24} className={className}>
      <path d="M15 11a2 2 0 0 1 2 2m3 3v-7l-3 -3"></path>
      <path d="M4 20v-14c0 -.548 .22 -1.044 .577 -1.405m3.423 -.595h4a2 2 0 0 1 2 2v4m0 4v6"></path>
      <path d="M3 20h12"></path>
      <path d="M18 7v1a1 1 0 0 0 1 1h1"></path>
      <path d="M4 11h7"></path>
      <path d="M3 3l18 18"></path>
    </svg>
  )
}

export default CasHistorySvg
