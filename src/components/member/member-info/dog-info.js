import React, { useState, useEffect } from 'react'
import $ from 'jquery'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { getDogDetail } from '../../../pages/member/actions/index'
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

const DogInfo = props => {
  const [dog, setDog] = useState([])
  //設定mId的來源,抓到mId去檢索會員的最新訂單(未完成)
  const mId = localStorage.getItem('mId')
  async function getOrderDetail(orderId) {
    const req = new Request(`http://localhost:6001/dog/${mId}`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(req)
    const detail = await res.json()
    console.log(detail)
    setDog(detail)
  }
  //狗狗基本資料

  useEffect(() => {
    props.getDogDetail()
  }, [])
  let dogList = []
  for (let i = 0; i < props.data.length; i++) {
    dogList.push(
      <tr>
        <th scope="row">{i + 1}</th>
        <td className="order_show" onClick="" id={i} name={i}>
          {props.data[i] ? props.data[i].dId : ''}
        </td>
        <td>{props.data[i] ? props.data[i].dName : ''}</td>
        <td>{props.data[i] ? props.data[i].dGender : ''}</td>
        <td>{props.data[i] ? props.data[i].dYear : ''}</td>
        <td>{props.data[i] ? props.data[i].dWeight : ''}</td>
      </tr>
    )
  }
  return (
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
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">狗狗編號</th>
                        <th scope="col">狗狗姓名</th>
                        <th scope="col">狗狗性別</th>
                        <th scope="col">狗狗年齡</th>
                        <th scope="col">狗狗體重</th>
                      </tr>
                    </thead>
                    <tbody>{dogList}</tbody>
                    <tfoot>
                      <tr></tr>
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
    </div>
  )
}
const mapStateToProps = store => {
  return { data: store.getDogDetail }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getDogDetail }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DogInfo)
