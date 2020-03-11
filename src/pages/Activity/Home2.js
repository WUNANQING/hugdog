import React from 'react'
import { Form, Button } from 'react-bootstrap'
//引入自己的css
import '../../css/event/event2.css'

function Home(props) {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">123</h1>
          <p className="lead">這是的說明</p>
        </div>
      </div>
      <div>
        <div className="col d-flex">
          <ul className="d-flex align-items-center justify-content-center">
            <li>
              <figure className="event-icon">
                <img
                  src={require('../../images/event/enent-date.svg')}
                  alt=""
                />
              </figure>
              <span>時間</span>
            </li>
            <li>
              <figure className="event-icon">
                <img
                  src={require('../../images/event/event-category.svg')}
                  alt=""
                />
              </figure>
              <span>分類</span>
            </li>
            <li>
              <figure className="event-icon">
                <img
                  src={require('../../images/event/event-loaction.svg')}
                  alt=""
                />
              </figure>
              <span>地點</span>
            </li>
            <li>
              <figure className="event-icon">
                <img
                  src={require('../../images/event/event-search.svg')}
                  alt=""
                />
              </figure>
              <span>關鍵字</span>
            </li>
          </ul>
          <div className="">
            <button type="button" className="btn btn-info">
              進階篩選
            </button>
          </div>
        </div>
        <h4>最新活動</h4>
        <div className="d-flex">
          <div className="card">
            <img
              src="https://via.placeholder.com/350x100"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://via.placeholder.com/350x100"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://via.placeholder.com/350x100"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <img
              src="https://via.placeholder.com/350x100"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://via.placeholder.com/350x100"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://via.placeholder.com/350x100"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <h4>課程報名</h4>
      </div>
    </>
  )
}

export default Home
