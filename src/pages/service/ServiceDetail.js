import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ServiceDetailSidebar from '../../components/service/ServiceDetail/ServiceDetailSidebar'
import ServiceDetailMain from '../../components/service/ServiceDetail/ServiceDetailMain'
//引入自己的scss
import '../../css/service/style.scss'

function ServiceDetail(props) {
  return (
    <>
      <div className="Service ServiceDetail">
        <div className="container py-3">
          <Row>
            <Col lg={4} className="mb-5">
              <ServiceDetailSidebar />
            </Col>
            <Col lg={8}>
              <ServiceDetailMain />
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default ServiceDetail
