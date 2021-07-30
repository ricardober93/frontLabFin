import React from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import { AlertDialog, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, MenuItem, useDisclosure, useToast } from '@chakra-ui/react'
import { AxiosResponse } from 'axios';
import { deleteActivoService } from 'Features/proyecciones/servicios/baseInicial/deleteActivo.service';

export default function ModalDeleteActivo({ data , getAllActivo } : any) {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const DeleteActivo = () => {
    deleteActivoService(
      "/proyeccion/activo",
      data.id).then((res : AxiosResponse) => {
        if (res.status === 200) {

          setTimeout(() => {
            toast({
              title: "Activo eliminado",
              description: 'se elimine e activo correctamente',
              status: "success",
              duration: 9000,
              isClosable: true,
            })
          }, 100);
          getAllActivo()
          onClose()
        }

        if (res.status === 400) {
          toast({
            title: "error",
            description: 'No se pudo eliminar el activo',
            status: "error",
            duration: 9000,
            isClosable: true,
          })
        }

      })
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
          <AlertDialogHeader>¿Esta seguro que queire eliminar el activo?</AlertDialogHeader>
          <AlertDialogCloseButton />

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3} onClick={DeleteActivo}>
              Eliminar el activo {data.name}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
