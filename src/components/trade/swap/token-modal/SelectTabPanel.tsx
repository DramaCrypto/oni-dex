import React, { FC, useState } from 'react'
import { Box, Text, Input } from '@mantine/core';

import TokenItem from './TokenItem'
import NetworkItem from './NetworkItem'
import { EditSvg } from '@/components/icons'
import { ITokenItem } from '@/types/common'
import { tokens } from '@/assets/data/tokens'
import { networks } from '@/assets/data/networks'

interface Props {
  handleTab: () => void
}

const SelectTabPanel: FC<Props> = (props) => {
  const { handleTab } = props
  const [token, setToken] = useState<ITokenItem>(tokens[0])
  return (
    <Box className='flex flex-col rounded-[40px] bg-grey-23 max-h-[calc(100%-80px)]'>
      <Box className='flex flex-col px-[16px] pt-[24px] pb-[12px] lg:p-[24px] gap-[8px]'>
        <Box className='w-full py-[6px] transition-all border-grey-27 px-[8px] border rounded-[16px] hover:border-[rgb(117,132,157)] bg-[#2e3c56]'>
          <Input
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
              tokens.map((el) => (
                <TokenItem key={el.name}
                  onSelect={() => setToken(el)}
                  data={el}
                  isSelectted={el.name === token.name} />
              ))
            }
          </Box>
        </Box>
      </Box>

      <Box className='bg-[#202a3d] w-full border-y border-[#2e3c56] overflow-x-hidden'>
        <Box className='overflow-y-auto mr-[-24px] lg:mr-[-16px]'>
          {
            networks.map((netowrk) => (
              <NetworkItem key={netowrk.name} data={netowrk} />
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
