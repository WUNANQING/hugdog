import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Card,
  Button,
  Badge,
  Image,
} from 'react-bootstrap'

import PartnerNowon from './PartnerNowon'
import PartnerClosed from './PartnerClosed'
import '../../components/Knowledge/knowledge.scss'

// import { Container } from 'react-bootstrap/lib/Tab'

function Partner() {
  return (
    <>
      <div className="banner"></div>
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <Tabs defaultActiveKey="open" id="uncontrolled-tab-example">
              <Tab eventKey="open" title="進行中">
                <Row>
                  <Col xs={12} md={6}>
                    <PartnerNowon />
                    <PartnerNowon />
                    <PartnerNowon />
                  </Col>

                  <Col xs={12} md={6}>
                    <PartnerNowon />
                    <PartnerNowon />
                    <PartnerNowon />
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="Closed" title="已結束">
                <Row>
                  <Col xs={12} md={6}>
                    <PartnerClosed />
                    <PartnerClosed />
                    <PartnerClosed />
                  </Col>

                  <Col xs={12} md={6}>
                    <PartnerClosed />
                    <PartnerClosed />
                    <PartnerClosed />
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Partner
