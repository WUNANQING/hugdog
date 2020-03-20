import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

import BlogArt from './BlogArt'
import '../../components/Knowledge/knowledge.scss'
import Blogheader from './Blogheader'
import Search from '../../components/Knowledge/Search'

function Blog() {
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
        <div className="article mr-3">
          <BlogArt />
        </div>

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
      </Container>
    </>
  )
}

export default Blog
