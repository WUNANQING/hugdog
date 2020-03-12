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

  const star = rating => {
    let icon = []
    for (let i = 0; i < rating; i++) {
      icon = [...icon, <MdStar className="mdStar" key={i} />]
    }
    for (let i = rating; i < 5; i++) {
      icon = [...icon, <MdStar className="mdStarBorder" key={i} />]
    }
    return icon
  }
  //列表
  const cardList = <></>

  return <>{cardList}</>
}

export default ServiceDetailSidebar
