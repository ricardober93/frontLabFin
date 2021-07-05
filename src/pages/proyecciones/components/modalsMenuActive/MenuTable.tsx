import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import React from 'react'
import ModalDeleteActivo from './ModalDeleteActivo'
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
                <ModalDeleteActivo data={data} />
            </MenuList>
        </Menu>
    )
}
