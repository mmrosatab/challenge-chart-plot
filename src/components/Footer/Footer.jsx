import React from 'react'
import { Button, Container } from './styles'

export function Footer({ handleClick, disabled }) {
    return (
        <Container>
            <Button
                type='button'
                onClick={handleClick}
                disabled={disabled}
            >
                GENERATE CHART
            </Button>
        </Container>
    )
}