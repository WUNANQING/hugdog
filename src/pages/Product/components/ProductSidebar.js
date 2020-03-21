import React from 'react'
import { Col, Nav, Navbar, InputGroup, FormControl } from 'react-bootstrap'
const ProductSidebar = () => {
  const productCategory = [
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
  const productBrand = [
    '希爾斯',
    'Vertri Science',
    'Now Pets',
    'Lintbells',
    'Holistic',
    'CANIDIE',
    'HALO',
  ]
  const productCategorysidebar = productCategory.map((value, index) => (
    <Nav.Link key={value} href={'/products/' + eval(index + 1)}>
      {value}
    </Nav.Link>
  ))
  const productBrandSidebar = productBrand.map(value => (
    <Nav.Link key={value} href={'/products/' + value}>
      {value}
    </Nav.Link>
  ))
  return (
    <Col className="p-0" md={2}>
      <Navbar className="bg-light" expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav order-1" />
        <Navbar.Collapse id="basic-navbar-nav" className="order-4 order-md-3">
          <Nav className="nav-menu mr-auto flex-column">
            <h5 className="mt-1">商品分類</h5>
            {productCategorysidebar}
            <h5 className="mt-1">品牌</h5>
            {productBrandSidebar}
            <h5 className="mt-1">價格範圍</h5>
            <InputGroup>
              <FormControl className="col-md-6" />~
              <FormControl className="col-md-6" />
            </InputGroup>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  )
}

export default ProductSidebar
