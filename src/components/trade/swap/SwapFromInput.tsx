"use client";
import React, { FC } from 'react'
import clsx from 'clsx';
import { Box, Text, Input } from '@mantine/core';

import TokenButton from './TokenButton'
import { IToken } from '@/types/common'

interface Props {
  className?: string
  handleOpenTokenModal: () => void
  value: number
  onChange: (val: string) => void
  token: IToken
}

const SwapFromInput: FC<Props> = (props) => {

  const { className, handleOpenTokenModal, value, onChange, token } = props

  const classes = clsx(
    'flex flex-col w-full justify-between rounded-[16px] md:rounded-[24px] md:px-[24px] pb-[12px] md:py-[16px] md:gap-[8px] border border-transparent hover:border-grey bg-[rgb(46,60,86)] transition min-h-[70px] gap-[4px] h-[100px]',
    className,
  )

  return (
    <Box className={classes}>
      <Box className='flex items-center justify-between pl-[16px] md:pl-0 mb-[4px]'>
        <Box className='flex flex-1'>
          <Input
            value={value}
            variant="unstyled"
            placeholder="0"
            type='number'
            onChange={(e) => onChange(e.target.value)}
            w='100%'
            sx={{
              marginLeft: -4,
              input: {
                height: 32,
                fontSize: 24,
                lineHeight: '32px',
                color: 'rgb(226,235,251)',
                fontFamily: 'Poppins, sans-serif',
              },
            }}
          />
        </Box>
        <Box className='m-[8px] md:m-0'>
          <TokenButton token={token} onClick={handleOpenTokenModal} />
        </Box>
      </Box>
      <Box className='flex items-center justify-between pl-[16px] md:pl-0'>
        <Box className="flex min-h-[21px]">
          <Text className="text-[14px] font-poppins leading-[21px] tracking-base text-grey-75 font-semibold">
            {`$${value * 1000}`}
          </Text>
        </Box>
        <Box className='flex flex-end flex-1 justify-end pr-[8px] md:pr-0'>
          <Box className='cursor-pointer h-[20px] px-[6px] flex items-center justify-cener leading-[1.2] px-[6px] border border-[rgb(70,178,167)] rounded-[16px] hover:bg-[rgba(70,178,167,0.2)]'>
            <Text className='font-poppins text-[rgb(226,235,251)] font-bold text-[11px] leading-none tracking-[0.03em]'>
              Max
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SwapFromInput
