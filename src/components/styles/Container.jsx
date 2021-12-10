import styled, { keyframes } from "styled-components";
import img from "../../assets/images/prof_pic.jpg";
import { mediaQueries } from "./mediaQueries";

const Wrapper = styled.div`
  .utility {
    text-align: center;
  }
  /* background-image:linear-gradient(to right bottom,#402039,#402039); */
`;
const Container = styled.div`
  /* background-image:linear-gradient(to right bottom,#402039,#402039); */
  /* height:70vh; */
  padding: 3rem;
  display: flex;
  background-color: white;
  justify-content: center;
  flex-wrap: ${({ wrap }) => wrap};
  /* flex-direction:column; */
  ${(props) =>
    props.direction &&
    mediaQueries("sm")`
      flex-direction: column;
    `}
`;

const Item = styled.div`
  padding: 3rem 0 0 0;
  flex: 0 0 ${({ lg, sm }) =>
    lg ||
    sm ||
    "50%"}; //if there is a prop lg, take its value else check if there is a prop sm if yes take its value otherwise fall back to the default value of 50%;
  ${(props) =>
    props.order &&
    mediaQueries("sm")`
    padding:0;
    order:-1;
    text-align:center;
  `}
  h2{
    padding: 1.5rem 0;
  }
  .skills {
    display: flex;
    flex-wrap: wrap;
    }

    span {
      margin: 0.5rem;
      border: 1px solid black;
      padding: 1rem;
      border-radius: 1rem;
      ${mediaQueries("sm")`
        margin: 0.3rem;
  `}}
    }
  }
  .prof-pic {
    max-width: 100%;
    padding:0 1rem;
    align-self: center;
    ${mediaQueries("sm")`
        padding: 0 0;
        width:40%;
        border-radius:50%;
        outline:5px solid brown;
        `}
    ${mediaQueries("xs")`
        width:60%;
        `}
  }
  .contact {
    margin: 2rem auto;
    padding: 1rem;
    border: none;
    box-shadow: 0 1rem 2rem gray;
    border-radius: 5px;
    text-align: center;
    font-size: 2rem;
  }
`;
export { Container, Item, Wrapper };
