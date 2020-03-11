import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
<<<<<<< HEAD
import ProductList from './pages/Product/ProductList'
import ProductPageDetail from './pages/Product/ProductPageDetail'

=======
import Member from '../src/pages/member/Member'
>>>>>>> 77d298c92ad94bf816481ce9573799d0e7489acc
function App() {
  return (
    <Router>
      <>
        <Header />
<<<<<<< HEAD
        <div className="container py-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/productlist">
              <ProductList />
            </Route>
            <Route path="/productpagedetail">
              <ProductPageDetail />
            </Route>
          </Switch>
        </div>
=======
        {/* <div className="container py-3"> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/member">
            <Member />
          </Route>
        </Switch>
        {/* </div> */}
>>>>>>> 77d298c92ad94bf816481ce9573799d0e7489acc
        <Footer />
      </>
    </Router>
  )
}

export default App
