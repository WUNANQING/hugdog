import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa'
import { Col, Card, Nav, Button } from 'react-bootstrap'

const ProductCard = props => {
  return (
    <Col md={4} className="mb-3">
      <Card className="shadow-sm">
        <img
          src="https://via.placeholder.com/250x150"
          className="card-img-top"
          alt="..."
        />
        <Card.Body className="card-body">
          <Card.Title>{props.data.pName}</Card.Title>
          <Card.Text>{props.data.pInfo}</Card.Text>
          <Card.Text className="text-danger">
            NTD {props.data.pPrice}元
          </Card.Text>
          <div className="d-md-flex justify-content-around mb-3">
            <FaPaw className="text-danger" /> <FaPaw /> <FaPaw /> <FaPaw />
            <FaPaw />
          </div>
          <div className="d-md-flex justify-content-around">
            <Nav.Link>
              <Link to={'/productdetail/' + props.data.pId} className="p-0">
                <Button className="text-center p-1">查看商品</Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              {/* <Link to="/cart" className="p-0"> */}
              <Button
                className="text-center p-1"
                onClick={() => {
                  let item = {
                    pId: props.data.pId,
                    pName: props.data.pName,
                    pQuantity: 1,
                    pPrice: props.data.pPrice,
                  }
                  let cart = []
                  cart.push(item)
                  if (localStorage.getItem('cart') === null) {
                    localStorage.setItem('cart', JSON.stringify(cart))
                  } else {
                    let cuurentCart = JSON.parse(localStorage.getItem('cart'))
                  }
                }}
              >
                快速結帳
              </Button>
              {/* </Link> */}
            </Nav.Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default withRouter(ProductCard)
