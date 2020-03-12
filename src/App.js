import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './pages/BLOG/Blog'
import ProductList from './pages/Product/ProductList'
import ProductPageDetail from './pages/Product/ProductPageDetail'
import Member from './pages/member/Member'
import Cart from './pages/Product/Cart'
import Checkout from './pages/Product/Checkout'

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
            <Route path="/member">
              <Member />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/productlist">
              <ProductList />
            </Route>
            <Route path="/productpagedetail">
              <ProductPageDetail />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </div>
        <Footer />
      </>
    </Router>
  )
}

export default App
