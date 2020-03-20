import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Image } from 'react-bootstrap'

function BlogArt() {
  const blogData = [
    {
      bId: 'a001',
      date: '2020-02-03',
      title: '毛孩有口臭並不是理所當然，該重視口腔保健了！',
      type: '健康知識',
      text:
        '根據資料統計： 3歲以上的狗狗大多數都罹患牙周病，比率高達5成！你家的毛孩可能隨時也會成為其中一員！',
      tag: ['牙周病', '牙結石', '口臭', '口腔健康'],
    },
    {
      bId: 'a002',
      date: '2020-01-05',
      title: '不只會得糖尿病！原來這些犬貓疾病都跟「高血糖」有關',
      type: '健康知識',
      text:
        '好多犬貓慢性病其實都跟高血糖有關，舉凡腎臟病、白內障、心血管疾病等，並不是只有糖尿病而已喔！',
      tag: ['血糖管理', '高血糖'],
    },
  ]

  const articleList = (
    <>
      {blogData.map((obj, i) => (
        <Link to={`knowledge/blog/${obj.title}`} key={i}>
          <div className="card mb-3 border-0">
            <Image
              src={require('../../images/knowledge/blog/' + obj.bId + '.jpg')}
              alt=""
            />
            <div className="post">
              <div class="col-lg-12 col-7">
                <div className="post-date text-right">{obj.date}</div>
              </div>
              <h2 className="post-title post-header">{obj.title}</h2>
              <div className="post-content mb-0">
                <p>{obj.text}</p>

                <p className="post-footer">
                  <br />
                  <div className="text-muted">看更多 ---></div>
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  )

  return <>{articleList}</>
}

export default BlogArt
