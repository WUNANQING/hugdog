import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa'
import { Col, Card, Nav, Button, Image } from 'react-bootstrap'
import '../../../css/product/productCard.scss'

const ProductCardSmall = props => {
  return (
    <Col md={3} className="mb-3">
      <Card className="shadow-sm">
        <Link to={'/productdetail/' + props.data.pId}>
          <Image
            src={require('../../../images/product/' + props.data.pImg + '.jpg')}
            className="card-img-top"
            alt="..."
          />
        </Link>
        <Card.Body className="card-body">
          <Card.Title>{props.data.pName}</Card.Title>
          <Card.Text>{props.data.pInfo}</Card.Text>
          <Card.Text className="text-danger">
            NTD {props.data.pPrice}元
          </Card.Text>
          <div className="d-flex justify-content-around mb-3">
            <FaPaw className="text-danger" /> <FaPaw /> <FaPaw /> <FaPaw />
            <FaPaw />
          </div>
          <div className="d-flex justify-content-around">
            <Nav.Link className="p-0">
              <Button
                className="text-center p-1"
                onClick={() => {
                  props.history.push('/productdetail/' + props.data.pId)
                }}
              >
                查看商品
              </Button>
            </Nav.Link>
            <Nav.Link className="p-0">
              <Button
                className="text-center p-1"
                onClick={() => {
                  if (
                    localStorage.getItem('mId') &&
                    localStorage.getItem('mId') !== '0'
                  ) {
                    let item = {
                      pId: props.data.pId,
                      pName: props.data.pName,
                      pQuantity: 1,
                      pPrice: props.data.pPrice,
                      pImg: props.data.pImg,
                    }
                    let cart = []
                    cart.push(item)

                    if (localStorage.getItem('cart') === null) {
                      localStorage.setItem('cart', JSON.stringify(cart))
                    } else {
                      let currentCart = JSON.parse(localStorage.getItem('cart'))
                      if (
                        [...currentCart].find(
                          value => value.pId === props.data.pId
                        )
                      ) {
                        return alert('已加入購物車')
                      } else {
                        const newCart = [...currentCart, item]
                        localStorage.setItem('cart', JSON.stringify(newCart))
                      }
                    }
                    props.history.push('/cart')
                  } else {
                    return alert('尚未登入')
                  }
                }}
              >
                快速結帳
              </Button>
            </Nav.Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default withRouter(ProductCardSmall)
