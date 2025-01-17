import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 10%;
    background-color: rgb(235, 232, 232);
`

export const Button = styled.button`
    position: absolute;
    top: 30%;
    left: 38px;
    color: white;
    height: 30px;
    width: 110px;
    font-size: 11px;
    font-family: "Source Sans Pro";
    border: 0px solid;
    border-radius: 3px;
    background-color: ${({ disabled }) => disabled ? 'rgba(26, 140, 255, 0.25)' : 'rgb(26, 140, 255)'};
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
`