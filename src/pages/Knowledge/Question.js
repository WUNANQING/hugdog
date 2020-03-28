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
import { getDogDetail, getMemberDetail } from '../member/actions/index'
// import ServiceAdminLoginChk from '../../components/service/redirect/'

import $ from 'jquery'

import Swal from 'sweetalert2'

import '../../components/Knowledge/knowledge.scss'
import QuestionArt from './QuestionArt'

function Question(props) {
  const mId = localStorage.getItem('mId')
  useEffect(() => {
    props.getQuestion()
    props.getDogDetail()
    props.getMemberDetail(mId)
  }, [])

  //sweetalert
  const Swal = require('sweetalert2')
  function sAlert() {
    Swal.fire({
      icon: 'success',
      title: '發問成功',
    })
  }
  function mAlert() {
    Swal.fire({
      icon: 'warning',
      title: '尚未登入',
    }).then(function () {
      window.location.href = '/login'
    })
  }
  //發問視窗
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
    //   setTimeout(() => {
    //   }, 400)
  }
  const handleShow = () => {
    if (localStorage.getItem('mId') && localStorage.getItem('mId') !== '0') {
      setShow(true)
    } else {
      return mAlert()
    }
  }

  //判斷表格
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    console.log(form)
    console.log('form.checkValidity()', form.checkValidity())
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else if (form.checkValidity() === true) {
      postAsk(askInfo)
      setShow(false)
      sAlert()
    }
    setValidated(true)
  }

  //
  //分類篩選
  const [classify, setClassify] = useState('')
  function changeClassify(newClassify) {
    setClassify(newClassify)
  }

  //--------------------發問

  // const dName = localstorage.getItem('dName')

  //表單資訊
  const mName = props.mPost[0] ? props.mPost[0].mName : ''
  const askInfo = {
    mId: mId,
    mName: mName,
    dogYear: '',
    askTitle: '',
    classify: '',
    type: '',
    askTxt: '',
  }

  //寫入表單資訊
  function askformInfo(e, info) {
    switch (info) {
      case 'dogYear':
        askInfo.dogYear = e.currentTarget.value
        break
      case 'classify':
        askInfo.classify = e.currentTarget.value
        break
      case 'type':
        askInfo.type = e.currentTarget.value
        break
      case 'askTitle':
        askInfo.askTitle = e.currentTarget.value
        break
      case 'askTxt':
        askInfo.askTxt = e.currentTarget.value
        break
      default:
        break
    }
  }
  //建立問題
  async function postAsk(form) {
    const req = new Request('http://localhost:6001/knowledge/question/ask', {
      method: 'POST',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(form),
    })
    const res = await fetch(req)
    const order = await res.json()
    await console.log(order)
  }

  //選項
  const optionType = new Array()

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
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <MdPets /> 我要發問
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group controlId="exampleForm.ControlSelect1 petselect">
                  {/* <Form.Label>寵物</Form.Label> */}
                  <Form.Control
                    name="dogYear"
                    as="select"
                    onChange={(e) => askformInfo(e, 'dogYear')}
                    required
                  >
                    <option value="">請選擇寵物</option>
                    {props.dogPost &&
                      props.dogPost.map((value, index) => {
                        return (
                          <option value={value.dId} key={index}>
                            {value.dName} ／ {value.dYear}歲
                          </option>
                        )
                      })}
                    {/* <option>{props.data.qName}</option> */}
                  </Form.Control>
                </Form.Group>
                <Form.Row>
                  <Form.Group
                    as={Col}
                    controlId="exampleForm.ControlSelect1 typeselect"
                  >
                    <Form.Control
                      name="classify"
                      as="select"
                      required
                      onChange={(e) => askformInfo(e, 'classify')}
                    >
                      <option value="">請選擇類型</option>
                      <option value="a">行為</option>
                      <option value="b">照護</option>
                      <option value="c">飲食</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    controlId="exampleForm.ControlSelect2 typeselect"
                  >
                    <Form.Control
                      name="type"
                      as="select"
                      onChange={(e) => askformInfo(e, 'type')}
                      required
                    >
                      <option value="">請選擇類型</option>
                      <option value="1">行為</option>
                      <option value="2">照護</option>
                      <option value="3">飲食</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control
                    name="askTitle"
                    type="text"
                    placeholder="請輸入問題標題"
                    onChange={(e) => askformInfo(e, 'askTitle')}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    required
                    name="askTxt"
                    as="textarea"
                    rows="8"
                    placeholder="請詳述說明狀況、發生時間、主要徵狀、寵物變化..."
                    onChange={(e) => askformInfo(e, 'askTxt')}
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

const mapStateToProps = (store) => {
  return {
    post: store.getQuestion,
    dogPost: store.getDogDetail,
    mPost: store.getMemberDetail,
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { getQuestion, getDogDetail, getMemberDetail },
    dispatch
  )
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Question)
)
