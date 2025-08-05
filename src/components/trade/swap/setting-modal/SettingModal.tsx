import React, { FC, useState } from 'react'
import { Modal, Box, Tooltip } from '@mantine/core';
import clsx from 'clsx'

import SwitchInput from '@/components/trade/swap/SwitchInput'
import { RoundedInfoSvg } from '@/components/icons'

interface Props {
  opened: boolean,
  handleClose: () => void
}

const SettingModal: FC<Props> = (props) => {

  const { opened, handleClose } = props

  const [feeType, setFeeType] = useState<'Normal' | 'Fast' | 'Fastest'>('Normal')
  const [isExpertMode, setIsExpertMode] = useState<boolean>(false)
  const [isCustomRecipient, setIsCustomRecipient] = useState<boolean>(false)

  return (
    <Modal opened={opened} onClose={handleClose}
      centered
      withCloseButton={false}
      size='350px'
      classNames={{
        content: 'bg-transparent',
        overlay: 'bg-[rgba(0,0,0,0.7)] z-[999] backdrop-blur-[3px]',
        inner: 'z-[9999]',
        body: 'flex flex-col'
      }}
    >
      <div className="bg-grey-23 transition-colors drop-shadow-box box-border border border-solid border-[#273855] inline-flex rounded-[24px] px-[32px] py-[24px] shadow-2xl">
        <div className="flex flex-col w-full gap-[16px]">
          <p className="text-light font-poppins text-[12px] leading-[18px] tracking-base font-bold">
            Transaction Settings
          </p>
          <div className="flex space-x-[8px]">
            <p className="font-poppins text-grey-75 text-[11px] leading-[18px] font-bold tracking-base">
              Transaction Fee
            </p>
            <Tooltip label="Tooltip" classNames={{ tooltip: 'text-[12px]' }}>
              <Box className='w-[16px] h-[16px]'>
                <RoundedInfoSvg width={16} height={16} className='text-grey' />
              </Box>
            </Tooltip>
          </div>

          <div className="flex items-center w-full space-x-[8px] pb-[24px]">
            {
              ['Normal', 'Fast', 'Fastest'].map((el) => (
                <div key={el}
                  className={clsx(
                    "border border-grey-27 flex items-center justify-center rounded-[16px] text-light font-poppins h-[40px] px-[12px] text-[11px] font-bold cursor-pointer",
                    {
                      'hover:bg-[rgba(77,186,214,0.8)] bg-green': feeType === el,
                      'hover:bg-[rgba(39,56,85,0.2)]': feeType !== el
                    }
                  )}
                  onClick={() => setFeeType(el as any)}
                >
                  {el}
                </div>
              ))
            }
          </div>

          <p className="font-poppins text-light text-[12px] leading-[18px] tracking-base font-bold">Transaction Mode</p>

          <div className="flex items-center justify-between">
            <div className="flex space-x-[8px]">
              <p className="font-poppins text-grey-75 text-[11px] leading-[18px] font-bold tracking-base">
                Expert Mode
              </p>
              <Tooltip label="Expert Mode" classNames={{ tooltip: 'text-[12px]' }}>
                <Box className='w-[16px] h-[16px]'>
                  <RoundedInfoSvg width={16} height={16} className='text-grey' />
                </Box>
              </Tooltip>
            </div>
            <SwitchInput value={isExpertMode} handleToggle={() => setIsExpertMode(!isExpertMode)} />
          </div>

           <div className="flex items-center justify-between">
            <div className="flex space-x-[8px]">
              <p className="font-poppins text-grey-75 text-[11px] leading-[18px] font-bold tracking-base">
                Set Custom Recipient
              </p>
              <Tooltip label="Expert Mode" classNames={{ tooltip: 'text-[12px]' }}>
                <Box className='w-[16px] h-[16px]'>
                  <RoundedInfoSvg width={16} height={16} className='text-grey' />
                </Box>
              </Tooltip>
            </div>
            <SwitchInput value={isCustomRecipient} handleToggle={() => setIsCustomRecipient(!isCustomRecipient)} />
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default SettingModal
