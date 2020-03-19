import React, { useState, useEffect } from 'react'
import $ from 'jquery'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { getMemberData } from './actions/index'
import {
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../../css/member/member-info.scss'
import DogInfo from '../../components/member/member-info/dog-info'
import Memberinfo from '../../components/member/member-info/member-info'
const MemberInfo = props => {
  //會員基本資料
  const mId = props.data[0] ? props.data[0].mId : ''
  const mName = props.data[0] ? props.data[0].mName : ''
  const mAccount = props.data[0] ? props.data[0].mAccount : ''
  const mPassword = props.data[0] ? props.data[0].mPassword : ''
  const mImg = props.data[0] ? props.data[0].mImg : ''
  const mGender = props.data[0] ? props.data[0].mGender : ''
  const mBday = props.data[0] ? props.data[0].mBday : ''
  const mPhone = props.data[0] ? props.data[0].mPhone : ''
  const mEmail = props.data[0] ? props.data[0].mEmail : ''
  const mAddress = props.data[0] ? props.data[0].mAddress : ''
  //狗狗基本資料

  useEffect(() => {
    props.getMemberData()
    $('.nav-item').click(function() {
      let effect = $(this).data('effect')
      console.log(effect)
      switch (effect) {
        case 'show1':
          $('#content1').fadeIn()
          $('#content2').fadeOut()
          $('#content3').fadeOut()
          break
        case 'show2':
          $('#content1').fadeOut()
          $('#content2').fadeIn()
          $('#content3').fadeOut()
          break
        case 'show3':
          $('#content1').fadeOut()
          $('#content2').fadeOut()
          $('#content3').fadeIn()
          break
      }
      $('.nav-link').removeClass('active')
      $(this)
        .find('a')
        .addClass('active')
    })
  }, [])

  return (
    <div className="Member container">
      <div className="member-info d-flex">
        <div className="member-content d-flex row ">
          <div className="member-sidebar w120">
            <Nav>
              <Nav.Link className="member-sidebar-text" href="/member">
                首頁
              </Nav.Link>
              <Nav.Link
                className="member-sidebar-text"
                href="/member/member-info"
              >
                個人資訊
              </Nav.Link>

              <Nav.Link
                className="member-sidebar-text"
                href="/member/member-item"
              >
                商品查詢
              </Nav.Link>
              <Nav.Link
                className="member-sidebar-text"
                href="/member/member-service"
              >
                服務查詢
              </Nav.Link>
              <Nav.Link
                className="member-sidebar-text"
                href="/member/member-activity"
              >
                活動查詢
              </Nav.Link>
            </Nav>
          </div>
          <div class=" wrapper">
            <ul class="nav nav-tabs">
              <li class="nav-item" id="pokemon1" data-effect="show1">
                <Link class="nav-link active" to="#">
                  個人資訊
                </Link>
              </li>
              <li class="nav-item" id="pokemon2" data-effect="show2">
                <Link class="nav-link" to="#">
                  狗狗資訊
                </Link>
              </li>
            </ul>
            <Memberinfo />
            <DogInfo />
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = store => {
  return { data: store.getMember }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getMemberData }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MemberInfo)
