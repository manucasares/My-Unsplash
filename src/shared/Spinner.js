import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg); }
`

export const Spinner = styled.div`
    width: 36px;
    height: 36px;
    margin: 2rem;
    border: 4px solid rgba(0,0,0,.1);
    border-left-color: #09f;
    border-radius: 50%;
    animation: ${ spin } 1.3s linear infinite
`
