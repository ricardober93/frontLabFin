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
            Header: "",
            accessor: "Acciones",
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
      <TablePagination columns={columns} data={data} />
    </div>
  );
}
