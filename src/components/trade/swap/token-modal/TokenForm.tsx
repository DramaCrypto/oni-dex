import React, { FC } from 'react'
import { Box, Text } from '@mantine/core';

import SwitchInput from '@/components/trade/swap/SwitchInput'
import { ITokenForm } from '@/types/common'

interface Props {
  data: ITokenForm
  handleEdit: () => void
}

const TokenForm: FC<Props> = (props) => {

  const { data, handleEdit } = props

  return (
    <Box className='flex items-center gap-[12px] px-[24px] py-[8px] cursor-pointer hover:bg-grey-27 w-full'>
      <Box className='flex flex-col flex-1'>
        <Text className='font-poppins text-light font-medium text-[21px] leading-[31px] capitalize'>
          {data.name}
        </Text>
        <Text className='font-poppins text-green font-light text-[11px] leading-[18px] tracking-base uppercase'>
          tokens
        </Text>
      </Box>
      <SwitchInput value={data.value} handleToggle={handleEdit} />
    </Box>
  )
}

export default TokenForm
