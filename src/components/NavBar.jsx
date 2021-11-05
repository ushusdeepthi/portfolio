import React,{useState} from 'react'
import Navigation from './styles/Navigation'
import MenuStyled from './styles/Menu'
import logo from '../assets/images/logo-neutral-1.png'

export default function NavBar() {
    const [openMenu,setOpenMenu] = useState(false)
    return (
        <>
        {openMenu ?
        <MenuStyled>
            <h1 className="close-menu" onClick={()=>setOpenMenu(false)}>X</h1>
            <h1>home</h1>
            <h1>About</h1>
            <h1>Portfolio</h1>
            <h1>contact</h1>
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
