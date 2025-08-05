"use client";
import React, { FC } from 'react'

interface Props {
  className?: string
  width?: number
  height?: number
}

const SwapSettingSvg: FC<Props> = (props) => {

  const { className, width, height } = props;

  return (
    <svg id="nav-icon-settings" width={width} height={height} stroke="currentColor" fill="none" viewBox="0 0 18 18" className={className}>
      <g>
        <path d="M4 3H2C1.44772 3 1 3.44772 1 4V7C1 7.55228 1.44772 8 2 8H4C4.55228 8 5 7.55228 5 7V4C5 3.44772 4.55228 3 4 3Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M3 1V3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M3 11V17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M10 11H8C7.44772 11 7 11.4477 7 12V15C7 15.5523 7.44772 16 8 16H10C10.5523 16 11 15.5523 11 15V12C11 11.4477 10.5523 11 10 11Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M9 1V8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M9 16V17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M16 2H14C13.4477 2 13 2.44772 13 3V7C13 7.55228 13.4477 8 14 8H16C16.5523 8 17 7.55228 17 7V3C17 2.44772 16.5523 2 16 2Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M15 1V2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M15 11V17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </g>
    </svg>
  )
}

export default SwapSettingSvg
