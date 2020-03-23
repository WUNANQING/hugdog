import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Row, Col, Button, Image } from 'react-bootstrap'
import $ from 'jquery'

const BlogArt = props => {
  $(function() {
    var len = 70 // 超過50個字以"..."取代
    $('.JQellipsis').each(function(i) {
      if ($(this).text().length > len) {
        $(this).attr('title', $(this).text())
        var text =
          $(this)
            .text()
            .substring(0, len - 1) + '...'
        $(this).text(text)
      }
    })
  })

  const BlogType = [
    { id: 1, name: '健康與生活' },
    { id: 2, name: '疫苗與用藥' },
    { id: 3, name: '營養與處方' },
    { id: 4, name: '美容與保養' },
  ]

  return (
    <>
      <Col xs={12} className="">
        <div className="wrap">
          {/* // item1 */}
          <div className="item">
            <div className="pic">
              <Image
                className="blogImg"
                src={require('../../images/knowledge/blog/' +
                  props.data.aId +
                  '.jpg')}
                alt=""
              />
            </div>

            <div className="txt">
              <p>{props.data.dDate}</p>
              <Link to={'/knowledge/blog/' + props.data.aTitle}>
                <h3>{props.data.aTitle}</h3>
              </Link>
              <p className="JQellipsis">{props.data.aDes} </p>
              <br />
              <Link to="/knowledge/blog/">
                <h6 className="text-right">看更多...</h6>
              </Link>
            </div>
          </div>
          {/* // item 2 
            <div className="item">
              <div className="txt">
                <h2>{props.data.aTitle}</h2>
                <p>{props.data.aDes}</p>
              </div>
              <div className="pic">
                <Image
                  className="blogImg"
                  src={require('../../images/knowledge/blog/' +
                    props.data.aId +
                    '.jpg')}
                  alt=""
                />
              </div>
            </div> */}
        </div>
      </Col>
    </>
  )
}

export default withRouter(BlogArt)
