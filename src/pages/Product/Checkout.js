import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
const Checkout = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={12} className="mt-5 d-flex justify-content-center">
            <Col sm={7} className="border position-relative">
              <div
                className="rounded bg-dark position-absolute rounded-circle"
                style={{
                  width: 20 + 'px',
                  height: 20 + 'px',
                  left: (-10 / 630) * 100 + '%',
                  top: -10,
                }}
              ></div>
              <div
                className="rounded bg-primary position-absolute rounded-circle"
                style={{
                  width: 20 + 'px',
                  height: 20 + 'px',
                  left: (305 / 630) * 100 + '%',
                  top: -10,
                }}
              ></div>
              <div
                className="rounded bg-dark position-absolute rounded-circle"
                style={{
                  width: 20 + 'px',
                  height: 20 + 'px',
                  left: (620 / 630) * 100 + '%',
                  top: -10,
                }}
              ></div>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="d-flex justify-content-center">
            <Col sm={7} className="position-relative">
              <div
                className="position-absolute "
                style={{
                  left: (-24 / 630) * 100 + '%',
                  top: 10,
                }}
              >
                購物車
              </div>
              <div
                className="position-absolute "
                style={{
                  left: (283 / 630) * 100 + '%',
                  top: 10,
                }}
              >
                付款資料
              </div>{' '}
              <div
                className="position-absolute "
                style={{
                  right: (-32 / 630) * 100 + '%',
                  top: 10,
                }}
              >
                訂單資料
              </div>
            </Col>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="d-flex justify-content-between align-items-center">
            <h4>結帳</h4>
            <Button
              className="text-decoration-none"
              variant="link"
              onClick={() => {
                alert('hello')
              }}
            >
              檢視訂單摘要：NT$100
            </Button>
          </Col>
        </Row>
        <hr className="mt-0" />
        <Row className="mt-5">
          <Col sm={5}>
            <h3>輸入姓名與地址</h3>
            <br />
            <Form>
              <Form.Group>
                <Form.Control
                  required
                  name="lastName"
                  size="lg"
                  type="text"
                  placeholder="姓氏"
                />
                <br />
                <Form.Control
                  required
                  name="firstName"
                  size="lg"
                  type="text"
                  placeholder="名字"
                />
                <br />
                <Form.Control name="county" as="select" size="lg">
                  <option>縣/市</option>
                  <option>基隆市</option>
                  <option>臺北市</option>
                </Form.Control>
                <br />
                <Form.Control
                  required
                  name="address"
                  size="lg"
                  type="text"
                  placeholder="地址"
                />
                <br />
                <Form.Control
                  required
                  name="detailedAddress"
                  size="lg"
                  type="text"
                  placeholder="附加詳細地址(選填)"
                />
                <br />
                <Form.Control
                  required
                  name="zip"
                  size="lg"
                  type="text"
                  placeholder="郵遞區號"
                />
                <br />
                <Form.Control
                  readOnly
                  style={{ pointerEvents: 'none' }}
                  name="country"
                  size="lg"
                  type="text"
                  placeholder="台灣"
                />
                <br />
              </Form.Group>
              <h3>你的聯絡資訊為何？？</h3>
              <Form.Control
                required
                name="email"
                size="lg"
                type="email"
                placeholder="電子郵件地址"
              />
              <br />
              <Form.Control
                required
                name="mobile"
                size="lg"
                type="text"
                placeholder="行動電話號碼"
              />
              <br />
              <Form.Control
                required
                name="phone"
                size="lg"
                type="text"
                placeholder="家裡電話號碼"
              />
              <br />
            </Form>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={5} className="mb-5">
            <Button variant="primary" size="lg" block href="/checkout">
              前往結帳
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Checkout
