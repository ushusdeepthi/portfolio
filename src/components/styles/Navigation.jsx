import styled from 'styled-components';
import { mediaQueries } from "./mediaQueries"


const Navigation = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    .logo-box{
        display:flex;
        padding:1rem 2rem;
        align-items:center;
        .logo{
           height:8rem;
        }
        h4{
            font-size:2.5rem;
            text-transform: uppercase;
            padding-left:1rem;
            color:#C8BFC7;
            ${mediaQueries("xs")`
                visibility:hidden            `
            }
        }
    }
    .menu-box{
        padding: 0 3.5rem;

        & > div{
            width: 3.5rem;
            height: 0.4rem;
            background-color: #C8BFC7;
            margin: 0.6rem 0;
        }
    }
`
export default Navigation