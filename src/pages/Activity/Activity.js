import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../../css/activity/activity.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import ActivityClass from './ActivityClass3'
import ActivityLecture from './ActivityLecture'
import { Card } from 'react-bootstrap'
import Jumbotorn from '../../components/activity/Jumbotron'
import ActCard from '../../components/activity/ActCard'
import $ from 'jquery'

function Activity() {
  useEffect(() => {
    // Your code here
    $('.event-icon .icon-time').mouseover(function() {
      $('.icon-dropdown-menu').removeClass('active')
      $('.icon-dropdown-menu1').addClass('active')
    })
    $('.event-icon .icon-categories').mouseover(function() {
      $('.icon-dropdown-menu').removeClass('active')
      $('.icon-dropdown-menu2').addClass('active')
    })
    $('.event-icon .icon-location').mouseover(function() {
      $('.icon-dropdown-menu').removeClass('active')
      $('.icon-dropdown-menu3').addClass('active')
    })
    $('.event-icon .icon-keyword').mouseover(function() {
      $('.icon-dropdown-menu').removeClass('active')
      $('.icon-dropdown-menu4').addClass('active')
    })
    $('.event-icon').mouseleave(function() {
      $('.icon-dropdown-menu').removeClass('active')
    })
    $('.icon-dropdown-menu').mouseover(function() {
      $(this).addClass('active')
    })
    $('.icon-dropdown-menu').mouseleave(function() {
      $(this).removeClass('active')
    })
  }, [])

  return (
    <>
      <Switch>
        <Route path="/activity/class">
          <ActivityClass />
        </Route>
        <Route path="/activity/lecture">
          <ActivityLecture />
        </Route>

        <div className="activity-main">
          <Jumbotorn />
          <div className="container">
            <section className="d-flex position-relative mb-2">
              <div className="col-5 event-icon d-flex">
                <div className="icon icon-time">
                  <Link href="">
                    <img
                      src={require('../../images/activity/activity-date.svg')}
                      alt=""
                    />
                    <div>時間</div>
                  </Link>
                </div>
                <div className="icon icon-categories">
                  <Link href="">
                    <img
                      src={require('../../images/activity/activity-category.svg')}
                      alt=""
                    />
                    <div>分類</div>
                  </Link>
                </div>
                <div className="icon icon-location">
                  <Link href="">
                    <img
                      src={require('../../images/activity/activity-loaction.svg')}
                      alt=""
                    />
                    <div>地點</div>
                  </Link>
                </div>
                <div className="icon icon-keyword">
                  <Link href="">
                    <img
                      src={require('../../images/activity/activity-search.svg')}
                      alt=""
                    />
                    <div>關鍵字</div>
                  </Link>
                </div>
              </div>
              <div className="d-flex align-items-end position-absolute event-btn">
                <button type="button" className="btn btn-primary">
                  進階篩選
                </button>
              </div>
            </section>
            <div className="position-relative">
              <div className="col-6 icon-dropdown-menu icon-dropdown-menu1 position-absolute">
                <div className="">進行中</div>
                <div className="">預告中</div>
                <div className="">已截止</div>
                <div className="">全部</div>
              </div>
              <div className="col-6 icon-dropdown-menu icon-dropdown-menu2 position-absolute">
                <div className="">優惠活動</div>
                <div className="">講座活動</div>
                <div className="">課程活動</div>
                <div className="">寵物活動</div>
              </div>
              <div className="col-6 icon-dropdown-menu icon-dropdown-menu3 position-absolute">
                <div className="">678</div>
              </div>
              <div className="col-6 icon-dropdown-menu icon-dropdown-menu4 position-absolute">
                <div className="">關鍵字搜索</div>
              </div>
            </div>
            <div className="my-3 new-activity position-relative">
              <h4>最新活動</h4>
              <div className="row">
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
              </div>
            </div>
            <div className="activity-class">
              <h4>課程報名</h4>
              <div className="row">
                <div className="col-lg-3">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-3">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-3">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-3">
                  <ActCard></ActCard>
                </div>
              </div>
            </div>
            <div className="activity-all">
              <h4>精選活動</h4>
              <div className="row">
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
                <div className="col-lg-4">
                  <ActCard></ActCard>
                </div>
              </div>
              <div align="center" className="mb-3">
                <button type="button" className="btn btn-outline-primary">
                  顯示更多活動
                </button>
              </div>
            </div>
          </div>
        </div>
      </Switch>
    </>
  )
}

export default Activity
