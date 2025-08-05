import React, { FC } from 'react'
import { Box, Text } from '@mantine/core';
import ExportedImage from "next-image-export-optimizer";

interface Props {
  title: string;
  icon: any;
  onClick: () => void;
}

const WalletCategory: FC<Props> = (props) => {

  const { title, icon, onClick } = props

  return (
    <Box className='w-full flex flex-row items-center justify-between cursor-pointer bg-dark-grey-light hover:brightness-110 px-[16px] md:px-[24px] py-[8px] rounded-[16px] my-[8px]'
      onClick={onClick}
    >
      <Text className='font-poppins text-light font-semibold text-[17px] leading-[25px]'>
        { title }
      </Text>

      <Box className='p-[10px] rounded-[16px]'>
        <ExportedImage src={icon} alt='' width={24} height={24} />
      </Box>
    </Box>
  )
}

export default WalletCategory
