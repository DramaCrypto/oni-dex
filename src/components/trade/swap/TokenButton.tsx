"use client";
import React, { FC } from 'react'
import { Box, Text } from '@mantine/core';
import ExportedImage from "next-image-export-optimizer";

import { ChevronDownSvg } from '@/components/icons'
import ethImg from '@/assets/image/tokens/eth.eth.png'

interface Props {
  onClick: () => void
}

const TokenButton: FC<Props> = (props) => {

  const { onClick } = props

  return (
    <Box className='bg-[rgb(39,56,85)] rounded-full h-[40px] hover:bg-[rgb(71,88,117)] transition px-[4px] flex items-center justify-center gap-[10px] cursor-pointer'
      onClick={onClick}
    >
      <Box className='w-[28px] h-[28px]'>
        <ExportedImage src={ethImg.src} alt='Token' width={28} height={28} />
      </Box>
      <Box>
        <Text className='text-[rgb(226,235,251)] font-medium text-[17px] leading-[20px] tracking-[-0.01em] font-poppins uppercase'>
          ETH
        </Text>
        <Text className='text-grey, text-[11px] tracking-[0.03em] uppercase leading-[16px] font-poppins'>
          Native
        </Text>
      </Box>
      <ChevronDownSvg width={24} height={24} className='text-[rgb(226,235,251)]' />
    </Box>
  )
}

export default TokenButton
