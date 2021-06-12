import React from 'react'
import { Box,Image  } from '@chakra-ui/react'
import img from '../../assets/images/Logo-labfin.svg'
import { FC } from 'react'

export const BrandImg: FC = () => {
    return (
        <Box boxSize="sm">
            <Image src={img} alt="Dan Abramov" />
        </Box>
    )
}
