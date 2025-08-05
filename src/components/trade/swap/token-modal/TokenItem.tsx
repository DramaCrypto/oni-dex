import React, { FC } from 'react'
import clsx from 'clsx'
import { Box, Text } from '@mantine/core';
import ExportedImage from "next-image-export-optimizer";

import { ITokenItem } from '@/types/common'

interface Props {
  data: ITokenItem;
  isSelectted: boolean;
  onSelect: () => void;
}

const TokenItem: FC<Props> = (props) => {
  const { data, isSelectted, onSelect } = props

  const classes = clsx(
    'w-full flex items-center justify-center cursor-pointer rounded-[16px] h-[40px] px-[8px] transition duration-200 whitespace-nowrap gap-[4px]',
    isSelectted ? 'bg-[rgba(77,186,214,0.8)]' : 'hover:bg-[#475875]'
  )

  return (
    <Box className={classes} onClick={onSelect}>
      {
        data.icon && (
          <Box className='w-[20px] h-[20px] flex items-center justify-center rounded-full'>
            <ExportedImage src='https://storage.googleapis.com/token-list-swapkit-dev/images/arb.arb-0x912ce59144191c1204e64559fe8253a0e49e6548.png' width={20} height={20} alt='Token' className='rounded-full' />
          </Box>
        )
      }
      <Text className='font-poppins text-light font-semibold text-[11px] leading-[18px] tracking-base'>
        {data.name}
      </Text>
    </Box>
  )
}

export default TokenItem
