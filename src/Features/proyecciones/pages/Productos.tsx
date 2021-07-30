import React, { useEffect } from "react";
import { Box, Button, Flex, Heading, Spacer, useToast } from "@chakra-ui/react";
import ModalFormProductos from "../components/ModalForm/ModalFormProductos";
import TablePagination from "../components/TablePaginations/TablePagination";
import { MenuTableProducto } from "../components/modalsMenuProducto/MenuTableProductos";
import { getAllProductos } from "../servicios/Productos/getProductos.service";
import { AxiosError, AxiosResponse } from "axios";
import AlertMessage from "component/AlertMessage";

export default function Productos() {
  const toast = useToast();
  const [allproductos, setProductos] = React.useState([]);

  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = () => {
    getAllProductos("proyeccion/productos")
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          setProductos(res.data);
        }
      })
      .catch((err: AxiosError) => {
        if (err) {
          toast({
            title: "Error.",
            description: "No se ha podido conseguir los productos",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      });
  };

  const columnsActivos = React.useMemo(
    () => [
      {
        Header: "Producto",
        columns: [
          {
            Header: "Nombre",
            accessor: "name",
          },
          {
            Header: "Cantidad",
            accessor: "quantity",
          },
          {
            Header: "precio de venta del producto",
            accessor: "price",
          },
          {
            Header: "Porcentaje de costo del producto",
            accessor: "rate_cost",
          },
          {
            Header: "Porcentaje de crecimiento del producto",
            accessor: "rate_raise",
          },
          {
            Header: "Porcentaje de venta del producto",
            accessor: "rate_of_sale",
          },
          {
            Header: "Porcentaje de compra de contado",
            accessor: "rate_of_purchases",
          },
          {
            Header: "Acciones",
            isNumeric: true,
            Cell: ({ row, isNumeric = true }) => (
              // Use Cell to render an expander for each row.
              // We can use the getToggleRowExpandedProps prop-getter
              // to build the expander.
              <MenuTableProducto cell={row} getProductos={getProductos} />
            ),
          },
        ],
      },
    ],
    []
  );

  const dataProductos = React.useMemo(() => [...allproductos], [allproductos]);

  return (
    <Box my="5">
      <Flex>
        <Heading>Producto</Heading>
        <Spacer />
        <Box>
          <Flex gridGap="5">
            <Button
              disabled
              _hover={{ bg: "blue.50", color: "blue.500" }}
              bg="blue.100"
              color="blue.800"
            >
              Proyeccion
            </Button>
            <ModalFormProductos getProductos={getProductos}/>
          </Flex>
        </Box>
      </Flex>
      <Box
        my="5"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="base"
      >
        {dataProductos ? (
          <TablePagination columns={columnsActivos} data={dataProductos} />
        ) : (
          <AlertMessage
            status="error"
            tittle="No hay Productos"
            message="no hay productos creados"
          />
        )}
      </Box>
    </Box>
  );
}
