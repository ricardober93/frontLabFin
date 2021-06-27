import React from 'react'
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import { MenuTable } from "../components/MenuTable";
import TablePagination from "../components/TablePagination";
import ModalFormVariable from '../components/ModalFormVariable';

export default function VariablePage() {
    const columnsVariable= React.useMemo(
        () => [
          {
            Header: "Variable",
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
                Header: "Valor",
                accessor: "value",
              },
              {
                Header: "Acciones",
                isNumeric: true,
                Cell: ({ row, isNumeric = true }) => (
                  // Use Cell to render an expander for each row.
                  // We can use the getToggleRowExpandedProps prop-getter
                  // to build the expander.
                  <MenuTable cell={row} />
                ),
              },
            ],
          },
        ],
        []
      );
    
      const dataVariable= React.useMemo(
        () => [
          {
            name: "line",
            quantity: "22",
            value: "field",
          },
          {
            name: "hola",
            quantity: "20",
            value: "mundo",
          },
          {
            name: "sofia",
            quantity: "25",
            value: "Marcena",
          },
          {
            name: "Doña",
            quantity: "28",
            value: "Lau",
          },
          {
            name: "Romero",
            quantity: "26",
            value: "Homero",
          },
          {
            name: "Solo",
            quantity: "25",
            value: "on the dark",
          },
          {
            name: "line",
            quantity: "15",
            value: "field",
          },
          {
            name: "hola",
            quantity: "12",
            value: "mundo",
          },
          {
            name: "sofia",
            quantity: "7",
            value: "Marcena",
          },
          {
            name: "Doña",
            quantity: "2",
            value: "Lau",
          },
          {
            name: "Romero",
            quantity: "1",
            value: "Homero",
          },
          {
            name: "Solo",
            quantity: "20",
            value: "on the dark",
          },
          {
            name: "line",
            quantity: "1",
            value: "field",
          },
          {
            name: "hola",
            quantity: "2",
            value: "mundo",
          },
          {
            name: "sofia",
            quantity: "30",
            value: "Marcena",
          },
          {
            name: "Doña",
            quantity: "100",
            value: "Lau",
          },
          {
            name: "Romero",
            quantity: "20",
            value: "Homero",
          },
          {
            name: "Solo",
            quantity: "100",
            value: "on the dark",
          },
        ],
        []
      );
    
    return (
        <Box my="5">
        <Flex>
          <Heading>Variable</Heading>
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
              <ModalFormVariable />
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
          <TablePagination columns={columnsVariable} data={dataVariable} />
        </Box>
      </Box>
    )
}
