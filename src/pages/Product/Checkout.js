import React from 'react'
import { Container, Row, Col, Nav, ButtonGroup, Button } from 'react-bootstrap'
const Checkout = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-5 d-flex justify-content-center">
            <Col md={7} className="border position-relative">
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
                className="rounded bg-dark position-absolute rounded-circle"
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
          <Col md={12} className="d-flex justify-content-center">
            <Col md={7} className="position-relative">
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
          <Col className="d-md-flex justify-content-between">
            <h4>結帳</h4>
            <Nav.Item>
              <Nav.Link
                title="Item"
                onClick={() => {
                  alert('hello')
                }}
              >
                檢視訂單摘要：NT$100
              </Nav.Link>
            </Nav.Item>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Checkout
