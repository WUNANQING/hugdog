import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import '../../components/Knowledge/knowledge.scss'

function Blogheader(props) {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImg"
            src={require('../../images/knowledge/blog/a001.jpg')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>飼養前請先認識我：大型犬介紹（上集）</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImg"
            src={require('../../images/knowledge/blog/a001.jpg')}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>飼養前請先認識我：大型犬介紹（中集）</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImg"
            src={require('../../images/knowledge/blog/a001.jpg')}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>飼養前請先認識我：大型犬介紹（下集）</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Blogheader
