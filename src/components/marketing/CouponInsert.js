import React from 'react'
import { Nav, Navbar, Form, Button, Col, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import { FiSearch, FiHeart } from 'react-icons/fi'
import { GiTicket } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import '../../css/marketing/coupon.scss'
function CouponInsert(props) {
  return (
    <>
      <div className="marketing container">
        <h2>
          <IconContext.Provider value={{ size: '2rem' }}>
            <GiTicket />
          </IconContext.Provider>
          優惠碼與優惠卷
        </h2>
        <div className="d-flex justify-content-center">
          <div className="coupon-box d-flex justify-content-center align-items-center my-5 px-3">
            <Form className="couponcode">
              <Form.Row>
                <Col md="auto" sm="12">
                  <h3>優惠碼輸入</h3>
                </Col>
                <Col md="auto" sm="12">
                  <Form.Control type="code" placeholder="優惠碼輸入" />
                </Col>
                <Form.Text className="text-muted"></Form.Text>
                <Col md="auto">
                  <Button variant="primary" type="submit">
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

export default CouponInsert
