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
                    <Item lg="80%">
                        <div className="contact">
                            <h4><MdEmail /> Email</h4>
                            <p>ushusdeepthi@gmail.com</p>
                        </div>
                        <div className="contact">
                            <h4><MdPhoneEnabled /> phone</h4>
                            <p>0723759999</p>
                        </div>
                        <div className="contact">
                            <h4><MdLocationOn/> Location</h4>
                            <p>Stockholm, Sweden</p>
                        </div>
                    </Item>
                </Container>             
            </Wrapper>        
    )
}

