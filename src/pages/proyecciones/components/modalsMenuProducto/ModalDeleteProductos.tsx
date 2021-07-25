import React from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  MenuItem,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { AxiosError, AxiosResponse } from "axios";
import { deleteProdcuctoService } from "pages/proyecciones/servicios/Productos/deleteProducto.service";

export default function ModalDeleteProducto({ data, getProductos }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const toast = useToast();
  const deleteProducto = () => {
    deleteProdcuctoService("proyeccion/producto", data.id).then(
      (res: AxiosResponse) => {
        if (res.status === 200) {
          toast({
            title: "Producto eliminado",
            description: "se elimino el producto correctamente",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          getProductos();
          onClose();
        }
      }
    ).catch( (error: AxiosError) => {
      if (error){
        toast({
          title: "Error",
          description: "se produjo un error al eliminar el producto",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    });
  };
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
          <AlertDialogHeader>
            ¿Esta seguro que queire eliminar el Producto ?
          </AlertDialogHeader>
          <AlertDialogCloseButton />

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3} onClick={deleteProducto}>
              Eliminar el activo {data.name}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
