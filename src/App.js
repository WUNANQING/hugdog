import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './pages/BLOG/Blog'

function App() {
  return (
    <Router>
      <>
        <Header />
        <div className="container py-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
          </Switch>
        </div>
        <Footer />
      </>
    </Router>
  )
}

export default App
