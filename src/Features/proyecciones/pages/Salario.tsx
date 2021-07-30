import React from "react";
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import ModalFormSalario from "../components/ModalForm/ModalFormSalario";
import { MenuTableSalario } from "../components/modalsMenuSalario/MenuTableSalario";
import TablePaginationSalario from "../components/TablePaginations/TablePaginationSalarios";

export default function Salario() {
    const columnsSalario = React.useMemo(
        () => [
          {
            Header: "Salario",
            columns: [
              {
                Header: "Nombre",
                accessor: "name",
              },
              {
                Header: "Salario",
                accessor: "salary",
              },
              {
                Header: "Dias Trabajados",
                accessor: "dayWorks",
              },
              {
                Header: "% de Pension",
                accessor: "pension",
              },
              {
                Header: "% de Salud",
                accessor: "salud",
              },
              {
                Header: "Aux. Transporte",
                accessor: "transport",
              },
              {
                Header: "Comision",
                accessor: "comision",
              },
              {
                Header: "Acciones",
                isNumeric: true,
                Cell: ({ row, isNumeric = true }) => (
                  // Use Cell to render an expander for each row.
                  // We can use the getToggleRowExpandedProps prop-getter
                  // to build the expander.
                  <MenuTableSalario cell={row} />
                ),
              },
            ],
          },
        ],
        []
      );
    
      const dataSalario = React.useMemo(
        () => [
          {
            name: "line",
            salary: "22",
            dayWorks: "field",
            pension: 24,
            salud:24,
            transport: true,
            comision:true,
          },
          {
            name: "hola",
            salary: "20",
            dayWorks: "mundo",
            pension: 24,
            salud:24,
            transport: true,
            comision:true,
          },
          {
            name: "sofia",
            salary: "25",
            dayWorks: "Marcena",
             pension: 24,
            salud:24,
            transport: true,
            comision:true,
          },
          {
            name: "Doña",
            salary: "28",
            dayWorks: "Lau",
             pension: 24,
            salud:24,
            transport: true,
            comision:true,
          },
          {
            name: "Romero",
            salary: "26",
            dayWorks: "Homero",
             pension: 24,
            salud:24,
            transport: true,
            comision:true,
          },
          {
            name: "Solo",
            salary: "25",
            dayWorks: "on the dark",
             pension: 24,
            salud:24,
            transport: true,
            comision:true,
          },
          {
            name: "line",
            salary: "15",
            dayWorks: "field",
             pension: 24,
            salud:24,
            transport: true,
            comision:true,
          },
          {
            name: "hola",
            salary: "12",
            dayWorks: "mundo",
             pension: 24,
            salud:24,
            transport: true,
            comision:true,
          },
          {
            name: "sofia",
            salary: "7",
            dayWorks: "Marcena",
             pension: 24,
            salud:24,
            transport: true,
            comision:true,
          },
          {
            name: "Doña",
            salary: "2",
            dayWorks: "Lau",
             pension: 24,
            salud:24,
            transport: true,
            comision:true,
          },
          {
            name: "Romero",
            salary: "1",
            dayWorks: "Homero",
             pension: 24,
            salud:24,
            transport: true,
            comision:true,
          },
          {
            name: "Solo",
            salary: "20",
            dayWorks: "on the dark",
             pension: 24,
            salud:24,
            transport: true,
            comision:true,
          },
          {
            name: "line",
            salary: "1",
            dayWorks: "field",
             pension: 24,
            salud:24,
            transport: true,
            comision:true,
          },
          {
            name: "hola",
            salary: "2",
            dayWorks: "mundo",
             pension: 24,
            salud:24,
            transport: true,
            comision:true,
          },
          {
            name: "sofia",
            salary: "30",
            dayWorks: "Marcena",
             pension: 24,
            salud:24,
            transport: true,
            comision:true,
          },
          {
            name: "Doña",
            salary: "100",
            dayWorks: "Lau",
             pension: 24,
            salud:24,
            transport: true,
            comision:true,
          },
          {
            name: "Romero",
            salary: "20",
            dayWorks: "Homero",
             pension: 24,
            salud:24,
            transport: true,
            comision:true,
          },
          {
            name: "Solo",
            salary: "100",
            dayWorks: "on the dark",
             pension: 24,
            salud:24,
            transport: true,
            comision:true,
          },
        ],
        []
      );
    
    return (
        <Box my="5">
        <Flex>
          <Heading>Salario</Heading>
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
              <ModalFormSalario />
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
          <TablePaginationSalario columns={columnsSalario} data={dataSalario} />
        </Box>
      </Box>
    )
}
