import {  EditIcon, DeleteIcon, HamburgerIcon } from '@chakra-ui/icons'
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import ModalEditActivos from './ModalEditActivos'

export const MenuTable = (cell: any) => {
    const data = cell.cell.original
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
            />
            <MenuList>
                 <ModalEditActivos  data={data}/>
                <MenuItem icon={<DeleteIcon color="red.400" />}>
                    Eliminar
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
