import React, { useState, FC } from 'react'
import { Box, Text } from '@mantine/core';

import { ArrowLeftSvg } from '@/components/icons'
import WalletItem from './WalletItem'
import rainbowSvg from '@/assets/icons/rainbow.svg'

interface Props {
  handleBack: () => void
}

const BrowserWalletsForm: FC<Props> = (props) => {

  const { handleBack } = props

  const [selected, setSelected] = useState<string>('')

  return (
    <Box className='flex flex-col p-[16px] flex-wrap justify-center bg-black rounded-[24px] z-10'>
      <Box className='flex pl-[8px] cursor-pointer' onClick={handleBack}>
        <ArrowLeftSvg width={24} height={24} className='text-light mr-[8px]' />
        <Text className='text-[14px] leading-[21px] tracking-base text-light font-semibold'>
          Browser Wallets
        </Text>
      </Box>
      <Box className='flex flex-wrap'>
        {
          ['passkeys', 'Metamask', 'Ctrl', 'Kepir', 'Leap Wallet', 'Rainbow', 'Trust Broswer'].map((el) => (
            <WalletItem name={el} selected={selected === el} icon={rainbowSvg} onSelect={() => setSelected(el)} />
          ))
        }
      </Box>
    </Box>
  )
}

export default BrowserWalletsForm

