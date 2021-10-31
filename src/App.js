import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import {theme} from './components/styles/Theme'
import GlobalStyles from './components/styles/Global'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
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
    </ThemeProvider>
    )
}

