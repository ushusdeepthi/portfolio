import React from 'react'
import NavBar from '../components/NavBar'
import { MdEmail,MdLocationOn, MdPhoneEnabled} from "react-icons/md";

import {Container,Item,Wrapper} from '../components/styles/Container'
import HeadingSecondary from '../components/styles/HeadingSecondary'

export default function ContactPage() {
    return (        
            <Wrapper>
                <NavBar />
                <div className="utility">
                <HeadingSecondary>Contact</HeadingSecondary>
                </div>
                <Container>
                    <Item>
                        Form
                    </Item>
                    <Item >
                        <div className="contact">
                            <h4><MdEmail /> Email</h4>
                            <p>ushusdeepthi@gmail.com</p>
                        </div>
                        <div className="contact">
                            <MdPhoneEnabled /> phone
                            <p>0723759999</p>
                        </div>
                        <div className="contact">
                            <MdLocationOn/> Location
                            <p>Stockholm, Sweden</p>
                        </div>
                    </Item>
                </Container>             
            </Wrapper>        
    )
}

