import React from 'react'
import Swal from 'sweetalert2'

import { Card, Button } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FiClock } from 'react-icons/fi'
import { MdLocationOn } from 'react-icons/md'
import $ from 'jquery'

function PartnerNowon() {
  return (
    <>
      <Card className="partnercard" style={{ width: '33rem' }}>
        <Card.Header className="justify-content-between d-flex">
          <IconContext.Provider value={{ size: '1.2rem' }}>
            <div class="d-inlined-inline-block">
              <FaRegCalendarAlt />
              <span className="carddate"> 活動日期：2020/05/07</span>
            </div>
            <div class="d-inline-block">
              <FiClock />
              <span className="cardtime"> 時間：15:00-16:00</span>
            </div>
          </IconContext.Provider>
        </Card.Header>
        <Card.Img
          variant="top"
          src="http://fakeimg.pl/1300x400/eeeeee/EAE0D0/"
        />
        <Card.Body>
          <div className="">
            <MdLocationOn />
            <span className="cardtime">
              活動地點：台北市中山區吉林路26巷26號2F
            </span>
          </div>
          <br />
          <Card.Title>基礎正向行為養成班／輕鬆打造快樂狗生活</Card.Title>
          <Card.Text>
            <p>
              針對毛孩教養時發生的日常行為問題，特別開設「正向行為禮貌養成班」，協助飼主引導毛孩學會基礎服從指令
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
