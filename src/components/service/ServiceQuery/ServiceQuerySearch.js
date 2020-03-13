import React, { useEffect, useState } from 'react'
// import $ from 'jquery'
import { Button, Form, Row, Col, Card, Collapse } from 'react-bootstrap'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

function ServiceQuerySearch() {
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

  // const handleClosed = () => {
  //   if (window.innerWidth <= '768') {
  //     setIsclosed(true)
  //   }
  // }
  // window.addEventListener('load', handleClosed)

  const [open, setOpen] = useState(false)

  return (
    <>
      <Row className="mb-3">
        <Col className="d-flex justify-content-between">
          <Form.Control as="select" name="sort" className="w-auto">
            <option value="">排序條件</option>
            <option value="1">依評價排序 (高至低)</option>
            <option value="2">依評價排序 (低至高)</option>
            <option value="3">依年資排序 (高至低)</option>
            <option value="4">依年資排序 (低至高)</option>
          </Form.Control>
          <Button
            variant="primary"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            {open ? (
              <FaChevronUp className="mr-1" />
            ) : (
              <FaChevronDown className="mr-1" />
            )}
            搜尋條件
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Collapse in={open}>
            <Card className="card-shadow" id="example-collapse-text">
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="search-col mb-4" md={4}>
                      <label className="title">服務地區</label>
                      <hr className="title" />
                      <Form.Control as="select" name="cityArea">
                        <option value="">請選擇</option>
                        {cityArea.map(obj => (
                          <option value={obj.id} key={obj.id}>
                            {obj.name}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col className="search-col mb-4" md={4}>
                      <label className="title">選擇服務</label>
                      <hr className="title" />
                      <Form.Control as="select" name="serviceType">
                        <option value="">請選擇</option>
                        {serviceType.map(obj => (
                          <option value={obj.id} key={obj.id}>
                            {obj.name}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col className="search-col mb-4" md={4}>
                      <label className="title">狗狗體型</label>
                      <hr className="title" />
                      <Row>
                        {dogSize.map(obj => (
                          <Col md={12} lg={6} key={obj.id}>
                            <Form.Check
                              custom
                              name={`dogSize`}
                              type={`checkbox`}
                              id={`dogSize${obj.id}`}
                              label={obj.name}
                            />
                          </Col>
                        ))}
                      </Row>
                    </Col>
                    <Col className="search-col mb-4" md={4}>
                      <label className="title">評價分數</label>
                      <hr className="title" />
                      <Form.Control as="select" name="serviceRating">
                        <option value="">請選擇</option>
                        {serviceRating.map(obj => (
                          <option value={obj.id} key={obj.id}>
                            {obj.name}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    {/* <Col className="search-col" md={4}>
                 <label className="title">價格區間</label>
                 <hr className="title" />
                 <input type="range" className="form-control-range" />
                 <Range />
               </Col> */}
                    <Col className="search-col mb-4" md={4}>
                      <label className="title">其他服務</label>
                      <hr className="title" />
                      <Row>
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
                      </Row>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Collapse>
        </Col>
      </Row>
    </>
  )
}

export default ServiceQuerySearch
