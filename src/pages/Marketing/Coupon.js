import React, { useState, useEffect } from 'react'
import '../../css/marketing/coupon.scss'
import { Nav, Navbar, Form, Button, Col, Row, Table } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'
import CouponDescription from './CouponDescription'
import CouponEvent from './CouponEvent'
import CouponNav from '../../components/marketing/CouponNav'
import CouponInsert from '../../components/marketing/CouponInsert'
import CouponList from '../../components/marketing/CouponList'
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { formServerCouponsWE } from '../../actions/marketingActions'

function Coupon(props) {
  const [couponList, setCouponList] = useState('')
  // console.log(props)
  // console.log(props.data)
  // console.log(props)
  useEffect(() => {
    props.formServerCouponsWE(0)
  }, [])
  if (!props.data) return <></>
  // if (props.data) console.log(props.data)
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
          <CouponList data={props.data} />
        </Route>
      </Switch>
    </>
  )
}
const mapStateToProps = store => {
  return { data: store.getCoupons }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ formServerCouponsWE }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Coupon))
