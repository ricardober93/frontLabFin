import React from "react";
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import ModalFormProductos from "../components/ModalForm/ModalFormProductos";
import TablePagination from "../components/TablePaginations/TablePagination";
import { MenuTableProducto } from "../components/modalsMenuProducto/MenuTableProductos";

export default function Productos() {
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
            accessor: "priceOnSale",
          },
          {
            Header: "Porcentaje de costo del producto",
            accessor: "rateCost",
          },
          {
            Header: "Porcentaje de crecimiento del producto",
            accessor: "rateRaise",
          },
          {
            Header: "Porcentaje de crecimiento del producto",
            accessor: "rateOfSale",
          },
          {
            Header: "Porcentaje de compra de contado",
            accessor: "rateOfPurchases",
          },
          {
            Header: "Acciones",
            isNumeric: true,
            Cell: ({ row, isNumeric = true }) => (
              // Use Cell to render an expander for each row.
              // We can use the getToggleRowExpandedProps prop-getter
              // to build the expander.
              <MenuTableProducto cell={row} />
            ),
          },
        ],
      },
    ],
    []
  );

  const dataActivos = React.useMemo(
    () => [
      {
        name: "line",
        quantity: "22",
        priceOnSale: 234,
        rateCost:12,
        rateRaise:45,
        rateOfSale:23,
        rateOfPurchases:34,
       },
      {
        name: "hola",
        quantity: "20",
        priceOnSale: 234,
        rateCost:12,
        rateRaise:45,
        rateOfSale:23,
        rateOfPurchases:34,
      },
      {
        name: "sofia",
        quantity: "25",
        priceOnSale: 234,
        rateCost:12,
        rateRaise:45,
        rateOfSale:23,
        rateOfPurchases:34,
      },
      {
        name: "Doña",
        quantity: "28",
        priceOnSale: 234,
        rateCost:12,
        rateRaise:45,
        rateOfSale:23,
        rateOfPurchases:34,
      },
      {
        name: "Romero",
        quantity: "26",
        priceOnSale: 234,
        rateCost:12,
        rateRaise:45,
        rateOfSale:23,
        rateOfPurchases:34,
      },
      {
        name: "Solo",
        quantity: "25",
        priceOnSale: 234,
        rateCost:12,
        rateRaise:45,
        rateOfSale:23,
        rateOfPurchases:34,
      },
      {
        name: "line",
        quantity: "15",
        priceOnSale: 234,
        rateCost:12,
        rateRaise:45,
        rateOfSale:23,
        rateOfPurchases:34,
      },
      {
        name: "hola",
        quantity: "12",
        priceOnSale: 234,
        rateCost:12,
        rateRaise:45,
        rateOfSale:23,
        rateOfPurchases:34,
      },
      {
        name: "sofia",
        quantity: "7",
        priceOnSale: 234,
        rateCost:12,
        rateRaise:45,
        rateOfSale:23,
        rateOfPurchases:34,
      },
      {
        name: "Doña",
        quantity: "2",
        priceOnSale: 234,
        rateCost:12,
        rateRaise:45,
        rateOfSale:23,
        rateOfPurchases:34,
      },
      {
        name: "Romero",
        quantity: "1",
        priceOnSale: 234,
        rateCost:12,
        rateRaise:45,
        rateOfSale:23,
        rateOfPurchases:34,
      },
      {
        name: "Solo",
        quantity: "20",
        priceOnSale: 234,
        rateCost:12,
        rateRaise:45,
        rateOfSale:23,
        rateOfPurchases:34,
      },
      {
        name: "line",
        quantity: "1",
        priceOnSale: 234,
        rateCost:12,
        rateRaise:45,
        rateOfSale:23,
        rateOfPurchases:34,
      },
      {
        name: "hola",
        quantity: "2",
        priceOnSale: 234,
        rateCost:12,
        rateRaise:45,
        rateOfSale:23,
        rateOfPurchases:34,
      },
      {
        name: "sofia",
        quantity: "30",
        priceOnSale: 234,
        rateCost:12,
        rateRaise:45,
        rateOfSale:23,
        rateOfPurchases:34,
      },
      {
        name: "Doña",
        quantity: "100",
        priceOnSale: 234,
        rateCost:12,
        rateRaise:45,
        rateOfSale:23,
        rateOfPurchases:34,
      },
      {
        name: "Romero",
        quantity: "20",
        priceOnSale: 234,
        rateCost:12,
        rateRaise:45,
        rateOfSale:23,
        rateOfPurchases:34,
      },
      {
        name: "Solo",
        quantity: "100",
        priceOnSale: 234,
        rateCost:12,
        rateRaise:45,
        rateOfSale:23,
        rateOfPurchases:34,
      },
    ],
    []
  );

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
            <ModalFormProductos />
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
        <TablePagination columns={columnsActivos} data={dataActivos} />
      </Box>
    </Box>
  );
}
