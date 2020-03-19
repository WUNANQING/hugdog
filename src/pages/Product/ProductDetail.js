import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getProducts,
  getProductDetail,
  plusQuantity,
  minusQuantity,
} from './actions/index'
import {
  Container,
  Row,
  Col,
  Image,
  ButtonGroup,
  Button,
  Accordion,
  Card,
} from 'react-bootstrap'
import {
  MdAddShoppingCart,
  MdShoppingCart,
  MdPlaylistAdd,
} from 'react-icons/md'
import Breadcrumb from '../../components/Breadcrumbs'
import ProductSidebar from './components/ProductSidebar'
import ProductCard from './components/ProductCard'

const ProductDetail = props => {
  const [mycart, setMycart] = useState([])
  const pId = props.match.params.pId ? props.match.params.pId : ''

  //更新購物車
  function updateCartToLocalStorage(item) {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []
    if ([...currentCart].find(value => value.pId === item.pId)) {
      alert('已加入購物車')
    } else {
      const newCart = [...currentCart, item]
      localStorage.setItem('cart', JSON.stringify(newCart))
      setMycart(newCart)
    }
  }

  useEffect(() => {
    props.getProducts()
    props.getProductDetail(pId)
  }, [])

  console.log(props.detail)
  return (
    <Container>
      <Row className="my-5">
        <ProductSidebar />
        <Col md={10}>
          <Row className="m-2">
            <Breadcrumb />
          </Row>
          <Row className="mb-5">
            <Col md={5} className="text-center">
              <Image src="https://via.placeholder.com/370" thumbnail />
            </Col>
            <Col md={4}>
              <h3>{props.detail.pName}</h3>
              <br />
              <h6>{props.detail.pInfo}</h6>
              <br />
              <h4>${props.detail.pPrice}</h4>
              <br />
              <div className="mt-3 d-flex justify-content-between">
                <Button
                  className="mb-md-2 "
                  variant="primary "
                  size="md"
                  onClick={() => {
                    updateCartToLocalStorage({
                      pId: props.detail.pId,
                      pName: props.detail.pName,
                      pQuantity: props.total,
                      pPrice: props.detail.pPrice,
                    })
                  }}
                >
                  <MdAddShoppingCart className="mb-1" />
                  加入購物車
                </Button>
                <ButtonGroup className="mb-md-2" size="md">
                  <Button
                    className="border-dark bg-light text-dark"
                    onClick={() => {
                      props.minusQuantity(1)
                    }}
                  >
                    -
                  </Button>
                  <Button
                    className="border-dark bg-light text-dark"
                    value={props.total}
                    type="input"
                    min="1"
                  >
                    {props.total}
                  </Button>
                  <Button
                    className="border-dark bg-light text-dark"
                    onClick={() => {
                      props.plusQuantity(1)
                    }}
                  >
                    +
                  </Button>
                </ButtonGroup>
              </div>
              <div className="my-3 d-flex justify-content-between">
                <Button
                  className="mb-md-2 btn-padding-x btn-padding-y"
                  variant="primary"
                  size="md"
                >
                  <MdPlaylistAdd className="mb-md-1" />
                  加入清單
                </Button>
                <Button
                  className="mb-md-2 btn-padding-x btn-padding-y"
                  variant="primary"
                  size="md"
                >
                  <MdShoppingCart className="mb-md-1" />
                  快速結帳
                </Button>
              </div>
            </Col>
            <Col className="d-md-flex flex-column justify-content-around ">
              <div
                className="mb-3 border p-3"
                style={{
                  width: 100 + '%',
                  height: 100 + 'px',
                  overflow: 'hidden',
                }}
              >
                <h6 className="text-center border-bottom">為何選擇我們?</h6>
                <div>為何是我為何是我為何是我為何是我為何是我為何是我</div>
              </div>
              <div
                className="mb-3 border p-3"
                style={{
                  width: 100 + '%',
                  height: 100 + 'px',
                  overflow: 'hidden',
                }}
              >
                <h6 className="text-center border-bottom">為何選擇我們?</h6>
                <div>為何是我為何是我為何是我為何是我為何是我為何是我</div>
              </div>
              <div
                className="mb-3 border p-3"
                style={{
                  width: 100 + '%',
                  height: 100 + 'px',
                  overflow: 'hidden',
                }}
              >
                <h6 className="text-center border-bottom">為何選擇我們?</h6>
                <div>為何是我為何是我為何是我為何是我為何是我為何是我</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="mt-md-3" md={12}>
              <Accordion className="mb-5" defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0" type="button">
                    商品說明
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col className="mt-md-3" md={12}>
              <Accordion defaultActiveKey="1">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1" type="button">
                    商品評論
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="mt-5 d-md-flex justify-content-between">
                <p>猜你喜歡</p>
                <a href="#product">查看更多></a>
              </div>
            </Col>
          </Row>
          <Row>
            {props.list &&
              props.list.map((value, index) => {
                return <ProductCard key={index} data={props.list[index]} />
              })}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = store => {
  return {
    list: store.getProducts,
    total: store.counter,
    detail: store.getProductDetail,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { getProducts, getProductDetail, plusQuantity, minusQuantity },
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
)
