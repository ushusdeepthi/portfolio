import { createGlobalStyle } from 'styled-components';
import { mediaQueries } from "./mediaQueries"

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;900&family=Roboto+Slab:wght@200;600;900&display=swap');
*,*::after,*::before{
    box-sizing: inherit;
}
html{
    font-size:62.5%;
    /* @media (max-width: 56.25em) {
        //900px
        @content;
    } */
    //<900px
    ${mediaQueries("md")`
    font-size: 56.25%;
    `
    }
    //<600px
    ${mediaQueries("sm")`
     font-size: 50%;
    `
     }
      
    
}
body{
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    line-height:1.7;
    font-size:1.6rem;
}
`
export default GlobalStyles;