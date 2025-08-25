import React, { FC } from 'react'
import clsx from 'clsx'
import { Box, Text, Tooltip } from '@mantine/core';
import ExportedImage from "next-image-export-optimizer";

import { INetwork } from '@/types/common'

interface Props {
  data: INetwork;
  isSelectted: boolean;
  onSelect: () => void;
}

const Network: FC<Props> = (props) => {
  const { data, isSelectted, onSelect } = props

  const classes = clsx(
    'w-full flex items-center justify-center cursor-pointer rounded-[16px] h-[40px] px-[8px] transition duration-200 whitespace-nowrap gap-[4px]',
    isSelectted ? 'bg-[rgba(77,186,214,0.8)]' : 'hover:bg-[#475875]'
  )

  return (
    <Tooltip label={data.name} classNames={{ tooltip: 'text-[12px]' }}>
      <Box className={classes} onClick={onSelect}>
        {
          data.logoURI && (
            <Box className='w-[20px] h-[20px] flex items-center justify-center rounded-full min-w-[20px]'>
              <ExportedImage src={data.logoURI} width={20} height={20} alt='Token' className='rounded-full' />
            </Box>
          )
        }
        <Text className='font-poppins text-light font-semibold text-[11px] leading-[18px] tracking-base text-ellipsis overflow-hidden'>
          {data.name}
        </Text>
      </Box>
    </Tooltip>
  )
}

export default Network
