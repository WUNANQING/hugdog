import React, { useState, useEffect } from 'react'
import { Image } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { getBlogArticle } from './actions/index'

import { container } from 'react-bootstrap'
import Breadcrumbs from '../../components/Breadcrumbs'

function BlogArticle(props) {
  useEffect(() => {
    props.getBlogArticle(props.match.params.aTitle)
    props.getBlog()
  }, [props.match.params.aTitle])

  console.log(props.match.params)

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <Breadcrumbs />
            <nav className="nav">
              <a className="nav-link" href="#">
                首頁
              </a>
              <a className="nav-link" href="/blog">
                / Blog
              </a>
              <a className="nav-link" href="#">
                / title
              </a>
            </nav>

            <div className="article-text">
              {/* <Image
                className="blogImg"
                src={require('../../images/knowledge/blog/' +
                  props.data.bId +
                  '.jpg')}
                alt=""
              /> */}
              <div className="articleTitle">
                <div className="text-right">{props.data.dDate}</div>
                <h3>{props.data.aTitle}</h3>
              </div>
              <div className="context">
                <p>{props.data.aDes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = store => {
  return { post: store.getBlog, article: store.getBlogArticle }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getBlogArticle }, dispatch)
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BlogArticle)
)
