import React from 'react'
import { Nav, Navbar, Form, Button, Col, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import { FiSearch, FiHeart } from 'react-icons/fi'
import { GiTicket } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import '../../css/marketing/coupon.scss'
function CouponNav(props) {
  return (
    <>
      <div className="marketing">
<<<<<<< HEAD
        <head className="border-bottom mb-3 justify-content-center d-flex">
=======
        <div className="border-bottom mb-3 justify-content-center d-flex">
>>>>>>> 7c189a2f189ff98cbc977b25f4a1973f2c81e303
          <Nav bg="white" variant="light" expand="md">
            <Nav className="mr-auto nav-menu">
              <Nav.Link href="/coupon">優惠卷輸入</Nav.Link>
              <Nav.Link href="/coupon/event">取得優惠卷</Nav.Link>
              <Nav.Link href="/coupon/description">優惠卷說明</Nav.Link>
              <Nav></Nav>
              <div className="marketing-nav"></div>
            </Nav>
          </Nav>
<<<<<<< HEAD
        </head>
=======
        </div>
>>>>>>> 7c189a2f189ff98cbc977b25f4a1973f2c81e303
      </div>
    </>
  )
}

export default CouponNav
