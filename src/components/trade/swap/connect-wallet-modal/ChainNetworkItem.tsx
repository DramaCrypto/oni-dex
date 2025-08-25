import React, { FC } from 'react'
import { Box, Tooltip } from '@mantine/core';
import clsx from 'clsx';
import ExportedImage from "next-image-export-optimizer";

import { ConnectSvg } from '@/components/icons'
import { INetwork } from '@/types/common'

interface Props {
  data: INetwork;
  handleToggle: () => void
}

const ChainNetworkItem: FC<Props> = (props) => {

  const { data, handleToggle } = props

  return (
    <Tooltip label={data.name} classNames={{tooltip: 'text-[12px]'}}>
      <Box className='flex items-center justify-center p-[6px] relative md:px-[8px] md:py-[12px] cursor-pointer'
        onClick={handleToggle}
      >
        <Box className={clsx('flex rounded-full p-[3px] border-transparent', data.selected && 'bg-gradient-teal')}>
          <Box className="flex items-center justify-center">
            <Box className="relative flex rounded-full">
              <Box className="flex items-center justify-center rounded-full box-border overflow-hidden relative transition-all z-10 w-[31px] h-[31px]">
                <ExportedImage alt="RUNE" className="absolute inset-0 transition-all rounded-full" src={data.logoURI} width={31} height={31} />
              </Box>
            </Box>
          </Box>
          {
            data.selected && (
              <div className="flex opacity-0 duration-200 transition-all bg-grey-23 absolute z-20 p-[2px] rounded-[12px] right-[12px] border border-solid border-[#2ac6db] top-[40px] right-[10px] opacity-100">
                <ConnectSvg width={14} height={14} className='text-[#2ac6db]' />
              </div>
            )
          }
        </Box>
      </Box>
    </Tooltip>
  )
}

export default ChainNetworkItem
