import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import Navigation from './styles/Navigation'
import MenuStyled from './styles/Menu'
import logo from '../assets/images/logo-neutral-1.png'

export default function NavBar() {
    const {openMenu,setOpenMenu}= useContext(UserContext)
    const handleClick = ()=>{
        setOpenMenu(false)
    }
    return (
        <>
        {openMenu ?
        
        <MenuStyled>
            {/* <h1 className="close-menu" onClick={handleClick}>X</h1> */}
            <h1> <Link to="/" onClick={handleClick}>Home</Link> </h1>
            <h1> <Link to="/about" onClick={handleClick}>About</Link> </h1>
            <h1> <Link to="/projects" onClick={handleClick}>Portfolio</Link> </h1>
            <h1> <Link to="/contact" onClick={handleClick}>contact</Link> </h1>           
        </MenuStyled>
        :
       <Navigation> 
           <div className="logo-box">
               <img src={logo} alt="logo" className="logo" />
               <h4>deepthi Ushus</h4>
           </div>
            <div className="menu-box" onClick={()=>setOpenMenu(true)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            
        </Navigation>
}
        </>
    )
}
