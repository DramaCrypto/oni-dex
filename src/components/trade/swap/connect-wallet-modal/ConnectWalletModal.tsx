import React, { FC, useState, Fragment } from 'react'
import { Modal, Box, Text, Checkbox } from '@mantine/core';
import clsx from 'clsx'

import SelectChainsSection from './SelectChainsSection'
import DefaultForm from './DefaultForm'
import WalletCategory from './WalletCategory'
import { CloseSvg } from '@/components/icons'
import BrowserWalletsForm from './BrowserWalletsForm'
import MobileWalletsForm from './MobileWalletsForm';
import HardwareWalletsForm from './HardwareWalletsForm'

import walletSvg from '@/assets/icons/broswer-wallet.svg'
import mobileSvg from '@/assets/icons/mobile.svg'
import keystoreSvg from '@/assets/icons/keystore.svg'

interface Props {
  opened: boolean,
  handleClose: () => void
}
const ConnectWalletModal: FC<Props> = (props) => {

  const { opened, handleClose } = props

  const [tab, setTab] = useState<'default' | 'browser' | 'mobile' | 'hardware'>('default')
  const [isAgreed, setIsAgreed] = useState(false)

  const handleReset = () => {

  }

  const handleSubmit = () => {
    if (!isAgreed) {
      return;
    }
    handleClose()
  }

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
          <Text className='font-poppins text-light text-[24px] leading-[1.5] font-bold tracking-base'>
            Connect Wallets
          </Text>
        </Box>

        <Box className='flex items-center cursor-pointer justify-center border border-light w-[40px] h-[40px] rounded-[16px] hover:filter hover:brightness-110'
          onClick={handleClose}
        >
          <CloseSvg width={24} height={24} className='text-light' />
        </Box>
      </Box>

      <Box className='flex flex-col rounded-[40px] bg-grey-23 max-h-[calc(100%-80px)] md:p-[8px] overflow-y-auto'>
        <SelectChainsSection />
        <Box className='flex flex-col'>
          <Box className='flex items-center px-[16px]  justify-between'>
            <Text className='font-poppins text-[21px] leading-[31px] font-bold text-light md:py-[16px] pt-[16px]'>
              Select wallet
            </Text>
            <Box className='border border-green flex items-center h-[20px] px-[6px] font-poppins font-bold text-[11px] leading-[18px] text-light tracking-base hover:bg-[rgba(77,186,214,0.2)] w-fit rounded-full cursor-pointer'
              onClick={handleReset}
            >
              Reset
            </Box>
          </Box>

          <Box className='flex flex-col px-[16px] mb-[8px]'>
            {
              tab === 'default' && (
                <Fragment>
                  <DefaultForm />
                  <WalletCategory title='Browser Wallets' icon={walletSvg} onClick={() => setTab('browser')} />
                  <WalletCategory title='Mobile Wallets' icon={mobileSvg} onClick={() => setTab('mobile')} />
                  <WalletCategory title='Hardware Wallets & Keystore' icon={keystoreSvg} onClick={() => setTab('hardware')} />
                </Fragment>
              )
            }
            {
              tab === 'browser' && <BrowserWalletsForm handleBack={() => setTab('default')} />
            }
            {
              tab === 'mobile' && <MobileWalletsForm handleBack={() => setTab('default')} />
            }
            {
              tab === 'hardware' && <HardwareWalletsForm handleBack={() => setTab('default')} />
            }

          </Box>

          <Box className='flex items-center justify-center py-[4px]'>
            <Box className="flex items-center">
              <Box className='w-[24px] h-[24px] mr-[8px]'>
                <Checkbox
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                  size={24}
                  classNames={{
                    body: 'checkbox-body w-[24px] h-[24px]',
                    inner: 'checkbox-inner w-[24px] h-[24px] bg-black rounded-[6px]',
                    input: 'checkbox-input'
                  }}
                />
              </Box>
              <Text className="font-poppins text-[14px] tracking-base font-medium text-light">I agree to the <a target="_blank" rel="noopener" className="text-light hover:text-light" href="/tos">Terms of Service</a></Text>
            </Box>
          </Box>

          <Box className='flex flex-col justify-end pt-[8px] mb-[32px]'>
            <Box className={clsx('w-[66.6%] mx-auto h-[48px] flex items-center justify-center cursor-pointer rounded-[56px] bg-gradient-to-r from-[rgb(70,178,167)] to-[rgb(51,151,242)] to-[80%] text-light font-poppins font-semibold text-[14px] tracking-[-0.01em] hover:bg-[linear-gradient(90deg,rgba(70,178,167,0.867)_0%,rgba(51,151,242,0.867)_80%)]',
              !isAgreed && 'cursor-not-allowed opacity-60'
            )}
              onClick={handleSubmit}
            >
              Connect Wallet
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default ConnectWalletModal
