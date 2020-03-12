import React from 'react'
import { FaFacebookSquare, FaSearch } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import './sidebar.scss'

function Sidebar() {
  return (
    <>
      <div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item border-0 ">
            <form className="form-inline">
              <input
                className="form-control mr-sm-2 "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button
                    className="btn btn-sm btn-outline-success mr-sm-2 "
                    type="submit"
                  >
                    Search
                  </button> */}
            </form>
          </li>

          <li className="list-group-item ">分類</li>
          <li className="list-group-item border-0">
            <li>
              <a href="/blog">找知識</a>
            </li>
            <li>
              <a href="/partner">找夥伴</a>
            </li>
            <li>
              <a href="/">寵物問答</a>
            </li>
            <br />
          </li>

          <li className="list-group-item">FELLOW US</li>
          <li className="list-group-item border-0">
            <div>
              <a href="/">
                <img src="http://fakeimg.pl/45x45/282828/EAE0D0/" alt="" />
              </a>
              <a href="/">
                <img src="http://fakeimg.pl/45x45/282828/EAE0D0/" alt="" />
              </a>
              <a href="/">
                <img src="http://fakeimg.pl/45x45/282828/EAE0D0/" alt="" />
              </a>
              <a href="/">
                <img src="http://fakeimg.pl/45x45/282828/EAE0D0/" alt="" />
              </a>
            </div>
          </li>
          <li className="list-group-item">通知</li>
          <li className="list-group-item border-0">
            <div className="card">
              <div className="card-body">
                <img src="http://fakeimg.pl/45x45/282828/EAE0D0/" alt="" />
                <p className="card-text">如果想收到最新資訊，請提供您的email</p>
                <form action="" method="POST">
                  <input
                    type="email"
                    name="email"
                    placeholder="請輸入Email..."
                  />
                  <button type="submit">訂閱</button>
                </form>
              </div>
            </div>
          </li>
          <li className="list-group-item">標籤</li>
          <li className="list-group-item border-0 list-inline">
            <li className="list-inline-item">
              <a href="/">行為</a>
            </li>
            <li className="list-inline-item">
              <a href="/">訓練</a>
            </li>
            <li className="list-inline-item">
              <a href="/">日常</a>
            </li>
            <li className="list-inline-item">
              <a href="/">生病</a>
            </li>
            <li className="list-inline-item">
              <a href="/">食慾</a>
            </li>
          </li>
        </ul>
        <br />
        <div>
          <img src="http://fakeimg.pl/240x490/282828/EAE0D0/" alt="" />
        </div>
      </div>
    </>
  )
}

export default Sidebar
