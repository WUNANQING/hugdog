import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getProducts, getProductDetail } from './actions/index'
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
import ProductCardSmall from './components/ProductCardSmall'

const ProductDetail = props => {
  const [total, setTotal] = useState(1)
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
  //即時更新商品數量(未完成)
  useEffect(() => {
    props.getProductDetail(pId)
    props.getProducts()
  }, [props.match.params.pId])
  //設定猜你喜歡只列出4項
  let arr = props.list.rows && props.list.rows.slice(0, 4)
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
              <h3>{props.detail[0] ? props.detail[0].pName : ''}</h3>
              <br />
              <h6>{props.detail[0] ? props.detail[0].pInfo : ''}</h6>
              <br />
              <h4>${props.detail[0] ? props.detail[0].pPrice : ''}</h4>
              <br />
              <div className="mt-3 d-flex justify-content-between">
                <Button
                  className="mb-md-2 "
                  variant="primary "
                  size="md"
                  onClick={() => {
                    updateCartToLocalStorage({
                      pId: props.detail[0].pId,
                      pName: props.detail[0].pName,
                      pQuantity: total,
                      pPrice: props.detail[0].pPrice,
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
                      setTotal(total - 1)
                    }}
                  >
                    -
                  </Button>
                  <Button
                    className="border-dark bg-light text-dark"
                    type="input"
                    min="1"
                  >
                    {total}
                  </Button>
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
                  onClick={() => {
                    let item = {
                      pId: props.detail[0].pId,
                      pName: props.detail[0].pName,
                      pQuantity: 1,
                      pPrice: props.detail[0].pPrice,
                    }
                    let cart = []
                    cart.push(item)

                    if (localStorage.getItem('cart') === null) {
                      localStorage.setItem('cart', JSON.stringify(cart))
                    } else {
                      let currentCart = JSON.parse(localStorage.getItem('cart'))
                      if (
                        [...currentCart].find(
                          value => value.pId === props.detail[0].pId
                        )
                      ) {
                        alert('已加入購物車')
                      } else {
                        const newCart = [...currentCart, item]
                        localStorage.setItem('cart', JSON.stringify(newCart))
                      }
                    }
                    props.history.push('/cart')
                  }}
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
                <Link to="/products">查看更多></Link>
              </div>
            </Col>
          </Row>
          <Row>
            {/* {}裡面不能下if判斷式？ */}
            {/* {if(props.list.rows){props.list.rows.map((value, index) => {
              return <ProductCard key={index} data={props.list.rows[index]} />
            })}} */}
            {props.list.rows &&
              arr.map((value, index) => {
                return (
                  <ProductCardSmall key={index} data={props.list.rows[index]} />
                )
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
    detail: store.getProductDetail,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getProducts, getProductDetail }, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
)
