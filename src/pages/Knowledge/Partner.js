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

import Nowon from './Nowon'

import Sonnet from './Nowon'
// import { Container } from 'react-bootstrap/lib/Tab'

function Partner() {
  return (
    <>
      <div className="banner"></div>
      <div>
        <Row>
          <Tabs defaultActiveKey="open" id="uncontrolled-tab-example">
            <Tab eventKey="open" title="進行中">
              <Sonnet />
            </Tab>
            <Tab eventKey="closed" title="已結束">
              <Sonnet />
            </Tab>
          </Tabs>
        </Row>
      </div>
    </>
  )
}

export default Partner
