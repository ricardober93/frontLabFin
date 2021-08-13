import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import ModalFormSalario from "../components/ModalForm/ModalFormSalario";
import { MenuTableSalario } from "../components/modalsMenuSalario/MenuTableSalario";
import TablePaginationSalario from "../components/TablePaginations/TablePaginationSalarios";
import { Isalary } from "../types/type";
import { getSalarios } from "../servicios/Salario/get.service";

export default function Salario() {

  const [salary, setSalary] = useState<Isalary[]>([])
  const [error, setError] = useState()
  const getAllSalarios = () => {
    getSalarios("proyeccion/salarios")
      .then((res) => setSalary(res.data))
      .catch((err) => setError(err));
  };

  useEffect(() => {
    getAllSalarios();
  }, []);

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
                accessor: "day_works",
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
                Cell: ({ row, isNumeric = true }:any) => (
                  // Use Cell to render an expander for each row.
                  // We can use the getToggleRowExpandedProps prop-getter
                  // to build the expander.
                  <MenuTableSalario cell={row} getAllSalarios={getAllSalarios} />
                ),
              },
            ],
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
              <ModalFormSalario getAllSalarios={getAllSalarios} />
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
         {
           salary ?  <TablePaginationSalario columns={columnsSalario} data={salary} /> : null
         }
         
        </Box>
      </Box>
    )
}
