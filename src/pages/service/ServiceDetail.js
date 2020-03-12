import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ServiceQuerySearch from '../../components/service/ServiceQuerySearch'
import ServiceQueryList from '../../components/service/ServiceQueryList'
import ServiceQueryMap from '../../components/service/ServiceQueryMap'
//引入自己的scss
import '../../css/service/style.scss'

function ServiceDetail(props) {
  return (
    <>
      <div className="container py-3">
        <div className="Service ServiceDetail">
          <Row>
            <Col className="mb-5">
              <ServiceQuerySearch />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ServiceQueryList />
            </Col>
            <Col md={6} className="d-none d-md-block">
              <ServiceQueryMap />
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default ServiceDetail
