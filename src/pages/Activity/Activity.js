import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'
//引入自己的css
import '../../css/event/event.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FiClock } from 'react-icons/fi'
import { IconContext } from 'react-icons'

function Event(props) {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">123</h1>
          <p className="lead">這是的說明</p>
        </div>
      </div>
      <section className="d-flex position-relative">
        <div className="col-5 event-icon d-flex">
          <div>
            <img src={require('../../images/event/enent-date.svg')} alt="" />
            <div>時間</div>
          </div>
          <div>
            <img
              src={require('../../images/event/event-category.svg')}
              alt=""
            />
            <div>分類</div>
          </div>
          <div>
            <img
              src={require('../../images/event/event-loaction.svg')}
              alt=""
            />
            <div>地點</div>
          </div>
          <div>
            <img src={require('../../images/event/event-search.svg')} alt="" />
            <div>關鍵字</div>
          </div>
        </div>
        <div className="d-flex align-items-end position-absolute event-btn">
          <button type="button" className="btn btn-info ">
            進階篩選
          </button>
        </div>
      </section>
      <div className="my-3">
        <h4>最新活動</h4>
        <Card style={{ width: '18rem' }} className="my-3">
          <Card.Img
            variant="top"
            src={require('../../images/event/event-sale.jpg')}
          />
          <Card.Body>
            <figure class="card-icon-clock d-flex align-item-end">
              <img src={require('../../images/event/event-clock.svg')} alt="" />
              <span className="ml-2 text-muted">2020-03-26</span>
            </figure>
            <Card.Text>
              {/* <IconContext.Provider
                value={{ size: '1.5rem', verticalAlign: 'top' }}
              >
                <FiClock />
                2020-03-26
              </IconContext.Provider> */}
            </Card.Text>
            <Card.Title>清潔用品特賣會開始啦</Card.Title>
          </Card.Body>
          <Card.Footer bg="primary">#優惠活動</Card.Footer>
        </Card>
        <button type="button" className="btn btn-primary ">
          進階篩選
        </button>
      </div>
    </>
  )
}

export default 
