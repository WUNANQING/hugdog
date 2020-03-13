import React from 'react'
import $ from 'jquery'
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
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 'WTF',
      text: '222',
    }
    console.log('constrctor')
  }

  componentDidMount() {
    //需要搭配箭頭函式才能使用list
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
                    活動訂單查詢
                  </Link>
                </li>
                <li class="nav-item" id="pokemon2" data-effect="show2">
                  <Link class="nav-link" to="#">
                    最愛活動
                  </Link>
                </li>
              </ul>
              <div class="tab-content content" id="content1">
                <div>
                  <h3>
                    活動訂單查詢
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
                    最愛活動 <br />
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
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
