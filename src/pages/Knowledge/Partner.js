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

import SideMenu from '../../components/Knowledge/SideMenu'
import Nowon from './Nowon'

import Sonnet from './Nowon'
// import { Container } from 'react-bootstrap/lib/Tab'

function Partner() {
  return (
    <>
      <div className="banner">
        <img src="http://fakeimg.pl/1300x400/eeeeee/EAE0D0/" />
      </div>
      <div>
        <Row>
          <Col xs={12} md={3}>
            <SideMenu />
          </Col>
          <Col xs={12} md={8}>
            <Tabs defaultActiveKey="open" id="uncontrolled-tab-example">
              <Tab eventKey="open" title="進行中">
                <Sonnet />
              </Tab>
              <Tab eventKey="closed" title="已結束">
                <Sonnet />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Partner
