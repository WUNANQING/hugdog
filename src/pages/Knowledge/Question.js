import React, { useEffect, useState, Feedback } from 'react'
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
  FormCheck,
  InputGroup,
  FormControl,
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
  //發問視窗
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
    setTimeout(() => {
      post()
    }, 400)
  }
  const handleShow = () => setShow(true)

  //表格確認
  const [validated, setValidated] = useState(false)
  const handleSubmit = event => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    // else {
    //   setShow(false)
    //   // setTimeout(() => {
    //   post()
    //   // }, 00)
    // }
    setValidated(true)
  }

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
              {/* 我的表格 */}
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="exampleForm.ControlSelect1 petselect">
                  {/* <Form.Label>寵物</Form.Label> */}
                  <Form.Control as="select" required>
                    <option>請選擇寵物</option>
                    <option>1</option>
                    {/* <option>{props.data.qName}</option> */}
                  </Form.Control>
                </Form.Group>
                {/* <Form.Group id="formGridCheckbox" as={Row}>
                  <Form.Label column="sm" lg={3}>
                    請選擇問題分類：
                  </Form.Label>
                  <FormControl required>
                    <Col className="d-flex" sm={9}>
                      <Form.Check
                        className="m-2"
                        type="checkbox"
                        id=""
                        label="行為"
                      />
                      <Form.Check
                        className="m-2"
                        type="checkbox"
                        id=""
                        label="照護"
                        feedback=""
                      />
                      <Form.Check
                        className="m-2"
                        type="checkbox"
                        id=""
                        label="飲食"
                      />
                    </Col>
                  </FormControl>
                </Form.Group> */}

                {/* <Form.Group as={Row}>
                  <Col sm={10}></Col>
                </Form.Group> */}

                <Form.Group controlId="exampleForm.ControlSelect2 typeselect">
                  <Form.Control as="select" required>
                    <option>請選擇類別</option>
                    <option>行為</option>
                    <option>照護</option>
                    <option>飲食</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control
                    type="email"
                    placeholder="請輸入問題標題"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    required
                    as="textarea"
                    rows="8"
                    placeholder="請詳述說明狀況、發生時間、主要徵狀、寵物變化..."
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                取消發問
              </Button>
              <Button variant="primary" type="submit" onClick={handleClose}>
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
