import React, { useEffect } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { starRating, checkIcon } from '../../../utils/service/ServiceFunction'
import {
  FaRegCommentDots,
  FaRegClock,
  FaEnvelope,
  FaRegHeart,
} from 'react-icons/fa'

function ServiceDetailSidebar(props) {
  //列表
  const userData = [
    {
      name: 'Evan Yu',
      isConfirmed: true,
      description: '5隻毛孩的爸',
      city: '台北市',
      dict: '大安區',
      rating: 4,
      service: ['到府陪伴', '到府遛狗'],
      price: 500,
      mId: 'm001',
      dogSize: ['xs', 's', 'm'],
    },
  ]

  const dogSize = [
    {
      size: 'xs',
      name: '迷你',
      weight: '4Kg以下',
    },
    {
      size: 's',
      name: '小型',
      weight: '4-10Kg',
    },
    {
      size: 'm',
      name: '中型',
      weight: '11-25Kg',
    },
    {
      size: 'l',
      name: '大型',
      weight: '25-44Kg',
    },
  ]

  const obj = userData[0]

  return (
    <>
      <Row>
        <Col md={6} lg={12}>
          <Row className="mb-3">
            <Col md={12}>
              <figure className="avatar mx-auto mb-3">
                <img
                  className="rounded-circle"
                  src={require('../../../images/service/avatar/' +
                    obj.mId +
                    '.jpg')}
                  alt=""
                />
              </figure>
            </Col>
            <Col md={12}>
              <ul className="user-data text-center mb-3">
                <li>
                  <h5>
                    {obj.name}
                    {obj.isConfirmed ? checkIcon() : ''}
                  </h5>
                </li>
                <li>{obj.description}</li>
                <li>
                  {obj.city} {obj.dict}
                </li>
                <li>
                  {starRating(obj.rating)} ({obj.rating})
                </li>
              </ul>
            </Col>
            <Col md={12} className="d-flex justify-content-center mb-3">
              <ul>
                <li>
                  <FaRegCommentDots className="mr-1" />
                  回覆率：95%
                </li>
                <li>
                  <FaRegClock className="mr-1" />
                  平均回覆時間：1天內
                </li>
              </ul>
            </Col>
            <Col md={12} className="d-flex justify-content-center">
              <Button variant="primary" className="mr-3">
                <FaEnvelope className="mr-1" />
                聯絡
              </Button>
              <Button variant="outline-danger">
                <FaRegHeart className="mr-1" />
                追蹤
              </Button>
            </Col>
          </Row>
        </Col>
        <Col md={6} lg={12}>
          <Row>
            <Col>
              <Card className="card-light">
                <Card.Body>
                  <h4>服務內容</h4>
                  <hr className="title" />
                  <div className="mb-4">
                    <h5 className="mb-3">項目</h5>
                    <div className="d-flex px-3 mb-3">
                      <div className="text-center">
                        <h6>到府陪伴</h6>
                        到府餵食及陪伴狗狗
                      </div>
                      <div className="text-center ml-auto">
                        <h5 className="text-info">$400</h5>
                        每趟
                      </div>
                    </div>
                    <div className="d-flex px-3">
                      <div className="text-center">
                        <h6>到府遛狗</h6>
                        到府帶狗狗出門散步
                      </div>
                      <div className="text-center ml-auto">
                        <h5 className="text-info">$250</h5>
                        每趟
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <h5>接待體型</h5>
                    <Row className="p-2 dog-size">
                      {dogSize.map(dog => (
                        <Col className={`dog-size-${dog.size}`}>
                          <div className="icon">
                            <img
                              src={require('../../../images/service/icon/dog-size-' +
                                dog.size +
                                '.svg')}
                              alt=""
                              className={
                                obj.dogSize.indexOf(dog.size) !== -1
                                  ? 'active'
                                  : ''
                              }
                            />
                          </div>
                          <h6 className="my-2 text-center">{dog.name}</h6>
                          <h6 className="my-2 text-center">{dog.weight}</h6>
                        </Col>
                      ))}
                    </Row>
                  </div>
                  <div className="text-center">
                    <Link to="#" className="text-primary font-weight-bold h5">
                      詳細服務內容
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default ServiceDetailSidebar
