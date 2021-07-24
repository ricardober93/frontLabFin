import { Alert, AlertDescription, AlertIcon, AlertTitle, CloseButton } from '@chakra-ui/react'
import React from 'react'

export default function AlertMessage({ status = "error", tittle, message }) {
    return (
        <Alert status={status}>
            <AlertIcon />
            <AlertTitle mr={2}> {tittle} </AlertTitle>
            <AlertDescription>{message}</AlertDescription>
            <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
    )
}
