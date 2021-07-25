import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import React from 'react'
import ModalDeleteProductos from './ModalDeleteProductos'
import ModalEditProductos from './ModalEditProductos'

export const MenuTableProducto = (cell: any) => {
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
                 <ModalEditProductos  data={data} getProductos={cell.getProductos} />
                <ModalDeleteProductos data={data} getProductos={cell.getProductos}/>
            </MenuList>
        </Menu>
    )
}
