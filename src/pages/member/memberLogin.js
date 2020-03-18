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
import MemberSidebar from '../../components/member/member-sidebar'
import '../../css/member/member-login.scss'
const MemberLogin = props => {
  const mId = props.data[0] ? props.data[0].mId : ''
  const mAccount = props.data[0] ? props.data[0].mAccount : ''
  const mPassword = props.data[0] ? props.data[0].mPassword : ''
  $('.login-btn').click(function() {
    console.log('輸入帳號: ' + $('#exampleInputAccount1').val())
    console.log('輸入密碼: ' + $('#exampleInputPassword1').val())
    console.log('帳號: ' + mAccount)
    console.log('密碼: ' + mPassword)
    if (
      $('#exampleInputAccount1').val() === mAccount &&
      $('#exampleInputPassword1').val() === mPassword
    ) {
      console.log('正確')
      window.location.replace('http://localhost:3000/member/')
    } else {
      console.log('不正確')
      alert('帳號或密碼錯誤')
    }
  })
  useEffect(() => {
    props.getMemberData()

    $('.show').click(function() {
      $('.show').addClass('active')
      $('.hide').removeClass('active')
      $('#exampleInputPassword1').attr('type', 'text')
    })
    $('.hide').click(function() {
      $('.hide').addClass('active')
      $('.show').removeClass('active')
      $('#exampleInputPassword1').attr('type', 'password')
    })
    const account = $('#exampleInputAccount1').val()
    const password = $('#exampleInputPassword1').val()
  }, [])

  const memberData = props.data
  // console.log(memberData)
  return (
    <>
      <div className="container login-container">
        <div className="login">
          <img
            src={require('../../images/logo-dark.svg')}
            alt="Background"
            className="text-center"
          />
          <hr />
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="exampleInputAccount1"
                aria-describedby="accountHelp"
                placeholder="帳號"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="密碼"
              />
              <img
                src={require('../../images/member/hide_password.png')}
                alt="Background"
                className="show"
              />
              <img
                src={require('../../images/member/show_hide_password.png')}
                alt="Background"
                className="hide active"
              />
            </div>
            <Link class="form-group text-left">
              <p>忘記密碼?</p>
            </Link>
            <br />
            <Link
              type="submit"
              class="btn btn-primary btn-block login-btn"
              // to={'/member/'}
            >
              登入
            </Link>
            <div class="form-group d-flex justify-content-between register">
              <div>
                <p>還沒有註冊帳號?</p>
              </div>
              <div>
                <Link class=" ">
                  <p>立即註冊→</p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
const mapStateToProps = store => {
  return { data: store.getMember }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getMemberData }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MemberLogin)
