import styled from 'styled-components'

export const Button = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px;
    font-size: 15px;
    background-color: ${props => props.isGoogleSignIn ? '#4285f4' : props.inverted ? 'white' : 'black'};
    color: ${props => props.inverted ? 'black' : 'white'};
    text-transform: uppercase;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: bolder;
    border: ${props => props.inverted ? '1px solid black' : 'none'};
    cursor: pointer;
    display: flex;
    justify-content: center;
    
    &:hover {
        background-color: ${props => props.isGoogleSignIn ? '#357ae8' : props.inverted ? 'black' : 'white'};
        color: ${props => props.inverted || props.isGoogleSignIn ? 'white' : 'black'};
        border: ${props => props.inverted || props.isGoogleSignIn ? 'none' : '1px solid black'};
    }
    `;
