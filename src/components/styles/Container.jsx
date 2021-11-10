import styled, { keyframes } from 'styled-components';
import img from '../../assets/images/prof_pic.jpg'

const Wrapper = styled.div`
 .utility{
   text-align:center;
 }
  /* background-image:linear-gradient(to right bottom,#402039,#402039); */
`
const Container = styled.div`
/* background-image:linear-gradient(to right bottom,#402039,#402039); */
    /* height:70vh; */
    padding:5rem;
    display:flex;
    background-color:white;  
    justify-content:center;
    flex-wrap:${props=> props.wrap && "wrap"};
    `

const Item = styled.div`  
  padding:5rem;
  width:${props=> props.lg && "70%" };
  align-self:${props=> props.center && "center"};
  .prof-pic{
    max-width:80%;
  }
`
export {Container,Item,Wrapper} 