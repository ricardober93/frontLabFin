import { DeleteIcon } from '@chakra-ui/icons'
import { AlertDialog, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, MenuItem, useDisclosure } from '@chakra-ui/react'
import React from 'react'

export default function ModalDeletePatrimonio({data}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    return (
        <>
        <MenuItem  onClick={onOpen} icon={<DeleteIcon color="red.400" />}>
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
           <AlertDialogHeader>¿Esta seguro que queire eliminar el Patrimonio ?</AlertDialogHeader>
           <AlertDialogCloseButton />

           <AlertDialogFooter>
             <Button ref={cancelRef} onClick={onClose}>
               No
             </Button>
             <Button colorScheme="red" ml={3}>
               Eliminar el activo {data.name}
             </Button>
           </AlertDialogFooter>
         </AlertDialogContent>
       </AlertDialog>
     </>
    )
}
