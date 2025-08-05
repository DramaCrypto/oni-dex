import React, { FC } from 'react'
import clsx from 'clsx';

interface Props {
  value: boolean
  handleToggle: () => void
}

const SwitchInput: FC<Props> = (props) => {

  const { value, handleToggle } = props

  return (
    <div className="inline-block relative h-[40px] w-[112px] cursor-pointer" onClick={handleToggle}>
      <span className="rounded-[16px] h-full block w-full bg-[#121526]">
        <span className={clsx(
          'absolute before:block flex items-center justify-center h-[40px] w-[56px] rounded-[16px] transition duration-100',
          value ? 'translate-x-0 bg-[#348cf4]' : 'translate-x-[56px] bg-grey-75'
        )}>
          <p className="font-poppins text-[14px] leading-[21px] text-light font-semibold">
            {value ? 'ON' : 'OFF'}
          </p>
        </span>
        <span className="flex items-center justify-around h-full opacity-60">
          <p className={clsx('font-poppins text-[14px] leading-[21px] text-light font-semibold', value && 'invisible')}>ON</p>
          <p className={clsx('font-poppins text-[14px] leading-[21px] text-light font-semibold', !value && 'invisible')}>OFF</p>
        </span>
      </span>
    </div>
  )
}

export default SwitchInput
