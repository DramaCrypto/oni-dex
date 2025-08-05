import React, { FC } from 'react'
import { Box, Text, Tooltip } from '@mantine/core';

import { RoundedInfoSvg } from '@/components/icons'

interface Props {
  value: string;
  children: React.ReactNode;  
  description: string
}

const FeeDetailLine: FC<Props> = (props) => {

  const { value, children, description } = props

  return (
    <Box className='flex items-center gap-[16px] justify-between border-b border-grey min-h-[43px]'>
      <Text className='font-poppins text-grey text-[12px] leading-[18px] tracking-[0.03em] flex'>
        {children}
      </Text>
      <Box className='flex items-center gap-[8px]'>
        <Text className='font-poppins text-[rgb(226,235,251)] text-[12px] leading-[18px] tracking-[0.03em] font-semibold'>
          {value}
        </Text>
        <Tooltip label={description}>
          <Box>
            <RoundedInfoSvg width={20} height={20} className='text-grey hover:text-[rgb(226,235,251)]' />
          </Box>
        </Tooltip>
      </Box>
    </Box>
  )
}

export default FeeDetailLine
