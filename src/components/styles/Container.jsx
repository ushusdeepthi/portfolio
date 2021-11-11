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
   padding:5rem 0 0 5rem;
  flex:0 0 ${({lg,sm})=> lg || sm || "50%" }; //if there is a prop lg, take its value else check if there is a prop sm if yes take its value otherwise fall back to the default value of 50%;
  .skills{
    display:flex;
    flex-wrap:wrap;
    span{
      margin:1rem;
      border: 1px solid black;
      padding:1rem;
      border-radius:1rem;

    }
  }
  .prof-pic{
    max-width:100%;
    align-self:center;
  }
`
export {Container,Item,Wrapper} 