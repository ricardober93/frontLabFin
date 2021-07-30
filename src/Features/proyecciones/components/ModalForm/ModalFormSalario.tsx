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
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  name: string;
  salary: number;
  DaysWorks: number;
  ratePension: number;
  rateSalud: number;
  AuxTransport?: number;
  Comision?: number;
}

export default function ModalFormSalario() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
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
                    id="DaysWorks"
                    isInvalid={errors.DaysWorks ? true : false}
                  >
                    <FormLabel>pDias Trabajados</FormLabel>
                    <Input
                      type="number"
                      {...register("DaysWorks", {
                        required: true,
                      })}
                    />
                    <FormErrorMessage>
                      {errors.DaysWorks?.type === "required" && "Es requerido"}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
                <Box w="50%">
                  <FormControl
                    id="ratePension"
                    isInvalid={errors.ratePension ? true : false}
                  >
                    <FormLabel>Porcentaje de Pensión</FormLabel>
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      {...register("ratePension", {
                        required: true,
                      })}
                    />
                    <FormErrorMessage>
                      {errors.ratePension?.type === "required" &&
                        "Es requerido"}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    id="rateSalud"
                    isInvalid={errors.rateSalud ? true : false}
                  >
                    <FormLabel>Porcentaje de Pensión</FormLabel>
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      {...register("rateSalud", {
                        required: true,
                      })}
                    />
                    <FormErrorMessage>
                      {errors.rateSalud?.type === "required" && "Es requerido"}
                    </FormErrorMessage>
                  </FormControl>

                  <HStack>
                    <Checkbox {...register("AuxTransport")} value="true">
                      Auxilio de Transporte
                    </Checkbox>
                    <Checkbox {...register("Comision")} value="true">
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
