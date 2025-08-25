"use client";
import React, { FC } from 'react'
import { Box, Text } from '@mantine/core';
import ExportedImage from "next-image-export-optimizer";

import { IToken } from '@/types/common'
import { ChevronDownSvg } from '@/components/icons'

interface Props {
  onClick: () => void
  token: IToken
}

const TokenButton: FC<Props> = (props) => {

  const { onClick, token } = props

  return (
    <Box className='bg-[rgb(39,56,85)] rounded-full h-[40px] hover:bg-[rgb(71,88,117)] transition px-[4px] flex items-center justify-center gap-[10px] cursor-pointer'
      onClick={onClick}
    >
      <Box className='w-[28px] h-[28px]'>
        {
          token.logoURI && (
            <ExportedImage src={token.logoURI} alt='Token' width={28} height={28} className='rounded-full' />
          )
        }
      </Box>
      <Box>
        <Text className='text-[rgb(226,235,251)] font-medium text-[17px] leading-[20px] tracking-[-0.01em] font-poppins uppercase'>
          {token.ticker}
        </Text>
        <Text className='text-grey, text-[11px] tracking-[0.03em] uppercase leading-[16px] font-poppins'>
          {token.chain}
        </Text>
      </Box>
      <ChevronDownSvg width={24} height={24} className='text-[rgb(226,235,251)]' />
    </Box>
  )
}

export default TokenButton
