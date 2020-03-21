import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Card, Button, Col } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FiClock } from 'react-icons/fi'
import { MdLocationOn } from 'react-icons/md'
import $ from 'jquery'

function PartnerNowon(props) {
  return (
    <>
      <Card className="partnercard" style={{ width: '33rem' }}>
        <Card.Header className="justify-content-between d-flex">
          <IconContext.Provider value={{ size: '1.2rem' }}>
            <div class="d-inlined-inline-block">
              <FaRegCalendarAlt />
              <span className="carddate"> 活動日期：{props.data.pDate}</span>
            </div>
            <div class="d-inline-block">
              <FiClock />
              <span className="cardtime"> 時間：{props.data.pTime}</span>
            </div>
          </IconContext.Provider>
        </Card.Header>
        <Card.Img
          variant="top"
          src={require('../../images/knowledge/' + props.data.pId + '.jpg')}
          alt=""
        />
        <Card.Body>
          <div className="">
            <MdLocationOn />
            <span className="cardtime">活動地點：{props.data.pLocation}</span>
          </div>
          <br />
          <Card.Title>
            <Link to="partner/article">{props.data.pTitle}</Link>
          </Card.Title>
          <Card.Text>
            <p>{props.data.pDes}</p>
            <p>
              <Linkb to="partner/article">看更多...</Linkb>
            </p>
          </Card.Text>
          <div className="text-right">
            <Button
              id="signup"
              className="justify-right"
              variant="primary"
              onClick={function() {
                Swal.fire({
                  title: '確定報名嗎?',
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: '確定',
                  cancelButtonText: '取消',
                }).then(result => {
                  if (result.value) {
                    Swal.fire({
                      title: '報名成功!',
                      icon: 'success',
                    })
                  }
                })
              }}
            >
              報名去
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default PartnerNowon
