import styled, { keyframes } from 'styled-components';

const HeadingSecondary = styled.h2`
    margin:0;
    display:inline-block;
    font-size:6rem;
    background-image: linear-gradient(to right, rgb(48,115,81), rgb(64,32,57));
    color:transparent;
    -webkit-background-clip: text;
    transition:all 0.2s;
    &:hover{    
        transform:scale(1.1)
    }
`

export default HeadingSecondary