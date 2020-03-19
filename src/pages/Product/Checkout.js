import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap'
import { ReactComponent as Logo } from '../../images/logo-dark.svg'

const Checkout = () => {
  function Receipt() {
    const [show, setShow] = useState(false)
    const [mycart, setMycart] = useState([])

    //提取購物車資料
    function getCartFromLocalStorage() {
      const newCart = localStorage.getItem('cart') || []
      setMycart(JSON.parse(newCart))
    }

    //從localStorage取得購物車資料
    useEffect(() => {
      getCartFromLocalStorage()
    }, [])

    //計算總價
    const sum = items => {
      let total = 0
      for (let i = 0; i < items.length; i++) {
        total += items[i].pQuantity * items[i].pPrice
      }
      return total
    }
    //訂單時間
    const time =
      new Date().getFullYear() +
      '/' +
      (new Date().getMonth() + 1) +
      '/' +
      new Date().getDate()

    return (
      <>
        <Button
          className="text-decoration-none p-0 b-0"
          variant="link"
          size="lg"
          onClick={() => setShow(true)}
        >
          檢視訂單摘要：NT${sum(mycart)}
        </Button>
        <Modal centered size="md" show={show} onHide={() => setShow(false)}>
          <Modal.Header>
            <Logo className="App-logo" alt="logo" />
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row className="show-grid">
                <Col>
                  <h5 className="text-center font-weight-bold">購物明細</h5>
                  <hr />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col>時間:{time}</Col>
              </Row>
              <hr className="mt-1" />
              {mycart.map((value, index) => {
                return (
                  <>
                    <Row className="show-grid">
                      <Col>商品名稱:{value.pName}</Col>
                    </Row>
                    <Row className="show-grid">
                      <Col>
                        <div className="d-flex justify-content-between">
                          <div>
                            價格*數量
                            <br />
                            {value.pQuantity} * {value.pPrice}
                          </div>
                          <div>
                            <br />
                            小計:{value.pQuantity * value.pPrice}
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </>
                )
              })}
              <Row className="show-grid">
                <Col>
                  <div className="d-flex justify-content-between">
                    <div>是否使用優惠</div>
                    <div>優惠:100</div>
                  </div>
                </Col>
              </Row>
              <hr className="mb-1" />
              <Row className="show-grid">
                <Col>
                  <div className="d-flex justify-content-between">
                    <div>合計</div>
                    <div>總計:{sum(mycart)}</div>
                  </div>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col>
                  <h5 className="text-center font-weight-bold">
                    運貨與退貨通知
                  </h5>
                  <hr />
                  <p className="p-2">
                    無庫存商品調貨時間請參考「商品平均調貨時間」。
                    結帳選項若無出現「海外店取」，可能是購買商品不適用此
                    服務。(說明)。 海外郵資運費計算。(說明)
                  </p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </>
    )
  }
  return (
    <>
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
                className="rounded bg-primary position-absolute rounded-circle"
                style={{
                  width: 20 + 'px',
                  height: 20 + 'px',
                  left: (313.742 / 647.484) * 100 + '%',
                  top: -10,
                }}
              ></div>
              <div
                className="rounded bg-dark position-absolute rounded-circle"
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
          <Col className="d-flex justify-content-between align-items-center">
            <h4>結帳</h4>
            <Receipt />
          </Col>
        </Row>
        <hr className="mt-0" />
        <Row className="mt-5">
          <Col sm={{ span: 8, offset: 2 }}>
            <h3>輸入姓名與地址</h3>
            <hr />
            <br />
            <Form>
              <Form.Row>
                <Form.Group as={Col} xs={12} md={6}>
                  <Form.Control
                    required
                    name="lastName"
                    size="lg"
                    type="text"
                    placeholder="姓氏"
                  />
                </Form.Group>
                <Form.Group as={Col} xs={12} md={6}>
                  <Form.Control
                    required
                    name="firstName"
                    size="lg"
                    type="text"
                    placeholder="名字"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} xs={12} md={2}>
                  <Form.Control name="county" as="select" size="lg">
                    <option>縣/市</option>
                    <option>基隆市</option>
                    <option>臺北市</option>
                    <option>新北市</option>
                    <option>臺北市</option>
                    <option>臺北市</option>
                    <option>臺北市</option>
                    <option>臺北市</option>
                    <option>臺北市</option>
                    <option>臺北市</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} xs={12} md={5}>
                  <Form.Control
                    required
                    name="address"
                    size="lg"
                    type="text"
                    placeholder="地址"
                  />
                </Form.Group>
                <Form.Group as={Col} xs={12} md={5}>
                  <Form.Control
                    required
                    name="detailedAddress"
                    size="lg"
                    type="text"
                    placeholder="附加詳細地址(選填)"
                  />
                </Form.Group>
              </Form.Row>

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
              <br />
              <h3>輸入聯絡資訊</h3>
              <hr />
              <br />
              <Form.Group>
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
              </Form.Group>
              <h3>輸入卡片資訊</h3>
              <hr />
              <br />
              <Form.Group>
                <Form.Control
                  required
                  name="cardNumber"
                  size="lg"
                  type="text"
                  placeholder="信用卡/金融卡卡號"
                ></Form.Control>
                <br />
                <Form.Row>
                  <Form.Group as={Col} xs={3}>
                    <Form.Control
                      required
                      name="valid"
                      size="lg"
                      type="text"
                      placeholder="到期月年"
                    />
                  </Form.Group>
                  <Form.Group as={Col} xs={3}>
                    <Form.Control
                      required
                      name="ccv"
                      size="lg"
                      type="text"
                      placeholder="安全碼"
                    />
                  </Form.Group>
                  <Form.Group as={Col} xs={3}>
                    <Form.Control
                      required
                      name="owner"
                      size="lg"
                      type="text"
                      placeholder="卡片持有人"
                    />
                  </Form.Group>
                </Form.Row>
                <hr />
                <Button variant="primary" size="lg" block href="/order">
                  確定結帳
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Checkout
