import React from 'react'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Input,
    Heading,
    Divider,
} from "@chakra-ui/react"

export default function ModalFormBaseinicial() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button colorScheme="teal" onClick={onOpen}>Agregar la Base Inicial</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader> Base Inicial </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Heading marginY="2" size="sm"> Activos </Heading>
                        <Input type="text" />
                        <Divider />

                        <Heading marginY="2" size="sm"> Pasivos </Heading>
                        <Input type="text" />
                        <Divider />

                        <Heading marginY="2" size="sm"> Patrominio </Heading>
                        <Input type="text" />
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
