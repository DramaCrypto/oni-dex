import React, { FC } from 'react'
import { Box, Text } from '@mantine/core';
import ExportedImage from "next-image-export-optimizer";
import clsx from 'clsx';

import { ConnectSvg } from '@/components/icons'

interface Props {
  name: string;
  selected: boolean;
  icon: any;
  onSelect: () => void;
}

const WalletItem: FC<Props> = (props) => {

  const { name, selected, icon, onSelect } = props;

  return (
    <Box className={clsx("flex items-center justify-between cursor-pointer relative hover:backdrop-blur-[110] w-fit p-[6px] rounded-[12px] m-[4px] gap-x-[4px] md:h-[40px] md:gap-x-[8px] md:px-[8px]", selected ? 'bg-[rgba(42,198,219,0.2)]' : 'bg-dark-grey-light')}
      onClick={onSelect}
    >
      <Box className={clsx("flex duration-200 transition-all bg-grey-23 absolute -top-[8px] -right-[4px] p-[2px] rounded-[12px] border border-solid border-[#2ac6db]", selected ? 'opacity-1' : 'opacity-0')}>
        <ConnectSvg width={14} height={14} className='text-[#2ac6db]' />
      </Box>
      <ExportedImage src={icon} alt="Passkeys" className="transition-all box-content" width={20} height={20} />
      <Text className="font-poppins text-light text-[11px] md:text-[12px] leading-[18px] tracking-base font-bold">
        {name}
      </Text>
    </Box>
  )
}

export default WalletItem
