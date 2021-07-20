import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Button,
  Heading,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { loginService } from "pages/login/login.service";
interface FormValues {
  email: string;
  password: string;
}

export default function FormLogin() {
  const toast = useToast()
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
    console.log(data)

    try {
      const res = await loginService(data.email, data.password);
      console.log(res)
      
      setTimeout(() => {
        toast({
          title: "Cuenta logueado con exito",
          description: 'ha iniciado sesion' + res.user.email,
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }, 100);
      localStorage.setItem('token', res.token.token)
      history.push("/app/proyecciones/baseInicial");

    } catch (error) {
      console.log(error)
      setTimeout(() => {
        toast({
          title: "Problemas con las credenciales.",
          description: "No se ha podido loguear.",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      }, 200);
    }


  }
  return (
    <Box border="1px" borderColor="gray.200" borderRadius="3xl" as="section" w="100%" p="4">
      <VStack as="div" marginY="3" align="stretch">
        <Heading size="lg">Bienvenido</Heading>
        <Text fontSize="3xl" color="blue.500">
          {" "}
          LabFin{" "}
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
            <Button color="primary" type="submit">
              Entrar
            </Button>
          </FormControl>
        </Box>
      </form>
    </Box>
  );
}
