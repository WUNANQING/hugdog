import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
// import ServiceChatSidebar from '../../components/service/ServiceChat/ServiceChatSidebar'
// import ServiceChatMain from '../../components/service/ServiceChat/ServiceChatMain'
//引入自己的scss
import '../../css/service/style.scss'
import { linkTo } from '../../utils/service/ServiceFunction'

function ServiceChat(props) {
  return (
    <>
      <div className="Service ServiceChat">
        <div className="container py-3">
          <Row>
            <Col className="mb-5">
              <Button
                variant="secondary"
                onClick={() => linkTo('/service/booking/123')}
              >
                預約
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default ServiceChat
