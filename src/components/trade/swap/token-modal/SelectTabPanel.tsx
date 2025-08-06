import React, { FC, useState } from 'react'
import { Box, Text, Input } from '@mantine/core';

import Network from './Network'
import Token from './Token'
import { EditSvg } from '@/components/icons'
import { INetwork, IToken } from '@/types/common'

import { tokens, networks } from '@/assets/data'

interface Props {
  handleTab: () => void
  handleSelect: (token: IToken) => void
}

const SelectTabPanel: FC<Props> = (props) => {
  const { handleTab, handleSelect } = props
  const [network, setNetwork] = useState<INetwork>(networks[0])
  const [searchKey, setSearchKey] = useState("")

  return (
    <Box className='flex flex-col rounded-[40px] bg-grey-23 max-h-[calc(100%-80px)]'>
      <Box className='flex flex-col px-[16px] pt-[24px] pb-[12px] lg:p-[24px] gap-[8px]'>
        <Box className='w-full py-[6px] transition-all border-grey-27 px-[8px] border rounded-[16px] hover:border-[rgb(117,132,157)] bg-[#2e3c56]'>
          <Input
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            variant="unstyled"
            placeholder="Select token name..."
            w='100%'
            sx={{
              padding: 6,
              input: {
                fontSize: 14,
                lineHeight: 'inherit',
                color: '#e2ebfb',
                fontFamily: 'Poppins, sans-serif',
              },
            }}
          />
        </Box>

        <Box className='border border-[#2e3c56] p-[4px] rounded-[16px] hover:border-[#75849d]'>
          <Box className='flex justify-between grid gap-2 w-full grid-cols-5'>
            {
              networks.map((el) => (
                <Network key={el.name}
                  onSelect={() => setNetwork(el)}
                  data={el}
                  isSelectted={el.name === network.name} />
              ))
            }
          </Box>
        </Box>
      </Box>

      <Box className='bg-[#202a3d] w-full border-y border-[#2e3c56] overflow-x-hidden'>
        <Box className='overflow-y-auto mr-[-24px] lg:mr-[-16px]'>
          {
            tokens.filter((el) => el.name.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())).map((_token) => (
              <Token key={_token.name} data={_token} onClick={() => handleSelect(_token)} />
            ))
          }
        </Box>
      </Box>

      <Box className='flex items-center justify-center pt-[16px] pb-[24px] text-grey-75 hover:text-light cursor-pointer'
        onClick={handleTab}
      >
        <EditSvg width={18} height={18} />
        <Text className='uppercase font-semibold text-[12px] leading-[18px] tracking-base font-poppins px-[12px]'>
          Manage Token Lists
        </Text>
      </Box>
    </Box>
  )
}

export default SelectTabPanel
