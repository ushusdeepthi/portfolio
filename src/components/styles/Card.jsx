import styled, { keyframes } from 'styled-components';

const Card = styled.div `
    margin:2rem;
    flex :0 1 26vw;
    perspective:150rem;
    -moz-perspective: 150rem;
    position:relative;    
    height:45rem;
    .card__side{
        border-radius: 3px;
        width:100%;
        height:45rem;
        position:absolute;
        top:0;
        left:0;
        backface-visibility: hidden;
        
        box-shadow: 0 1rem 2rem rgba(0,0,0,0.5);
        transition:all 1s ease;

        &--front{
            background-color: #fff;        
        }
        &--back{
            background-image: linear-gradient(to right bottom, rgb(48,115,81), rgb(64,32,57));
            transform:rotateY(180deg);
            color:#C8BFC7;
            padding:2rem;
        }
    }
    &:hover .card__side--front{
        transform:rotateY(180deg);
    }
    &:hover .card__side--back {
        transform: rotateY(0);
    }
    .card__img{
        max-width:100%;
        /* height:100%; */
        border-radius:5px;
    }
    .card__heading{
        text-align:center;
    }
    .card__action{
        color:#C8BFC7;
        text-decoration: none;
        text-align:center;
    }
`


export default Card;