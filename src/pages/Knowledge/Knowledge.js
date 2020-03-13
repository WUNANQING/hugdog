import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './pages/Knowledge/Blog'
import Article from './pages/Knowledge/Article'
import Question from './pages/Knowledge/Question'

function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/member">
            <Member />
          </Route>
          <Route path="/service/query">
            <ServiceQuery />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/aritcle">
            <Article />
          </Route>
          <Route path="/aritcle">
            <Partner />
          </Route>
          <Route path="/question">
            <Question />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  )
}

export default Knowledge
