"use client";
import React, { FC } from 'react'

interface Props {
  className?: string
  width?: number
  height?: number
}

const CloseSvg: FC<Props> = (props) => {

  const { className, width, height } = props;

  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className={className} height={height} width={width}>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  )
}

export default CloseSvg
