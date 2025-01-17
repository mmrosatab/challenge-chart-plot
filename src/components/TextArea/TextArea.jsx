import React from 'react'
import { Container, TextAreaInput } from './styles'

export function TextArea({ value, handleChange }) {
    return (
        <Container>
            <TextAreaInput
                value={value}
                onChange={handleChange}
                placeholder='Input data ...'
            />
        </Container>
    )
}