import styled, {css} from 'styled-components'

const mainColor = 'black';
const subColor = 'grey';

const shrinkLabel = css`
    top: -14px;
    font-size: 12px;
    color: ${mainColor};
`

export const FormInputGroup = styled.div`
    position: relative;
    margin: 45px 0;
`;
export const FormInputLabel = styled.label`
    color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    ${props => props.shrink && shrinkLabel};
    `;

export const FormInputText = styled.input`
    background: none;
    background-color: transparent;
    color: ${subColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin: 25px 0;
    
    letter-spacing: ${props => props.type === 'password' ? '0.3em' : 'inherit'};
    
    &:focus {
        outline: none;
    }
    &:focus ~ ${FormInputLabel} {
            ${shrinkLabel}
        }
`;
