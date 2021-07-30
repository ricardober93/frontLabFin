import React from 'react'
import { Box } from '@chakra-ui/react';
import MyApp from "../../../component/layout/MyApp";
import FormRegister from 'component/FormRegister/FormRegister';

export default function Register() {
  return (
    <MyApp>
      <Box
        as="section"
        minH="90vh"
        w="80%"
        m="0 auto"
        d="flex"
        gridGap="5"
        justifyContent={{ base: "center" }}
        alignItems="center" >
        <FormRegister />
      </Box>
    </MyApp>
  )
}
