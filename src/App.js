import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './pages/Knowledge/Blog'
import Partner from './pages/Knowledge/Partner'
import Question from './pages/Knowledge/Question'
import Products from './pages/Product/Products'
import ProductDetail from './pages/Product/ProductDetail'
import Member from './pages/member/Member'
import Cart from './pages/Product/Cart'
import Checkout from './pages/Product/Checkout'
import Service from './pages/service/ServiceHome'
import Coupon from './pages/Marketing/Coupon'
import BonusPoints from './pages/Marketing/BonusPoints1'
import Order from './pages/Product/Order'
import Activity from './pages/Activity/Activity'
import MemberLogin from './pages/member/memberLogin'
import MemberRegister from './pages/member/member-register'
import BlogArticle from './pages/Knowledge/BlogArticle'
function App() {
  return (
    <Router>
      <>
        <Header />
        <section className="body">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/member">
              <Member />
            </Route>
            <Route path="/service">
              <Service />
            </Route>
            <Route path="/activity">
              <Activity />
            </Route>
            <Route exact path="/knowledge/blog">
              <Blog />
            </Route>
            <Route path="/knowledge/blog/:aId?">
              <BlogArticle />
            </Route>
            <Route path="/knowledge/partner">
              <Partner />
            </Route>
            <Route path="/knowledge/question">
              <Question />
            </Route>
            <Route path="/products/:page?">
              <Products />
            </Route>
            <Route path="/productdetail/:pId">
              <ProductDetail />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/coupon">
              <Coupon />
            </Route>
            <Route path="/bonuspoints">
              <BonusPoints />
            </Route>
            <Route path="/order/:mId?">
              <Order />
            </Route>
            <Route path="/login">
              <MemberLogin />
            </Route>
            <Route path="/register">
              <MemberRegister />
            </Route>
          </Switch>
        </section>
        <Footer />
      </>
    </Router>
  )
}

export default App
