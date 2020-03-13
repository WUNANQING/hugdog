/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Sidebar from '../../components/Knowledge/Sidebar'

function Blog() {
  return (
    <>
      <img src="http://fakeimg.pl/1300x400/eeeeee/EAE0D0/" />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-4  col-xl-3">
            <Sidebar />
          </div>
          <div className="col-lg-8">
            <nav className="nav">
              <a className="nav-link" href="#">
                首頁
              </a>
              <a className="nav-link" href="#">
                / Blog
              </a>
            </nav>
            <div className="card mb-3 border-0">
              <img
                className="card-img-top"
                src="http://fakeimg.pl/700x440/282828/EAE0D0/"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="card-date text-right">2019-12-20</div>
                <h3 className="card-title">Card title</h3>
                <p className="card-text text-truncate">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                  <p className="card-text">
                    <a href="/aritcle" className="text-muted">
                      看更多
                    </a>
                  </p>
                </p>
              </div>
            </div>

            <div className="card mb-3 border-0">
              <img
                className="card-img-top"
                src="http://fakeimg.pl/700x440/282828/EAE0D0/"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="card-date text-right">2019-12-20</div>
                <h3 className="card-title">Card title</h3>
                <p className="card-text text-truncate">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                  <p className="card-text">
                    <a href="/article" className="text-muted">
                      看更多
                    </a>
                  </p>
                </p>
              </div>
            </div>
            <div className="card mb-3 border-0">
              <img
                className="card-img-top"
                src="http://fakeimg.pl/700x440/282828/EAE0D0/"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="card-date text-right">2019-12-20</div>
                <h3 className="card-title">Card title</h3>
                <p className="card-text text-truncate">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                  <p className="card-text">
                    <a href="/" className="text-muted">
                      看更多
                    </a>
                  </p>
                </p>
              </div>
            </div>
            <div className="card mb-3 border-0">
              <img
                className="card-img-top"
                src="http://fakeimg.pl/700x440/282828/EAE0D0/"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="card-date text-right">2019-12-20</div>
                <h3 className="card-title">Card title</h3>
                <p className="card-text text-truncate">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                  <p className="card-text">
                    <a href="/" className="text-muted">
                      看更多
                    </a>
                  </p>
                </p>
              </div>
            </div>
            <div className="card mb-3 border-0">
              <img
                className="card-img-top"
                src="http://fakeimg.pl/700x440/282828/EAE0D0/"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="card-date text-right">2019-12-20</div>
                <h3 className="card-title">Card title</h3>
                <p className="card-text text-truncate">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                  <p className="card-text">
                    <a href="/" className="text-muted">
                      看更多
                    </a>
                  </p>
                </p>
              </div>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
