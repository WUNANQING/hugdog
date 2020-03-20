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

import MemberSidebar from '../../components/member/member-sidebar'

const MemberLogin = props => {
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

  useEffect(() => {
    props.getMemberData()
  }, [])
  return (
    <>
      <div className="container">
        <div class="tab-content content" id="content1">
          <div>
            <h3>
              會員註冊
              <br />
            </h3>
            <div class="row">
              <div class="col-md-8">
                <div class="card card-width">
                  <div class="card-body">
                  <form>
                      <div class="form-group">
                        <label>姓名</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputName"
                          placeholder="請輸入姓名"
                        />
                      </div>
                      <div class="form-group">
                        <label>帳號</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputAccount"
                          placeholder="請輸入帳號"
                        />
                      </div>
                      <div class="form-group">
                        <label>密碼</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputPassword"
                          placeholder="請輸入密碼"
                        />
                      </div>
                      <div class="form-group">
                        <label>性別</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputGender"
                          placeholder="請選擇性別"
                        />
                      </div>
                      <div class="form-group">
                        <label>生日</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputBday"
                          placeholder="請輸入生日"
                        />
                      </div>
                      <div class="form-group">
                        <label>電話</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputPhone"
                          placeholder="請輸入電話"
                        />
                      </div>
                      <div class="form-group">
                        <label>信箱</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail"
                          placeholder="請輸入信箱"
                        />
                      </div>
                      <div class="form-group">
                        <label>地址</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputAddress"
                          placeholder="請輸入地址"
                        />
                      </div>

                      <button type="submit" class="btn btn-primary">
                        送出
                      </button>
                    </form>
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
