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
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { createBalance } from "pages/proyecciones/servicios/baseInicial/createBalance.service";
import { Iactivos, Ipasivos, Ipatrimonio } from "pages/proyecciones/types/type";





export default function ModalFormBaseinicial({getBaseInicial}: any) {
  const toast = useToast()
  // const history = useHistory();
  const [ActivosList, setActivosList] = useState<Iactivos[]>([
    { name: "", valor: 0 },
  ]);
  const [PasivosList, setPasivosList] = useState<Ipasivos[]>([
    { name: "", valor: 0 },
  ]);
  const [PatrimonioList, setPatrimonioList] = useState<Ipatrimonio[]>([
    { name: "", valor: 0 },
  ]);

  const [error, setError] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const onSubmit = handleSubmit(async (d) => {
    console.log(ActivosList);
    console.log(PasivosList);
    console.log(PatrimonioList);

    try {
      const res = await createBalance( "proyeccion/base-inicial" ,ActivosList, PasivosList, PatrimonioList);
      console.log(res)
      if (res.status === "error") {
        setError(res.message)
        return
      }

      if (res.status === "good") {
        onClose()
        getBaseInicial()
        toast({
          title: "Se ha creado la base inicial",
          description: res.message,
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }

    } catch (error) {
      toast({
        title: "Se hay un  problema con el servidor",
        description: error,
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    }
  });

  const AddClickActivos = () => {
    setActivosList([...ActivosList, { name: "", valor: 0 }]);
  };

  const AddClickPasivos = () => {
    setPasivosList([...PasivosList, { name: "", valor: 0 }]);
  };

  const AddClickPatrimonio = () => {
    setPatrimonioList([...PatrimonioList, { name: "", valor: 0 }]);
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

  const InputChangeActivos = (e, index: number) => {
    const { name, value } = e.target;
    const list: any = [...ActivosList];
    list[index][name] = value;
    setActivosList(list);
  };


  const InputChangePasivos = (e, index: number) => {
    const { name, value } = e.target;
    const list: any = [...PasivosList];
    list[index][name] = value;
    setPasivosList(list);
  };


  const InputChangePatrimonio = (e, index: number) => {
    const { name, value } = e.target;
    const list: any = [...PatrimonioList];
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
                          id="name"
                          isInvalid={errors.name ? true : false}
                        >
                          <FormLabel>Nombre del Activo</FormLabel>
                          <Input type="text"
                            name="name"
                            onChange={e => InputChangeActivos(e, i)}
                          />
                          <FormErrorMessage>
                            {errors.name?.type === "required" &&
                              "Es requerido"}
                          </FormErrorMessage>
                        </FormControl>
                      </Box>
                      <Box w="40%">
                        <FormControl
                          id="valor"
                          isInvalid={errors.valor ? true : false}
                        >
                          <FormLabel>Valor del Activo</FormLabel>
                          <Input
                            type='number'
                            min="0.00"
                            name="valor"
                            onChange={e => InputChangeActivos(e, i)}
                          />
                          <FormErrorMessage>
                            {errors.valor?.type === "required" &&
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
              <Divider my="3" />

              {PasivosList.map((_, i) => {
                return (
                  <Fragment key={i}>
                    <Flex gridGap="5">
                      <Box w="40%">
                        <FormControl
                          isInvalid={errors.name ? true : false}
                        >
                          <FormLabel>Nombre del Pasivo</FormLabel>
                          <Input type="text"
                            name="name"
                            onChange={e => InputChangePasivos(e, i)}
                          />
                          <FormErrorMessage>
                            {errors.name?.type === "required" &&
                              "Es requerido"}
                          </FormErrorMessage>
                        </FormControl>
                      </Box>
                      <Box w="40%">
                        <FormControl
                          id="valor"
                          isInvalid={errors.valor ? true : false}
                        >
                          <FormLabel>Valor del Pasivo</FormLabel>
                          <Input
                            type="number"
                            min="0.00"
                            name="valor"
                            onChange={e => InputChangePasivos(e, i)}
                          />
                          <FormErrorMessage>
                            {errors.valor?.type === "required" &&
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
              <Divider my="3" />
              {PatrimonioList.map((_, i) => {
                return (
                  <Fragment key={i}>
                    <Flex gridGap="5">
                      <Box w="40%">
                        <FormControl
                          isInvalid={errors.name ? true : false}
                        >
                          <FormLabel>Nombre del Patrominio</FormLabel>
                          <Input type="text"
                            name="name"
                            onChange={e => InputChangePatrimonio(e, i)}
                          />
                          <FormErrorMessage>
                            {errors.name?.type === "required" &&
                              "Es requerido"}
                          </FormErrorMessage>
                        </FormControl>
                      </Box>
                      <Box w="40%">
                        <FormControl
                          id="valor"
                          isInvalid={errors.valor ? true : false}
                        >
                          <FormLabel>Valor del Patrominio</FormLabel>
                          <Input
                            type="number"
                            min="0.00"
                            name="valor"
                            onChange={e => InputChangePatrimonio(e, i)}
                          />
                          <FormErrorMessage>
                            {errors.valor?.type === "required" &&
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
            {error.length > 0 && (<Alert status="error">
              <AlertIcon />
              <AlertTitle mr={2}>Error al crear la base inicial</AlertTitle>
              <AlertDescription> {error} </AlertDescription>
              <CloseButton onClick={() => setError("")} position="absolute" right="8px" top="8px" />
            </Alert>)}
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
