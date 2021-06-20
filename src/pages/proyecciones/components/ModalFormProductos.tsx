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
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  name: string;
  quantity: number;
  priceOnSale: number;
  rateRaise: number;
  rateCost: number;
  rateOfSale: number;
  rateOfPurchases: number;
}

export default function ModalFormProductos() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
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
                    id="priceOnSale"
                    isInvalid={errors.priceOnSale ? true : false}
                  >
                    <FormLabel>precio de venta del producto</FormLabel>
                    <Input
                      type="number"
                      {...register("priceOnSale", {
                        required: true,
                      })}
                    />
                    <FormErrorMessage>
                      {errors.priceOnSale?.type === "required" &&
                        "Es requerido"}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
                <Box w="50%">
                  <FormControl
                    id="rateCost"
                    isInvalid={errors.rateCost ? true : false}
                  >
                    <FormLabel>Porcentaje de costo del producto</FormLabel>
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      {...register("rateCost", {
                        required: true,
                      })}
                    />
                    <FormErrorMessage>
                      {errors.rateCost?.type === "required" && "Es requerido"}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    id="rateRaise"
                    isInvalid={errors.rateRaise ? true : false}
                  >
                    <FormLabel>
                      Porcentaje de crecimiento del producto
                    </FormLabel>
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      {...register("rateRaise", {
                        required: true,
                      })}
                    />
                    <FormErrorMessage>
                      {errors.rateRaise?.type === "required" && "Es requerido"}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    id="rateOfSale"
                    isInvalid={errors.rateOfSale ? true : false}
                  >
                    <FormLabel>
                      Porcentaje de crecimiento del producto
                    </FormLabel>
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      {...register("rateOfSale", {
                        required: true,
                      })}
                    />
                    <FormErrorMessage>
                      {errors.rateOfSale?.type === "required" && "Es requerido"}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    id="rateOfPurchases"
                    isInvalid={errors.rateOfPurchases ? true : false}
                  >
                    <FormLabel>Porcentaje de compra de contado</FormLabel>
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      {...register("rateOfPurchases", {
                        required: true,
                      })}
                    />
                    <FormErrorMessage>
                      {errors.rateOfPurchases?.type === "required" &&
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
