import React, { useState } from 'react'
import {
  Navbar,
  Nav,
  Row,
  Col,
  Image,
  ButtonGroup,
  Button,
  Form,
  InputGroup,
  FormControl,
  Accordion,
  Card,
} from 'react-bootstrap'
import {
  MdAddShoppingCart,
  MdShoppingCart,
  MdPlaylistAdd,
} from 'react-icons/md'
import Breadcrumb from '../../components/Breadcrumbs'
const ProductPageDetail = () => {
  const [total, setTotal] = useState(0)
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
        <Navbar className="bg-light" expand="md">
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
        <Row className="m-2">
          <Breadcrumb />
        </Row>
        <Row className="mb-5">
          <Col md={6}>
            <Image src="https://via.placeholder.com/370" thumbnail />
          </Col>
          <Col className="p-0" md={6}>
            <h3>商品名稱</h3>
            <h4>$100</h4>
            <Form.Label>--尺寸</Form.Label>
            <br />
            <ButtonGroup>
              <Button
                className="rounded border-dark bg-light text-dark mx-2"
                type="input"
                name="radio"
                defalutValue="sm"
              >
                小
              </Button>
              <Button
                className="rounded border-dark bg-light text-dark mx-2"
                type="input"
                name="radio"
                defalutValue="md"
              >
                中
              </Button>
              <Button
                className="rounded border-dark bg-light text-dark mx-2"
                type="input"
                name="radio"
                defalutValue="lg"
              >
                大
              </Button>
            </ButtonGroup>
            <br />
            <Form.Label>--顏色</Form.Label>
            <br />
            <ButtonGroup>
              <Button
                className="rounded btn-primary mx-2"
                type="radio"
                name="radio"
                value="blue"
              />
              <Button
                className="rounded btn-danger mx-2"
                type="radio"
                name="radio"
                value="red"
              />
              <Button
                className="rounded btn-info mx-2"
                type="radio"
                name="radio"
                value="green"
              />
            </ButtonGroup>
            <br />
            <div className="mt-3">
              <Button variant="warning" size="lg">
                <MdAddShoppingCart className="mb-1" />
                加入購物車
              </Button>{' '}
              <ButtonGroup>
                <Button
                  className="border-dark bg-light text-dark"
                  onClick={() => {
                    setTotal(total - 1)
                  }}
                >
                  -
                </Button>
                <Button
                  className="border-dark bg-light text-dark"
                  as="input"
                  type="button"
                  value={total}
                  disabled
                />
                <Button
                  className="border-dark bg-light text-dark"
                  onClick={() => {
                    setTotal(total + 1)
                  }}
                >
                  +
                </Button>
              </ButtonGroup>
            </div>
            <div className="mt-3">
              <Button variant="warning" size="lg">
                <MdPlaylistAdd className="mb-1" />
                加入願望清單
              </Button>{' '}
              <Button variant="warning" size="lg">
                <MdShoppingCart className="mb-1" />
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
