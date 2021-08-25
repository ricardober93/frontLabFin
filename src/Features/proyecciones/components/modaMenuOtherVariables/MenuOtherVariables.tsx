import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import React from 'react'
import ModalDeleteOtherVariable from './ModalDeleteOtherVariable'
import ModalEditOtherVariable from './ModalEditOtherVariable'

interface Props {
  cell: any,
  AllOtherVariable: () => void
}

const MenuOtherVariables = (props: Props) => {
  const data = props?.cell.original
  return (
    <div>
      <Menu>
        <MenuButton 
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <ModalEditOtherVariable
            data={data}
            AllOtherVariable={props.AllOtherVariable}
          />
          <ModalDeleteOtherVariable
            data={data}
            AllOtherVariable={props.AllOtherVariable} />
        </MenuList>
      </Menu>
    </div>
  )
}

export default MenuOtherVariables
