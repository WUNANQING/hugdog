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
                    <form
                      name="myForm"
                      method="POST"
                      action="dog-updateEdit.php"
                      enctype="multipart/form-data"
                    >
                      <table class="table table-borderless">
                        <tbody>
                          <tr>
                            <td class="text-right">會員編號</td>
                            <td>
                              <input
                                type="text"
                                name="dId"
                                value={mId}
                                class="form-control"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td class="text-right">會員姓名</td>
                            <td>
                              <input
                                type="text"
                                name="dName"
                                value={mName}
                                class="form-control"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td class="text-right">會員帳號</td>
                            <td>
                              <input
                                type="text"
                                name="mId"
                                value={mAccount}
                                class="form-control"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td class="text-right">會員密碼</td>
                            <td>
                              <input
                                type="text"
                                name="dGender"
                                value={mPassword}
                                class="form-control"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td class="text-right">會員性別</td>
                            <td>
                              <input
                                placeholder="歲"
                                type="text"
                                name="dYear"
                                value={mGender}
                                class="form-control"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td class="text-right">會員生日</td>
                            <td>
                              <input
                                type="text"
                                name="dWeight"
                                class="form-control"
                                value={mBday}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td class="text-right">會員電話</td>
                            <td>
                              <input
                                type="text"
                                name="dInfo"
                                class="form-control"
                                value={mPhone}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td class="text-right">會員信箱</td>
                            <td>
                              <input
                                type="text"
                                name="dInfo"
                                class="form-control"
                                value={mEmail}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td class="text-right">會員地址</td>
                            <td>
                              <input
                                type="text"
                                name="dInfo"
                                class="form-control"
                                value={mAddress}
                              />
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td class="" colspan="6">
                              <button
                                href="./member-updateEdit.php"
                                class="btn btn-sm btn-danger"
                              >
                                <i class="fa fa-trash"></i> 修改
                              </button>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
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
