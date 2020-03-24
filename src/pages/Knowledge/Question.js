import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import {
  Container,
  Collapse,
  Row,
  Col,
  Card,
  Form,
  Button,
  Modal,
  Image,
} from 'react-bootstrap'
import { MdPets } from 'react-icons/md'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { getQuestion } from './actions/index'

import $ from 'jquery'

import Swal from 'sweetalert2'

import '../../components/Knowledge/knowledge.scss'
import QuestionArt from './QuestionArt'

function Question(props) {
  useEffect(() => {
    console.log(props)
    props.getQuestion()
  }, [])

  // useEffect(() => {
  //   props.getDogData()
  // }, [])

  const Swal = require('sweetalert2')

  function post() {
    Swal.fire({
      icon: 'success',
      title: '發問成功',
    })
  }

  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
    // setTimeout(() => {
    post()
    // }, 100)
  }
  const handleShow = () => setShow(true)

  return (
    <>
      <div className="knowledgebanner"></div>
      <Container className="question">
        <div>
          {/* <Button
            className="askquestion"
            variant="warning"
            onClick={() => post()}
          >
            我要發問
          </Button> */}
          <Button
            className="askquestion"
            variant="primary"
            onClick={handleShow}
            aria-controls="example-collapse-text"
            // aria-expanded={open}
          >
            我要發問
          </Button>

          <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
          >
            <Modal.Header closeButton>
              <Modal.Title>
                <MdPets /> 我要發問
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form>
                  <Form.Group controlId="exampleForm.ControlSelect1 petselect">
                    {/* <Form.Label>寵物</Form.Label> */}
                    <Form.Control as="select">
                      <option>請選擇寵物</option>
                      <option>1</option>
                      {/* <option>{props.data.qName}</option> */}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect2 typeselect">
                    <Form.Control as="select">
                      <option>請選擇問題類別</option>
                      <option>行為</option>
                      <option>照護</option>
                      <option>飲食</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="請輸入問題標題" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      rows="8"
                      placeholder="請詳述說明狀況、發生時間、主要徵狀、寵物變化..."
                    />
                  </Form.Group>
                </Form>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                取消發問
              </Button>
              <Button variant="primary" onClick={handleClose}>
                發佈
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div>
          <Row>
            <Col xs={12} md={12}>
              <Row xs={12} md={6}>
                {props.post &&
                  props.post.map((value, index) => {
                    return <QuestionArt key={index} data={props.post[index]} />
                  })}
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

const mapStateToProps = store => {
  return { post: store.getQuestion }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getQuestion }, dispatch)
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Question)
)
