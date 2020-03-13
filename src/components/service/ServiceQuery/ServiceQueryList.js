import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { starRating, checkIcon } from '../../../utils/service/ServiceFunction'

function ServiceQueryList() {
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
    },
    {
      name: 'Ivy Chao',
      isConfirmed: true,
      description: '阿汪小保姆',
      city: '台北市',
      dict: '士林區',
      rating: 5,
      service: ['到府遛狗'],
      price: 300,
      mId: 'm004',
    },
    {
      name: '好狗爸',
      isConfirmed: false,
      description: '經驗豐富的狗爸',
      city: '台北市',
      dict: '信義區',
      rating: 4,
      service: ['寄宿照顧', '安親托育', '到府陪伴', '到府遛狗'],
      price: 600,
      mId: 'm002',
    },
    {
      name: 'Abby',
      isConfirmed: true,
      description: '獨立庭院,環境舒適寬敞',
      city: '台北市',
      dict: '松山區',
      rating: 5,
      service: ['寄宿照顧', '安親托育'],
      price: 800,
      mId: 'm003',
    },
  ]

  // const checkIcon = (
  //   <div className="icon">
  //     <img
  //       className="img-fluid"
  //       src={require('../../../images/service/icon/check.svg')}
  //       alt=""
  //     />
  //   </div>
  // )

  //列表
  const cardList = (
    <>
      {userData.map((obj, i) => (
        <Link to={`/service/detail/${obj.mId}`} key={i}>
          <Card className="card-light card-list mb-3">
            <Card.Body className="p-3">
              <div className="d-flex">
                <figure className="avatar">
                  <img
                    src={require('../../../images/service/avatar/' +
                      obj.mId +
                      '.jpg')}
                    alt=""
                  />
                </figure>
                <ul className="user-data ml-4">
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
                  <li>
                    {obj['service'].map((type, i) =>
                      i !== obj['service'].length - 1 ? type + '/' : type
                    )}
                  </li>
                </ul>
                <div className="text-center ml-auto">
                  最低
                  <h5 className="text-info my-2">${obj.price}</h5>
                  每趟
                </div>
              </div>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </>
  )

  return <>{cardList}</>
}

export default ServiceQueryList
