import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Button
} from "@chakra-ui/react";

export default function FormLogin() {

  return (
    <Box as="form" w="50%">
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormErrorMessage> 'Error' </FormErrorMessage>
      </FormControl>

      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl id="email">
        <Button> Hola backend </Button>
      </FormControl>

    </Box>
  );
}
