import React from 'react'
import {
  Navbar,
  Nav,
  Row,
  Col,
  Image,
  ButtonGroup,
  Button,
  ToggleButton,
  InputGroup,
  FormControl,
  Accordion,
  Card,
} from 'react-bootstrap'
const ProductPageDetail = () => {
  const producyCategory = [
    '飼料',
    '零食',
    '犬用保健食品',
    '狗罐頭/鮮食/餐盒',
    '美容/清潔用品',
    '狗籠/狗屋',
    '床組',
    '狗衣服',
    '牽繩',
    '胸帶',
    '項圈',
    '名牌/吊牌',
    '外出提籠/推車',
    '其他犬用品',
  ]
  const brand = [
    '希爾斯',
    'Vertri Science',
    'Now Pets',
    'Lintbells',
    'Holistic',
    'CANIDIE',
    'HALO',
  ]
  const sideBarproducyCategory = producyCategory.map(value => (
    <Nav.Link className="mb-1" key={value}>
      {value}
    </Nav.Link>
  ))
  const sideBarBrand = brand.map(value => (
    <Nav.Link className="mb-1" key={value}>
      {value}
    </Nav.Link>
  ))
  // 螢幕縮小後變成手風琴
  // <Accordion defaultActiveKey="0">
  //               <Card>
  //                 <Accordion.Toggle as={Card.Header} eventKey="0">
  //                   商品分類
  //                 </Accordion.Toggle>
  //                 <Accordion.Collapse eventKey="0">
  //                   <Card.Body>{sideBarproducyCategory}</Card.Body>
  //                 </Accordion.Collapse>
  //               </Card>
  //               <Card>
  //                 <Accordion.Toggle as={Card.Header} eventKey="1">
  //                   品牌分類
  //                 </Accordion.Toggle>
  //                 <Accordion.Collapse eventKey="1">
  //                   <Card.Body>{sideBarBrand}</Card.Body>
  //                 </Accordion.Collapse>
  //               </Card>
  //               <Card>
  //                 <Accordion.Toggle as={Card.Header} eventKey="2">
  //                   價格範圍
  //                 </Accordion.Toggle>
  //                 <Accordion.Collapse eventKey="2">
  //                   <Card.Body>
  //                     <InputGroup>
  //                       <FormControl className="col-md-6" />~
  //                       <FormControl className="col-md-6" />
  //                     </InputGroup>
  //                   </Card.Body>
  //                 </Accordion.Collapse>
  //               </Card>
  //             </Accordion>
  return (
    <Row className="my-5">
      <Col className="p-0" md={2}>
        <Navbar className="bg-light my-3" expand="md">
          <Navbar.Toggle aria-controls="basic-navbar-nav order-1" />
          <Navbar.Collapse id="basic-navbar-nav" className="order-4 order-md-3">
            <Nav className="nav-menu mr-auto flex-column">
              <h5 className="mt-1">商品分類</h5>
              {sideBarproducyCategory}
              <h5 className="mt-1">品牌</h5>
              {sideBarBrand}
              <h5 className="mt-1">價格範圍</h5>
              <InputGroup>
                <FormControl className="col-md-6" />~
                <FormControl className="col-md-6" />
              </InputGroup>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
      <Col md={10}>
        <Row className="my-5">
          <Col className="m-0" md={6}>
            <Image src="https://via.placeholder.com/370" thumbnail />
          </Col>
          <Col className="p-0" md={6}>
            <h3>商品名稱</h3>
            <h4>$100</h4>
            <p>--尺寸</p>
            <Button variant="outline-warning">小</Button>{' '}
            <Button variant="outline-warning">中</Button>{' '}
            <Button variant="outline-warning">大</Button> <p>--顏色</p>
            <ButtonGroup toggle>
              <ToggleButton type="radio" name="radio" defaultChecked value="1">
                Active
              </ToggleButton>
              <ToggleButton type="radio" name="radio" value="2">
                Radio
              </ToggleButton>
              <ToggleButton type="radio" name="radio" value="3">
                Radio
              </ToggleButton>
            </ButtonGroup>
            <br />
            <div className="mt-3">
              <Button variant="warning" size="lg">
                加入願望清單
              </Button>{' '}
              <Button variant="warning" size="lg">
                加入購物車
              </Button>{' '}
              <Button variant="warning" size="lg">
                快速結帳
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="mt-5" md={12}>
            <Accordion className="mb-5" defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  商品說明
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Accordion defaultActiveKey="1">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  商品評論
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default ProductPageDetail
