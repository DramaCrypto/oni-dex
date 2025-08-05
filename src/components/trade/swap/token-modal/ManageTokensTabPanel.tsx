import React, { useState } from 'react'
import { Box } from '@mantine/core';

import TokenForm from './TokenForm'
import { ITokenForm } from '@/types/common'
import { tokenFormList } from '@/assets/data/tokens'

const ManageTokensTabPanel = () => {

  const [tokens, setTokens] = useState<ITokenForm[]>(tokenFormList)

  const handleEdit = (_token: ITokenForm) => {
    setTokens(tokens.map((el) => el.name === _token.name ? { ...el, value: !el.value } : el))
  }

  return (
    <Box className='rounded-[40px] bg-grey-23 py-[40px] flex-1 flex w-full max-h-[calc(100%-80px)]'>
      <Box className='overflow-y-auto bg-[#202a3d] border-y boder-[#2e3c56] w-full'>
        {
          tokens.map((token) => (
            <TokenForm key={token.name} data={token} handleEdit={() => handleEdit(token)} />
          ))
        }
      </Box>
    </Box>
  )
}

export default ManageTokensTabPanel
