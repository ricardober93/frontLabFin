import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  HStack,
  Checkbox,
  useToast
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Isalary } from "Features/proyecciones/types/type";
import { createSalario } from "Features/proyecciones/servicios/Salario/create.service";
import { AxiosError, AxiosResponse } from "axios";


export default function ModalFormSalario({getAllSalarios}) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Isalary>({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const onSubmit: SubmitHandler<Isalary> = (data) => {
    console.log(data)
    createSalario("proyeccion/salario", data)
      .then((res: AxiosResponse) => {
        console.log(res)
        if (res.status === 201) {
          toast({
            title: "Salario creado",
            description: "se creado el Salario correctamente",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          getAllSalarios();
          reset()
          onClose();
        }
      })
      .catch((error: AxiosError) => {
        console.log(error)
        toast({
          title: "Problemas para crear el Salario",
          description: "se produjo un error al Salario",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };
  return (
    <>
      <Button
        _hover={{ bg: "teal.50", color: "teal.500" }}
        bg="teal.100"
        color="teal.800"
        onClick={onOpen}
      >
        Agregar Salario
      </Button>

      <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader> Agregar Salario</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex gridGap="5">
                <Box w="50%">
                  <FormControl id="name" isInvalid={errors.name ? true : false}>
                    <FormLabel>Nombre del cargo</FormLabel>
                    <Input
                      type="text"
                      {...register("name", {
                        required: true,
                      })}
                    />
                    <FormErrorMessage>
                      {errors.name?.type === "required" && "Es requerido"}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    id="salary"
                    isInvalid={errors.salary ? true : false}
                  >
                    <FormLabel>Salario</FormLabel>
                    <Input
                      type="number"
                      {...register("salary", {
                        required: true,
                      })}
                    />
                    <FormErrorMessage>
                      {errors.salary?.type === "required" && "Es requerido"}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    id="daysWorks"
                    isInvalid={errors.daysWorks ? true : false}
                  >
                    <FormLabel>Dias Trabajados</FormLabel>
                    <Input
                      type="number"
                      {...register("daysWorks", {
                        required: true,
                      })}
                    />
                    <FormErrorMessage>
                      {errors.daysWorks?.type === "required" && "Es requerido"}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
                <Box w="50%">
                  <FormControl
                    id="pension"
                    isInvalid={errors.pension ? true : false}
                  >
                    <FormLabel>Porcentaje de Pensión</FormLabel>
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      {...register("pension", {
                        required: true,
                      })}
                    />
                    <FormErrorMessage>
                      {errors.pension?.type === "required" &&
                        "Es requerido"}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    id="salud"
                    isInvalid={errors.salud ? true : false}
                  >
                    <FormLabel>Porcentaje de Pensión</FormLabel>
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      {...register("salud", {
                        required: true,
                      })}
                    />
                    <FormErrorMessage>
                      {errors.salud?.type === "required" && "Es requerido"}
                    </FormErrorMessage>
                  </FormControl>

                  <HStack>
                    <Checkbox {...register("transport")} value="true">
                      Auxilio de Transporte
                    </Checkbox>
                    <Checkbox {...register("comision")} value="true">
                      Comision
                    </Checkbox>
                  </HStack>
                </Box>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost" type="submit">
                Enviar
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
