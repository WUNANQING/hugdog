import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Row, Col, Button, Image } from 'react-bootstrap'

const BlogArt = props => {
  return (
    <>
      <Col xs={12} md={6} className="mb-3">
        <Link to={'blog/' + props.data.aTitle}>
          <div className="card mb-3 border-0">
            <Image
              // src={require('../../images/knowledge/blog/' +
              //   props.data.pName +
              //   '.jpg')}
              src=" http://fakeimg.pl/500x250/"
              alt=""
            />
            <div className="post">
              <div class="col-lg-12 col-7">
                <div className="post-date text-right">{props.data.dDate}</div>
              </div>
              <h2 className="post-title post-header">{props.data.aTitle}</h2>

              <div className="post-content mb-0">
                <p>{props.data.aDes}</p>

                <p className="post-footer">
                  <br />
                  <div className="text-muted">看更多 ---></div>
                </p>
              </div>
            </div>
          </div>
        </Link>
      </Col>
    </>
  )
}

export default withRouter(BlogArt)
