import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { getBlog } from './actions/index'

import BlogArt from './BlogArt'
import '../../components/Knowledge/knowledge.scss'
import Blogheader from './Blogheader'
import Search from '../../components/Knowledge/Search'

const Blog = props => {
  useEffect(() => {
    console.log(props)
    props.getBlog()
  }, [])

  console.log(Blog)

  const pages = (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">«</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">»</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  )
  // console.log(props)
  return (
    <>
      <Blogheader />

      <Container>
        <br />
        <nav className="nav d-flex justify-content-between">
          <a className="nav-link" href="#">
            首頁 / blog
          </a>
          <Search />
        </nav>

        {/* 文章 */}
        <Row className="article mr-3">
          {/* <div className="article mr-3"> */}
          {props.article &&
            props.article.map((value, index) => {
              return <BlogArt key={index} data={props.article[index]} />
            })}
          {/* </div> */}
        </Row>

        {pages}
      </Container>
    </>
  )
}

const mapStateToProps = store => {
  return { article: store.getBlog }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getBlog }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Blog))
