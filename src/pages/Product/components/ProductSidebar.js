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
    'EZDOG',
    '飛萊希',
    'SPUTNIK-EX',
    'tails&me',
    'IBIYAYA',
    'pet gear',
    '希爾思',
    'Furhaven',
    'BigBarker',
    'PETMAKER',
    'Pawhut',
    'Petmate',
    'MidWestHom',
    'Petsfit',
    'Ruff Ruff',
    'ALLSTARDOG',
    'Vetri Scie',
    'NOW PETS',
    'Lintbells',
    'Holistic B',
    'CANIDAE 卡比',
    'HALO 嘿囉',
    'Farmina法米納',
    'Nutram 紐頓',
    'arrr',
  ]
  const productCategorysidebar = productCategory.map((value, index) => (
    <Nav.Link key={value} href={'/products/category?cId=' + eval(index + 1)}>
      {value}
    </Nav.Link>
  ))
  const productBrandSidebar = productBrand.map((value, index) => (
    <Nav.Link key={value} href={'/products/vendor?Id=' + eval(index + 1)}>
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
