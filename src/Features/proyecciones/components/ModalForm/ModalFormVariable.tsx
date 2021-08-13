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
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Ivariable } from "Features/proyecciones/types/type";
import { AxiosError, AxiosResponse } from "axios";
import { createVariable } from "Features/proyecciones/servicios/variable/create.service";

export default function ModalFormVariable({ getAllVariable }) {
  const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<Ivariable>({
      mode: "onChange",
      reValidateMode: "onChange",
    });
    const onSubmit: SubmitHandler<Ivariable> = (data) => {
      console.log(data);
      createVariable("proyeccion/variable", data)
        .then((res: AxiosResponse) => {
          console.log(res)
          if (res.status === 201) {
            toast({
              title: "Varaible actualizada",
              description: "se actualizo el Varaible correctamente",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            getAllVariable();
            reset()
            onClose();
          }
        })
        .catch((error: AxiosError) => {
          toast({
            title: "Problemas para crear la varaible",
            description: "se produjo un error al crear la varaible",
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
          Agregar Variable
        </Button>
  
        <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader> Agregar Variable</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex gridGap="5" >
           
                    <FormControl id="name" isInvalid={errors.name ? true : false}>
                      <FormLabel>Nombre de la varaible</FormLabel>
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
                      id="value"
                      isInvalid={errors.value ? true : false}
                    >
                      <FormLabel>valor de la variable</FormLabel>
                      <Input
                        type="number"
                        {...register("value", {
                          required: true,
                        })}
                      />
                      <FormErrorMessage>
                        {errors.value?.type === "required" && "Es requerido"}
                      </FormErrorMessage>
                    </FormControl>
          
                </Flex>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="red" mr={3} onClick={onClose}>
                  Cerrar
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
  