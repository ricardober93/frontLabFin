import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import React from 'react'
import ModalDeleteSalario from './ModalDeleteSalario'
import ModalEditSalario from './ModalEditSalario'

export const MenuTableSalario = (cell: any) => {
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
                 <ModalEditSalario  data={data} getAllSalarios={cell.getAllSalarios} />
                <ModalDeleteSalario data={data} getAllSalarios={cell.getAllSalarios} />
            </MenuList>
        </Menu>
    )
}
