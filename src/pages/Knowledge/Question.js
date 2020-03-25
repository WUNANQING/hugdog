import React, { useEffect, useState, Feedback } from 'react'
import { withRouter, Link } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Modal,
  FormCheck,
  Badge,
  FormControl,
} from 'react-bootstrap'
import { MdPets } from 'react-icons/md'
import { FaDog } from 'react-icons/fa'
import { GiDogBowl } from 'react-icons/gi'
import { TiPipette } from 'react-icons/ti'
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
    setValidated(true)
  }

  //分類篩選
  const [classify, setClassify] = useState('')
  function changeClassify(newClassify) {
    setClassify(newClassify)
  }

  return (
    <>
      <div className="knowledgebanner"></div>
      <Container className="question">
        <div>
          <div className="mt-2 mb-3 align-items-center justify-content-between d-flex">
            <Button
              className="askquestion"
              variant="primary"
              onClick={handleShow}
              aria-controls="example-collapse-text"
              // aria-expanded={open}
            >
              我要發問
            </Button>
            <div>
              <div className="d-flex">
                <Button
                  size="sm"
                  variant="primary"
                  className="mr-1"
                  onClick={() => changeClassify('')}
                >
                  全部問題
                  <span className="sr-only">unread messages</span>
                </Button>
                <Button
                  size="sm"
                  variant="success"
                  className="mr-1"
                  onClick={() => changeClassify('a')}
                >
                  <FaDog /> 行為
                  <span className="sr-only">unread messages</span>
                </Button>
                <Button
                  size="sm"
                  variant="info"
                  className="mr-1"
                  onClick={() => changeClassify('b')}
                >
                  <TiPipette /> 照護
                  <span className="sr-only">unread messages</span>
                </Button>
                <Button
                  size="sm"
                  variant="danger"
                  className="mr-1 text-white"
                  onClick={() => changeClassify('c')}
                >
                  <GiDogBowl /> 飲食
                  <span className="sr-only">unread messages</span>
                </Button>
              </div>
            </div>
          </div>

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
                <Form.Row>
                  <Form.Group
                    as={Col}
                    controlId="exampleForm.ControlSelect1 typeselect"
                  >
                    <Form.Control as="select" required>
                      <option>請選擇類型</option>
                      <option>行為</option>
                      <option>照護</option>
                      <option>飲食</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    controlId="exampleForm.ControlSelect2 typeselect"
                  >
                    <Form.Control as="select" required>
                      <option>請選擇類別</option>
                      <option>行為</option>
                      <option>照護</option>
                      <option>飲食</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

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
              <Row xs={12} md={6} className="justify-content-right">
                {props.post &&
                  props.post.map((value, index) => {
                    if (classify) {
                      if (props.post[index].qClassify === classify) {
                        return (
                          <QuestionArt
                            key={index}
                            data={props.post[index]}
                            changeClassify={props.post.qClassify}
                          />
                        )
                      }
                    } else {
                      return (
                        <QuestionArt key={index} data={props.post[index]} />
                      )
                    }
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
