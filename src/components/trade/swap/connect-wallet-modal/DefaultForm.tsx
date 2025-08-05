import React, { useState } from 'react'
import { Box, Text } from '@mantine/core';

import WalletItem from './WalletItem'
import rainbowSvg from '@/assets/icons/rainbow.svg'

const DefaultForm = () => {

  const [selected, setSelected] = useState<string>('')

  return (
    <Box className='flex flex-col px-[16px] py-[8px] flex-wrap justify-center bg-black rounded-[24px] z-10'>
      <Box className='flex pl-[8px]'>
        <Text className='text-[14px] leading-[21px] tracking-base text-light font-semibold'>
          Instant Wallets
        </Text>
      </Box>
      <Box className='flex flex-wrap'>
        <WalletItem name='Passkeys' selected={selected === 'Passkeys'} icon={rainbowSvg} onSelect={() => setSelected('Passkeys')} />
      </Box>
      <Box className='flex pl-[8px]'>
        <Text className='text-[14px] leading-[21px] tracking-base text-light font-semibold'>
          Detected Wallets
        </Text>
      </Box>
      <Box className='flex flex-wrap'>
        <WalletItem name='Trust Browser' selected={selected === 'Trust Browser'} icon={rainbowSvg} onSelect={() => setSelected('Trust Browser')} />
      </Box>
    </Box>
  )
}

export default DefaultForm
