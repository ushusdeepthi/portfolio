import React from 'react'
import NavBar from '../components/NavBar'
import { BsFacebook, BsGithub,BsLinkedin,BsInstagram } from "react-icons/bs";
import ButtonStyled from '../components/styles/Button'
import {Header} from '../components/styles/Header'


export default function HomePage() {
    return (
        <>
            <Header>
                <NavBar />
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
                
            </Header>
        </>
    )
}
