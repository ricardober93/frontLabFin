import { EditIcon } from '@chakra-ui/icons'
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Checkbox, FormControl, FormLabel, Input, MenuItem, useDisclosure, useToast, Wrap, WrapItem } from '@chakra-ui/react'
import { AxiosError, AxiosResponse } from 'axios'
import { updateSalario } from 'Features/proyecciones/servicios/Salario/update.service'
import React from 'react'

export default function ModalEditSalario({ data, getAllSalarios } : any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const [salarioRef, setSalarioRef] = React.useState({});
  const toast = useToast();
  const onChangeSalario = (e: any) => {
    setSalarioRef({ ...salarioRef, [e.target.name]: e.target.value });
  };

  const onClickUpdateSalario = () => {

    updateSalario("proyeccion/salario", data.id, salarioRef)
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          toast({
            title: "Producto actualizado",
            description: "se actualizo el producto correctamente",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          getAllSalarios();
          onClose();
        }
      })
      .catch((err: AxiosError) => {
        if (err)
          toast({
            title: "Producto no actualizado",
            description: "No se pudo actualizar el producto",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
      });
  };

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
          <AlertDialogHeader>Quiere modificar el Patrimonio</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>

            <Wrap spacing="1em" align="center">
              <WrapItem>
                <FormControl >
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    onChange={onChangeSalario}
                    defaultValue={data.name}
                  />
                </FormControl>
              </WrapItem>
              <WrapItem>
                <FormControl >
                  <FormLabel>Salario</FormLabel>
                  <Input
                    type="text"
                    name="salary"
                    onChange={onChangeSalario}
                    defaultValue={data.salary}
                  />
                </FormControl>
              </WrapItem>
              <WrapItem>
                <FormControl >
                  <FormLabel>Dias Trabajados</FormLabel>
                  <Input
                    type="text"
                    name="dayWorks"
                    onChange={onChangeSalario}
                    defaultValue={data.day_works}
                  />
                </FormControl>
              </WrapItem>
              <WrapItem>
                <FormControl >
                  <FormLabel>Porcentaje de Pension</FormLabel>
                  <Input
                    type="text"
                    name="pension"
                    onChange={onChangeSalario}
                    defaultValue={data.pension}
                  />
                </FormControl>
              </WrapItem>
              <WrapItem>
                <FormControl >
                  <FormLabel>Porcentaje de salud</FormLabel>
                  <Input
                    type="text"
                    name="salud"
                    onChange={onChangeSalario}
                    defaultValue={data.salud}
                  />
                </FormControl>
              </WrapItem>
              <WrapItem>
                <Checkbox name="transport"
                    onChange={onChangeSalario}  defaultIsChecked={data.transport}>
                  Auxilio de Transporte
                </Checkbox>
              </WrapItem>
              <WrapItem>
                <Checkbox name="comision"
                    onChange={onChangeSalario} defaultIsChecked={data.comision}>
                  Comision
                </Checkbox>
              </WrapItem>
            </Wrap>

          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3} onClick={onClickUpdateSalario}>
              Actualizar {data.name}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
