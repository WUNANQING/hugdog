/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Sidebar from '../../components/Knowledge/Sidebar'

function Blog() {
  return (
    <>
      <img src="http://fakeimg.pl/1095x400/eeeeee/EAE0D0/" />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-4  col-xl-3">
            <Sidebar />
          </div>
          <div className="col-lg-8">
            <nav class="nav">
              <a class="nav-link active" href="#">
                Active
              </a>
              <a class="nav-link" href="#">
                Link
              </a>
              <a class="nav-link" href="#">
                Link
              </a>
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </nav>
            <div class="card mb-3 border-0">
              <img
                class="card-img-top"
                src="http://fakeimg.pl/700x440/282828/EAE0D0/"
                alt="Card image cap"
              />
              <div class="card-body">
                <div class="card-date text-right">2019-12-20</div>
                <h3 class="card-title">Card title</h3>
                <p class="card-text text-truncate">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                  <p class="card-text">
                    <a href="/" class="text-muted">
                      看更多
                    </a>
                  </p>
                </p>
              </div>
            </div>

            <div class="card mb-3 border-0">
              <img
                class="card-img-top"
                src="http://fakeimg.pl/700x440/282828/EAE0D0/"
                alt="Card image cap"
              />
              <div class="card-body">
                <div class="card-date text-right">2019-12-20</div>
                <h3 class="card-title">Card title</h3>
                <p class="card-text text-truncate">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                  <p class="card-text">
                    <a href="/" class="text-muted">
                      看更多
                    </a>
                  </p>
                </p>
              </div>
            </div>
            <div class="card mb-3 border-0">
              <img
                class="card-img-top"
                src="http://fakeimg.pl/700x440/282828/EAE0D0/"
                alt="Card image cap"
              />
              <div class="card-body">
                <div class="card-date text-right">2019-12-20</div>
                <h3 class="card-title">Card title</h3>
                <p class="card-text text-truncate">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                  <p class="card-text">
                    <a href="/" class="text-muted">
                      看更多
                    </a>
                  </p>
                </p>
              </div>
            </div>
            <div class="card mb-3 border-0">
              <img
                class="card-img-top"
                src="http://fakeimg.pl/700x440/282828/EAE0D0/"
                alt="Card image cap"
              />
              <div class="card-body">
                <div class="card-date text-right">2019-12-20</div>
                <h3 class="card-title">Card title</h3>
                <p class="card-text text-truncate">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                  <p class="card-text">
                    <a href="/" class="text-muted">
                      看更多
                    </a>
                  </p>
                </p>
              </div>
            </div>
            <div class="card mb-3 border-0">
              <img
                class="card-img-top"
                src="http://fakeimg.pl/700x440/282828/EAE0D0/"
                alt="Card image cap"
              />
              <div class="card-body">
                <div class="card-date text-right">2019-12-20</div>
                <h3 class="card-title">Card title</h3>
                <p class="card-text text-truncate">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                  <p class="card-text">
                    <a href="/" class="text-muted">
                      看更多
                    </a>
                  </p>
                </p>
              </div>
            </div>
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">»</span>
                    <span class="sr-only">Next</span>
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
