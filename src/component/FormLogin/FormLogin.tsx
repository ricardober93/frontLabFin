import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Button,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
interface FormValues {
  email: string;
  password: string;
}

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  return (
    <Box border="1px" borderColor="gray.200" as="section" w="100%" p="4">
      <VStack as="div" marginY="3" align="stretch">
        <Heading size="lg">Bienvenido</Heading>
        <Text fontSize="3xl" color="blue.500">
          {" "}
          LabFin{" "}
        </Text>
      </VStack>

      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="email" isInvalid={errors.email ? true : false}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i,
                message: "Debe ser un correo!",
              },
            })}
          />
          <FormErrorMessage>
            {errors.email?.type === "required" && "Es requerido"}
            {errors.email?.type === "pattern" && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl id="password"  marginY="3">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            {...register("password", { required: true })}
          />
          <FormErrorMessage>
            {errors.password?.type === "required" && "Es requerido"}
          </FormErrorMessage>
        </FormControl>

        <FormControl marginY="3">
          <Button color="primary" type="submit">
    
            Entrar
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}
