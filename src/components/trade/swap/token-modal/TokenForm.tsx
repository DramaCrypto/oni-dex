import React, { FC } from 'react'
import { Box, Text } from '@mantine/core';
import clsx from 'clsx';

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
      <Box className="inline-block relative h-[40px] w-[112px] cursor-pointer" onClick={handleEdit}>
        <span className="rounded-[16px] h-full block w-full bg-[#121526]">
          <span className={clsx(
            'absolute before:block flex items-center justify-center h-[40px] w-[56px] rounded-[16px] transition duration-100',
            data.value ? 'translate-x-0 bg-[#348cf4]' : 'translate-x-[56px] bg-grey-75'
          )}>
            <p className="font-poppins text-[14px] leading-[21px] text-light font-semibold">
              { data.value ? 'ON' : 'OFF' }
            </p>
          </span>
          <span className="flex items-center justify-around h-full opacity-60">
            <p className={clsx('font-poppins text-[14px] leading-[21px] text-light font-semibold', data.value && 'invisible')}>ON</p>
            <p className={clsx('font-poppins text-[14px] leading-[21px] text-light font-semibold', !data.value && 'invisible')}>OFF</p>
          </span>
        </span>
      </Box>
    </Box>
  )
}

export default TokenForm
