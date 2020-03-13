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
function Member() {
  return (
    <>
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
            <div className="head-text">歡迎使用HugDog會員頁面</div>
          </div>
          <div className="member-content d-flex ">
            <div className="member-sidebar">
              <Nav>
                <Nav.Link className="member-sidebar-text" href="/member">
                  <img
                    src={require('../../images/member/paws-m.png')}
                    alt="Background"
                  />
                  首頁
                </Nav.Link>
                <Nav.Link
                  className="member-sidebar-text"
                  href="/member/member-info"
                >
                  <img
                    src={require('../../images/member/paws-m.png')}
                    alt="Background"
                  />
                  個人資訊
                </Nav.Link>

                <Nav.Link
                  className="member-sidebar-text"
                  href="/member/member-item"
                >
                  <img
                    src={require('../../images/member/paws-m.png')}
                    alt="Background"
                  />
                  商品查詢
                </Nav.Link>
                <Nav.Link
                  className="member-sidebar-text"
                  href="/member/member-service"
                >
                  <img
                    src={require('../../images/member/paws-m.png')}
                    alt="Background"
                  />
                  服務查詢
                </Nav.Link>
                <Nav.Link
                  className="member-sidebar-text"
                  href="/member/member-activity"
                >
                  <img
                    src={require('../../images/member/paws-m.png')}
                    alt="Background"
                  />
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
                  <li>
                    {' '}
                    <img
                      src={require('../../images/member/paws-s.png')}
                      alt="Background"
                    />
                    個人資料修改
                  </li>
                  <li>
                    {' '}
                    <img
                      src={require('../../images/member/paws-s.png')}
                      alt="Background"
                    />
                    狗狗資料修改
                  </li>
                </ul>
              </div>
              <div className="member-form">
                <div className="title-box">
                  <p>商品查詢</p>
                </div>
                <ul>
                  <li>
                    {' '}
                    <img
                      src={require('../../images/member/paws-s.png')}
                      alt="Background"
                    />
                    我的優惠
                  </li>
                  <li>
                    {' '}
                    <img
                      src={require('../../images/member/paws-s.png')}
                      alt="Background"
                    />
                    我的訂單
                  </li>
                  <li>
                    {' '}
                    <img
                      src={require('../../images/member/paws-s.png')}
                      alt="Background"
                    />
                    我的最愛
                  </li>
                  <li>
                    {' '}
                    <img
                      src={require('../../images/member/paws-s.png')}
                      alt="Background"
                    />
                    購物車
                  </li>
                </ul>
              </div>
              <div className="member-form">
                <div className="title-box">
                  <p>服務查詢</p>
                </div>
                <ul>
                  <li>
                    <img
                      src={require('../../images/member/paws-s.png')}
                      alt="Background"
                    />
                    保姆訂單查詢
                  </li>
                  <li>
                    {' '}
                    <img
                      src={require('../../images/member/paws-s.png')}
                      alt="Background"
                    />
                    評論紀錄
                  </li>
                  <li>
                    {' '}
                    <img
                      src={require('../../images/member/paws-s.png')}
                      alt="Background"
                    />
                    最愛保姆
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Switch>
    </>
  )
}

export default Member
