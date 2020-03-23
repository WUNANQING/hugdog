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
    Swal.mixin({
      input: 'text',
      confirmButtonText: '確定',
      cancelButtonText: '取消',
      showCancelButton: true,
      progressSteps: ['發問'],
    })
      .queue([
        {
          title: '我要發問',
          text: '請輸入您的問題',
        },
      ])
      .then(result => {
        if (result.value) {
          const answers = JSON.stringify(result.value)
          Swal.fire({
            title: '發問成功',
            icon: 'success',
          })
          // Swal.fire({
          //   title: 'All done!',
          //   html: `
          //   Your answers:
          //   <pre><code>${answers}</code></pre>
          // `,
          //   confirmButtonText: 'Lovely!',
          // })
        }
      })
  }
  return (
    <>
      <div className="knowledgebanner"></div>
      <Container className="question">
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
