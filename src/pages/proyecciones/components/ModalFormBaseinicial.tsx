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
  Heading,
  Divider,
  Box,
  Flex,
  Spacer,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
export default function ModalFormBaseinicial() {
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const onSubmit = handleSubmit((data:any) => {
    console.log(data);
  });

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Agregar la Base Inicial
      </Button>

      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form autoComplete="off" onSubmit={onSubmit}>
            <ModalHeader> Base Inicial </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Heading marginY="2" size="sm">
                Activos
              </Heading>
              <Divider marginY="2" />
              <Flex>
                <Box w="45%">
                  <FormControl
                    id="nameOfAvtive"
                    isInvalid={errors.nameOfAvtive ? true : false}
                  >
                    <FormLabel>Nombre del Activo</FormLabel>
                    <Input type="text" {...register("nameOfAvtive")} />
                    <FormErrorMessage>
                      {errors.nameOfAvtive?.type === "required" &&
                        "Es requerido"}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
                <Spacer />
                <Box w="45%">
                  <FormControl
                    id="valueOfAvtive"
                    isInvalid={errors.valueOfAvtive ? true : false}
                  >
                    <FormLabel>Valor del Activo</FormLabel>
                    <Input type="number" min="0.00" max="10000.00" {...register("valueOfAvtive")} />
                    <FormErrorMessage>
                      {errors.valueOfAvtive?.type === "required" &&
                        "Es requerido"}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
              </Flex>

              <Heading marginY="2" size="sm">
                Pasivos
              </Heading>
              <Input type="text" />
              <Divider />

              <Heading marginY="2" size="sm">
                Patrominio
              </Heading>
              <Input type="text" />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost" type="submit" >Enviar</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
