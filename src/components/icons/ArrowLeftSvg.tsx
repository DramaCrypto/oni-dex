"use client";
import React, { FC } from 'react'

interface Props {
  className?: string
  width?: number
  height?: number
}

const ArrowLeftSvg: FC<Props> = (props) => {

  const { className, width, height } = props;

  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className={className} height={height} width={width}>
      <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
    </svg>
  )
}

export default ArrowLeftSvg
