import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Modal,
  Button,
  Form,
  Image,
} from 'react-bootstrap'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { getPartner } from './actions/index'

import PartnerPost from './PartnerPost'
import '../../components/Knowledge/knowledge.scss'

import PartnerNowon from './PartnerNowon'

// import { Container } from 'react-bootstrap/lib/Tab'

function Partner(props) {
  useEffect(() => {
    console.log(props)
    props.getPartner()
  }, [])

  const Swal = require('sweetalert2')
  function post() {
    Swal.fire({
      icon: 'success',
      title: '發問成功',
    })
  }
  //發問視窗
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
    //   setTimeout(() => {
    //     post()
    //   }, 400)
  }
  const handleShow = () => setShow(true)

  //確認判斷
  const [validated, setValidated] = useState(false)
  const handleSubmit = event => {
    const form = event.currentTarget
    console.log(form)
    console.log('form.checkValidity()', form.checkValidity())
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else if (form.checkValidity() === true) {
      setShow(false)
      post()
    }
    setValidated(true)
  }

  return (
    <>
      <div className="knowledgebanner"></div>
      <Container className="partner">
        <div>
          <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
          >
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>一起來聚會</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/* 我的表格 */}

                <Form.Group controlId="exampleForm.ControlSelect1 petselect">
                  {/* <Form.Label>寵物</Form.Label> */}
                  <Form.Control name="dogname" as="select" required>
                    <option value="">請選擇寵物</option>
                    <option value="1">1</option>
                    {/* <option>{props.data.qName}</option> */}
                  </Form.Control>
                </Form.Group>
                <Form.Row>
                  <Form.Group
                    as={Col}
                    controlId="exampleForm.ControlSelect1 typeselect"
                  >
                    <Form.Control name="classify" as="select" required>
                      <option value="">請選擇類型</option>
                      <option value="1">行為</option>
                      <option value="2">照護</option>
                      <option value="3">飲食</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    controlId="exampleForm.ControlSelect2 typeselect"
                  >
                    <Form.Control name="type" as="select" required>
                      <option value="">請選擇類型</option>
                      <option value="1">行為</option>
                      <option value="2">照護</option>
                      <option value="3">飲食</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control
                    name="title"
                    type="text"
                    placeholder="請輸入問題標題"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    required
                    name="asktxt"
                    as="textarea"
                    rows="8"
                    placeholder="請詳述說明狀況、發生時間、主要徵狀、寵物變化..."
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} id="btn">
                  取消發問
                </Button>
                <Button variant="primary" type="submit">
                  發佈
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </div>
        <Row>
          {/* <Col xs={12} md={12} className="mt-5 ">
            <Tabs defaultActiveKey="open" id="uncontrolled-tab-example">
              <Tab eventKey="open" title="舉辦中">
                <Row xs={12} md={6} className="justify-content-center">
                  {props.post &&
                    props.post.map((value, index) => {
                      return (
                        <PartnerNowon key={index} data={props.post[index]} />
                      )
                    })}
                </Row>
              </Tab>
              <Tab eventKey="Closed" title="已徵滿">
                <Row>
                  <Col xs={12} md={6}>
                    <PartnerPost />
                  </Col>

                  <Col xs={12} md={6}></Col>
                </Row>
              </Tab>
            </Tabs>
          </Col> */}
        </Row>
      </Container>
    </>
  )
}

const mapStateToProps = store => {
  return { post: store.getPartner }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPartner }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Partner))
