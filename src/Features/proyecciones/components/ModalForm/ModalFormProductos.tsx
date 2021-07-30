import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AxiosError, AxiosResponse } from "axios";
import { createProducto } from "Features/proyecciones/servicios/Productos/createProducto.service";
import { Iproduct } from "Features/proyecciones/types/type";

export default function ModalFormProductos({ getProductos }: any) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iproduct>({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const onSubmit: SubmitHandler<Iproduct> = (data) => {
    console.log(data);
    createProducto("proyeccion/producto", data)
      .then((res: AxiosResponse) => {
        console.log(res)
        if (res.status === 201) {
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
      .catch((error: AxiosError) => {
        toast({
          title: "Problemas para crear el producto",
          description: "se produjo un error al producto",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };
  return (
    <>
      <Button
        _hover={{ bg: "teal.50", color: "teal.500" }}
        bg="teal.100"
        color="teal.800"
        onClick={onOpen}
      >
        Agregar Producto
      </Button>

      <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader> Agregar Producto</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex gridGap="5">
                <Box w="50%">
                  <FormControl id="name" isInvalid={errors.name ? true : false}>
                    <FormLabel>Nombre del producto</FormLabel>
                    <Input
                      type="text"
                      {...register("name", {
                        required: true,
                      })}
                    />
                    <FormErrorMessage>
                      {errors.name?.type === "required" && "Es requerido"}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    id="quantity"
                    isInvalid={errors.quantity ? true : false}
                  >
                    <FormLabel>cantidad del producto</FormLabel>
                    <Input
                      type="number"
                      {...register("quantity", {
                        required: true,
                      })}
                    />
                    <FormErrorMessage>
                      {errors.quantity?.type === "required" && "Es requerido"}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    id="price"
                    isInvalid={errors.price ? true : false}
                  >
                    <FormLabel>precio de venta del producto</FormLabel>
                    <Input
                      type="number"
                      {...register("price", {
                        required: true,
                      })}
                    />
                    <FormErrorMessage>
                      {errors.price?.type === "required" && "Es requerido"}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
                <Box w="50%">
                  <FormControl
                    id="inventary_final"
                    isInvalid={errors.inventary_final ? true : false}
                  >
                    <FormLabel>Porcentaje de costo del producto</FormLabel>
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      {...register("inventary_final", {
                        required: true,
                      })}
                    />
                    <FormErrorMessage>
                      {errors.inventary_final?.type === "required" && "Es requerido"}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    id="rate_raise"
                    isInvalid={errors.rate_raise ? true : false}
                  >
                    <FormLabel>
                      Porcentaje de crecimiento del producto
                    </FormLabel>
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      {...register("rate_raise", {
                        required: true,
                      })}
                    />
                    <FormErrorMessage>
                      {errors.rate_raise?.type === "required" && "Es requerido"}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    id="rate_of_sale"
                    isInvalid={errors.rate_of_sale ? true : false}
                  >
                    <FormLabel>
                      Porcentaje de crecimiento del producto
                    </FormLabel>
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      {...register("rate_of_sale", {
                        required: true,
                      })}
                    />
                    <FormErrorMessage>
                      {errors.rate_of_sale?.type === "required" &&
                        "Es requerido"}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    id="rate_of_purchases"
                    isInvalid={errors.rate_of_purchases ? true : false}
                  >
                    <FormLabel>Porcentaje de compra de contado</FormLabel>
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      {...register("rate_of_purchases", {
                        required: true,
                      })}
                    />
                    <FormErrorMessage>
                      {errors.rate_of_purchases?.type === "required" &&
                        "Es requerido"}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost" type="submit">
                Enviar
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
