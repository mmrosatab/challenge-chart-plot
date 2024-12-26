import React from 'react'
import { Button, Container } from './styles'

export function Footer(handleClick) {
    return (
        <Container>
            <Button
                type='button'
                onClick={handleClick}
            >
                GENERATE CHART
            </Button>
        </Container>
    )
}