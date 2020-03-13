import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Order = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} className="mt-5 d-flex justify-content-center">
          <Col xs={7} className="border position-relative">
            <div
              className="rounded bg-dark position-absolute rounded-circle"
              style={{
                width: 20 + 'px',
                height: 20 + 'px',
                left: (-10 / 647.484) * 100 + '%',
                top: -10,
              }}
            ></div>
            <div
              className="rounded bg-dark position-absolute rounded-circle"
              style={{
                width: 20 + 'px',
                height: 20 + 'px',
                left: (313.742 / 647.484) * 100 + '%',
                top: -10,
              }}
            ></div>
            <div
              className="rounded bg-primary position-absolute rounded-circle"
              style={{
                width: 20 + 'px',
                height: 20 + 'px',
                left: (637.484 / 647.484) * 100 + '%',
                top: -10,
              }}
            ></div>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <Col xs={7} className="position-relative">
            <div
              className="position-absolute "
              style={{
                left: (-21.6015 / 647.484) * 100 + '%',
                top: 10,
              }}
            >
              購物車
            </div>
            <div
              className="position-absolute "
              style={{
                left: (294.9375 / 647.484) * 100 + '%',
                top: 10,
              }}
            >
              付款資料
            </div>
            <div
              className="position-absolute "
              style={{
                right: (-28.805 / 647.484) * 100 + '%',
                top: 10,
              }}
            >
              訂單資料
            </div>
          </Col>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="d-flex justify-content-between align-items-end">
          <h4>你的訂單明細</h4>
          <div>
            <div>訂單編號:123456789</div>
            <div>訂單下達日期:2020/03/13</div>
          </div>
        </Col>
      </Row>
      <hr className="mt-1" />
      <Row className="align-items-center">
        <Col xs={12} md={3}>
          <img src="https://via.placeholder.com/250" alt="..." />
        </Col>
        <Col xs={12} md={2} className="pl-5">
          <h3>商品名稱</h3>
          <h4>尺寸:小</h4>
          <h4>顏色:紅</h4>
          <h4>數量:1</h4>
          <h4>價格:$100</h4>
        </Col>
        <Col xs={12} md={7}>
          <Row className="m-0">
            <Col xs={12} className="mt-5 d-flex justify-content-center">
              <Col xs={7} className="border position-relative">
                <div
                  className="rounded bg-dark position-absolute rounded-circle"
                  style={{
                    width: 20 + 'px',
                    height: 20 + 'px',
                    left: -2.5 + '%',
                    top: -10,
                  }}
                ></div>
                <div
                  className="rounded bg-dark position-absolute rounded-circle"
                  style={{
                    width: 20 + 'px',
                    height: 20 + 'px',
                    left: (313.742 / 647.484) * 100 + '%',
                    top: -10,
                  }}
                ></div>
                <div
                  className="rounded bg-primary position-absolute rounded-circle"
                  style={{
                    width: 20 + 'px',
                    height: 20 + 'px',
                    left: 97.5 + '%',
                    top: -10,
                  }}
                ></div>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="d-flex justify-content-center">
              <Col xs={7} className="position-relative">
                <div
                  className="position-absolute "
                  style={{
                    left: (-21.6015 / 647.484) * 100 + '%',
                    top: 10,
                  }}
                >
                  購物車
                </div>
                <div
                  className="position-absolute "
                  style={{
                    left: (294.9375 / 647.484) * 100 + '%',
                    top: 10,
                  }}
                >
                  付款資料
                </div>
                <div
                  className="position-absolute "
                  style={{
                    right: (-28.805 / 647.484) * 100 + '%',
                    top: 10,
                  }}
                >
                  訂單資料
                </div>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h4>收件人明細</h4>
        </Col>
      </Row>
      <hr className="mt-1" />
      <Row>
        <Col>收件人</Col>
        <Col>收件地址</Col>
        <Col>聯絡資訊</Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h4>付款摘要</h4>
        </Col>
      </Row>
      <hr className="mt-1" />
    </Container>
  )
}

export default Order
