import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import React from 'react'
import ModalDeletePatrimonio from './ModalDeletePatrimonio'
import ModalEditPatrimonio from './ModalEditPatrimonio'

export const MenuTablePatrimonio = (cell: any) => {
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
                 <ModalEditPatrimonio  data={data}/>
                <ModalDeletePatrimonio data={data} />
            </MenuList>
        </Menu>
    )
}
