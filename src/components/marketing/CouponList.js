import React, { useEffect } from 'react'
import { Nav, Navbar, Form, Button, Col, Row, Table } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import { FiSearch, FiHeart } from 'react-icons/fi'
// import { GiTicket } from 'react-icons/gi'
// import { IconContext } from 'react-icons'
import $ from 'jquery'
import '../../css/marketing/coupon.scss'
import { GiManualMeatGrinder } from 'react-icons/gi'
function CouponList(props) {
  useEffect(() => {}, [])

  console.log(props.data)
  let abc = props.data[0] ? props.data[0] : ''
  let lists = []
  if (abc !== '') {
    for (let i = 0; i <= props.data.length - 1; i++) {
      //記得在JSX中使用JS變數要用花括號包著
      let oldtimeget = props.data[i].timeget
      let oldendtime = props.data[i].endtime
      // console.log(oldtimeget.substr(0, 10))
      // console.log(oldtimeget.substr(12, 7))
      let newtimeget =
        oldtimeget.substr(0, 10) +
        ' ' +
        oldtimeget.substr(11, 2) +
        ' ' +
        oldtimeget.substr(13, 1) +
        ' ' +
        oldtimeget.substr(14, 2) +
        ' ' +
        oldtimeget.substr(16, 1) +
        ' ' +
        oldtimeget.substr(17, 2)
      let newendtime =
        oldendtime.substr(0, 10) +
        ' ' +
        oldendtime.substr(11, 2) +
        ' ' +
        oldendtime.substr(13, 1) +
        ' ' +
        oldendtime.substr(14, 2) +
        ' ' +
        oldendtime.substr(16, 1) +
        ' ' +
        oldendtime.substr(17, 2)
      lists.push(
        <tr key={props.data[i].mmId}>
          <td>{props.data[i].mmId}</td>
          <td>{props.data[i].mtName}</td>
          <td>{newtimeget}</td>
          <td>{newendtime}</td>
        </tr>
      )
    }
  }
  console.log(lists)
  return (
    <>
      <div className="container">
        <div className="marketingcoupon">
          <Table
            striped
            bordered
            hover
            variant="light"
            className="CouponList1 active"
          >
            {/* {props.data.map((data, i) => {
                return < key={i} data={props.data[i]} />
              })} */}
            <thead>
              <tr>
                <th>編號</th>
                <th>優惠名稱</th>
                <th>取得日期</th>
                <th>到期日期</th>
              </tr>
            </thead>
            <tbody>{lists}</tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default CouponList
