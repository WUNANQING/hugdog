import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MdStar } from 'react-icons/md'

function ServiceDetailSidebar() {
  const checkIcon = (
    <div className="icon">
      <img
        className="img-fluid"
        src={require('../../../images/service/icon/check.svg')}
        alt=""
      />
    </div>
  )

  // const star = rating => {
  //   let icon = []
  //   for (let i = 0; i < rating; i++) {
  //     icon = [...icon, <MdStar className="mdStar" key={i} />]
  //   }
  //   for (let i = rating; i < 5; i++) {
  //     icon = [...icon, <MdStar className="mdStarBorder" key={i} />]
  //   }
  //   return icon
  // }
  //列表
  const cardList = (
    <>
      {userData.map((obj, i) => (
        <Link to="#" key={i}>
          <Card className="card-light card-list mb-3">
            <Card.Body className="p-3">
              <div className="d-flex">
                <figure className="avatar">
                  <img
                    src={require('../../images/service/avatar/' +
                      obj.mId +
                      '.jpg')}
                    alt=""
                  />
                </figure>
                <ul className="data ml-4">
                  <li className="name">
                    <h5 className="font-weight-bold">
                      {obj.name}
                      {obj.isConfirmed ? checkIcon : ''}
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
                <div className="price ml-auto">
                  最低
                  <h5 className="font-weight-bold text-info my-2">
                    ${obj.price}
                  </h5>
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

export default ServiceDetailSidebar
