import React, { FC } from 'react'
import { Box, Text } from '@mantine/core';

interface Props {
  label: String;
  value: String;
}

const SwapSettingDetail: FC<Props> = (props) => {

  const { label, value } = props

  return (
    <Box className='flex flex-1 flex-col'>
      <Text className='font-poppins text-grey font-semibold text-[11px] leading-[18px] tracking-base'>
        {label}
      </Text>
      <Text className='font-poppins text-[11px] leading-[18px] font-bold text-light'>
        {value}
      </Text>
    </Box>
  )
}

export default SwapSettingDetail
