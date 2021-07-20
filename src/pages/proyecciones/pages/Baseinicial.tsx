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

    const getBaseInicial = () => {
        getPatrimonio().then((res) => setPatrimonio(res)).catch((err) => setErrorPatrimonio(err));
        getActivo().then((res) => setActivo(res)).catch((err) => setErrorActivo(err))
        getPasivo().then((res) => setPasivos(res)).catch((err) => setErrorPasivo(err))
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
                            <MenuTable cell={row} />
                        ),
                    },
                ],
            },

        ],
        []
    );

/*     const dataActivos =  React.useMemo(
        () =>  [...activos],
        []
    ) ; */
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
                            <MenuTablePasive cell={row} />
                        ),
                    },
                ],
            },

        ],
        []
    );

/*     const dataPasivos = React.useMemo(
        () => pasivos.length > 0 ? [...pasivos] : [],
        []
    ); */

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
                            <MenuTablePatrimonio cell={row} />
                        ),
                    },
                ],
            },

        ],
        []
    );

 /*    const dataPatrimonio = React.useMemo(
        () => patrimonio.length >  0 ? [...patrimonio] : [],
        []
    ); */


    return (
        <Box as="section">
            <Box d="flex" marginY="2" justifyContent="flex-end">
                <ModalFormBaseinicial getBaseInicial={getBaseInicial}/>
            </Box>
            <Box my="5" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="base">
                {activos.length > 0 ? <TablePagination columns={columnsActivos} data={activos} /> : <Text align="center">No tiene activos</Text>}

            </Box>

            <Box my="5" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="base">
                {pasivos.length > 0 ? <TablePagination columns={columnsPasivos} data={pasivos} /> : <Text align="center">No tiene patrimonio</Text>}

            </Box>

            <Box my="5" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="base">
                {patrimonio.length > 0 ? <TablePagination columns={columnsPatrimonio} data={patrimonio} /> : <Text align="center">No tiene patrimonio</Text>}
            </Box>
        </Box>
    );
}
