import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  Button,
  Badge,
  Image,
  Figure,
} from 'react-bootstrap'

// const [open, setOpen] = useState(false)

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

  return (
    <>
      <Accordion className="Card m-2" style={{ width: '33rem' }}>
        <Card className="">
          <Card.Header
            className="light"
            // style={{ background: 'orange', }}
          >
            <Card.Title as="h4" className="d-flex">
              <Figure className="d-flex align-items-start flex-column bd-highlight mb-3">
                <Image
                  className="questionImg"
                  src={require('../../images/knowledge/question/' +
                    props.data.qId +
                    '.jpg')}
                  alt=""
                  roundedCircle
                />
                <Card.Subtitle className="align-self-center mt-3">
                  <strong> {props.data.mName}</strong>
                </Card.Subtitle>
              </Figure>
              <div className="align-self-center ml-2">{props.data.qTitle}</div>
              <Badge>{showQuestionType}</Badge>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>{props.data.qDes}</Card.Text>

            <div className="text-right">
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="0"
                // onClick={() => setOpen(!open)}
              >
                <h5>
                  <Badge variant="primary">已回答</Badge>
                </h5>
              </Accordion.Toggle>
            </div>
          </Card.Body>

          <Accordion.Collapse eventKey="0">
            <Card.Footer>
              <Card.Text>
                <p className="text-left">{props.data.qAns}</p>
                <Image
                  src="http://fakeimg.pl/50x50/20b2aa/EAE0D0/"
                  roundedCircle
                />
              </Card.Text>
            </Card.Footer>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <br />
    </>
  )
}

export default withRouter(QuestionArt)
