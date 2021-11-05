import styled from 'styled-components';

const Navigation = styled.div`
    .logo-box{
        .logo{
            position:absolute;
            top: 2rem;
            left:2rem;
            width:6rem;
        }
        h4{
             position:absolute;
             top: 1rem;
             left:9rem;
             font-size:2.5rem;
            text-transform: uppercase;
            color:${props =>props.theme.primary};
        }
    }
    .menu-box{
        position: absolute; 
        top:3rem;
        right:3.5rem;
        & > div{
            width: 3.5rem;
            height: 0.4rem;
            background-color: #C8BFC7;
            margin: 0.6rem 0;
        }
    }
`
export default Navigation