import React, { useState } from 'react'
import Sidebar from '../../components/Knowledge/Sidebar'
import { container } from 'react-bootstrap'
import Breadcrumbs from '../../components/Breadcrumbs'

function Article() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4  col-xl-3">
            <Sidebar />
          </div>
          <div className="col-lg-8">
            <Breadcrumbs />
            <nav className="nav">
              <a className="nav-link" href="#">
                首頁
              </a>
              <a className="nav-link" href="/blog">
                / Blog
              </a>
              <a className="nav-link" href="#">
                / title
              </a>
            </nav>
            <div className="article-text">
              <img src="http://fakeimg.pl/740x448/282828/EAE0D0/" alt="" />
              <div className="articleTitle">
                <div className="text-right">2019-12-20</div>
                <h3>百合花超毒？絕對不可以讓貓狗誤食的植物列表</h3>
              </div>
              <div className="context">
                <p>
                  在家中擺幾盆花或植栽， 具有療癒又有美化環境的效果；
                  但如果家裡有毛孩， 就需要慎選擺放的植物，
                  有些可能存著致命傷害！
                </p>
                <p>
                  雖然動物擁有對植物的基本辨識及運用能力的天性，
                  會避開對自身有毒的植物， 但在受到人類飼養多年後，
                  家貓家犬對家中擺放的植物不見得會有戒心，
                  相反的，可能會因為好奇而誤食。
                </p>
                <p>
                  「天然不等於安全」again！ 再一次的強調對我們有益的東西，
                  對牠們來說很可能是毒藥。 尤其是養貓的爸媽，
                  因為貓咪的身體代謝機制比較差，
                  吃到極少量（對牠們）有害的植物就有可能致命！
                  對毛孩來說，生活中潛藏的危險植物列表
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Article
