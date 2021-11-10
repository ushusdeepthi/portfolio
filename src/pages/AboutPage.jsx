import React from 'react'
import NavBar from '../components/NavBar'
import {Container,Item,Wrapper} from '../components/styles/Container'
import HeadingSecondary from '../components/styles/HeadingSecondary'
import img from '../assets/images/prof_pic.jpg'

export default function AboutPage() {
    return (        
            <Wrapper>
                <NavBar />
                <div class="utility">
                <HeadingSecondary>About</HeadingSecondary>
                </div>
                <Container>
                    <Item lg>
                        Chocolate cake croissant liquorice wafer chocolate lollipop danish sweet oat cake. Chocolate bar bear claw candy canes pie dragée tootsie roll chocolate cake powder. Ice cream cheesecake chocolate cake chupa chups biscuit carrot cake. Cupcake cheesecake topping candy canes danish jelly danish pastry.

Toffee topping danish pie danish sesame snaps. Tiramisu topping donut pudding sesame snaps carrot cake cupcake liquorice. Candy canes croissant chocolate bar chocolate bar chocolate bar pie cake cake gummies.

Sweet apple pie gummies brownie tiramisu croissant carrot cake tootsie roll. Chupa chups danish cupcake chupa chups carrot cake muffin toffee cake chocolate cake. Sugar plum ice cream fruitcake marshmallow wafer. Gummies cotton candy gingerbread cake halvah apple pie marzipan brownie.
                    </Item>
                    <Item >
                        <img src={img} alt="profile_picture" className="prof-pic" gradient/>
                    </Item>
                </Container>             
            </Wrapper>        
    )
}
