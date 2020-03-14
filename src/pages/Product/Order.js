import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { MdShoppingCart, MdBookmarkBorder } from 'react-icons/md'
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
        <Col xs={6} sm={6} md={6} lg={3}>
          <img src="https://via.placeholder.com/250" alt="..." />
        </Col>
        <Col xs={6} sm={6} md={6} lg={2} className="pl-5 pr-0">
          <h3>商品名稱</h3>
          <h4>尺寸:小</h4>
          <h4>顏色:紅</h4>
          <h4>數量:1</h4>
          <h4>價格:$100</h4>
        </Col>
        <Col xs={12} sm={12} md={12} lg={7}>
          <Row className="m-0">
            <Col xs={12} className="mt-5 p-0 d-flex justify-content-center">
              <Col xs={8} className="border position-relative">
                <div
                  className="rounded bg-primary position-absolute rounded-circle"
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
                    left: (201.656 / 423.312) * 100 + '%',
                    top: -10,
                  }}
                ></div>
                <div
                  className="rounded bg-dark position-absolute rounded-circle"
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
            <Col xs={12} className="d-flex p-0 justify-content-center">
              <Col xs={7} className="position-relative">
                <div
                  className="position-absolute "
                  style={{
                    left: (-50 / 423.312) * 100 + '%',
                    top: 10,
                  }}
                >
                  下達訂單
                </div>
                <div
                  className="position-absolute "
                  style={{
                    left: (187.656 / 423.312) * 100 + '%',
                    top: 10,
                  }}
                >
                  運送中
                </div>
                <div
                  className="position-absolute "
                  style={{
                    right: (-42 / 423.312) * 100 + '%',
                    top: 10,
                  }}
                >
                  已取貨
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
        <Col xs={12} sm={12} md>
          <p>收件人</p>
          <p className="ml-4 font-weight-bold">王小明</p>
        </Col>
        <Col xs={12} sm={12} md>
          <p>收件地址</p>
          <p className="ml-4 font-weight-bold">433台中市沙鹿區向上路666號</p>
        </Col>
        <Col xs={12} sm={12} md>
          <p>聯絡資訊</p>
          <p className="ml-4 font-weight-bold">信箱：</p>
          <p className="ml-4 font-weight-bold">手機：</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h4>付款摘要</h4>
        </Col>
      </Row>
      <hr className="mt-1" />
      <Row>
        <Col xs={12} sm={12} md={5} className="d-flex justify-content-between">
          <p>付款人</p>
          <p>以下列方式支付全額</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={5} className="d-flex justify-content-between">
          <p className="ml-4 font-weight-bold">王小明</p>
          <p className="font-weight-bold">＊＊＊＊1234</p>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={5}
          className="mt-3 d-flex justify-content-between"
        >
          <span>小計</span>
          <span>NT$100</span>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={5} className="mt-3">
          <hr className="my-0" />
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={5}
          className="mt-3 d-flex justify-content-between"
        >
          <p className="font-weight-bold">總計</p>
          <p className="font-weight-bold">NT$100</p>
        </Col>
      </Row>
      <Row>
        <Col className="my-5 d-flex justify-content-around">
          <Button className="mb-md-2" variant="primary" size="lg" href="#">
            <MdBookmarkBorder className="mb-md-1" />
            檢視訂單
          </Button>{' '}
          <Button
            className="mb-md-2"
            variant="primary"
            size="lg"
            href="/productlist"
          >
            <MdShoppingCart className="mb-md-1" />
            繼續選購
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Order
