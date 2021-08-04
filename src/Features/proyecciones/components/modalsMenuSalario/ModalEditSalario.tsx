import { EditIcon } from '@chakra-ui/icons'
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Checkbox, FormControl, FormLabel, Input, MenuItem, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'

export default function ModalEditSalario({ data, getAllSalarios } : any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
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
                    defaultValue={data.name}
                  />
                </FormControl>
              </WrapItem>
              <WrapItem>
                <FormControl >
                  <FormLabel>Salario</FormLabel>
                  <Input
                    type="text"
                    defaultValue={data.salary}
                  />
                </FormControl>
              </WrapItem>
              <WrapItem>
                <FormControl >
                  <FormLabel>Dias Trabajados</FormLabel>
                  <Input
                    type="text"
                    defaultValue={data.dayWorks}
                  />
                </FormControl>
              </WrapItem>
              <WrapItem>
                <FormControl >
                  <FormLabel>Porcentaje de Pension</FormLabel>
                  <Input
                    type="text"
                    defaultValue={data.pension}
                  />
                </FormControl>
              </WrapItem>
              <WrapItem>
                <FormControl >
                  <FormLabel>Porcentaje de salud</FormLabel>
                  <Input
                    type="text"
                    defaultValue={data.salud}
                  />
                </FormControl>
              </WrapItem>
              <WrapItem>
                <Checkbox   defaultIsChecked={data.transport}>
                  Auxilio de Transporte
                </Checkbox>
              </WrapItem>
              <WrapItem>
                <Checkbox defaultIsChecked={data.comision}>
                  Comision
                </Checkbox>
              </WrapItem>
            </Wrap>








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
