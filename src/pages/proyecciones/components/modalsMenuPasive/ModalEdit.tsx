import { EditIcon } from '@chakra-ui/icons'
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, FormControl, FormLabel, Input, MenuItem, useDisclosure } from '@chakra-ui/react'
import React from 'react'

export default function ModalEditPasive({data}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    console.log(data)
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
          />
        </FormControl>

        <FormControl >
          <FormLabel>Valor</FormLabel>
          <Input
            type="text"
            defaultValue={data.valor}
          />
        </FormControl>

            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Button colorScheme="red" ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    )
}
