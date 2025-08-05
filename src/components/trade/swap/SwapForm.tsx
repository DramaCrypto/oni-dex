"use client";
import { useState } from 'react';
import { Box, Text, Collapse, Tooltip, Slider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ExportedImage from "next-image-export-optimizer";

import { SettingSvg, ArrowDownSvg, ChevronDownSvg, EyeSvg, SwapSettingSvg, RoundedInfoSvg } from '@/components/icons'
import SwapFromInput from './SwapFromInput'
import SwapToInput from './SwapToInput'
import FeeDetailLine from './FeeDetailLine'
import SwapSettingDetail from './SwapSettingDetail'
import TokenModal from './token-modal/TokenModal'
import ConnectWalletModal from './connect-wallet-modal/ConnectWalletModal'
import SettingModal from './setting-modal/SettingModal'

import swapSvg from '@/assets/icons/swap.svg'

const SwapForm = () => {

  const [openFees, { toggle }] = useDisclosure(false);
  const [openSettings, { toggle: toggleSettings }] = useDisclosure(false)
  const [isOpenTokenModal, { open: openTokenModal, close: closeTokenModal }] = useDisclosure(false);
  const [isOpenConnectModal, { open: openConnectModal, close: closeConnectModal }] = useDisclosure(false);
  const [isOpenSettingModal, { open: openSettingModal, close: closeSettingModal }] = useDisclosure(false);
  const [inputValue, setInputValue] = useState(0)

  return (
    <Box className='w-full max-w-[480px]'>
      <Box display='flex' w='100%' className='items-center justify-between'>
        <Text fw={800} mx={20} className='text-[24px] leading-[1.5] text-[rgb(226,235,251)] font-poppins'>
          Swap
        </Text>
        <Box display='flex' className='items-center gap-1'>
          <Box className='rounded-[16px] flex items-center justify-center h-[40px] w-[42px] hover:bg-[rgb(71,88,117)] cursor-pointer text-grey hover:text-[#E2EBFB]'
            onClick={openSettingModal}
          >
            <SettingSvg width={24} height={24} className='transition-all' />
          </Box>
        </Box>
      </Box>

      <Box className='flex flex-1 p-[16px] rounded-[16px] md:rounded-[24px] flex-col items-center mt-[16px] gap-[4px] bg-[rgb(35,46,66)]'>
        <Box className='relative flex flex-col gap-[4px] w-full'>
          <SwapFromInput value={inputValue} 
            onChange={(val) => setInputValue(parseFloat(val ?? '0'))}
            handleOpenTokenModal={openTokenModal} />
          <SwapToInput fromValue={inputValue} handleOpenTokenModal={openTokenModal} />
          <Box className='flex items-center justify-center absolute mt-2.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Box className='w-[36px] h-[36px] md:w-[44px] md:h-[44px] flex items-center justify-center cursor-pointer transparent bg-[rgb(42,125,250)] rounded-[12px] md:rounded-[18px] hover:filter hover:brightness-125 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[-2px]'>
              <ArrowDownSvg width={20} height={20} className='text-white' />
            </Box>
          </Box>
        </Box>

        <Box className='bg-[rgb(46,60,86)] rounded-[16px] w-full'>
          <Box className='cursor-pointer px-[16px] py-[8px] pr-[4px] flex items-center justify-between' onClick={toggle}>
            <Box className='flex-1 flex items-center justify-between gap-[4px]'>
              <Box className='border border-[rgb(77,186,214)] flex items-center justify-center w-[26px] h-[26px] rounded-full hover:bg-[rgba(77,186,214,0.2)]'>
                <ExportedImage src={swapSvg} width={16} height={16} alt='Swap' />
              </Box>
              <Box className='pl-[4px] flex flex-1 items-center gap-[4px]'>
                <Text className='font-poppins text-[rgb(226,235,251)] text-[12px] leading-[18px] tracking-[0.03em]'>
                  1 BTC = 30.94769 ETH
                </Text>
                <Text className='font-poppins text-grey text-[12px] leading-[18px] tracking-[0.03em]'>
                  ($3,719.89)
                </Text>
              </Box>
              <Tooltip label='Fees: 0'>
                <Box className='mr-[4px] flex items-center px-[10px] py-[2px] bg-[#232E42] rounded-[12px]'>
                  <Text className='text-[#7C859F] font-semibold text-[12px] leading-[16px] '>
                    Fees: 0
                  </Text>
                </Box>
              </Tooltip>

            </Box>
            <Box className='w-[24px]'>
              <ChevronDownSvg width={16} height={16} className='text-grey' />
            </Box>
          </Box>
          <Collapse in={openFees}>
            <Box className='px-[16px] pb-[8px] w-full'>
              <FeeDetailLine value='0 BTC' description='Estimated Output'>
                Estimated Output
              </FeeDetailLine>
              <FeeDetailLine value='0 BTC' description='Minimum received after slippage (0.5%)'>
                Minimum received after slippage (0.5%)
              </FeeDetailLine>
              <FeeDetailLine value='o' description='Network Fee'>
                Network Fee
                <span className='ml-[8px] font-poppins leading-[18px] underline italic text-[11px]'>
                  details
                </span>
                <EyeSvg width={16} height={16} className='text-grey mx-[4px]' />
              </FeeDetailLine>
              <FeeDetailLine value='0' description='Liquidity fee'>
                Liquidity fee
              </FeeDetailLine>
              <Box className='flex items-center gap-[16px] justify-between min-h-[43px]'>
                <Text className='font-poppins text-grey text-[12px] leading-[18px] tracking-[0.03em]'>
                  Exchange Fee
                </Text>
                <Box className='flex items-center gap-[8px]'>
                  <Text className='font-poppins text-[rgb(93,211,155)] text-[12px] leading-[18px] tracking-[0.03em] font-semibold'>
                    FREE
                  </Text>
                </Box>
              </Box>
            </Box>
          </Collapse>
        </Box>

        <Box className='bg-[rgb(46,60,86)] rounded-[16px] w-full flex flex-col gap-[4px] p-[12px]'>
          <Box className='flex justify-between ml-[8px] mt-[4px] cursor-pointer' onClick={toggleSettings}>
            <Box className='flex items-center gap-[8px]'>
              <SwapSettingSvg width={18} height={18} className='text-grey' />
              <Text className='text-[12px] leading-[18px] tracking-[0.03em] font-poppins font-semibold'>
                Swap settings
              </Text>
            </Box>
            <Box className='flex items-center gap-[4px]'>
              <Text className='font-poppins text-grey font-semibold text-[12px] leading-[18px] tracking-[0.03em]'>
                3% Price Protection
              </Text>
              <ChevronDownSvg width={16} height={16} className='text-grey' />
            </Box>
          </Box>
          <Collapse in={openSettings}>
            <Box className='max-h-[94px] overflow-y-hidden'>
              <Box className='pt-[8px]'>
                <Box>
                  <Box className='flex items-center'>
                    <Text className='font-poppins text-grey font-semibold text-[12px] leading-[18px] tracking-base ml-[8px]'>
                      Price protection
                    </Text>
                    <RoundedInfoSvg width={18} height={18} className='ml-[4px] text-grey' />
                  </Box>
                  <Box className='px-[12px] py-[8px]'>
                    <Slider inverted
                      defaultValue={8}
                      min={0}
                      max={11}
                      marks={[{ value: 10 }, { value: 0.5 }]}
                      classNames={{
                        root: 'slider-root',
                        track: 'slider-track before:bg-[rgb(42,125,250)] h-[8px]',
                        thumb: 'slider-thumb w-[16px] h-[16px] bg-white border-0',
                        bar: 'slider-bar bg-grey',
                        mark: 'slider-mark w-[16px] h-[16px] border-0 mt-[-5px]',
                        markLabel: 'slider-mark-label text-[12px]',
                        markFilled: 'bg-[rgb(42,125,250)]',
                        label: 'text-[12px] px-[4px]'
                      }}
                      label={(num) => `Slippage ${num}%`}
                    />
                  </Box>
                </Box>
                <Box className='pl-[8px] w-full flex'>
                  <SwapSettingDetail label='Receive at least:' value='0 BTC' />
                  <SwapSettingDetail label='Estimated:' value='0 BTC' />
                  <SwapSettingDetail label='Time:' value='n/a' />
                </Box>
              </Box>
            </Box>
          </Collapse>
        </Box>

        <Box className='pt-[20px] w-full'>
          <Box className='w-full h-[56px] flex items-center justify-center cursor-pointer rounded-[56px] bg-gradient-to-r from-[rgb(70,178,167)] to-[rgb(51,151,242)] to-[80%] text-light font-poppins font-semibold text-[17px] tracking-[-0.01em] hover:bg-[linear-gradient(90deg,rgba(70,178,167,0.867)_0%,rgba(51,151,242,0.867)_80%)]'
            onClick={openConnectModal}
          >
            Connect Wallet
          </Box>
        </Box>
      </Box>
      <TokenModal opened={isOpenTokenModal} handleClose={closeTokenModal} />
      <ConnectWalletModal opened={isOpenConnectModal} handleClose={closeConnectModal} />
      <SettingModal opened={isOpenSettingModal} handleClose={closeSettingModal} />
    </Box>
  );
};

export default SwapForm;
