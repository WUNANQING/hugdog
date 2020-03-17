import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa'
import { Col, Card, Nav } from 'react-bootstrap'

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
            <Link
              to={'/product/' + props.data.pId}
              className="btn btn-primary border p-0"
            >
              查看商品
            </Link>
            <Nav.Link href="/cart" className="btn btn-primary border p-0">
              快速結帳
            </Nav.Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProductCard
