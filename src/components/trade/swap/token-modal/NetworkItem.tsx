import React, { FC } from 'react'
import { Box, Text, Tooltip } from '@mantine/core';
import ExportedImage from "next-image-export-optimizer";

import { EtherScanSvg } from '@/components/icons'
import { INetwork } from '@/types/common'

interface Props {
  data: INetwork
}

const NetworkItem: FC<Props> = (props) => {

  const { data } = props

  return (
    <Box className='h-[52px] w-full cursor-pointer hover:bg-[#273855] pl-[32px] flex items-center gap-[12px]'>
      <Box className='relative'>
        <Box className='w-[30px] h-[30px] rounded-full transition duration-300'>
          <ExportedImage src={data.icon} width={30} height={30} alt='Network' className='rounded-full' />
        </Box>
        {
          data.icon2 && (
            <Box className='bottom-[-6.75px] right-[-6.75px] bg-[#2e3c56] rounded-full flex items-center justify-center absolute scale-[65%]'>
              <ExportedImage src={data.icon2} width={22.5} height={22.5} alt='' className='rouned-full' />
            </Box>
          )
        }
      </Box>
      <Box className='flex flex-col'>
        <Box className='flex items-center gap-[8px]'>
          <Text className='font-poppins text-light text-[21px] leading-[31px] tracking-[-0.01em] font-medium'>
            {data.name}
          </Text>
          <Tooltip label={data.description} classNames={{ tooltip: 'text-[14px]' }}>
            <Box className='p-[6px] curosr-pointer rounded-full hover:bg-grey-47 w-[28px] h-[28px] hover:text-light text-grey-75'>
              <EtherScanSvg width={16} height={16} />
            </Box>
          </Tooltip>

        </Box>
        <Text className='leading-[18px] font-poppins text-grey-75 uppercase font-light'>
          {data.subTitle}
        </Text>
      </Box>
    </Box>
  )
}

export default NetworkItem
