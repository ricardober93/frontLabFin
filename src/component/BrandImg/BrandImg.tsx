import React from 'react'
import { Box, Image, useBreakpointValue } from '@chakra-ui/react'
import img from '../../assets/images/Logo-labfin.svg'
import { FC } from 'react'

export const BrandImg: FC = () => {
    
  const variant = useBreakpointValue({ base: "none", md: "block" })
    return (
        <Box  display={variant} w="100%">
            <Image maxH="xs" src={img} alt="Dan Abramov" />
        </Box>
    )
}
