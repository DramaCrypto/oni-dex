"use client";
import React, { FC } from 'react'

interface Props {
  className?: string
  width?: number
  height?: number
}

const ConnectSvg: FC<Props> = (props) => {

  const { className, width, height } = props;

  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className={className} height={height} width={width}>
      <path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z"></path>
      <path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z"></path>
      <path d="M3 21l2.5 -2.5"></path>
      <path d="M18.5 5.5l2.5 -2.5"></path>
      <path d="M10 11l-2 2"></path>
      <path d="M13 14l-2 2"></path>
    </svg>
  )
}

export default ConnectSvg
