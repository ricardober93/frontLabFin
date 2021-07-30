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
import { deletePatrimonioService } from "Features/proyecciones/servicios/baseInicial/deletePatrimonio.service";
import { AxiosResponse } from "axios";

export default function ModalDeletePatrimonio({ data, getAllPatrimonio }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const toast = useToast();

  const deletePatrimonio = () => {
    deletePatrimonioService("/proyeccion/patrimonio", data.id).then(
      (res: AxiosResponse) => {
        if (res.status === 200) {
            toast({
              title: "Pasivo eliminado",
              description: "se elimine el pasivo correctamente",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          getAllPatrimonio();
          onClose();
        }
      }
    ).catch((error) =>{
      if (error) {
        toast({
          title: "error",
          description: "No se pudo eliminar el activo",
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
            ¿Esta seguro que queire eliminar el Patrimonio ?
          </AlertDialogHeader>
          <AlertDialogCloseButton />

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3} onClick={deletePatrimonio}>
              Eliminar el activo {data.name}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
