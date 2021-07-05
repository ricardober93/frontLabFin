import { EditIcon } from '@chakra-ui/icons'
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, FormControl, FormLabel, Input, MenuItem, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'

export default function ModalEditProducto({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  console.log(data)
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
        size="5xl"
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Quiere modificar el Patrimonio</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>

            <Wrap spacing="1em" align="center" >
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
                  <FormLabel>Cantidad</FormLabel>
                  <Input
                    type="text"
                    defaultValue={data.quantity}
                  />
                </FormControl>
              </WrapItem>
              <WrapItem>

                <FormControl >
                  <FormLabel>precio de venta del producto</FormLabel>
                  <Input
                    type="text"
                    defaultValue={data.priceOnSale}
                  />
                </FormControl>
              </WrapItem>
              <WrapItem>
                <FormControl >
                  <FormLabel>Porcentaje de costo del producto</FormLabel>
                  <Input
                    type="text"
                    defaultValue={data.rateCost}
                  />
                </FormControl>
              </WrapItem>
              <WrapItem>
                <FormControl >
                  <FormLabel>Porcentaje de crecimiento del producto</FormLabel>
                  <Input
                    type="text"
                    defaultValue={data.rateRaise}
                  />
                </FormControl>
              </WrapItem>
              <WrapItem>
                <FormControl >
                  <FormLabel>Porcentaje de crecimiento del productoo</FormLabel>
                  <Input
                    type="text"
                    defaultValue={data.rateOfSale}
                  />
                </FormControl>
              </WrapItem>
              <WrapItem>
                <FormControl >
                  <FormLabel>Porcentaje de compra de contado</FormLabel>
                  <Input
                    type="text"
                    defaultValue={data.rateOfPurchases}
                  />
                </FormControl>
              </WrapItem>
            </Wrap>

          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="teal" ml={3}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
