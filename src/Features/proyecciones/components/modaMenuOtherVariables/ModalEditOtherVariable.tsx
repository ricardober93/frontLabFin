import { EditIcon } from '@chakra-ui/icons';
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, FormControl, FormLabel, Input, MenuItem, useDisclosure, useToast, Wrap, WrapItem } from '@chakra-ui/react';
import { AxiosError, AxiosResponse } from 'axios';
import { updateOtherVariable } from 'Features/proyecciones/servicios/otherVariable/update.service';
import React, { ReactElement } from 'react'

function ModalEditOtherVariable({ data, AllOtherVariable }: any): ReactElement {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const [variableRef, setVaraibleRef] = React.useState({});
  const toast = useToast();
  const onChangeVariable = (e: any) => {
    setVaraibleRef({ ...variableRef, [e.target.name]: e.target.value });
  };
  
  const onClickUpdateOtherVariable = () => {
    updateOtherVariable("proyeccion/otherVariable", data.id, variableRef)
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          toast({
            title: "variable actualizado",
            description: res.data.message,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          AllOtherVariable();
          onClose();
        }
      })
      .catch((err: AxiosError) => {
        console.log(err)
        if (err)
          toast({
            title: "variable no actualizado",
            description: "No se pudo actualizar el variable",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
      });
  }

  return (
    <>
      <MenuItem onClick={onOpen} icon={<EditIcon color="yellow.400" />}>
        Editar
      </MenuItem>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        size="3xl"
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Quieres modificar la variable?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>

            <Wrap spacing="1em" align="center">
              <WrapItem>
                <FormControl >
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    onChange={onChangeVariable}
                    defaultValue={data?.name}
                  />
                </FormControl>
              </WrapItem>
              <WrapItem>
                <FormControl >
                  <FormLabel>Valor</FormLabel>
                  <Input
                    type="text"
                    name="value"
                    onChange={onChangeVariable}
                    defaultValue={data?.value}
                  />
                </FormControl>
              </WrapItem>

            </Wrap>

          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="yellow" ml={3} onClick={onClickUpdateOtherVariable}>
              Actualizar {data?.name}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default ModalEditOtherVariable
