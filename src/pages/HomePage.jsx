import React from 'react'
import ButtonStyled from '../components/styles/Button'
import {Header} from '../components/styles/Header'


export default function HomePage() {
    return (
        <>
        <Header>
            <div className="title-box">
                <div className="title">
                    <span className="title--main">Deepthi Ushus</span>
                    <span className="title--sub">Fullstack developer</span>
                </div>
                <ButtonStyled>
                    portfolio
                </ButtonStyled>
            </div>
        </Header>
        </>
    )
}
