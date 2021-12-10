import React from "react";
import NavBar from "../components/NavBar";
import { Container, Item, Wrapper } from "../components/styles/Container";
import HeadingSecondary from "../components/styles/HeadingSecondary";
import img from "../assets/images/prof_pic.jpg";

export default function AboutPage() {
  return (
    <Wrapper>
      <NavBar />
      <div className="utility">
        <HeadingSecondary>About</HeadingSecondary>
      </div>
      <Container direction="column">
        <Item lg="70%">
          I am a hard-working and passionate fullstack developer with an
          aptitude to create elegant solutions in an effective manner. I am
          currently studying a two year course on fullstack web developement at
          Nacakdemin. I have done projects both individually as as a part of the
          team during the course of my studies.I am so happy to be at the
          deployment of my new career as a web developer, aspiring to get a
          great opportunity to implement my skills and deliver amazing results.
          <h2>Skills</h2>
          <div className="skills">
            <span>Javascript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Vue Basics</span>
            <span>PHP</span>
            <span>Sass</span>
            <span>Bootstrap</span>
            <span>StyledComponents</span>
            <span>MaterialUI/React</span>
            <span>Vuetify</span>
            <span>MongoDB</span>

            <span>MySQL</span>
            <span>RESTful API</span>
            <span>Git/GitHub</span>
            <span>Agile Principles</span>
            <span>Scrum</span>
          </div>
        </Item>
        <Item sm="30%" order="-1">
          <img src={img} alt="profile_picture" className="prof-pic" gradient />
        </Item>
      </Container>
    </Wrapper>
  );
}
