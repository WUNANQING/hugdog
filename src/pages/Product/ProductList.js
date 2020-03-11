import React from 'react'
import Breadcrumb from '../../components/Breadcrumbs'

const ProductList = () => {
  const sidebar = (
    <div className="col-md-2 p-0">
      <nav className="navbar navbar-light bg-light mr-2">
        <div>
          <h5 className="mt-3">商品分類</h5>
          <ul className="navbar-nav ml-3">
            <li className="nav-item">
              <a className="nav-link" href="#">
                飼料
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                零食
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                犬用保健食品
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                狗罐頭/鮮食/餐盒
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                美容/清潔用品
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                犬用玩具
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                狗籠/狗屋
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                床組
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                狗衣服
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                牽繩
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                胸帶
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                項圈
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                名牌/吊牌
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                外出提籠/推車
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                其他犬用品
              </a>
            </li>
          </ul>
          <h5 className="mt-3">品牌</h5>
          <ul className="navbar-nav ml-3">
            <li className="nav-item">
              <a className="nav-link" href="#">
                希爾斯
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Vertri Science
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Now Pets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Lintbells
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Holistic
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CANIDIE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                HALO
              </a>
            </li>
          </ul>
          <form>
            <h5 className="mt-3">價格範圍</h5>
            <div className="form-row">
              <input
                className="col-md-3 form-control mx-3"
                type="text"
                min="0"
                max="9999"
              ></input>
              <span>~</span>
              <input
                className="col-md-3 form-control mx-3"
                type="text"
                min="0"
                max="9999"
              ></input>
            </div>
          </form>
        </div>
      </nav>
    </div>
  )
  let filter = (
    <div className="d-flex justify-content-md-between">
      <span>共有250項商品</span>
      <select>
        <option>依上架時間(近期-早期)</option>
        <option>依上架時間(早期-近期)</option>
        <option>依價格高低(高價-低價)</option>
        <option>依價格高低(低價-高價)</option>
      </select>
    </div>
  )
  let productList = (
    <div className="row pt-3">
      <div className="col-md-4 mb-3">
        <div className="card shadow-sm">
          <img
            src="https://via.placeholder.com/250x150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Book</h5>
            <p className="card-text">商品說明</p>
            <p className="card-text text-danger">NTD 200元</p>
            <div className="d-flex justify-content-around">
              <a href="/productpagedetail" class="btn border p-0">
                查看商品
              </a>
              <a href="/cart" class="btn border p-0">
                快速結帳
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card shadow-sm">
          <img
            src="https://via.placeholder.com/250x150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Book</h5>
            <p className="card-text">商品說明</p>
            <p className="card-text text-danger">NTD 200元</p>
            <div className="d-flex justify-content-around">
              <a href="/productpagedetail" class="btn border p-0">
                查看商品
              </a>
              <a href="#" class="btn border p-0">
                快速結帳
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card shadow-sm">
          <img
            src="https://via.placeholder.com/250x150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Book</h5>
            <p className="card-text">商品說明</p>
            <p className="card-text text-danger">NTD 200元</p>
            <div className="d-flex justify-content-around">
              <a href="/productpagedetail" class="btn border p-0">
                查看商品
              </a>
              <a href="#" class="btn border p-0">
                快速結帳
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card shadow-sm">
          <img
            src="https://via.placeholder.com/250x150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Book</h5>
            <p className="card-text">商品說明</p>
            <p className="card-text text-danger">NTD 200元</p>
            <div className="d-flex justify-content-around">
              <a href="/productpagedetail" class="btn border p-0">
                查看商品
              </a>
              <a href="#" class="btn border p-0">
                快速結帳
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <div className="row my-5">
      {sidebar}
      <div className="col-10 pl-5">
        <Breadcrumb />
        {filter}
        {productList}
      </div>
    </div>
  )
}

export default ProductList
