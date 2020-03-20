import React from 'react'
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  Button,
  Badge,
  Image,
} from 'react-bootstrap'

import Swal from 'sweetalert2'

import '../../components/Knowledge/knowledge.scss'
import QuestionArt from './QuestionArt'

function Question() {
  const Swal = require('sweetalert2')

  function post() {
    Swal.fire({
      title: '問什麼呢?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '確定',
      cancelButtonText: '取消',
    }).then(result => {
      if (result.value) {
        Swal.fire({
          title: '報名成功!',
          icon: 'success',
        })
      }
    })
  }
  return (
    <>
      <div className="banner"></div>
      <Container>
        <div>
          <Button
            className="askquestion"
            variant="warning"
            onClick={() => post()}
          >
            我要發問
          </Button>
        </div>
        <Row>
          <Col>
            <QuestionArt />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Question
