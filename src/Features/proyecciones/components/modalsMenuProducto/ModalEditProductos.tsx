import { EditIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  FormControl,
  FormLabel,
  Input,
  MenuItem,
  useDisclosure,
  useToast,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { AxiosError, AxiosResponse } from "axios";
import { updateProductoService } from "Features/proyecciones/servicios/Productos/updateProduct.service";
import { Iproduct } from "Features/proyecciones/types/type";
import React from "react";

interface Iprops {
  data: Iproduct;
  getProductos: Promise;
}

export default function ModalEditProducto({ data, getProductos }: Iprops) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [productRef, setProductRef] = React.useState({});
  const toast = useToast();
  const onChangeProduct = (e: any) => {
    setProductRef({ ...productRef, [e.target.name]: e.target.value });
  };

  const updateProduct = () => {
    updateProductoService("proyeccion/producto", data.id, productRef)
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          toast({
            title: "Producto actualizado",
            description: "se actualizo el producto correctamente",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          getProductos();
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
        size="5xl"
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Quiere modificar el Patrimonio</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <Wrap spacing="1em" align="center">
              <WrapItem>
                <FormControl>
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    onChange={onChangeProduct}
                    defaultValue={data.name}
                  />
                </FormControl>
              </WrapItem>
              <WrapItem>
                <FormControl>
                  <FormLabel>Cantidad</FormLabel>
                  <Input
                    type="text"
                    defaultValue={data.quantity}
                    name="quantity"
                    onChange={onChangeProduct}
                  />
                </FormControl>
              </WrapItem>
              <WrapItem>
                <FormControl>
                  <FormLabel>precio de venta del producto</FormLabel>
                  <Input
                    type="text"
                    name="price"
                    onChange={onChangeProduct}
                    defaultValue={data.price}
                  />
                </FormControl>
              </WrapItem>
              <WrapItem>
                <FormControl>
                  <FormLabel>Porcentaje de costo del producto</FormLabel>
                  <Input
                    type="text"
                    name="rate_cost"
                    onChange={onChangeProduct}
                    defaultValue={data.rate_cost}
                  />
                </FormControl>
              </WrapItem>
              <WrapItem>
                <FormControl>
                  <FormLabel>Porcentaje de crecimiento del producto</FormLabel>
                  <Input
                    type="text"
                    name="rate_raise"
                    onChange={onChangeProduct}
                    defaultValue={data.rate_raise}
                  />
                </FormControl>
              </WrapItem>
              <WrapItem>
                <FormControl>
                  <FormLabel>Porcentaje de venta del productoo</FormLabel>
                  <Input
                    type="text"
                    name="rate_of_sale"
                    onChange={onChangeProduct}
                    defaultValue={data.rate_of_sale}
                  />
                </FormControl>
              </WrapItem>
              <WrapItem>
                <FormControl>
                  <FormLabel>Porcentaje de compra de contado</FormLabel>
                  <Input
                    type="text"
                    name="rate_of_purchases"
                    onChange={onChangeProduct}
                    defaultValue={data.rate_of_purchases}
                  />
                </FormControl>
              </WrapItem>
            </Wrap>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button
              disabled={!(Object.getOwnPropertyNames(productRef).length > 0)}
              colorScheme="yellow"
              ml={3}
              onClick={updateProduct}
            >
              Editar producto
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
