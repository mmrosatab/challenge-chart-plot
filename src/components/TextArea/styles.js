import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    top: 10%;
    left: 0px;
    width: 100%;
    height: 30%;
`

export const TextAreaInput = styled.textarea`
    border: 0px;
    width: 100%;
    height: 100%;
    background-color: rgb(10, 18, 42);
    color: rgb(235, 232, 232);
    font-family: "Source Code Pro";
    font-size: 16px;
    overflow-y: scroll;
    scrollbar-width: 18px;
    resize: none;
    padding: 0px;
    outline: none;

    &::placeholder{
        color: rgb(235, 232, 232);
        font-family: "Source Code Pro";
        font-style: italic;
        font-size: 16px;
    }
`