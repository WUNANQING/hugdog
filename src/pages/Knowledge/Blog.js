/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  Button,
  Badge,
  Image,
} from 'react-bootstrap'

import BlogArt from './BlogArt'
import '../../components/Knowledge/knowledge.scss'

function Blog() {
  return (
    <>
      <Container>
        <nav className="nav">
          <a className="nav-link" href="#">
            首頁
          </a>
          <a className="nav-link" href="#">
            / Blog
          </a>
        </nav>
        <div class="blog-post">
          <br />
          <BlogArt />
        </div>
        <hr />
        <div>
          <BlogArt />
        </div>
        <hr />
        <div>
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
