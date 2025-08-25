"use client";
import React, { FC } from 'react'
import clsx from 'clsx';
import { Box, Input } from '@mantine/core';

import TokenButton from './TokenButton'
import { IToken } from '@/types/common'

interface Props {
  className?: string
  handleOpenTokenModal: () => void
  value: number
  token: IToken
}

const SwapToInput: FC<Props> = (props) => {

  const { className, handleOpenTokenModal, value, token } = props

  const classes = clsx(
    'flex flex-col w-full justify-between rounded-[16px] md:rounded-[24px] md:px-[24px] pb-[12px] md:py-[16px] md:gap-[8px] border border-transparent hover:border-grey bg-[rgb(46,60,86)] transition min-h-[70px] gap-[4px] h-[90px]',
    className,
  )

  return (
    <Box className={classes}>
      <Box className='flex items-center justify-between pl-[16px] md:pl-0 mb-[4px]'>
        <Box className='flex flex-1'>
          <Input
            variant="unstyled"
            placeholder="0"
            type='number'
            w='100%'
            readOnly
            value={value}
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
    </Box>
  )
}

export default SwapToInput
