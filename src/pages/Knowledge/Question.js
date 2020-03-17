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
import SideMenu from '../../components/Knowledge/SideMenu'

import './question.scss'

function Question() {
  return (
    <>
      <div className="banner">
        <img src="http://fakeimg.pl/1300x400/eeeeee/EAE0D0/" />
      </div>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <SideMenu />
          </Col>
          <Col xs={12} md={8}>
            <div>
              <Button variant="warning">我要發問</Button>{' '}
            </div>
            <Accordion className="Card">
              <Card className="">
                <Card.Header className="bgColor">
                  <Card.Title as="h4">
                    <Image
                      src="http://fakeimg.pl/50x50/ff73b3/EAE0D0/"
                      roundedCircle
                    />
                    關於每年施打疫苗，是必須的嗎？
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Subtitle>分類</Card.Subtitle>
                  <div>
                    <Card.Text>
                      請問室內貓每年該施打的疫苗有什麼？
                      貓咪已經要三歲，前面疫苗都是每年打但是，疫苗真的每年都該打嗎？還是可以每2-3年再打？
                      問了許多養貓的朋友都說貓咪都沒帶出去過所以他們也不少每年打
                    </Card.Text>
                  </div>
                  <div className="text-right">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <h5>
                        <Badge variant="primary">已回答</Badge>
                      </h5>
                    </Accordion.Toggle>
                  </div>
                </Card.Body>
                <Accordion.Collapse eventKey="0">
                  <Card.Footer>
                    <Card.Text>
                      <p className="text-left">
                        貓的注射疫苗臨床上以三合一（或五合一）以及狂犬病疫苗為主，近來也有開發出無佐劑的四合一（含白血病）疫苗，但單價較高一些。至於每年是否都該追加補強的問題，醫師只能告訴你，疫苗每次注射效力只能維持一年，至於是否會被疾病感染，就要看是否有傳染途徑的存在了。
                      </p>
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
            <Accordion>
              <Card>
                <Card.Header>
                  <Card.Title as="h4">
                    關於每年施打疫苗，是必須的嗎？
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Subtitle>分類</Card.Subtitle>
                  <div>
                    <Card.Text>
                      請問室內貓每年該施打的疫苗有什麼？
                      貓咪已經要三歲，前面疫苗都是每年打但是，疫苗真的每年都該打嗎？還是可以每2-3年再打？
                      問了許多養貓的朋友都說貓咪都沒帶出去過所以他們也不少每年打
                    </Card.Text>
                  </div>
                  <div className="text-right">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <h5>
                        <Badge variant="secondary">未回答</Badge>
                      </h5>
                    </Accordion.Toggle>
                  </div>
                </Card.Body>
                {/* <Accordion.Collapse eventKey="0">
                  <Card.Footer>
                    <Card.Text>
                      貓的注射疫苗臨床上以三合一（或五合一）以及狂犬病疫苗為主，近來也有開發出無佐劑的四合一（含白血病）疫苗，但單價較高一些。至於每年是否都該追加補強的問題，醫師只能告訴你，疫苗每次注射效力只能維持一年，至於是否會被疾病感染，就要看是否有傳染途徑的存在了。
                    </Card.Text>
                  </Card.Footer>
                </Accordion.Collapse> */}
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Question
