import { DeleteIcon } from '@chakra-ui/icons'
import { AlertDialog, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, MenuItem, useDisclosure, useToast } from '@chakra-ui/react'
import { AxiosError, AxiosResponse } from 'axios'
import { deleteSalario } from 'Features/proyecciones/servicios/Salario/delete.service'
import React from 'react'

export default function ModalDeleteSalario({ data, getAllSalarios }: any) {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const onClickDeleteSalario = () => {
    deleteSalario("proyeccion/salario", data.id).then(
      (res: AxiosResponse) => {
        if (res.status === 200) {
          toast({
            title: "Producto eliminado",
            description: "se elimino el producto correctamente",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          getAllSalarios();
          onClose();
        }
      }
    ).catch((error: AxiosError) => {
      if (error) {
        toast({
          title: "Error",
          description: "se produjo un error al eliminar el producto",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    });
  }
  return (
    <>
      <MenuItem onClick={onOpen} icon={<DeleteIcon color="red.400" />}>
        Eliminar
      </MenuItem>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>¿Esta seguro que queire eliminar el Producto ?</AlertDialogHeader>
          <AlertDialogCloseButton />

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3} onClick={onClickDeleteSalario} >
              Eliminar el activo {data.name}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
