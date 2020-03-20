import React from 'react'

import {
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from 'react-bootstrap'

import { FiSearch, FiHeart } from 'react-icons/fi'
import { AiOutlineUser, AiOutlineShopping } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../../css/member/member.scss'
import MemberInfo from './member-info'
import MemberItem from './member-item'
import MemberService from './member-service'
import MemberActivity from './member-activity'
import Pokemon from '../../components/member/pokemon'

function Member() {
  return (
    <>
      {document.cookie === '' ? (
        <h1>請登入</h1>
      ) : (
        <Switch>
          <Route path="/member/member-info">
            <MemberInfo />
          </Route>
          <Route path="/member/member-item">
            <MemberItem />
          </Route>
          <Route path="/member/member-service">
            <MemberService />
          </Route>
          <Route path="/member/member-activity">
            <MemberActivity />
          </Route>
          <div className="Member">
            <div className="member-bg">
              <div className="head">
                <img
                  src={require('../../images/member/head.png')}
                  alt="Background"
                ></img>
              </div>
              <div className="head-text">
                {localStorage.getItem('mName')}，歡迎使用HugDog會員頁面
              </div>
            </div>
            <div className="member-content d-flex container">
              <div className="member-sidebar">
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

              <div className="member-form-container d-flex container">
                <div className="member-form">
                  <div className="title-box">
                    <p>個人資訊</p>
                  </div>
                  <ul>
                    <li> 個人資料修改</li>
                    <li> 狗狗資料修改</li>
                  </ul>
                </div>
                <div className="member-form">
                  <div className="title-box">
                    <p>商品查詢</p>
                  </div>
                  <ul>
                    <li> 我的優惠</li>
                    <li> 我的訂單</li>
                    <li> 我的最愛</li>
                    <li> 購物車</li>
                  </ul>
                </div>
                <div className="member-form">
                  <div className="title-box">
                    <p>服務查詢</p>
                  </div>
                  <ul>
                    <li>保姆訂單查詢</li>
                    <li> 評論紀錄</li>
                    <li> 最愛保姆</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Switch>
      )}
      {/* <Pokemon /> */}
    </>
  )
}

export default Member
