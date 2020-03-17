import React from 'react'

import { Card, Button, Image } from 'react-bootstrap'

function Nowon() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Header>活動日期：2020/05/07</Card.Header>
        <Card.Img
          variant="top"
          src="http://fakeimg.pl/1300x400/eeeeee/EAE0D0/"
        />
        <Card.Body>
          <Card.Title>基礎正向行為養成班／輕鬆打造快樂狗生活</Card.Title>
          <Card.Text>
            針對毛孩教養時發生的日常行為問題，特別開設「正向行為禮貌養成班」，協助飼主引導毛孩學會基礎服從指令
          </Card.Text>
          <Button variant="primary">報名去</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Nowon
