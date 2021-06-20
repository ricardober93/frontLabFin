import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import { MenuTable } from "../components/MenuTable";
import TablePagination from "../components/TablePagination";

export default function Productos() {
    const columnsActivos = React.useMemo(
        () => [
            {
                Header: "Activos",
                columns: [
                    {
                        Header: "Nombre",
                        accessor: "name",
                    },
                    {
                        Header: "Valor",
                        accessor: "value",
                    },
                    {
                        Header: "Acciones",
                        isNumeric:true,
                        Cell: ({ row, isNumeric=true }) => (
                            // Use Cell to render an expander for each row.
                            // We can use the getToggleRowExpandedProps prop-getter
                            // to build the expander.
                            <MenuTable  cell={row} />
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
                value: "field",
            },
            {
                name: "hola",
                value: "mundo",
            },
            {
                name: "sofia",
                value: "Marcena",
            },
            {
                name: "Doña",
                value: "Lau",
            },
            {
                name: "Romero",
                value: "Homero",
            },
            {
                name: "Solo",
                value: "on the dark",
            },
            {
                name: "line",
                value: "field",
            },
            {
                name: "hola",
                value: "mundo",
            },
            {
                name: "sofia",
                value: "Marcena",
            },
            {
                name: "Doña",
                value: "Lau",
            },
            {
                name: "Romero",
                value: "Homero",
            },
            {
                name: "Solo",
                value: "on the dark",
            },
            {
                name: "line",
                value: "field",
            },
            {
                name: "hola",
                value: "mundo",
            },
            {
                name: "sofia",
                value: "Marcena",
            },
            {
                name: "Doña",
                value: "Lau",
            },
            {
                name: "Romero",
                value: "Homero",
            },
            {
                name: "Solo",
                value: "on the dark",
            },
        ],
        []
    );

  return (
    <div>
      <Flex>
        <Heading>Producto</Heading>
        <Spacer />
        <Box>
          <Flex gridGap="5">
            <Button _hover={{ bg:"blue.50", color:"blue.500" }} bg="blue.100" color="blue.800" >Proyeccion</Button>
            <Button _hover={{ bg:"teal.50", color:"teal.500" }} bg="teal.100" color="teal.800" >Producto</Button>
          </Flex>
        </Box>
      </Flex>
      <Box my="5" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="base">
                <TablePagination columns={columnsActivos} data={dataActivos} />
            </Box>

    </div>
  );
}
