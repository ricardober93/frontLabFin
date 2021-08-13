import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import { MenuTable } from "../components/modalsMenuActive/MenuTable";
import TablePagination from "../components/TablePaginations/TablePagination";
import ModalFormVariable from '../components/ModalForm/ModalFormVariable';
import { getVariable } from '../servicios/variable/get.service';
import AlertMessage from 'component/AlertMessage';

export default function VariablePage() {

  const [allVariables, setVariable] = useState([])
  const [error, setError] = useState()

  const getAllVariable = () => {
    getVariable("proyeccion/variables").then(res => setVariable(res.data)).catch(err => setError(err))
  }

  useEffect(() => {
    getAllVariable()
  }, [])

  const columnsVariable = React.useMemo(
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
              <MenuTable cell={row} getAllVariable={getAllVariable} />
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
            <ModalFormVariable getAllVariable={getAllVariable}/>
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
        {allVariables ? (
          <TablePagination columns={columnsVariable} data={allVariables} />
        ) : (
          <AlertMessage
            status="error"
            tittle="No hay Variables"
            message="no hay varaibles creados"
          />
        )}

      </Box>
    </Box>
  )
}
