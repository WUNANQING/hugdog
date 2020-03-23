import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { MdShoppingCart, MdBookmarkBorder } from 'react-icons/md'
const Order = props => {
  //設定訂單狀態
  const [order, setOrder] = useState([])
  //設定mId的來源,抓到mId去檢索會員的最新訂單(未完成)
  const mId = localStorage.getItem('mId')
  //設定orderId的來源
  const orderId = props.match.params.orderId ? props.match.params.orderId : ''
  //設定從資料庫抓取訂單細節的方法
  async function getOrderDetail(orderId) {
    const req = new Request(`http://localhost:6001/member/order/${mId}`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(req)
    const detail = await res.json()
    console.log(detail)
    setOrder(detail)
  }
  //設定生命週期方法useEffect===ComponnentDidMount
  useEffect(() => {
    getOrderDetail(orderId)
  }, [])

  //計算總價
  const sum = items => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].pQuantity * items[i].pPrice
    }
    return total
  }

  return (
    <div class="tab-content content" id="content3">
      <div>
        <h3>
          訂單查詢
          <br />
        </h3>
        <div class="row">
          <div class="col-md-8">
            <div class="card card-width">
              <div class="card-body">
                <table class="table table-striped"></table>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">訂購人姓名</th>
                    <th scope="col">寄送地址</th>
                    <th scope="col">信用卡</th>
                    <th scope="col">手機號碼</th>
                  </tr>
                </thead>

                <tbody>
                  {/* {orderDetail} */}
                  <tr>
                    <th scope="row">1</th>
                    <td>{order[0] ? order[0].name : ''}</td>
                    <td>{order[0] ? order[0].address : ''}</td>
                    <td>{order[0] ? order[0].card : ''}</td>
                    <td>{order[0] ? order[0].mobile : ''}</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>{order[1] ? order[1].name : ''}</td>
                    <td>{order[1] ? order[1].address : ''}</td>
                    <td>{order[1] ? order[1].card : ''}</td>
                    <td>{order[1] ? order[1].mobile : ''}</td>
                  </tr>
                </tbody>
                <Container>
                  <Row className="mt-5">
                    <Col className="d-flex justify-content-between align-items-end">
                      <h4>訂單明細</h4>
                      <div>
                        <div>訂單編號:{order[1] ? order[1].id : ''}</div>
                        <div>
                          訂單下達日期:
                          {order[1] ? order[1].created_at : ''}
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <hr className="mt-1" />

                  {order[1]
                    ? JSON.parse(order[1].cart).map((value, index) => {
                        return (
                          <>
                            <Row key={index} className="align-items-center">
                              <Col xs={6} sm={6} md={6} lg={3}>
                                <img
                                  src="https://via.placeholder.com/250"
                                  alt="..."
                                />
                              </Col>
                              <Col xs={6} sm={6} md={6} lg={9}>
                                <Row className="justify-content-around align-items-center">
                                  <Col
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    lg={3}
                                    className="pl-5 pr-0"
                                  >
                                    <h3>{value.pName}</h3>
                                  </Col>
                                  <Col
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    lg={3}
                                    className="pl-5 pr-0"
                                  >
                                    <h4>數量:{value.pQuantity}</h4>
                                    <h4>價格:${value.pPrice}</h4>
                                  </Col>
                                  <Col
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    lg={3}
                                    className="pl-5 pr-0"
                                  >
                                    <h4>
                                      小計:{value.pQuantity * value.pPrice}
                                    </h4>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                            <hr />
                          </>
                        )
                      })
                    : ''}
                  <Row className="mt-5">
                    <Col>
                      <h4>收件人明細</h4>
                    </Col>
                  </Row>
                  <hr className="mt-1" />
                  <Row>
                    <Col xs={4} sm={4} md={8}>
                      <Row className="justify-content-around">
                        <Col xs={12} sm={12} md>
                          <p>收件人</p>
                          <p className="ml-4 font-weight-bold">
                            {order[1] ? order[1].name : ''}
                          </p>
                        </Col>
                        <Col xs={12} sm={12} md>
                          <p>收件地址</p>
                          <p className="ml-4 font-weight-bold">
                            {order[1] ? order[1].zip : ''}
                            {order[1] ? order[1].address : ''}
                          </p>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={8} sm={8} md={4}>
                      <p>聯絡資訊</p>
                      <p className="ml-4 font-weight-bold">
                        信箱：{order[1] ? order[1].email : ''}
                      </p>
                      <p className="ml-4 font-weight-bold">
                        手機：{order[1] ? order[1].mobile : ''}
                      </p>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col>
                      <h4>付款摘要</h4>
                    </Col>
                  </Row>
                  <hr className="mt-1" />
                  <Row>
                    <Col
                      xs={12}
                      sm={12}
                      md={5}
                      className="d-flex justify-content-between"
                    >
                      <p>付款人</p>
                      <p>以下列方式支付全額</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      xs={12}
                      sm={12}
                      md={5}
                      className="d-flex justify-content-between"
                    >
                      <p className="ml-4 font-weight-bold">
                        {order[1] ? order[1].owner : ''}
                      </p>
                      <p className="font-weight-bold">
                        {order[1] ? order[1].card : ''}
                      </p>
                      <p className="font-weight-bold">
                        {order[1] ? order[1].cardNumber : ''}
                      </p>
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
                      <span>
                        NT${sum(order[1] ? JSON.parse(order[1].cart) : 0)}
                      </span>
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
                      <p className="font-weight-bold">
                        NT${sum(order[1] ? JSON.parse(order[1].cart) : 0)}
                      </p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Order)
