"use client";
import React, { FC } from 'react'

interface Props {
  className?: string
  width?: number
  height?: number
}

const ChevronDownSvg: FC<Props> = (props) => {

  const { className, width, height } = props;

  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className={className} height={height} width={width}>
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  )
}

export default ChevronDownSvg
