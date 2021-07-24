import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import React from 'react'
import ModalDeletePasive from './ModalDelete'
import ModalEditPasive from './ModalEdit'

export const MenuTablePasive = (cell: any) => {
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
                 <ModalEditPasive  data={data} getAllPasivo={cell.getAllPasivo}/>
                <ModalDeletePasive data={data} getAllPasivo={cell.getAllPasivo}/>
            </MenuList>
        </Menu>
    )
}
