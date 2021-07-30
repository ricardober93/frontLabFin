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
import { updatePatrimonioService } from "Features/proyecciones/servicios/baseInicial/updatePatrimonio.service";
import React from "react";

export default function ModalEditPatrimonio({ data, getAllPatrimonio }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const newNamePatrimonio = React.useRef();
  const newValorPatrimonio = React.useRef();
  const [error, setError] = React.useState(false);
  const toast = useToast();

  const updatePatrimonio = () => {
    updatePatrimonioService("/proyeccion/patrimonio", data.id, {
      name: newNamePatrimonio.current.value,
      valor: newValorPatrimonio.current.value,
    }).then((res: AxiosResponse) => {
      if (res.status === 200) {
        setTimeout(() => {
          toast({
            title: "Patrimonio actualizado",
            description: "se actualizo el patrimonio correctamente",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }, 100);

        getAllPatrimonio();
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
          <AlertDialogHeader>Quiere modificar el Patrimonio</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input
                type="text"
                defaultValue={data.name}
                ref={newNamePatrimonio}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Valor</FormLabel>
              <Input
                type="text"
                defaultValue={data.valor}
                ref={newValorPatrimonio}
              />
            </FormControl>
            {error ? (
              <AlertMessage
                status="error"
                tittle="Error"
                message="no se pudo actualizar el patrimonio"
              />
            ) : null}
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="yellow" ml={3} onClick={updatePatrimonio}>
              Editar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
