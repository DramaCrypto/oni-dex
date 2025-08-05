import React, { useState, FC } from 'react'
import { Box, Text } from '@mantine/core';

import WalletItem from './WalletItem'
import rainbowSvg from '@/assets/icons/rainbow.svg'
import { ArrowLeftSvg } from '@/components/icons'

interface Props {
  handleBack: () => void
}

const HardwareWalletsForm: FC<Props> = (props) => {
  const { handleBack } = props
  const [selected, setSelected] = useState<string>('')

  return (
    <Box className='flex flex-col px-[16px] py-[8px] flex-wrap justify-center bg-black rounded-[24px] z-10'>
      <Box className='flex pl-[8px] cursor-pointer' onClick={handleBack}>
        <ArrowLeftSvg width={24} height={24} className='text-light mr-[8px]' />
        <Text className='text-[14px] leading-[21px] tracking-base text-light font-semibold'>
          Hardware Wallets & Keystore
        </Text>
      </Box>
      <Box className='flex pl-[8px] pt-[8px]'>
        <Text className='text-[14px] leading-[21px] tracking-base text-light font-semibold'>
          Hardware Wallets
        </Text>
      </Box>
      <Box className='flex flex-wrap'>
        {
          ['Ledger', 'Trezor', 'Keepkey'].map((el) => (
            <WalletItem name={el} selected={selected === el} icon={rainbowSvg} onSelect={() => setSelected(el)} />
          ))
        }
      </Box>
      <Box className='flex pl-[8px] pt-[8px]'>
        <Text className='text-[14px] leading-[21px] tracking-base text-light font-semibold'>
          Keystore
        </Text>
      </Box>
      <Box className='flex flex-wrap'>
        {
          ['Keystore', 'Create Keystore', 'Import Phrase'].map((el) => (
            <WalletItem name={el} selected={selected === el} icon={rainbowSvg} onSelect={() => setSelected(el)} />
          ))
        }
      </Box>
    </Box>
  )
}

export default HardwareWalletsForm
