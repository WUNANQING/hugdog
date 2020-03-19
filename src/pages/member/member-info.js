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
<<<<<<< HEAD
  }
  render() {
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
              <div class="tab-content content" id="content1">
                <div>
                  <h3>
                    個人資訊
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
                                  <td class="text-right">狗狗編號</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="dId"
                                      value="1"
                                      class="form-control"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-right">狗狗姓名</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="dName"
                                      value="Sunny"
                                      class="form-control"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-right">主人編號</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="mId"
                                      value="m001"
                                      class="form-control"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-right">狗狗性別</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="dGender"
                                      value="girl"
                                      class="form-control"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-right">狗狗年紀</td>
                                  <td>
                                    <input
                                      placeholder="歲"
                                      type="text"
                                      name="dYear"
                                      value="6"
                                      class="form-control"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      placeholder="月"
                                      type="text"
                                      name="dMonth"
                                      value="2"
                                      class="form-control"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-right">狗狗體重</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="dWeight"
                                      class="form-control"
                                      value="4"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-right">狗狗資訊</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="dInfo"
                                      class="form-control"
                                      value=""
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
              <div class="tab-content content" id="content2">
                <div>
                  <h3>
                    狗狗資訊 <br />
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
                                  <td class="text-right">狗狗編號</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="dId"
                                      value="1"
                                      class="form-control"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-right">狗狗姓名</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="dName"
                                      value="Sunny"
                                      class="form-control"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-right">主人編號</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="mId"
                                      value="m001"
                                      class="form-control"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-right">狗狗性別</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="dGender"
                                      value="girl"
                                      class="form-control"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-right">狗狗年紀</td>
                                  <td>
                                    <input
                                      placeholder="歲"
                                      type="text"
                                      name="dYear"
                                      value="6"
                                      class="form-control"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      placeholder="月"
                                      type="text"
                                      name="dMonth"
                                      value="2"
                                      class="form-control"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-right">狗狗體重</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="dWeight"
                                      class="form-control"
                                      value="4"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td class="text-right">狗狗資訊</td>
                                  <td>
                                    <input
                                      type="text"
                                      name="dInfo"
                                      class="form-control"
                                      value=""
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
                  <img src="images/004.png" alt="" />
                </div>
              </div>
              <div class="tab-content border content" id="content3">
                <div>
                  <h3>
                    小龜寶可夢 <br />
                  </h3>
                  甲殼的作用不僅是用來保護自己，圓潤的外形和表面的溝槽會減少水的阻力，使牠能夠快速地游泳。
                  <br />
                  <br />
                </div>
                <div>
                  <img src="images/007.png" alt="" />
                </div>
              </div>
            </div>
=======
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
>>>>>>> 7c189a2f189ff98cbc977b25f4a1973f2c81e303
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
