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
} from "@chakra-ui/react";
import { AxiosResponse } from "axios";
import AlertMessage from "component/AlertMessage";
import { updateActivoService } from "Features/proyecciones/servicios/baseInicial/updateActivo.service";
import React from "react";
import { useState } from "react";

export default function ModalEditActivos({ data, getAllActivo }: any) {
  const toast = useToast();
  const [error, setError] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const newName = React.useRef();
  const newValor = React.useRef();

  const updateActivo = () => {
    updateActivoService("/proyeccion/activo", data.id, {
      name: newName.current.value,
      valor: newValor.current.value,
    }).then((res : AxiosResponse) => {
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

        getAllActivo();
        onClose();
      }

      if (res.status === 400) {
        setError(true);
      }
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
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Quiere modificar el activo</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input type="text" defaultValue={data.name} ref={newName} />
            </FormControl>

            <FormControl>
              <FormLabel>Valor</FormLabel>
              <Input type="text" defaultValue={data.valor} ref={newValor} />
            </FormControl>

            {error ? (
              <AlertMessage
                status="error"
                tittle="Error"
                message="no se pudo actualizar el activo"
              />
            ) : null}
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="yellow" ml={3} onClick={updateActivo}>
              Editar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
