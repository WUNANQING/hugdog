<<<<<<< HEAD
import React from 'react'
=======
import React, { useEffect } from 'react'
>>>>>>> 7c189a2f189ff98cbc977b25f4a1973f2c81e303
import { Nav, Navbar, Form, Button, Col, Row, Table } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import { FiSearch, FiHeart } from 'react-icons/fi'
// import { GiTicket } from 'react-icons/gi'
// import { IconContext } from 'react-icons'
<<<<<<< HEAD
import '../../css/marketing/coupon.scss'
function CouponList(props) {
=======
import $ from 'jquery'
import '../../css/marketing/coupon.scss'
function CouponList(props) {
  useEffect(() => {
    $('.CouponListNavAC1').on('click', function() {
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
        .end()
        .parent()
        .parent()
        .parent()
        .siblings('.marketingcoupon')
        .children('.CouponList1')
        .addClass('active')
        .siblings()
        .removeClass('active')
    })
    $('.CouponListNavAC2').on('click', function() {
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
        .end()
        .parent()
        .parent()
        .parent()
        .siblings('.marketingcoupon')
        .children('.CouponList2')
        .addClass('active')
        .siblings()
        .removeClass('active')
    })
    $('.CouponListNavAC3').on('click', function() {
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
        .end()
        .parent()
        .parent()
        .parent()
        .siblings('.marketingcoupon')
        .children('.CouponList3')
        .addClass('active')
        .siblings()
        .removeClass('active')
    })
  }, [])
>>>>>>> 7c189a2f189ff98cbc977b25f4a1973f2c81e303
  return (
    <>
      <div className="container">
        <div className="couponlistnav">
<<<<<<< HEAD
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
          <div className="coupon">
            <Table striped bordered hover variant="light">
=======
          <head-nav className="border-bottom mb-3 ">
            <Nav bg="white" variant="light" expand="md">
              <Nav className="mr-auto nav-menu">
                <Nav.Link className="CouponListNavAC1 active">未使用</Nav.Link>
                <Nav.Link className="CouponListNavAC2">已使用</Nav.Link>
                <Nav.Link className="CouponListNavAC3">以過期</Nav.Link>
              </Nav>
            </Nav>
          </head-nav>
          <div className="marketingcoupon">
            <Table
              striped
              bordered
              hover
              variant="light"
              className="CouponList1 active"
            >
              <thead>
                <tr>
                  <th>編號</th>
                  <th>優惠名稱</th>
                  <th>取得日期</th>
                  <th>到期日期</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>優惠名稱</td>
                  <td>2020-02-01 18 : 00 : 00</td>
                  <td>2020-04-30 18 : 00 : 00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>優惠名稱</td>
                  <td>2020-02-01 18 : 00 : 00</td>
                  <td>2020-04-30 18 : 00 : 00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>優惠名稱</td>
                  <td>2020-02-01 18 : 00 : 00</td>
                  <td>2020-04-30 18 : 00 : 00</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>優惠名稱</td>
                  <td>2020-02-01 18 : 00 : 00</td>
                  <td>2020-04-30 18 : 00 : 00</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>優惠名稱</td>
                  <td>2020-02-01 18 : 00 : 00</td>
                  <td>2020-04-30 18 : 00 : 00</td>
                </tr>
              </tbody>
            </Table>
            <Table
              striped
              bordered
              hover
              variant="dark"
              className="CouponList2"
            >
              <thead>
                <tr>
                  <th>編號</th>
                  <th>優惠名稱</th>
                  <th>取得日期</th>
                  <th>到期日期</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>優惠名稱</td>
                  <td>2020-02-01 18 : 00 : 00</td>
                  <td>2020-04-30 18 : 00 : 00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>優惠名稱</td>
                  <td>2020-02-01 18 : 00 : 00</td>
                  <td>2020-04-30 18 : 00 : 00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>優惠名稱</td>
                  <td>2020-02-01 18 : 00 : 00</td>
                  <td>2020-04-30 18 : 00 : 00</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>優惠名稱</td>
                  <td>2020-02-01 18 : 00 : 00</td>
                  <td>2020-04-30 18 : 00 : 00</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>優惠名稱</td>
                  <td>2020-02-01 18 : 00 : 00</td>
                  <td>2020-04-30 18 : 00 : 00</td>
                </tr>
              </tbody>
            </Table>
            <Table
              striped
              bordered
              hover
              variant="light"
              className="CouponList3"
            >
>>>>>>> 7c189a2f189ff98cbc977b25f4a1973f2c81e303
              <thead>
                <tr>
                  <th>編號</th>
                  <th>優惠名稱</th>
                  <th>取得日期</th>
                  <th>到期日期</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>優惠名稱</td>
                  <td>2020-02-01 18 : 00 : 00</td>
                  <td>2020-04-30 18 : 00 : 00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>優惠名稱</td>
                  <td>2020-02-01 18 : 00 : 00</td>
                  <td>2020-04-30 18 : 00 : 00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>優惠名稱</td>
                  <td>2020-02-01 18 : 00 : 00</td>
                  <td>2020-04-30 18 : 00 : 00</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>優惠名稱</td>
                  <td>2020-02-01 18 : 00 : 00</td>
                  <td>2020-04-30 18 : 00 : 00</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>優惠名稱</td>
                  <td>2020-02-01 18 : 00 : 00</td>
                  <td>2020-04-30 18 : 00 : 00</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}

export default CouponList
