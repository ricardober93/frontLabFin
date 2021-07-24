import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ModalFormBaseinicial from "../components/ModalForm/ModalFormBaseinicial";
import TablePagination from "../components/TablePaginations/TablePagination";
import { MenuTable } from "../components/modalsMenuActive/MenuTable";
import { MenuTablePasive } from "../components/modalsMenuPasive/MenuTablePasive";
import { MenuTablePatrimonio } from "../components/modalsMenuPatrimonio/MenuTablePatrimonio";
import { getPatrimonio } from "../servicios/patrominio.service";
import { getActivo } from "../servicios/activo.service";
import { getPasivo } from "../servicios/pasivo.service";

export default function Baseinicial() {

    const [patrimonio, setPatrimonio] = useState([]);
    const [activos, setActivo] = useState([]);
    const [pasivos, setPasivos] = useState([]);

    const [errorPatrimonio, setErrorPatrimonio] = useState();
    const [errorActivo, setErrorActivo] = useState();
    const [errorPasivo, setErrorPasivo] = useState();
    useEffect(() => {
        getBaseInicial()
    }, [])

    const getAllActivo = () => {
        getActivo("/proyeccion/activo")
            .then((res) => setActivo(res.data))
            .catch((err) => setErrorActivo(err))
       
    }

    const getAllPasivo = () => {
        getPasivo("/proyeccion/pasivo")
        .then((res) => setPasivos(res.data))
        .catch((err) => setErrorPasivo(err))
    }
    
    const getAllPatrimonio = () => {
        getPatrimonio("/proyeccion/patrimonio")
        .then((res) => setPatrimonio(res.data))
        .catch((err) => setErrorPatrimonio(err));

    }

    const getBaseInicial = () => {
        getAllActivo()
        getAllPasivo()
        getAllPatrimonio()
    }


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
                        accessor: "valor",
                    },
                    {
                        Header: "Acciones",
                        isNumeric: true,
                        Cell: ({ row, isNumeric = true }) => (
                            // Use Cell to render an expander for each row.
                            // We can use the getToggleRowExpandedProps prop-getter
                            // to build the expander.
                            <MenuTable cell={row} getAllActivo={getAllActivo}/>
                        ),
                    },
                ],
            },

        ],
        []
    );

    const dataActivos = React.useMemo(
        () => [...activos],
        [activos]
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
                        accessor: "valor",
                    },
                    {
                        Header: "Acciones",
                        isNumeric: true,
                        Cell: ({ row, isNumeric = true }) => (
                            // Use Cell to render an expander for each row.
                            // We can use the getToggleRowExpandedProps prop-getter
                            // to build the expander.
                            <MenuTablePasive cell={row} getAllPasivo={getAllPasivo} />
                        ),
                    },
                ],
            },

        ],
        []
    );

    const dataPasivos = React.useMemo(
        () => [...pasivos],
        [pasivos]
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
                        accessor: "valor",
                    },
                    {
                        Header: "Acciones",
                        isNumeric: true,
                        Cell: ({ row, isNumeric = true }) => (
                            // Use Cell to render an expander for each row.
                            // We can use the getToggleRowExpandedProps prop-getter
                            // to build the expander.
                            <MenuTablePatrimonio cell={row} getAllPatrimonio={getAllPatrimonio} />
                        ),
                    },
                ],
            },

        ],
        []
    );

    const dataPatrimonio = React.useMemo(
        () => [...patrimonio],
        [patrimonio]
    );


    return (
        <Box as="section">

            {
                errorPatrimonio ? <Box>Error</Box> : null
            }

            {
                errorActivo ? <Box>Error</Box> : null
            }
            {
                errorPasivo ? <Box>Error</Box> : null
            }
            <Box d="flex" marginY="2" justifyContent="flex-end">
                <ModalFormBaseinicial getBaseInicial={getBaseInicial} />
            </Box>
            <Box my="5" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="base">
                {activos.length > 0 ? <TablePagination columns={columnsActivos} data={dataActivos} /> : <Text align="center">No tiene activos</Text>}

            </Box>

            <Box my="5" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="base">
                {pasivos.length > 0 ? <TablePagination columns={columnsPasivos} data={dataPasivos} /> : <Text align="center">No tiene patrimonio</Text>}

            </Box>

            <Box my="5" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="base">
                {patrimonio.length > 0 ? <TablePagination columns={columnsPatrimonio} data={dataPatrimonio} /> : <Text align="center">No tiene patrimonio</Text>}
            </Box>
        </Box>
    );
}
