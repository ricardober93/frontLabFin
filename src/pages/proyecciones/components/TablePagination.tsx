import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Box,
  Input,
  Spacer,
  Select,
  Button,
} from "@chakra-ui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@chakra-ui/icons";
import { useTable, usePagination } from "react-table";
import { MenuTable } from "./MenuTable";

export default function TablePagination({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );
  return (
    <>
      <Table colorScheme="telegram" {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps()}>{column.render("Header")}</Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Td {...cell.getCellProps()}>{cell.render("Cell")}  <MenuTable cell={cell} />  </Td>
                   
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      {/* 
          Pagination can be built however you'd like. 
          This is just a very basic UI implementation:
        */}
      <Box
        width="100%"
        d="flex"
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        p="3"
      >
        <Box>
          <Button p="2" mx="2" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <ArrowLeftIcon w={3} h={3} />
          </Button>
          <Button
            p="2"
            mx="2"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <ChevronLeftIcon w={6} h={6} />
          </Button>
          <Button p="2"  mx="2" onClick={() => nextPage()} disabled={!canNextPage}>
            <ChevronRightIcon w={6} h={6} />
          </Button>
          <Button
            p="2"
            mx="2"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <ArrowRightIcon w={3} h={3} />
          </Button>
          <span>
            Page
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
        </Box>
        <Spacer />
        <Box>
          <span>
            | Ir a la pagina:{" "}
            <Input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>{" "}
        </Box>
        <Spacer />
        <Box>
          <Select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Mostrar {pageSize}
              </option>
            ))}
          </Select>
        </Box>
      </Box>
    </>
  );
}
