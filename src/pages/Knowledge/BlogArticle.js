import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'
import $ from 'jquery'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { getBlog, getBlogArticle } from './actions/index'

import { container } from 'react-bootstrap'
import Breadcrumbs from '../../components/Breadcrumbs'
import '../../components/Knowledge/knowledge.scss'

const BlogArticle = props => {
  const aId = props.match.params.aId ? props.match.params.aId : ''

  console.log(aId)

  useEffect(() => {
    props.getBlogArticle(props.match.params.aId)
  }, [props.match.params.aId])

  // console.log(props.match.params)

  $('.trun').click(function() {
    document.getElementById('trun').innerHTML = <FaHeart />
  })

  return (
    <>
      <Container>
        <Row>
          <div className="article">
            <nav className="nav">
              <Breadcrumbs />
            </nav>
            <br />
            <div>
              {props.article[0] ? (
                <Image
                  className="articeImg"
                  src={require('../../images/knowledge/blog/' +
                    props.article[0].aId +
                    '.jpg')}
                  alt=""
                />
              ) : (
                ''
              )}
            </div>
            <br />
            <div className="articleTitle">
              <div className="text-left d-flex ">
                <div className="mr-3">
                  {props.article[0] ? props.article[0].dDate : ''}
                </div>
                <div id="trun" className="ml=4">
                  <FaRegHeart />
                </div>
              </div>
              <br />
              <h2 className="text-center">
                {props.article[0] ? props.article[0].aTitle : ''}
              </h2>
            </div>
            <br />
            <div className="context">
              <p className="articletxt text-center">
                {props.article[0] ? props.article[0].aDes : ''}
              </p>
            </div>
          </div>
        </Row>
      </Container>
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
