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

function ServiceChatSidebar(props) {
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
          </Row>
        </Col>
        <Col md={6} lg={12}>
          <Row></Row>
        </Col>
      </Row>
    </>
  )
}

export default ServiceChatSidebar
