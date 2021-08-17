import React, { ReactElement } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import ModalDeleteVaraible from './ModalDeleteVaraible'
import ModalEditVaraible from './ModalEditVariable'
interface Props {
  cell: any,
  getAllVariable: () => void
}

export default function MenuTableVariable( cell: Props): ReactElement {
  const data = cell?.cell.original
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <ModalEditVaraible
          data={data}
          getAllVariable={cell.getAllVariable} />
        <ModalDeleteVaraible
          data={data}
          getAllVariable={cell.getAllVariable} />
      </MenuList>
    </Menu>
  )
}

