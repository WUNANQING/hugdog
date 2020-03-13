import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Button, Modal } from 'react-bootstrap'
import Carousel from './ServiceDetailCarousel'
import { starRating, checkIcon } from '../../../utils/service/ServiceFunction'

function ServiceDetailMain() {
  //評論
  const commentData = [
    {
      name: 'Nina',
      createdAt: '1個月前',
      rating: 4,
      comment:
        '很認真，每天都有詳細描述寵物的狀況和照片，照顧也很周到,感謝卡卡這周以來的照顧,非常用心的回報毛小孩的狀況,讓我在國外旅遊期間很安心,回家看到環境整潔也維持得很好喔!讓我回家的時候只要大力吸貓貓就好!大力推荐卡卡~',
      mId: 'm010',
    },
    {
      name: 'Tatum',
      createdAt: '1個月前',
      rating: 4,
      comment:
        '家裡 24 小時有人，環境很適合我們家毛孩，令人安心。隨時聯繫得到保母，會發照片告知狀況。雖離台北市區內較遠，但開車交通方便又好找(不是在巷弄內)，對開車接送的家長來說非常便利(開車接送在市區內反而麻煩)。以後出遠門還會把我們家毛孩送來 Julia 家！',
      mId: 'm002',
    },
    {
      name: 'Abby',
      createdAt: '1個月前',
      rating: 4,
      comment:
        'Lydia 常常傳狗的照片給我，讓我在國外很放心，還幫我家的狗洗澡跟修指甲，真的好像照顧自己的狗一樣。Lydia的兒子常常跟我的狗玩，甚至一起寫作業、睡覺，上學去時，我的狗還會在窗戶望著等他下課，他跟我的狗都變成好朋友，讓我覺得要把狗帶走時，非常不好意思。我之後出國一定還會再找她幫忙。',
      mId: 'm003',
    },
  ]

  //Modal
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const serviceCommentDetail = (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>所有評論</Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          關閉
        </Button>
      </Modal.Footer>
    </Modal>
  )

  return (
    <>
      <Row>
        <Col>
          <Card className="card-light">
            <Card.Body>
              <Row>
                <Col>
                  <Carousel />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4>關於我 {checkIcon('身分已認證')}</h4>
                  <hr className="title" />
                  <div className="mb-4">
                    <h6>6年經驗</h6>
                    <h5>專業到府陪伴/遛狗</h5>
                    <div>
                      我自己養了一隻狗狗，幾乎每天24小時都陪伴在自己家狗狗身邊，有了小雪陪在身邊之後，越來越喜歡毛小孩，自己也已經完全進化成狗奴一族。每天我都會早中晚、飯後、睡前帶狗兒子外出散步，一天通常散步五次，回到家都會用毛巾幫他全身擦一遍，讓他在家自由活動，想在哪休息就去哪休息。在家會陪他玩耍、也會有點心、獎勵等，也會自己動手烤肉乾，狗狗是我們家的寶貝。
                    </div>
                  </div>
                  <div className="mb-4">
                    <h5>其他服務：</h5>
                    <ul>
                      <li>-洗澡</li>
                      <li>-美容</li>
                      <li>-行為訓練</li>
                      <li>-有專業執照</li>
                    </ul>
                  </div>
                  <h4>
                    保母評價
                    <span className="inline-block-icon ml-3">
                      {starRating(4)}
                      <span className="icon-text">(共5則評價)</span>
                    </span>
                  </h4>
                  <hr className="title" />
                  <ul className="comment mb-3">
                    {commentData.map((obj, i) => (
                      <li key={i}>
                        <div className="d-flex p-2 p-sm-3">
                          <div className="d-flex flex-column">
                            <figure className="avatar mb-3">
                              <img
                                className="rounded-circle"
                                src={require('../../../images/service/avatar/' +
                                  obj.mId +
                                  '.jpg')}
                                alt=""
                              />
                            </figure>
                            <h5 className="text-center">{obj.name}</h5>
                          </div>
                          <div className="d-flex flex-column pl-2 px-sm-4">
                            <div className="mb-3">
                              1個月前 {starRating(obj.rating)}
                            </div>
                            <div>{obj.comment}</div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <Button
                      variant="outline-dark"
                      size="sm"
                      onClick={handleShow}
                    >
                      查看所有評論
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {serviceCommentDetail}
    </>
  )
}

export default ServiceDetailMain
