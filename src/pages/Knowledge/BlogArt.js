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

function BlogArt() {
  return (
    <>
      <div className="card mb-3 border-0">
        <Image src={require('../../images/knowledge/blog1.jpg')}></Image>

        <div className="post">
          <div class="col-lg-12 col-7">
            <div className="post-date text-right">2019-12-20</div>
          </div>
          <h2 className="article-title post-header">
            <a href="/article">毛孩有口臭並不是理所當然，該重視口腔保健了！</a>
          </h2>
          <div className="post-content mb-0">
            <p>
              根據資料統計： 3歲以上的狗狗大多數都罹患牙周病， 比率高達5成！
              你家的毛孩可能隨時也會成為其中一員！
            </p>
            <p>毛孩也有牙齒，當然需要好好照顧</p>
            口腔問題大概是最常被獸醫師提起的犬貓疾病之一，
            原因在於很多毛爸媽都以為口臭是自然而然產生的。 但換個角度想：
            當一個人有口臭時，我們一定會聯想到： 「他是不是沒刷牙？」、
            「他是不是熬夜，沒有好好排毒所以火氣大？」等原因， 因為我們知道，
            一個人有口臭並不是件理所當然的事；
            那為什麼我們卻認為毛孩有口臭是正常的呢？
            此外，當毛孩有口臭時，意味著牠有可能已經患上牙周病...
            <p className="post-footer">
              <br />
              <div>
                <a href="/aritcle" className="text-muted">
                  看更多 --->
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogArt
