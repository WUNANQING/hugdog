import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import { ReactDOM } from 'react-dom'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { getMemberOrderDataDetail } from '../../../pages/member/actions/index'
import orderDetail from './orderDetail'
import {
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../../../css/member/member-info.scss'

const MemberOrderInfo = props => {
  // console.log('mId: ', mId)
  var mId = localStorage.getItem('mId')
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
  console.log('dataTotal', total[1])
  // console.log('dataTotal', total[1].mobile)
  // console.log('dataTotal: ', orderDataTotal.name)
  // console.log('mId: ', mId)
  useEffect(() => {
    props.getMemberOrderDataDetail(mId)
  }, [])

  return (
    <div class="tab-content content" id="content2">
      <div>
        <h3>
          訂單查詢
          <br />
        </h3>
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
                    <tr>
                      <th scope="row">1</th>
                      <td>{total[0].name}</td>
                      <td>{total[0].address}</td>
                      <td>{total[0].card}</td>
                      <td>{total[0].mobile}</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                      <td>@twitter</td>
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
