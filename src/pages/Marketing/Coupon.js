import React from 'react'
import '../../css/marketing/coupon.scss'
import { Nav, Navbar, Form, Button, Col, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import CouponNav from '../../components/marketing/CouponNav'

function Coupon() {
  return (
    <>
      <CouponNav />
      <div className="container">
        <div className="couponlistnav">
          <head-nav className="border-bottom mb-3 justify-content-around d-flex">
            <Nav bg="white" variant="light" expand="md">
              <Nav className="mr-auto nav-menu">
                <Nav.Link href="#news">未使用</Nav.Link>
                <Nav.Link href="#newds">已使用</Nav.Link>
                <Nav.Link href="#newdss">以過期</Nav.Link>
              </Nav>
            </Nav>
            <div></div>
            <div></div>
          </head-nav>
          <div className="coupon"></div>
        </div>
      </div>
    </>
  )
}

export default Coupon
