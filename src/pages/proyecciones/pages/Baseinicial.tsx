import { Box } from "@chakra-ui/react";
import React from "react";
import TablePagination from "../components/TablePagination";

export default function Baseinicial() {
  const columns = React.useMemo(
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
          },
        ],
      },
      
    ],
    []
  );

  const data = React.useMemo(
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
      Soy Base inicial
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="base">
      <TablePagination columns={columns} data={data} />
      </Box>
    </div>
  );
}
