import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import {
  Col,
  Collapse,
  Card,
  Button,
  Badge,
  Image,
  Figure,
} from 'react-bootstrap'

function QuestionArt(props) {
  let showQuestionType = ''
  if (props.data.qType === '1') {
    showQuestionType = '食慾/精神不濟'
  } else if (props.data.qType === '2') {
    showQuestionType = '排泄異常'
  } else if (props.data.qType === '3') {
    showQuestionType = '營養與處方'
  } else {
    showQuestionType = '其他'
  }

  const [open, setOpen] = useState(false)

  return (
    <>
      <Col>
        {/* <div className="bg-light p-1 m-1"> */}
        <div className="mb-3 bg-light p-3" style={{ width: '33rem' }}>
          <div className="d-flex">
            <div>
              <Image
                className="questionImg m-1"
                src={require('../../images/knowledge/question/' +
                  props.data.qId +
                  '.jpg')}
                alt=""
                roundedCircle
              />
            </div>
            <div>
              <h6 className="m-3">
                發問飼主：<strong> {props.data.mName}</strong>{' '}
              </h6>
              <h6 className="m-3">
                寵物年紀：<strong>5</strong> 歲
              </h6>
            </div>
          </div>
          <div className="text-right mr-3">
            <h5>
              <Badge variant="secondary" className="">
                {showQuestionType}
              </Badge>
            </h5>
          </div>
          <Card>
            <Card.Body>
              <Card.Title>
                <strong>{props.data.qTitle}</strong>
              </Card.Title>

              <Card.Text>{props.data.qDes}</Card.Text>
              <div className="text-right">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  看回答
                </Button>
              </div>
              <Collapse in={open}>
                <div id="example-collapse-text" className="mt-2 p-2">
                  <hr />
                  <div className="d-flex">
                    <div>
                      <p className="m-3 text-primary">{props.data.qAns}</p>
                    </div>
                    <div>
                      <Image
                        className="questionImg m-1"
                        src={require('../../images/knowledge/question/' +
                          props.data.qId +
                          '.jpg')}
                        alt=""
                        roundedCircle
                      />
                    </div>
                  </div>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </div>
        {/* </div> */}
      </Col>
    </>
  )
}

export default withRouter(QuestionArt)
