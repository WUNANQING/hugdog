import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Row, Col, Button, Image } from 'react-bootstrap'

const BlogArt = props => {
  return (
    <>
      <Col xs={12} md={6} className="mb-5">
        <Link to={'/knowledge/blog/' + props.data.aTitle}>
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
              <h2>{props.data.aTitle}</h2>
              <h6>{props.data.dDate}</h6>
              <p>{props.data.aDes}</p>
              <a href="/" className="btn">
                more
              </a>
            </div>
          </div>
        </Link>
      </Col>
    </>
  )
}

export default withRouter(BlogArt)
