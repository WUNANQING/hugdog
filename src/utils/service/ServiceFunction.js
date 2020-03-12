import React from 'react'
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
