import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

function ServiceDetailCarousel() {
  //列表

  return (
    <>
      <Carousel
        autoPlay="true"
        statusFormatter={(current, total) => `第 ${current} 張，共 ${total} 張	`}
      >
        <div>
          <img
            src={require('../../../images/service/album/animal-1846380_1920.jpg')}
            alt=""
          />
        </div>
        <div>
          <img
            src={require('../../../images/service/album/animal-1846380_1920.jpg')}
            alt=""
          />
        </div>
        <div>
          <img
            src={require('../../../images/service/album/animal-1846380_1920.jpg')}
            alt=""
          />
        </div>
        <div>
          <img
            src={require('../../../images/service/album/animal-1846380_1920.jpg')}
            alt=""
          />
        </div>
      </Carousel>
    </>
  )
}

export default ServiceDetailCarousel
