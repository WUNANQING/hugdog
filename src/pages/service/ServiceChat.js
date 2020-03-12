import React from 'react'
import { Row, Col } from 'react-bootstrap'
// import ServiceChatSidebar from '../../components/service/ServiceChat/ServiceChatSidebar'
// import ServiceChatMain from '../../components/service/ServiceChat/ServiceChatMain'
//引入自己的scss
import '../../css/service/style.scss'

function ServiceChat(props) {
  return (
    <>
      <div className="Service ServiceChat">
        <div className="container py-3">
          <Row>
            <Col lg={4} className="mb-5">
              {/* <ServiceChatSidebar /> */}
            </Col>
            <Col lg={8}>{/* <ServiceChatMain /> */}</Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default ServiceChat
