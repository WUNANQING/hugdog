import React, { useEffect } from 'react'
import { Nav, Navbar, Form, Button, Col, Row, Table } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import { FiSearch, FiHeart } from 'react-icons/fi'
// import { GiTicket } from 'react-icons/gi'
// import { IconContext } from 'react-icons'
import $ from 'jquery'
import '../../css/marketing/coupon.scss'
import { GiManualMeatGrinder } from 'react-icons/gi'
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
  console.log(props.data)
  let abc = props.data[0] ? props.data[0] : ''
  let lists = []
  if (abc !== '') {
    for (let i = 0; i <= props.data.length - 1; i++) {
      //記得在JSX中使用JS變數要用花括號包著
      let oldtimeget = props.data[i].timeget
      let oldendtime = props.data[i].endtime
      console.log(oldtimeget.substr(0, 10))
      console.log(oldtimeget.substr(12, 7))
      let newtimeget =
        oldtimeget.substr(0, 10) +
        ' ' +
        oldtimeget.substr(11, 2) +
        ' ' +
        oldtimeget.substr(13, 1) +
        ' ' +
        oldtimeget.substr(14, 2) +
        ' ' +
        oldtimeget.substr(16, 1) +
        ' ' +
        oldtimeget.substr(17, 2)
      let newendtime =
        oldendtime.substr(0, 10) +
        ' ' +
        oldendtime.substr(11, 2) +
        ' ' +
        oldendtime.substr(13, 1) +
        ' ' +
        oldendtime.substr(14, 2) +
        ' ' +
        oldendtime.substr(16, 1) +
        ' ' +
        oldendtime.substr(17, 2)
      lists.push(
        <tr key={props.data[i].mmId}>
          <td>{props.data[i].mmId}</td>
          <td>{props.data[i].mtName}</td>
          <td>{newtimeget}</td>
          <td>{newendtime}</td>
        </tr>
      )
    }
  }
  console.log(lists)
  return (
    <>
      <div className="container">
        <div className="couponlistnav">
          <head-nav className="border-bottom mb-3 ">
            <Nav bg="white" variant="light" expand="md">
              <Nav className="mr-auto nav-menu">
                <Nav.Link className="CouponListNavAC1 active">未使用</Nav.Link>
                <Nav.Link className="CouponListNavAC2">已使用</Nav.Link>
                <Nav.Link className="CouponListNavAC3">已過期</Nav.Link>
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
              {/* {props.data.map((data, i) => {
                return < key={i} data={props.data[i]} />
              })} */}
              <thead>
                <tr>
                  <th>編號</th>
                  <th>優惠名稱</th>
                  <th>取得日期</th>
                  <th>到期日期</th>
                </tr>
              </thead>
              <tbody>{lists}</tbody>
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
