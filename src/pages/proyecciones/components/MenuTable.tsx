import {  EditIcon, DeleteIcon, HamburgerIcon } from '@chakra-ui/icons'
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'

export const MenuTable = (cell: any) => {
    // console.log(cell.cell.original.name)
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
            />
            <MenuList>
                <MenuItem icon={<EditIcon color="yellow.400" />}>
                   Editar
                </MenuItem>
                <MenuItem icon={<DeleteIcon color="red.400" />}>
                    Eliminar
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
