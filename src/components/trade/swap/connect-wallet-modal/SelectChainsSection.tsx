import React, { useState } from 'react'
import { Box, Text } from '@mantine/core';

import ChainNetworkItem from './ChainNetworkItem'
import { INetwork } from '@/types/common'

import { networks } from '@/assets/data'

const _networks = networks.filter((el) => el.name !== 'ALL')

const SelectChainsSection = () => {

  const [networkList, setNetworkList] = useState<INetwork[]>(_networks)

  const handleToggle = (item: INetwork) => {
    setNetworkList(networkList.map((el) => el.name === item.name ? { ...el, selected: !el.selected } : el))
  }

  const handleToggleSelectAll = () => {
    if (networkList.filter((el) => !!el.selected).length > 0) {
      setNetworkList(networkList.map((el) => ({ ...el, selected: false })))
    } else {
      setNetworkList(networkList.map((el) => ({ ...el, selected: true })))
    }
  }

  return (
    <Box className='flex flex-col items-center px-[16px]'>
      <Box className='flex items-center p-[8px] w-full md:p-[16px] md:gap-[16px] box-content justify-between'>
        <Text className='font-poppins text-[21px] leading-[31px] font-bold text-light'>
          Select chains
        </Text>
        <Box className='border border-green flex items-center h-[20px] px-[6px] font-poppins font-bold text-[11px] leading-[18px] text-light tracking-base hover:bg-[rgba(77,186,214,0.2)] w-fit rounded-full cursor-pointer'
          onClick={handleToggleSelectAll}
        >
          Select / Deselect All
        </Box>
      </Box>

      <Box className='flex flex-wrap justify-start bg-black rounded-[24px] z-10 px-[16px] w-full'>
        {
          networkList.map((network) => (
            <ChainNetworkItem key={network.name} data={network} handleToggle={() => handleToggle(network)} />
          ))
        }
      </Box>
    </Box>
  )
}

export default SelectChainsSection
