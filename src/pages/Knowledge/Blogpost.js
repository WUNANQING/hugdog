import React, { useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Row, Col, Button, Image } from 'react-bootstrap'
import $ from 'jquery'

const BlogArt = props => {
  // useEffect(() => {
  //   props.getBlogArticle(props.match.params.aId)
  // }, [props.match.params.aId])

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
              <Link to={'/knowledge/blog/' + props.data.aId}>
                <h3>{props.data.aTitle}</h3>
              </Link>
              <p className="JQellipsis">{props.data.aDes} </p>
              <br />
              <Link to={'/knowledge/blog/' + props.data.aId}>
                <h6 className="text-right">看更多...</h6>
              </Link>
            </div>
          </div>

          <div className="wrap-content-inner">
            <div className="p1-post">
              <Link>
                <h3> {props.data.aTitle}</h3>
              </Link>
              <div className="p1-date">
                <span className="icn-time"> icon </span> {props.data.dDate}
                <span className="icn-eye"> icon </span> 觀看數
                <span className="label label-default">
                  <Link></Link>{' '}
                </span>
                <div className="row">
                  <div className="col-md-4">
                    <Link>
                      <Image
                        className="img-responsive img-frame"
                        src={require('../../images/knowledge/blog/' +
                          props.data.aId +
                          '.jpg')}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="col-md-8">
                    <p className="JQellipsis"> {props.data.aDes} </p>
                    <p className="btn btn-danger btn-sm btn-embossed">
                      <Link> 看全文...</Link>
                    </p>
                  </div>
                </div>
              </div>
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
