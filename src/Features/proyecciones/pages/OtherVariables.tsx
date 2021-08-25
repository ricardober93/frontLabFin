import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import AlertMessage from 'component/AlertMessage';
import React, { ReactElement, useEffect, useState } from 'react'
import ModalFormOtherVariable from '../components/ModalForm/ModalOtherVariable';
import MenuOtherVariables from '../components/modaMenuOtherVariables/MenuOtherVariables';
import TablePagination from '../components/TablePaginations/TablePagination';
import { getOtherVariable } from '../servicios/otherVariable/get.services';


export default function OtherVariables(): ReactElement {
  const [allVariables, setVariable] = useState([])
  const [error, setError] = useState()

  const AllOtherVariable = () => {
    getOtherVariable("proyeccion/otherVariables").then(res => setVariable(res.data)).catch(err => setError(err))
  }

  useEffect(() => {
    AllOtherVariable()
  }, [])



  const columnsVariable = React.useMemo(
    () => [
      {
        Header: "Otras Variable",
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
            isNumeric: true,
            Cell: ({ row, isNumeric = true }) => (
              // Use Cell to render an expander for each row.
              // We can use the getToggleRowExpandedProps prop-getter
              // to build the expander.
              <MenuOtherVariables
                cell={row}
                AllOtherVariable={AllOtherVariable} />
            ),
          },
        ],
      },
    ],
    []
  );

  return (
    <Box my="5">
      {
        error ? <AlertMessage
          status="error"
          tittle="No hay Variables"
          message="no hay varaibles creados"
        /> : null
      }
      <Flex>
        <Heading>Otras Variable</Heading>
        <Spacer />
        <Box>
          <Flex gridGap="5">
            <ModalFormOtherVariable AllOtherVariable={AllOtherVariable}  />
          
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
          null
        )}

      </Box>
    </Box>
  )
}
