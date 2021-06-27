import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react'
import { ColorModeSwitcher } from 'ColorModeSwitcher'
import React from 'react'
import { useHistory } from 'react-router-dom'

export const Nabvar = () => {
  const history = useHistory()
  const GotoRegister = () => {
    history.push('register')
  }
  const GotoLogin = () => {
    history.push('login')
  }
    return (
        <Flex>
        <Box p="2">
          <Heading size="md">LabFin</Heading>
        </Box>
        <Spacer />
        <Box>
          <Button onClick={GotoRegister} mr="4">
            Registrase
          </Button>
          <Button onClick={GotoLogin} colorScheme="teal">Log in</Button>
        <ColorModeSwitcher justifySelf="flex-end" />
        </Box>
      </Flex>
    )
}
