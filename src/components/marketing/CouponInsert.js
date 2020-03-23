import React, { useState } from 'react'
import { Nav, Navbar, Form, Button, Col, Row } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'
// import { FiSearch, FiHeart } from 'react-icons/fi'
import { GiTicket } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import '../../css/marketing/coupon.scss'
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { formServerCouponsWE } from '../../actions/marketingActions'

function CouponInsert(props) {
  const [couponCode, setCouponCode] = useState('')
  const [error, setError] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])
  const handleSubmit = () => {
    let error = false
    let errorMessages = []

    if (!couponCode) {
      // console.log('nousername')
      error = true
      errorMessages.push('請輸入序號')
    }
    if (error) {
      setError(error)
      setErrorMessages(errorMessages)
      return
    }
    const userData = { couponCode }
    // props.userRegisterAsync(userData, () => alert('成功登入'))
    props.userRegisterAsync(userData, () => console.log('前端傳資料成功'))
  }
  return (
    <>
      <div className="marketing container">
        <h2>
          <IconContext.Provider value={{ size: '2rem' }}>
            <GiTicket />
          </IconContext.Provider>
          優惠碼與優惠卷
        </h2>
        {error ? (
          <>
            <div className="alert alert-danger" role="alert">
              {errorMessages.map((v, i) => (
                <p key={i}>{v}</p>
              ))}
            </div>
          </>
        ) : (
          ''
        )}
        <div className="d-flex justify-content-center">
          <div className="coupon-box d-flex justify-content-center align-items-center my-5 px-3">
            <Form className="couponcode">
              <Form.Row>
                <Col md="auto" sm="12">
                  <h3>優惠碼輸入</h3>
                </Col>
                <Col md="auto" sm="12">
                  <Form.Control
                    type="text"
                    placeholder="優惠碼輸入"
                    maxlength="12"
                    onChange={e => setCouponCode(e.target.value)}
                  />
                </Col>
                <Col md="auto" className="">
                  <Button
                    className="CouponBtn"
                    variant="primary"
                    type="button"
                    onClick={() => handleSubmit()}
                  >
                    領取
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </div>
        </div>
      </div>
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CouponInsert)
)
