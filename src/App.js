import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './pages/Knowledge/Blog'
import ProductList from './pages/Product/ProductList'
import ProductPageDetail from './pages/Product/ProductPageDetail'
import Member from './pages/member/Member'
import ServiceQuery from './pages/service/ServiceQuery'
import Coupon from './pages/Marketing/Coupon'
import ServiceDetail from './pages/service/ServiceDetail'
import ServiceChat from './pages/service/ServiceChat'
import ServiceBooking from './pages/service/ServiceBooking'

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
          <Route path="/productlist">
            <ProductList />
          </Route>
          <Route path="/productpagedetail">
            <ProductPageDetail />
          </Route>
          <Route path="/coupon">
            <Coupon />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  )
}

export default App
