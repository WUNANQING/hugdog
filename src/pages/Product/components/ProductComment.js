import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'

const ProductComment = () => {
  return (
    <Form>
      <Form.Group>
        <Button>
          <AiFillLike />
        </Button>
        <AiFillDislike />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>我要評論</Form.Label>
        <Form.Control as="textarea" name="content" rows="3" />
      </Form.Group>
      <Button className="ml-0" variant="primary" type="submit">
        送出評論
      </Button>
    </Form>
  )
}

export default ProductComment
