import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react'
import { ColorModeSwitcher } from 'ColorModeSwitcher'
import React from 'react'

export const Nabvar = () => {
    return (
        <Flex>
        <Box p="2">
          <Heading size="md">Chakra App</Heading>
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme="teal" mr="4">
            Sign Up
          </Button>
          <Button colorScheme="teal">Log in</Button>
        <ColorModeSwitcher h="10%" justifySelf="flex-end" />
        </Box>
      </Flex>
    )
}
