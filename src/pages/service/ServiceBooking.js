import React from 'react'
import { Row, Col, Form, Card } from 'react-bootstrap'
//引入自己的scss
import '../../css/service/style.scss'

function ServiceBooking(props) {
  //縣市
  const cityArea = [
    { id: 1, name: '臺北市' },
    { id: 2, name: '新北市' },
    { id: 3, name: '桃園市' },
    { id: 4, name: '臺中市' },
    { id: 5, name: '臺南市' },
    { id: 6, name: '高雄市' },
    { id: 7, name: '新竹縣' },
    { id: 8, name: '苗栗縣' },
    { id: 9, name: '彰化縣' },
    { id: 10, name: '南投縣' },
    { id: 11, name: '嘉義縣' },
    { id: 12, name: '屏東縣' },
    { id: 13, name: '宜蘭縣' },
    { id: 14, name: '花蓮縣' },
    { id: 15, name: '臺東縣' },
    { id: 16, name: '澎湖縣' },
    { id: 17, name: '金門縣' },
    { id: 18, name: '連江縣' },
    { id: 19, name: '基隆市' },
    { id: 20, name: '新竹市' },
    { id: 21, name: '嘉義市' },
  ]

  //服務類型
  const serviceType = [
    { id: 1, name: '安親托育' },
    { id: 2, name: '寄宿照顧' },
    { id: 3, name: '到府陪伴' },
    { id: 4, name: '到府遛狗' },
  ]

  //體型
  const dogSize = [
    { id: 1, name: '迷你(0-4KG)' },
    { id: 2, name: '小型(0-4KG)' },
    { id: 3, name: '中型(4-10KG)' },
    { id: 4, name: '大型(11-25KG)' },
  ]
  //評價分數
  const serviceRating = [
    { id: 1, name: '極度好評(4-5分)' },
    { id: 2, name: '好評(4-5分)' },
    { id: 3, name: '普通(4-5分)' },
    { id: 4, name: '差評(4-5分)' },
    { id: 5, name: '極度差評(4-5分)' },
  ]

  //其他服務
  const extraService = [
    { id: 1, name: '洗澡' },
    { id: 2, name: '美容' },
    { id: 3, name: '行為訓練' },
    { id: 4, name: '有專業執照' },
  ]

  return (
    <>
      <div className="Service ServiceBooking">
        <div className="container py-3">
          <Row>
            <Col>
              <Card className="card-light">
                <Card.Body>
                  <Form>
                    <div className="p-sm-3">
                      <h5>服務內容</h5>
                      <hr className="title" />
                      <div className="p-sm-3 px-0">
                        <Form.Group as={Row} controlId="serviceType">
                          <Form.Label column sm="3">
                            選擇服務
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control as="select" name="serviceType">
                              <option value="">請選擇</option>
                              {serviceType.map(obj => (
                                <option value={obj.id} key={obj.id}>
                                  {obj.name}
                                </option>
                              ))}
                            </Form.Control>
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextPassword">
                          <Form.Label column sm="3">
                            選擇時段
                          </Form.Label>
                          <Col sm="4">
                            <Form.Control
                              name="fromDate"
                              type="text"
                              placeholder="選擇時段"
                            />
                          </Col>
                          <Col sm="1">-</Col>
                          <Col sm="4">
                            <Form.Control
                              name="toDate"
                              type="text"
                              placeholder="選擇時段"
                            />
                          </Col>
                        </Form.Group>
                      </div>
                      <h5>會員基本資料</h5>
                      <hr className="title" />
                      <div className="p-sm-3 px-0">
                        <Form.Group as={Row} controlId="addr">
                          <Form.Label column sm="3">
                            地址
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                              name="addr"
                              type="text"
                              placeholder="請填入地址"
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="phone">
                          <Form.Label column sm="3">
                            電話
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                              name="phone"
                              type="text"
                              placeholder="請填入電話"
                            />
                          </Col>
                        </Form.Group>
                      </div>
                      <h5>狗狗資料</h5>
                      <hr className="title" />
                      <div className="p-sm-3 px-0">
                        <Form.Group as={Row}>
                          <Form.Label column sm="3">
                            <span className="label-danger">最多接待2位</span>
                          </Form.Label>
                          <Col sm="9"></Col>
                        </Form.Group>
                      </div>
                      <h5>額外需求</h5>
                      <hr className="title" />
                      <div className="p-sm-3 px-0">
                        <Form.Group as={Row}>
                          <Form.Label column sm="3">
                            選擇額外需求
                          </Form.Label>
                          <Col sm="9">
                            {extraService.map(obj => (
                              <Col md={12} lg={6} key={obj.id}>
                                <Form.Check
                                  custom
                                  name={`extraService`}
                                  type={`checkbox`}
                                  id={`extraService${obj.id}`}
                                  label={obj.name}
                                />
                              </Col>
                            ))}
                          </Col>
                        </Form.Group>
                      </div>
                      <h5>備註</h5>
                      <hr className="title" />
                      <div className="p-sm-3 px-0">
                        <Form.Group as={Row}>
                          <Col>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                              <Form.Control
                                as="textarea"
                                rows="3"
                                placeholder="最多500個字"
                              />
                            </Form.Group>
                          </Col>
                        </Form.Group>
                      </div>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default ServiceBooking
