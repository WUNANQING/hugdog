import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { ReactDOM } from 'react-dom'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { getMemberOrderDataDetail } from '../../../pages/member/actions/index'
import orderDetail from './orderDetail'
import { Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../../../css/member/member-info.scss'
//點擊可以按照id顯示
const MemberOrderInfo = props => {
  const [order, setOrder] = useState([])
  //設定mId的來源,抓到mId去檢索會員的最新訂單(未完成)
  const mId = localStorage.getItem('mId')
  // const orderId = props.match.params.orderId ? props.match.params.orderId : ''
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
  // console.log('mId: ', mId)

  var orderData = []
  var total = []
  const orderDetail = props => {}
  for (let i = 0; i <= props.data.length; i++) {
    const name = props.data[i] ? props.data[i].name : ''
    const address = props.data[i] ? props.data[i].address : ''
    const card = props.data[i] ? props.data[i].card : ''
    const cart = props.data[i] ? props.data[i].cart : ''
    const mobile = props.data[i] ? props.data[i].mobile : ''
    orderData.push({
      name,
      address,
      card,
      mobile,
    })
    const orderDataTotal = orderData.map(a => a)
    total = orderDataTotal
    // console.log('total: ', total)
    // console.log('data: ', orderData)
    // console.log('dataTotal', orderDataTotal)
    // console.log('name: ', name)
    // console.log('address: ', address)
    // console.log('card: ', card)
    // console.log('mobile: ', mobile)
    console.log('cart', cart)
  }
  // console.log('data: ', orderData)

  console.log('dataTotal', total[0])
  console.log('dataTotal', total[0].name)
  console.log('dataTotal', props.data[1] ? props.data[1].mobile : '')
  // console.log('dataTotal', total[1].mobile)
  // console.log('dataTotal: ', orderDataTotal.name)
  // console.log('mId: ', mId)
  useEffect(() => {
    props.getMemberOrderDataDetail(mId)
    // getOrderDetail(orderId)
  }, [])
  const sum = items => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].pQuantity * items[i].pPrice
    }
    return total
  }
  $('.order_show').click(function() {
    $('.order_detail').removeClass('order_none')
  })
  $('.detail_hide').click(function() {
    $('.order_detail').addClass('order_none')
  })
  return (
    <div class="tab-content content" id="content2">
      <div>
        <h3>
          訂單查詢
          <br />
        </h3>
        <Container className="order_none order_detail">
          <button className="detail_hide">返回</button>
          <Row className="mt-5">
            <Col className="d-flex justify-content-between align-items-end">
              <h4>訂單明細</h4>
              <div>
                <div>訂單編號:{props.data[1] ? props.data[1].id : ''}</div>
                <div>
                  訂單下達日期:
                  {props.data[1] ? props.data[1].created_at : ''}
                </div>
              </div>
            </Col>
          </Row>
          <hr className="mt-1" />

          {props.data[1]
            ? JSON.parse(props.data[1].cart).map((value, index) => {
                return (
                  <>
                    <Row key={index} className="align-items-center">
                      <Col xs={6} sm={6} md={6} lg={3}>
                        <img src="https://via.placeholder.com/250" alt="..." />
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
                            <h4>小計:{value.pQuantity * value.pPrice}</h4>
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
                    {props.data[1] ? props.data[1].name : ''}
                  </p>
                </Col>
                <Col xs={12} sm={12} md>
                  <p>收件地址</p>
                  <p className="ml-4 font-weight-bold">
                    {props.data[1] ? props.data[1].zip : ''}
                    {props.data[1] ? props.data[1].address : ''}
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs={8} sm={8} md={4}>
              <p>聯絡資訊</p>
              <p className="ml-4 font-weight-bold">
                信箱：{props.data[1] ? props.data[1].email : ''}
              </p>
              <p className="ml-4 font-weight-bold">
                手機：{props.data[1] ? props.data[1].mobile : ''}
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
                {props.data[1] ? props.data[1].owner : ''}
              </p>
              <p className="font-weight-bold">
                {props.data[1] ? props.data[1].card : ''}
              </p>
              <p className="font-weight-bold">
                {props.data[1] ? props.data[1].cardNumber : ''}
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
                NT${sum(props.data[1] ? JSON.parse(props.data[1].cart) : 0)}
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
                NT${sum(props.data[1] ? JSON.parse(props.data[1].cart) : 0)}
              </p>
            </Col>
          </Row>
        </Container>
        <div class="row">
          <div class="col-md-8">
            <div class="card card-width">
              <div class="card-body">
                <table class="table table-striped">
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
                    <tr className="order_show" id="0">
                      <th scope="row">1</th>
                      <td>{props.data[0] ? props.data[0].name : ''}</td>
                      <td>{props.data[0] ? props.data[0].address : ''}</td>
                      <td>{props.data[0] ? props.data[0].card : ''}</td>
                      <td>{props.data[0] ? props.data[0].mobile : ''}</td>
                    </tr>
                    <tr className="order_show" id="1">
                      <th scope="row">2</th>
                      <td>{props.data[1] ? props.data[1].name : ''}</td>
                      <td>{props.data[1] ? props.data[1].address : ''}</td>
                      <td>{props.data[1] ? props.data[1].card : ''}</td>
                      <td>{props.data[1] ? props.data[1].mobile : ''}</td>
                    </tr>
                    <tr className="order_show" id="2">
                      <th scope="row">3</th>
                      <td>{props.data[2] ? props.data[2].name : ''}</td>
                      <td>{props.data[2] ? props.data[2].address : ''}</td>
                      <td>{props.data[2] ? props.data[2].card : ''}</td>
                      <td>{props.data[2] ? props.data[2].mobile : ''}</td>
                    </tr>
                    <tr className="order_show" id="3">
                      <th scope="row">4</th>
                      <td>{props.data[3] ? props.data[3].name : ''}</td>
                      <td>{props.data[3] ? props.data[3].address : ''}</td>
                      <td>{props.data[3] ? props.data[3].card : ''}</td>
                      <td>{props.data[3] ? props.data[3].mobile : ''}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div>
        <img src="images/001.png" alt="" />
      </div>
    </div>
  )
}
const mapStateToProps = store => {
  return { data: store.getMemberOrderDetail }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getMemberOrderDataDetail }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MemberOrderInfo)
