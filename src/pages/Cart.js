import React from 'react'
import {
  Row,
  Col,
  Image,
  ButtonGroup,
  Button,
  ToggleButton,
} from 'react-bootstrap'
const Cart = () => {
  return (
    <Row>
      <Col className="border mr-2" md={3}>
        SideBar
      </Col>
      <Col className="border" md={8}>
        <Image src="https://via.placeholder.com/300" thumbnail />
        <p>--尺寸</p>
        <>
          <Button variant="outline-warning">小</Button>{' '}
          <Button variant="outline-warning">中</Button>{' '}
          <Button variant="outline-warning">大</Button>{' '}
        </>
        <p>--顏色</p>
        <>
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
        </>
        <br />
        <div className="mt-3">
          <Button variant="primary" size="lg">
            加入願望清單
          </Button>{' '}
          <Button variant="secondary" size="lg">
            加入購物車
          </Button>{' '}
          <Button variant="secondary" size="lg">
            快速結帳
          </Button>
        </div>
      </Col>
    </Row>
  )
}

export default Cart
