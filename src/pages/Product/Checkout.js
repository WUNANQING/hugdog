import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import ProductReceipt from './components/ProductReceipt'
const Checkout = props => {
  //設定mId的來源,抓到mId去檢索會員的最新訂單(未完成)
  const mId = localStorage.getItem('mId')
  //表單資訊
  const buyerInfo = {
    lastName: '',
    firstName: '',
    county: '',
    address: '',
    detailedAddress: '',
    zip: '',
    email: '',
    mobile: '',
    card: '',
    cardNumber: '',
    owner: '',
    cart: localStorage.getItem('cart'),
    mId: mId,
  }
  //寫入表單資訊
  function getformInfo(e, info) {
    switch (info) {
      case 'lastName':
        buyerInfo.lastName = e.currentTarget.value
        break
      case 'firstName':
        buyerInfo.firstName = e.currentTarget.value
        break
      case 'county':
        buyerInfo.county = e.currentTarget.value
        break
      case 'address':
        buyerInfo.address = e.currentTarget.value
        break
      case 'detailedAddress':
        buyerInfo.detailedAddress = e.currentTarget.value
        break
      case 'zip':
        buyerInfo.zip = e.currentTarget.value
        break
      case 'email':
        buyerInfo.email = e.currentTarget.value
        break
      case 'mobile':
        buyerInfo.mobile = e.currentTarget.value
        break
      case 'card':
        buyerInfo.card = e.currentTarget.id
        break
      case 'cardNumber':
        buyerInfo.cardNumber = e.currentTarget.value
        break
      case 'owner':
        buyerInfo.owner = e.currentTarget.value
        break
      default:
        break
    }
  }

  //建立訂單
  async function postOrder(form) {
    const req = new Request('http://localhost:6001/order/post', {
      method: 'POST',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(form),
    })
    const res = await fetch(req)
    const order = await res.json()
    await console.log(order)
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
            <ProductReceipt />
          </Col>
        </Row>
        <hr className="mt-0" />
        <Row className="mt-5">
          <Col sm={{ span: 8, offset: 2 }}>
            <h3>輸入姓名與地址</h3>
            <hr />
            <br />
            <Form name="checkout">
              <Form.Row>
                <Form.Group as={Col} xs={12} md={6}>
                  <Form.Control
                    name="lastName"
                    size="lg"
                    type="text"
                    placeholder="姓氏"
                    onChange={e => getformInfo(e, 'lastName')}
                  />
                </Form.Group>
                <Form.Group as={Col} xs={12} md={6}>
                  <Form.Control
                    name="firstName"
                    size="lg"
                    type="text"
                    placeholder="名字"
                    onChange={e => getformInfo(e, 'firstName')}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} xs={12} md={2}>
                  <Form.Control
                    name="county"
                    as="select"
                    size="lg"
                    onChange={e => getformInfo(e, 'county')}
                  >
                    <option>縣/市</option>
                    <option value="基隆市">基隆市</option>
                    <option value="臺北市">臺北市</option>
                    <option value="新北市">新北市</option>
                    <option value="桃園市">桃園市</option>
                    <option value="新竹市">新竹市</option>
                    <option value="新竹縣">新竹縣</option>
                    <option value="苗栗縣">苗栗縣</option>
                    <option value="台中市">臺中市</option>
                    <option value="彰化縣">彰化縣</option>
                    <option value="南投縣">南投縣</option>
                    <option value="雲林縣">雲林縣</option>
                    <option value="嘉義市">嘉義市</option>
                    <option value="嘉義縣">嘉義縣</option>
                    <option value="臺南市">臺南市</option>
                    <option value="高雄市">高雄市</option>
                    <option value="屏東縣">屏東縣</option>
                    <option value="臺東縣">臺東縣</option>
                    <option value="花蓮縣">花蓮縣</option>
                    <option value="宜蘭縣">宜蘭縣</option>
                    <option value="澎湖縣">澎湖縣</option>
                    <option value="金門縣">金門縣</option>
                    <option value="連江縣">連江縣</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} xs={12} md={5}>
                  <Form.Control
                    name="address"
                    size="lg"
                    type="text"
                    placeholder="地址"
                    onChange={e => getformInfo(e, 'address')}
                  />
                </Form.Group>
                <Form.Group as={Col} xs={12} md={5}>
                  <Form.Control
                    name="detailedAddress"
                    size="lg"
                    type="text"
                    placeholder="附加詳細地址(選填)"
                    onChange={e => getformInfo(e, 'detailedAddress')}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Control
                name="zip"
                size="lg"
                type="text"
                placeholder="郵遞區號"
                onChange={e => getformInfo(e, 'zip')}
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
                  name="email"
                  size="lg"
                  type="email"
                  placeholder="電子郵件地址"
                  onChange={e => getformInfo(e, 'email')}
                />
                <br />
                <Form.Control
                  name="mobile"
                  size="lg"
                  type="text"
                  placeholder="行動電話號碼"
                  onChange={e => getformInfo(e, 'mobile')}
                />
                <br />
              </Form.Group>
              <h3>輸入卡片資訊</h3>
              <hr />
              <br />
              <Form.Group>
                <div className="mb-3">
                  <Form.Check
                    inline
                    name="card"
                    label="MasterCard"
                    type="radio"
                    id="MasterCard"
                    onChange={e => getformInfo(e, 'card')}
                  />
                  <Form.Check
                    inline
                    name="card"
                    label="VISA"
                    type="radio"
                    id="VISA"
                    onChange={e => getformInfo(e, 'card')}
                  />
                </div>
                <Form.Control
                  name="cardNumber"
                  size="lg"
                  type="text"
                  placeholder="信用卡/金融卡卡號"
                  onChange={e => getformInfo(e, 'cardNumber')}
                ></Form.Control>
                <br />
                <Form.Row>
                  <Form.Group as={Col} xs={3}>
                    <Form.Control
                      name="valid"
                      size="lg"
                      type="text"
                      placeholder="到期月年"
                    />
                  </Form.Group>
                  <Form.Group as={Col} xs={3}>
                    <Form.Control
                      name="ccv"
                      size="lg"
                      type="text"
                      placeholder="安全碼"
                    />
                  </Form.Group>
                  <Form.Group as={Col} xs={3}>
                    <Form.Control
                      name="owner"
                      size="lg"
                      type="text"
                      placeholder="卡片持有人"
                      onChange={e => getformInfo(e, 'owner')}
                    />
                  </Form.Group>
                </Form.Row>
                <hr />
                <Button
                  variant="primary"
                  size="lg"
                  block
                  type="submit"
                  onClick={() => {
                    postOrder(buyerInfo)
                    localStorage.setItem('cart', JSON.stringify([]))
                    // props.history.push(`/order/${mId}`)
                  }}
                >
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

export default withRouter(Checkout)
