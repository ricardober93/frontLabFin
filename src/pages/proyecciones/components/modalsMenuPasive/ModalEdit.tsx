import { EditIcon } from '@chakra-ui/icons'
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, FormControl, FormLabel, Input, MenuItem, useDisclosure, useToast } from '@chakra-ui/react'
import AlertMessage from 'component/AlertMessage'
import { updatePasivoService } from 'pages/proyecciones/servicios/updatePasivo.Service'
import React, { useState } from 'react'

export default function ModalEditPasive({data,getAllPasivo}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const newNamePasivo = React.useRef();
    const newValorPasivo = React.useRef();
    const [error, setError] = useState(false);
    const toast = useToast();


    const updatePasivo= () => {
      updatePasivoService("/proyeccion/pasivo", data.id, {
        name: newNamePasivo.current.value,
        valor: newValorPasivo.current.value,
      }).then((res) => {
        if (res.status === 200) {
          setTimeout(() => {
            toast({
              title: "Activo actualizado",
              description: "se actualizo e activo correctamente",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          }, 100);
  
          getAllPasivo();
          onClose();
        }
  
        if (res.status === 400) {
          setError(true);
        }
      });
    };
    return (
        <>
         <MenuItem  onClick={onOpen} icon={<EditIcon color="yellow.400" />}>
        Editar
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
            <AlertDialogHeader>Quiere modificar el Pasivo</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              
            <FormControl >
          <FormLabel>Nombre</FormLabel>
          <Input
            type="text"
            defaultValue={data.name}
            ref={newNamePasivo}
          />
        </FormControl>

        <FormControl >
          <FormLabel>Valor</FormLabel>
          <Input
            type="text"
            defaultValue={data.valor}
            ref={newValorPasivo}
          />
        </FormControl>
        {error ? (
              <AlertMessage
                status="error"
                tittle="Error"
                message="no se pudo actualizar el pasivo"
              />
            ) : null}
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Button colorScheme="yellow" ml={3} onClick={updatePasivo}>
                Editar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    )
}
