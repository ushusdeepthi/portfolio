import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'


export default function App() {
  return (
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/projects">
          <PortfolioPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>     
      </Switch>

    )
}

