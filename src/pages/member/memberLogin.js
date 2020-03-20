import React, { useState, useEffect } from 'react'
import $ from 'jquery'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { getMemberData, getMemberDetail } from './actions/index'
import Breadcrumb from '../../components/Breadcrumbs'
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
import { doc } from 'prettier'

const MemberLogin = props => {
  localStorage.setItem('mId', 0)
  $('.login-btn').click(function() {
    console.log('輸入帳號: ' + $('#exampleInputAccount1').val())
    console.log('輸入密碼: ' + $('#exampleInputPassword1').val())
    // console.log('帳號: ' + mAccount)
    // console.log('密碼: ' + mPassword)
    console.log(document.cookie)

    // console.log(mName)
    for (let i = 0; i <= props.data.length; i++) {
      var mId = props.data[i] ? props.data[i].mId : ''
      var mName = props.data[i] ? props.data[i].mName : ''
      var mAccount = props.data[i] ? props.data[i].mAccount : ''
      var mPassword = props.data[i] ? props.data[i].mPassword : ''
      //新增cookie
      function setCookie(cname, cvalue, exdays) {
        var d = new Date()
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
        var expires = 'expires=' + d.toUTCString()
        document.cookie = cname + '=' + cvalue + '; ' + expires
      }
      //清除cookie
      function clearAllCookie() {
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g)
        if (keys) {
          for (var i = keys.length; i--; )
            document.cookie =
              keys[i] + '=0;expires=' + new Date(0).toUTCString()
        }
      }

      if (
        $('#exampleInputAccount1').val() === mAccount &&
        $('#exampleInputPassword1').val() === mPassword
      ) {
        console.log('正確')
        $('.alertBox')
          .removeClass('disappear')
          .addClass('appear')
          .text('登入成功', 2000)
        window.location.replace('http://localhost:3000/member/')

        const member = props.data[i]
        // setCookie('mId', mId)
        document.cookie = `mId=${mId}; path=/member`
        // document.cookie = mId
        localStorage.setItem('mId', mId)
        localStorage.setItem('mName', mName)
      }
      if ($('#exampleInputAccount1').val() === '') {
        // alert('帳號不能為空白')
        $('.alertBox')
          .removeClass('disappear')
          .addClass('appear')
          .text('帳號不能為空白')
      }
      // if ($('#exampleInputAccount1').length < 3) {
      //   alert('帳號要大於三位')
      // }
      if ($('#exampleInputPassword1').val() === '') {
        // alert('密碼不能為空白')
        $('.alertBox')
          .removeClass('disappear')
          .addClass('appear')
          .text('密碼不能為空白')
      }
      // if ($('#exampleInputPassword1').length < 3) {
      //   alert('密碼要大於三位')
      // }
      else {
        console.log('不正確')
        // alert('帳號或密碼錯誤')
        $('.alertBox')
          .removeClass('disappear')
          .addClass('appear')
          .text('帳號或密碼錯誤')
      }
    }
  })
  useEffect(() => {
    // props.getMemberDetail(mId)
    props.getMemberData()
    // window.location.reload()
    //第一种只刷新一次

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
  }, [document.cookie])
  //    {document.cookie === '' ? ():()
  return (
    <>
      {localStorage.getItem('mId') === '0' ? (
        <div className="container">
          <div className=" login-container">
            <div className="login">
              <div
                className="alertBox alert alert-danger disappear"
                role="alert"
              ></div>
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
                    <Link class="" to="/register">
                      <p>立即註冊→</p>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <h1>已經登入</h1>
      )}
    </>
  )
}
const mapStateToProps = store => {
  return { data: store.getMember, detail: store.getMemberDetail }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getMemberData, getMemberDetail }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MemberLogin)
