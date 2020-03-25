import React, { useState, useEffect } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
// import { FiSearch, FiHeart } from 'react-icons/fi'
import { GiTicket } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import '../../css/marketing/coupon.scss'
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {
  insertCouponAsync,
  formServerCouponsCode,
  formServerCheckCoupons,
} from '../../actions/marketingActions'

function CouponInsert(props) {
  // props.formServerCouponsCode('dcI4a4SBl4Uw')

  let x = localStorage.getItem('mName')
  let y = localStorage.getItem('mId')
  // console.log(x, y)
  const [username, setUsername] = useState(x)
  const [userId, setUserId] = useState(y)
  const [marketingName, setMarketingName] = useState('')
  const [marketingId, setMarketingId] = useState('')
  const [endtime, setEndtime] = useState('')
  const [verify, setVerify] = useState('')
  const [couponCode, setCouponCode] = useState('')
  const [error, setError] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])
  const [test, setTest] = useState(false)

  function handleSubmit2() {
    let error = false
    let errorMessages = []

    props.formServerCheckCoupons(verify)

    props.formServerCouponsCode(couponCode)

    console.log(12314515, verify)
    // setMarketingName(1)
    // setMarketingId(2)
    // let asda = props.data[0].mtId ? props.data[0].mtId : ''
    console.log(props)

    if (!couponCode) {
      // console.log('nousername')
      error = true
      errorMessages.push('請輸入序號')
    }
    if (0 < +couponCode.length && +couponCode.length < 12) {
      // console.log('nousername')
      error = true
      errorMessages.push('請輸入十二碼')
    }
    if (+couponCode.length === 12) {
      setError(false)
      console.log(12345222)
    }
    if (error) {
      setError(error)
      setErrorMessages(errorMessages)
      console.log(errorMessages)
      return
    }
  }
  let data = props.data
  useEffect(() => {
    console.log(12)
    console.log('測試', props)
    // let error = false
    // let errorMessages = []
    // console.log(12345)
    // if (!props.data) {
    //   // console.log('nousername')
    //   error = true
    //   errorMessages.push('序號無效')
    // }
    // if (error) {
    //   setError(error)
    //   setErrorMessages(errorMessages)
    //   return
    // }
    let asda = props.data[0] ? props.data[0] : ''

    if (props.data[0]) {
      console.log(props.data[0].mtId)
      setMarketingName(props.data[0].mtName)
      setMarketingId(props.data[0].mtId)
      setEndtime(props.data[0].endTime)
      setTest(true)
    }
  }, [data])
  useEffect(() => {
    console.log(12345)

    const userData = {
      username,
      userId,
      marketingName,
      marketingId,
      endtime,
      verify,
      // couponCode,
    }

    console.log(userData)
    // props.userRegisterAsync(userData, () => alert('成功登入'))
    if (marketingName !== '' && test && props.data3 == '') {
      console.log('測試2', props)
      props.insertCouponAsync(userData, () => console.log('前端傳資料成功'))

      setMarketingName('')
      setMarketingId('')
      setEndtime('')
    }
    if (props.data3 !== '') {
      setErrorMessages('此優惠卷已取得過')
      // setError(true)
    }
    setTest(false)
  }, [test])
  // function handleSubmit() {

  // }
  // console.log(123333, props.data)
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
                    onChange={function asd(e) {
                      setCouponCode(e.target.value)
                      setVerify(e.target.value + userId)
                    }}
                  />
                </Col>
                <Col md="auto" className="">
                  <Button
                    className="CouponBtn"
                    variant="primary"
                    type="button"
                    onClick={() => handleSubmit2()}
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
  return {
    data: store.getCode,
    data2: store.getCoupons,
    data3: store.CheckCoupon,
  }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { insertCouponAsync, formServerCouponsCode, formServerCheckCoupons },
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CouponInsert)
)
