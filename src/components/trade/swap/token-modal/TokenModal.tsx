import React, { FC, useState, useEffect } from 'react'
import { Modal, Box, Text } from '@mantine/core';

import SelectTabPanel from './SelectTabPanel'
import ManageTokensTabPanel from './ManageTokensTabPanel'
import { CloseSvg, ArrowLeftSvg } from '@/components/icons'

interface Props {
  opened: boolean,
  handleClose: () => void
}

const TokenModal: FC<Props> = (props) => {

  const { opened, handleClose } = props
  const [tab, setTab] = useState<'select' | 'manage'>('select')

  useEffect(() => {
    setTab('select')
  }, [opened])

  return (
    <Modal opened={opened} onClose={handleClose} centered withCloseButton={false} size='520px'
      classNames={{
        content: 'bg-transparent h-full',
        overlay: 'bg-[rgba(0,0,0,0.7)] z-[999] backdrop-blur-[3px]',
        inner: 'z-[9999]',
        body: 'h-full flex flex-col'
      }}
    >
      <Box className='flex items-center justify-between pb-[12px] px-[20px] lg:p-[20px]'>
        <Box className='flex items-center gap-[8px]'>
          {
            tab === 'manage' && <Box className='w-[24px] h-[24px] cursor-pointer' onClick={() => setTab('select')}>
              <ArrowLeftSvg width={24} height={24} className='text-light' />
            </Box>
          }
          <Text className='font-poppins text-light text-[24px] leading-[1.5] font-bold tracking-base'>
            {tab === 'select' ? 'Select a token' : 'Manage Token Lists'}
          </Text>
        </Box>

        <Box className='flex items-center cursor-pointer justify-center border border-light w-[40px] h-[40px] rounded-[16px] hover:filter hover:brightness-110'
          onClick={handleClose}
        >
          <CloseSvg width={24} height={24} className='text-light' />
        </Box>
      </Box>

      {
        tab === 'select' ? <SelectTabPanel handleTab={() => setTab('manage')} /> : <ManageTokensTabPanel />
      }
    </Modal>
  )
}

export default TokenModal
