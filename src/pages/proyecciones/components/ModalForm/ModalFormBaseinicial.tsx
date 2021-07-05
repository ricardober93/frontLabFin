import React, { Fragment, useState } from "react";
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
  IconButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
export default function ModalFormBaseinicial() {
  // const history = useHistory();
  const [ActivosList, setActivosList] = useState([
    { nameOfAvtive: "", valueOfAvtive: "" },
  ]);
   const [PasivosList, setPasivosList] = useState([
    { nameOfPasive: "", valueOfPasive: "" },
  ]);
  const [PatrimonioList, setPatrimonioList] = useState([
    { nameOfPatrimonio: "", valueOfPatrimonio: "" },
  ]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const onSubmit = handleSubmit((data: any) => {
    console.log(ActivosList);
    console.log(PasivosList);
    console.log(PatrimonioList);
  });

  const AddClickActivos = () => {
    setActivosList([...ActivosList, { nameOfAvtive: "", valueOfAvtive: "" }]);
  };

  const AddClickPasivos = () => {
    setPasivosList([...PasivosList, { nameOfPasive: "", valueOfPasive: "" }]);
  };

  const AddClickPatrimonio = () => {
    setPatrimonioList([...PatrimonioList, { nameOfPatrimonio: "", valueOfPatrimonio: "" }]);
  };


  const RemoveClickActivos = (index: number) => {
    const list = [...ActivosList];
    list.splice(index, 1);
    setActivosList(list);
  };

  const RemoveClickPasivos = (index: number) => {
    const list = [...PasivosList];
    list.splice(index, 1);
    setPasivosList(list);
  };

  const RemoveClickPatrimonio = (index: number) => {
    const list = [...PatrimonioList];
    list.splice(index, 1);
    setPatrimonioList(list);
  };

  const InputChangeActivos = (e, index:number) => {
    const { name, value } = e.target;
    const list:any = [...ActivosList];
    list[index][name] = value;
    setActivosList(list);
  };


  const InputChangePasivos = (e, index:number) => {
    const { name, value } = e.target;
    const list:any = [...PasivosList];
    list[index][name] = value;
    setPasivosList(list);
  };

  
  const InputChangePatrimonio = (e, index:number) => {
    const { name, value } = e.target;
    const list:any = [...PatrimonioList];
    list[index][name] = value;
    setPatrimonioList(list);
  };


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

              {ActivosList.map((_, i) => {
                return (
                  <Fragment key={i}>
                    <Flex gridGap="5">
                      <Box w="40%">
                        <FormControl
                          id="nameOfAvtive"
                          isInvalid={errors.nameOfAvtive ? true : false}
                        >
                          <FormLabel>Nombre del Activo</FormLabel>
                          <Input type="text"
                          name="nameOfAvtive"
                            onChange={e => InputChangeActivos(e, i)}
                          />
                          <FormErrorMessage>
                            {errors.nameOfAvtive?.type === "required" &&
                              "Es requerido"}
                          </FormErrorMessage>
                        </FormControl>
                      </Box>
                      <Box w="40%">
                        <FormControl
                          id="valueOfAvtive"
                          isInvalid={errors.valueOfAvtive ? true : false}
                        >
                          <FormLabel>Valor del Activo</FormLabel>
                          <Input
                            type="number"
                            min="0.00"
                            name="valueOfAvtive"
                            onChange={e => InputChangeActivos(e, i)}
                          />
                          <FormErrorMessage>
                            {errors.valueOfAvtive?.type === "required" &&
                              "Es requerido"}
                          </FormErrorMessage>
                        </FormControl>
                      </Box>
                      <Box w="10%" d="flex" alignSelf="flex-end" >
                        {ActivosList.length !== 1 && (
                          <IconButton
                            bg="red.400"
                            onClick={() => RemoveClickActivos(i)}
                            aria-label="Delete"
                            icon={<MinusIcon color="white" />}
                          />
                        )}
                      </Box>
                    </Flex>
                    <Box d="block" w="100%" my="2">
                      {ActivosList.length - 1 === i && ActivosList.length < 10 && (
                        <Button
                          colorScheme="teal"
                          variant="outline"
                          onClick={AddClickActivos}
                        >
                          Agregar nuevo Activo
                          <AddIcon ml="2" />
                        </Button>
                      )}
                    </Box>
                  </Fragment>
                );
              })}

              <Heading mt="4" size="sm">
                Pasivos
              </Heading>
              <Divider my="3"/>

              {PasivosList.map((_, i) => {
                return (
                  <Fragment key={i}>
                    <Flex gridGap="5">
                      <Box w="40%">
                        <FormControl
                          isInvalid={errors.nameOfPasive ? true : false}
                        >
                          <FormLabel>Nombre del Pasivo</FormLabel>
                          <Input type="text"
                          name="nameOfPasive"
                            onChange={e => InputChangePasivos(e, i)}
                          />
                          <FormErrorMessage>
                            {errors.nameOfPasive?.type === "required" &&
                              "Es requerido"}
                          </FormErrorMessage>
                        </FormControl>
                      </Box>
                      <Box w="40%">
                        <FormControl
                          id="valueOfPasive"
                          isInvalid={errors.valueOfPasive ? true : false}
                        >
                          <FormLabel>Valor del Pasivo</FormLabel>
                          <Input
                            type="number"
                            min="0.00"
                            name="valueOfPasive"
                            onChange={e => InputChangePasivos(e, i)}
                          />
                          <FormErrorMessage>
                            {errors.valueOfPasive?.type === "required" &&
                              "Es requerido"}
                          </FormErrorMessage>
                        </FormControl>
                      </Box>
                      <Box w="10%" d="flex" alignSelf="flex-end" >
                        {PasivosList.length !== 1 && (
                          <IconButton
                            bg="red.400"
                            onClick={() => RemoveClickPasivos(i)}
                            aria-label="Delete"
                            icon={<MinusIcon color="white" />}
                          />
                        )}
                      </Box>
                    </Flex>
                    <Box d="block" w="100%" my="2">
                      {PasivosList.length - 1 === i && PasivosList.length < 10 && (
                        <Button
                          colorScheme="teal"
                          variant="outline"
                          onClick={AddClickPasivos}
                        >
                          Agregar nuevo Pasivo
                          <AddIcon ml="2" />
                        </Button>
                      )}
                    </Box>
                  </Fragment>
                );
              })}

              <Heading mt="4" size="sm">
                Patrominio
              </Heading>
              <Divider my="3"/>
              {PatrimonioList.map((_, i) => {
                return (
                  <Fragment key={i}>
                    <Flex gridGap="5">
                      <Box w="40%">
                        <FormControl
                          isInvalid={errors.nameOfPatrimonio ? true : false}
                        >
                          <FormLabel>Nombre del Patrominio</FormLabel>
                          <Input type="text"
                          name="nameOfPatrimonio"
                            onChange={e => InputChangePatrimonio(e, i)}
                          />
                          <FormErrorMessage>
                            {errors.nameOfPasive?.type === "required" &&
                              "Es requerido"}
                          </FormErrorMessage>
                        </FormControl>
                      </Box>
                      <Box w="40%">
                        <FormControl
                          id="valueOfPatrimonio"
                          isInvalid={errors.valueOfPasive ? true : false}
                        >
                          <FormLabel>Valor del Patrominio</FormLabel>
                          <Input
                            type="number"
                            min="0.00"
                            name="valueOfPatrimonio"
                            onChange={e => InputChangePatrimonio(e, i)}
                          />
                          <FormErrorMessage>
                            {errors.valueOfPasive?.type === "required" &&
                              "Es requerido"}
                          </FormErrorMessage>
                        </FormControl>
                      </Box>
                      <Box w="10%" d="flex" alignSelf="flex-end" >
                        {PatrimonioList.length !== 1 && (
                          <IconButton
                            bg="red.400"
                            onClick={() => RemoveClickPatrimonio(i)}
                            aria-label="Delete"
                            icon={<MinusIcon color="white" />}
                          />
                        )}
                      </Box>
                    </Flex>
                    <Box d="block" w="100%" my="2">
                      {PatrimonioList.length - 1 === i && PatrimonioList.length < 10 && (
                        <Button
                          colorScheme="teal"
                          variant="outline"
                          onClick={AddClickPatrimonio}
                        >
                          Agregar nuevo patrimonio
                          <AddIcon ml="2" />
                        </Button>
                      )}
                    </Box>
                  </Fragment>
                );
              })}
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
