import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { ReactComponent as Logo } from '../../../images/logo-dark.svg'

function ProductReceipt() {
  const [show, setShow] = useState(false)
  const [mycart, setMycart] = useState([])

  //提取購物車資料
  function getCartFromLocalStorage() {
    const newCart = localStorage.getItem('cart') || []
    setMycart(JSON.parse(newCart))
  }

  //從localStorage取得購物車資料
  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  //計算總價
  const sum = items => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].pQuantity * items[i].pPrice
    }
    return total
  }
  //訂單時間
  const time =
    new Date().getFullYear() +
    '/' +
    (new Date().getMonth() + 1) +
    '/' +
    new Date().getDate()

  return (
    <>
      <Row>
        <Col>
          <Button
            className="text-decoration-none p-0 b-0"
            variant="link"
            size="lg"
            onClick={() => setShow(true)}
          >
            檢視訂單摘要：NT${sum(mycart)}
          </Button>
          <Modal centered size="md" show={show} onHide={() => setShow(false)}>
            <Modal.Header>
              <Logo className="App-logo" alt="logo" />
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row className="show-grid">
                  <Col>
                    <h5 className="text-center font-weight-bold">購物明細</h5>
                    <hr />
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col>時間:{time}</Col>
                </Row>
                <hr className="mt-1" />
                {mycart.map((value, index) => {
                  return (
                    <>
                      <Row className="show-grid">
                        <Col>商品名稱:{value.pName}</Col>
                      </Row>
                      <Row className="show-grid">
                        <Col>
                          <div className="d-flex justify-content-between">
                            <div>
                              價格*數量
                              <br />
                              {value.pQuantity} * {value.pPrice}
                            </div>
                            <div>
                              <br />
                              小計:{value.pQuantity * value.pPrice}
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </>
                  )
                })}
                <Row className="show-grid">
                  <Col>
                    <div className="d-flex justify-content-between">
                      <div>是否使用優惠</div>
                      <div>優惠:100</div>
                    </div>
                  </Col>
                </Row>
                <hr className="mb-1" />
                <Row className="show-grid">
                  <Col>
                    <div className="d-flex justify-content-between">
                      <div>合計</div>
                      <div>總計:{sum(mycart)}</div>
                    </div>
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col>
                    <h5 className="text-center font-weight-bold">
                      運貨與退貨通知
                    </h5>
                    <hr />
                    <p className="p-2">
                      無庫存商品調貨時間請參考「商品平均調貨時間」。
                      結帳選項若無出現「海外店取」，可能是購買商品不適用此
                      服務。(說明)。 海外郵資運費計算。(說明)
                    </p>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </>
  )
}

export default withRouter(ProductReceipt)