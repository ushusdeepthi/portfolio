import styled, { keyframes } from 'styled-components';
import img from '../../assets/images/background.jpg'

const moveRight = keyframes`
 0% { 
     transform: translateX(-10rem)
    }
 80% {
     transform: translateX(1rem)
    }
 100% {
     transform: translateX(0)
    }
`
const moveLeft = keyframes`
 0% { 
     transform: translateX(10rem)
    }
 80% {
     transform: translateX(-1rem)
    }
 100% {
     transform: translateX(0)
    }
`
const moveUp = keyframes`
 0% { 
     opacity:0;
     transform: translateY(30rem)
    }
 80% {
     opacity:1;
     transform: translateY(-1rem)
    }
 100% {
     opacity:1
     transform: translateY(0)
    }
`

const Header = styled.header`
    position:relative;
    height:100vh;
    background-image: linear-gradient(rgba(64,32,57,0.8),rgba(64,32,57,0.8)),url(${img});
    background-size: cover;
    background-position: center;

    .title-box{
        color:#C8BFC7;
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        color:#C8BFC7;
        text-align:center;
    }
    .title{
        margin-bottom:6rem;
        &--main{
            font-weight:600;
            display:block;
            font-size:6rem;
            letter-spacing:1.1rem;
            animation: ${moveRight} 1s ease-out;
            
        }
        &--sub{
            display:block;
            font-size:3rem;
            letter-spacing:0.8rem;
            text-transform:uppercase;
            margin-top:1rem;
            animation: ${moveLeft} 1s ease-out;
        }
    }  
    .social{
        animation: ${moveUp} 1s ease-out 1s;
        animation-fill-mode: backwards;
    }
    .social a{
        
        &:link,&:visited{
            font-size:3rem;
            margin: 0 2rem;
            color:#C8BFC7;
        }
        &:hover{
            color:#fff;
        }
    }   
`

export {Header}