import React, { useState } from 'react'
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap'
import { MdPlaylistAdd, MdDelete } from 'react-icons/md'
import $ from 'jquery'
const Cart = () => {
  const [total, setTotal] = useState(1)
  return (
    //   判斷式如果購物車有東西才顯示，沒有則顯示沒有東西出現選購按鈕
    <>
      <Container>
        <Row>
          <Col md={12} className="d-flex justify-content-center">
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
          <Col md={12}>
            <h3>以下是你購物車內的商品 NT$100</h3>
            <hr />
            <Row className="justify-content-around">
              <img
                src="https://via.placeholder.com/150x150"
                className="col-md-4"
                alt="..."
              />
              <Col md={2} className="align-self-center">
                <h3>商品名稱</h3>
                <h4>尺寸:小</h4>
                <h4>顏色:紅</h4>
              </Col>
              <Col md={2} className="align-self-center">
                <ButtonGroup className="mb-md-2">
                  <Button
                    className="border-dark bg-light text-dark"
                    onClick={e => {
                      total <= 1 ? setTotal(1) : setTotal(total - 1)
                    }}
                  >
                    -
                  </Button>
                  <Button
                    className="border-dark bg-light text-dark"
                    value={total}
                    type="input"
                    min="0"
                  >
                    {total}
                  </Button>
                  <Button
                    className="border-dark bg-light text-dark"
                    onClick={() => {
                      setTotal(total + 1)
                    }}
                  >
                    +
                  </Button>
                </ButtonGroup>
              </Col>
              <Col md={2} className="align-self-center">
                <h4>$100</h4>
              </Col>
              <Col md={2} className="align-self-center">
                <Button className="mb-2" variant="warning" size="lg">
                  <MdPlaylistAdd className="mb-md-1" />
                  加入清單
                </Button>{' '}
                <Button className="mb-2" variant="warning" size="lg">
                  <MdDelete className="mb-md-1" />
                  刪除商品
                </Button>
              </Col>
            </Row>
            <hr />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={{ offset: 6 }}>
            <Row>
              <Col className="d-flex justify-content-between">
                <div>小計</div>
                <div>$100</div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={{ offset: 6 }}>
            <Row>
              <Col className="d-flex justify-content-between">
                <div>運費</div>
                <div>免額外運費</div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={{ offset: 6 }}>
            <Row>
              <Col className="d-flex justify-content-between">
                <Button
                  className="bg-transparent border-0 text-dark p-0"
                  onClick={e => {
                    $('#coupon')
                      .toggle()
                      .focus()
                    if ($(e.target).hasClass('text-dark')) {
                      $(e.target)
                        .removeClass('text-dark')
                        .addClass('text-primary')
                    } else {
                      $(e.target)
                        .removeClass('text-primary')
                        .addClass('text-dark')
                    }
                  }}
                >
                  促銷代碼或優惠券
                </Button>
                <input id="coupon" type="text" className="b-0" />
              </Col>
            </Row>
            <hr />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Cart
