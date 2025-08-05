"use client";
import React, { FC } from 'react'

interface Props {
  className?: string
  width?: number
  height?: number
}

const EditSvg: FC<Props> = (props) => {

  const { className, width, height } = props;

  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className={className} height={width} width={height}>
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
  )
}

export default EditSvg
