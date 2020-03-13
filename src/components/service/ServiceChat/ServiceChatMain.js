import React, { useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { starRating, checkIcon } from '../../../utils/service/ServiceFunction'

function ServiceChatMain() {
  //列表

  return (
    <>
      <Row>
        <Col>
          <Card className="card-light">
            <Card.Body>
              <Row>
                <Col></Col>
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
                  <ul className="comment">
                    <li>
                      <div className="d-flex p-3">
                        <div className="d-flex flex-column">
                          <figure className="avatar">
                            <img
                              className="rounded-circle"
                              src={require('../../../images/service/avatar/m010.jpg')}
                              alt=""
                            />
                          </figure>
                          <h5 className="text-center my-3">Nina</h5>
                        </div>
                        <div className="d-flex flex-column px-4">
                          <div className="mb-3">1個月前 {starRating(4)}</div>
                          <div>
                            很認真，每天都有詳細描述寵物的狀況和照片，照顧也很周到,感謝卡卡這周以來的照顧,
                            非常用心的回報毛小孩的狀況,
                            讓我在國外旅遊期間很安心,
                            回家看到環境整潔也維持得很好喔!
                            讓我回家的時候只要大力吸貓貓就好!大力推荐卡卡~
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex p-3">
                        <div className="d-flex flex-column">
                          <figure className="avatar">
                            <img
                              className="rounded-circle"
                              src={require('../../../images/service/avatar/m010.jpg')}
                              alt=""
                            />
                          </figure>
                          <h5 className="text-center my-3">Nina</h5>
                        </div>
                        <div className="d-flex flex-column px-4">
                          <div className="mb-3">1個月前 {starRating(4)}</div>
                          <div>
                            很認真，每天都有詳細描述寵物的狀況和照片，照顧也很周到,感謝卡卡這周以來的照顧,
                            非常用心的回報毛小孩的狀況,
                            讓我在國外旅遊期間很安心,
                            回家看到環境整潔也維持得很好喔!
                            讓我回家的時候只要大力吸貓貓就好!大力推荐卡卡~
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex p-3">
                        <div className="d-flex flex-column">
                          <figure className="avatar">
                            <img
                              className="rounded-circle"
                              src={require('../../../images/service/avatar/m010.jpg')}
                              alt=""
                            />
                          </figure>
                          <h5 className="text-center my-3">Nina</h5>
                        </div>
                        <div className="d-flex flex-column px-4">
                          <div className="mb-3">1個月前 {starRating(4)}</div>
                          <div>
                            很認真，每天都有詳細描述寵物的狀況和照片，照顧也很周到,感謝卡卡這周以來的照顧,
                            非常用心的回報毛小孩的狀況,
                            讓我在國外旅遊期間很安心,
                            回家看到環境整潔也維持得很好喔!
                            讓我回家的時候只要大力吸貓貓就好!大力推荐卡卡~
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ServiceChatMain
