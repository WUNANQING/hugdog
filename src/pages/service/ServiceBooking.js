import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'
//引入自己的scss
import '../../css/service/style.scss'

function ServiceBooking(props) {
  return (
    <>
      <div className="Service ServiceChat">
        <div className="container py-3">
          <Row>
            <Col>
              <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    Email
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue="email@example.com"
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    Password
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default ServiceBooking
