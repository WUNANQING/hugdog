import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'
import { linkTo } from '../../utils/service/ServiceFunction'
//引入自己的scss
import '../../css/service/style.scss'

import ServiceQuery from './ServiceQuery'
import ServiceDetail from './ServiceDetail'
import ServiceChat from './ServiceChat'
import ServiceBooking from './ServiceBooking'

function ServiceHome(props) {
  //讀取狀態
  // const [isloaded, setIsloaded] = useState(false)

  // useEffect(() => {
  //   // setTimeout(setIsloaded(true), 3000)
  //   setTimeout(() => {
  //     setIsloaded(true)
  //   }, 500)
  // }, [])

  return (
    <>
      <Switch>
        <Route path="/service/query/">
          <ServiceQuery />
        </Route>
        <Route path="/service/detail/:serviceId">
          <ServiceDetail />
        </Route>
        <Route path="/service/chat/:chatId">
          <ServiceChat />
        </Route>
        <Route path="/service/booking/:orderId">
          <ServiceBooking />
        </Route>

        <div className="Service ServiceHome">
          <div className="container py-3">
            <Row>
              <Col className="mb-5">
                <Button
                  variant="secondary"
                  onClick={() => linkTo('/service/query')}
                >
                  列表
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </Switch>
    </>
  )
}

export default ServiceHome
