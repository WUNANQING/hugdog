import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductList from './pages/Product/ProductList'

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
            <Route path="/product">
              <ProductList />
            </Route>
          </Switch>
        </div>
        <Footer />
      </>
    </Router>
  )
}

export default App
