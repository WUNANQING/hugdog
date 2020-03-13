import React from 'react'
import '../../css/marketing/coupon.scss'
import { Nav, Navbar, Form, Button, Col, Row, Table } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import CouponDescription from './CouponDescription'
import CouponEvent from './CouponEvent'
import CouponNav from '../../components/marketing/CouponNav'
import CouponInsert from '../../components/marketing/CouponInsert'
import CouponList from '../../components/marketing/CouponList'

function Coupon() {
  return (
    <>
      <CouponNav />
      <Switch>
        <Route path="/coupon/event">
          <CouponEvent />
        </Route>
        <Route path="/coupon/description">
          <CouponDescription />
        </Route>
        <Route path="/coupon">
          <CouponInsert />
          <CouponList />
        </Route>
      </Switch>
    </>
  )
}

export default Coupon
