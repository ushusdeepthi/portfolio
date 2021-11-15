import React from 'react'
import NavBar from '../components/NavBar'
import {Container,Wrapper} from '../components/styles/Container'
import Card from '../components/styles/Card'
import HeadingSecondary from '../components/styles/HeadingSecondary'
import quiz from '../assets/images/quiz.jpg'
import starWars from '../assets/images/star-wars.jpg'
import yatzy from '../assets/images/yatzy.jpg'
import crm from '../assets/images/crm.jpg'
import acme from '../assets/images/acme.jpg'
import webshop from '../assets/images/webshop.jpg'

export default function PortfolioPage() {
    const handleClick =()=>window.open('https://ushusdeepthi.github.io/Project/', '_blank');
    return (
        <Wrapper>
                <NavBar />
                <div className="utility">
                <HeadingSecondary>Portfolio</HeadingSecondary>
                </div>
                <Container wrap="wrap">
                    <Card onClick={handleClick}>
                        
                        <div className="card__side card__side--front">
                           <img src={quiz} alt="quiz_project" className="card__img" />
                        </div>
                        <div className="card__side card__side--back">
                            
                            <h1 className="card__heading">
                                Quiz App
                            </h1>
                            <p className="card__text">
                                The project includes the developement of a quiz app using object oriented javascript.The questions are fetched from an external api and rendered one by one.The score of the game is provided at the end.
                            </p>
                            <ul className="card__list">
                                <li>Javascript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
 
                            <a  href="https://github.com/ushusdeepthi/Project" className="card__action card__action--code" target="_blank">
                                source code
                            </a>
                            <a href="https://ushusdeepthi.github.io/Project/"className="card__action card__action-app">
                                app
                            </a>

                        </div>
                        
                    </Card>
                    <Card>
                        <div className="card__side card__side--front">
                            <img src={starWars} alt="star-wars" className="card__img" />
                        </div>
                        <div className="card__side card__side--back">
                            BACK
                        </div>
                    </Card>
                    <Card>
                        <div className="card__side card__side--front">
                            <img src={yatzy} alt="Yatzy game" className="card__img" />
                        </div>
                        <div className="card__side card__side--back">
                            BACK
                        </div>
                    </Card>
                    <Card>
                        <div className="card__side card__side--front">
                            <img src={crm} alt="React-CRM" className="card__img" />
                        </div>
                        <div className="card__side card__side--back">
                            BACK
                        </div>
                    </Card>
                    <Card>
                        <div className="card__side card__side--front">
                            <img src={acme} alt="ACME Events" className="card__img" />
                        </div>
                        <div className="card__side card__side--back">
                            BACK
                        </div>
                    </Card>
                    <Card>
                        <div className="card__side card__side--front">
                            <img src={webshop} alt="Webshop" className="card__img" />
                        </div>
                        <div className="card__side card__side--back">
                            BACK
                        </div>
                    </Card>
                    <Card>
                        <div className="card__side card__side--front">
                            <img src={webshop} alt="Webshop" className="card__img" />
                        </div>
                        <div className="card__side card__side--back">
                            BACK
                        </div>
                    </Card>
                    
                </Container>             
            </Wrapper>        
    )
}

