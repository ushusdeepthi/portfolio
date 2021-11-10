import React,{useContext} from 'react'
import NavBar from '../components/NavBar'
import { BsFacebook, BsGithub,BsLinkedin,BsInstagram } from "react-icons/bs";
// import ButtonStyled from '../components/styles/Button'
import {Header} from '../components/styles/Header'
import { UserContext } from '../contexts/UserContext'


export default function HomePage() {
    const {openMenu,setOpenMenu}= useContext(UserContext)
    return (
        <>
            
            <Header>
                <NavBar />
                {!openMenu && 
                    <div className="title-box">
                        <div className="title">
                            <span className="title--main">Deepthi Ushus</span>
                            <span className="title--sub">Fullstack developer</span>
                        </div>
                        <div className="social">
                            <BsFacebook />
                            <BsGithub />
                            <BsLinkedin />
                            <BsInstagram />
                        </div>
                    </div>
               } 
            </Header>
        </>
    )
}
