import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './pages/Knowledge/Blog'
<<<<<<< HEAD
import Partner from './pages/Knowledge/Partner'
import Question from './pages/Knowledge/Question'
import Product from './pages/Product/Product'
=======
import Products from './pages/Product/Products'
>>>>>>> 7c189a2f189ff98cbc977b25f4a1973f2c81e303
import ProductDetail from './pages/Product/ProductDetail'
import Member from './pages/member/Member'
import Cart from './pages/Product/Cart'
import Checkout from './pages/Product/Checkout'
import Service from './pages/service/ServiceHome'
import Coupon from './pages/Marketing/Coupon'
<<<<<<< HEAD
import Order from './pages/Product/Order'
import Activity from './pages/Activity/Activity'

=======
import BonusPoints from './pages/Marketing/BonusPoints1'
import Order from './pages/Product/Order'
import Activity from './pages/Activity/Activity'
import MemberLogin from './pages/member/memberLogin'
import MemberRegister from './pages/member/member-register'
>>>>>>> 7c189a2f189ff98cbc977b25f4a1973f2c81e303
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
            <Route path="/blog">
              <Blog />
            </Route>
<<<<<<< HEAD
            <Route path="/partner">
              <Partner />
            </Route>
            <Route path="/question">
              <Question />
            </Route>
            <Route exact path="/product">
              <Product />
            </Route>
            <Route path="/product/:pId?">
=======
            <Route path="/products/:pages?/:pCategoryId?">
              <Products />
            </Route>
            <Route path="/productdetail/:pId">
>>>>>>> 7c189a2f189ff98cbc977b25f4a1973f2c81e303
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
<<<<<<< HEAD
            <Route path="/order">
              <Order />
            </Route>
=======
            <Route path="/bonuspoints">
              <BonusPoints />
            </Route>
            <Route path="/order">
              <Order />
            </Route>
            <Route path="/login">
              <MemberLogin />
            </Route>
            <Route path="/register">
              <MemberRegister />
            </Route>
>>>>>>> 7c189a2f189ff98cbc977b25f4a1973f2c81e303
          </Switch>
        </section>
        <Footer />
      </>
    </Router>
  )
}

export default App
