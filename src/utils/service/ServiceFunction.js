import React, { useState } from 'react'
import { MdStar } from 'react-icons/md'

export function starRating(rating) {
  let icon = []
  for (let i = 0; i < rating; i++) {
    icon = [...icon, <MdStar className="mdStar" key={i} />]
  }
  for (let i = rating; i < 5; i++) {
    icon = [...icon, <MdStar className="mdStarBorder" key={i} />]
  }
  return icon
}

export function checkIcon(text) {
  return (
    <>
      <span className="inline-block-icon ml-3">
        <img
          className="img-fluid"
          src={require('../../images/service/icon/check.svg')}
          alt=""
        />
        <span className="icon-text">{text}</span>
      </span>
    </>
  )
}

export function linkTo(src) {
  return (window.location.href = src)
}
