import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Row, Col, Button, Image } from 'react-bootstrap'
import $ from 'jquery'

const BlogArt = props => {
  $(function() {
    var len = 50 // 超過50個字以"..."取代
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

  return (
    <>
      <Col xs={12} className="mb-5">
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
              <p>datatime</p>
            </div>

            <div className="txt">
              <Link to={'/knowledge/blog/' + props.data.aTitle}>
                <h2>{props.data.aTitle}</h2>
              </Link>
              <p className="JQellipsis">{props.data.aDes} </p>
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
