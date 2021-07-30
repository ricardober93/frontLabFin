import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { registerService } from "Features/Auth/register/register.service";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

interface FormValues {
  email: string;
  password: string;
}

export default function FormRegister() {
  const toast = useToast();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);

    try {
      const res = await registerService(data.email, data.password);
      console.log(res);
      if (res.status === 200) {
        setTimeout(() => {
          toast({
            title: "Cuenta creada con exito",
            description: "tiene que esperar que le activen la cuenta",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }, 100);
        history.push("/login");
      }

    } catch (error) {
      console.log(error)
      setTimeout(() => {
        toast({
          title: "No se pudo crear la cuenta",
          description: error.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }, 100);
    }
  };
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      borderRadius="3xl"
      as="section"
      w="100%"
      p="4"
    >
      <VStack as="div" marginY="3" align="stretch">
        <HStack>
          <Box cursor="pointer" onClick={() => history.goBack()}>
            <ArrowBackIcon w={8} h={8} />
          </Box>
          <Heading size="lg">Registra tu cuenta</Heading>
        </HStack>

        <Text fontSize="3xl" color="blue.500">
          LabFin
        </Text>
      </VStack>

      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="email" isInvalid={errors.email ? true : false}>
          <FormLabel>Correo ELectronico</FormLabel>
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

        <FormControl
          id="password"
          isInvalid={errors.password ? true : false}
          marginY="3"
        >
          <FormLabel>Contraseña</FormLabel>
          <Input
            type="password"
            {...register("password", { required: true })}
          />
          <FormErrorMessage>
            {errors.password?.type === "required" && "Es requerido"}
          </FormErrorMessage>
        </FormControl>

        <Box d="flex" align="end">
          <FormControl marginY="3">
            <Button colorScheme="facebook" type="submit">
              Crear cuenta
            </Button>
          </FormControl>
        </Box>
      </form>
    </Box>
  );
}
