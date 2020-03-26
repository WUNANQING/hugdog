import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Badge, Button } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { FiClock } from 'react-icons/fi'
import { AiOutlineTag } from 'react-icons/ai'
import { withRouter } from 'react-router-dom'
import $ from 'jquery'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { getBlog, getBlogArticle } from './actions/index'

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

  let showBlogType = ''
  if (props.article[0] ? props.article[0].dDate : '' === '1') {
    showBlogType = '健康知識'
  } else if (props.article[0] ? props.article[0].dDate : '' === '2') {
    showBlogType = '疫苗與用藥'
  } else if (props.article[0] ? props.article[0].dDate : '' === '3') {
    showBlogType = '營養與處方'
  } else {
    showBlogType = '美容與保養'
  }

  return (
    <>
      <Container className="article">
        <Row className="mt-5">
          <Col md={9} className="mt-2 shadow-lg p-3 mb-4 bg-white rounded">
            <div className=" d-flex justify-content-between align-items-center mt-2">
              <h6 className="">
                <Badge variant="primary text-light" className="p-2">
                  {showBlogType}
                </Badge>
                <span className="icn-time ml-3">
                  <FiClock /> {props.article[0] ? props.article[0].dDate : ''}
                </span>
              </h6>

              <Button
                variant="link"
                className="d-flex text-danger btn-white"
                onClick={() => alert('11111')}
              >
                <h1>
                  <FaRegHeart />
                </h1>
              </Button>
            </div>
            <div>
              <h1 className="text-left mt-3 mb-4">
                {props.article[0] ? props.article[0].aTitle : ''}
              </h1>
            </div>
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
            <div className="content mt-3">
              <p className="articletxt text-left p-4">
                {props.article[0] ? props.article[0].aDes : ''}
              </p>
            </div>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>

      {/* <Container>
        <Row>
          <div className="article">
            <nav className="nav">
              <Breadcrumbs />
            </nav>
            <br />
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
      </Container> */}
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
