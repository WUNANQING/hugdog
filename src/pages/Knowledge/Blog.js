import React from 'react'
import { FaFacebookSquare, FaSearch } from "react-icons/fa";
import { IconContext } from 'react-icons'
import './blog.scss'

function Blog(){
    return(
    <>
    <div className="container">
      <div className="col-lg-4 col-xl-3">
      <div class="sidebar">
            <form class="form-inline">
              <input class="mr-sm-2" type="text" placeholder="Search"/>
              <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">搜尋</button>
            </form>
          </div>

          <div class="sidebar">
             <h3 class="">分類</h3>
             <hr/>
            <ul class="list-unstyled">
              <li><a href="/">找知識</a></li>
              <li><a href="/">找夥伴</a></li>
              <li><a href="/">寵物問答</a></li>
            </ul>
          </div>

       <div class="sidebar">
            <h3>FELLOW US</h3>
            <hr/>
            <a href=""><img src="http://fakeimg.pl/45x45/282828/EAE0D0/" alt=""/></a>
            <a href=""><img src="http://fakeimg.pl/45x45/282828/EAE0D0/" alt=""/></a>
            <a href=""><img src="http://fakeimg.pl/45x45/282828/EAE0D0/" alt=""/></a>
            <a href=""><img src="http://fakeimg.pl/45x45/282828/EAE0D0/" alt=""/></a>
          </div>

          <div class="sidebar">
            <h3>通知</h3>
            <hr/>
            <div class="emailbox">
             <img src="http://fakeimg.pl/45x45/282828/EAE0D0/"/>
             <p>如果想收到最新資訊，請提供您的email</p>
             <form action="" method="POST">
               <input type="email" name="email" placeholder="請輸入Email..."/>
               <button type="submit">訂閱</button>
             </form>
            </div>
          </div>

          <div class="sidebar">
              <h3>標籤</h3>
              <hr/>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="">行為</a></li>
                <li class="list-inline-item"><a href="">訓練</a></li>
                <li class="list-inline-item"><a href="">日常</a></li>
                <li class="list-inline-item"><a href="">生病</a></li>
                <li class="list-inline-item"><a href="">食慾</a></li>
              </ul>
            </div>

            <div>
            <img src="http://fakeimg.pl/250x490/282828/EAE0D0/" alt=""/>
            </div>
      </div>
    </div>
    </>
    )
}

export default Blog