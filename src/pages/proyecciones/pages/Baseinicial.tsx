import { Box } from "@chakra-ui/react";
import React from "react";
import ModalFormBaseinicial from "../components/ModalForm/ModalFormBaseinicial";
import TablePagination from "../components/TablePagination";
import { MenuTable } from "../components/modalsMenuActive/MenuTable";
import { MenuTablePasive } from "../components/modalsMenuPasive/MenuTablePasive";
import { MenuTablePatrimonio } from "../components/modalsMenuPatrimonio/MenuTablePatrimonio";

export default function Baseinicial() {
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

    const columnsPasivos = React.useMemo(
        () => [
            {
                Header: "Pasivos",
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
                            <MenuTablePasive  cell={row} />
                        ),
                    },
                ],
            },

        ],
        []
    );

    const dataPasivos = React.useMemo(
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

    const columnsPatrimonio = React.useMemo(
        () => [
            {
                Header: "Patrimonio",
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
                            <MenuTablePatrimonio  cell={row} />
                        ),
                    },
                ],
            },

        ],
        []
    );

    const dataPatrimonio = React.useMemo(
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
        <Box as="section">
            <Box d="flex" marginY="2" justifyContent="flex-end">
                <ModalFormBaseinicial />
            </Box>
            <Box my="5" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="base">
                <TablePagination columns={columnsActivos} data={dataActivos} />
            </Box>

            <Box my="5" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="base">
                <TablePagination columns={columnsPasivos} data={dataPasivos} />
            </Box>

            <Box my="5" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="base">
                <TablePagination columns={columnsPatrimonio} data={dataPatrimonio} />
            </Box>
        </Box>
    );
}
