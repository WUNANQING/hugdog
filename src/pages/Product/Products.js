import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumbs'
import ProductSidebar from './components/ProductSidebar'
import ProductCard from './components/ProductCard'
import { Container, Row, Col, Pagination } from 'react-bootstrap'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { getProducts, getProductsCategory } from './actions/index'

const Products = props => {
  //在App.js設定動態參數
  //設page為URL動態參數page的值
  //在子元件ProductSidebar設定路由為?cName=商品類別和?vName＝廠商名(不需要在App.js設定動態參數)
  //在網址列會顯示?cName=商品類別或vName=廠商名
  // 一開始找商品無分頁得傳姪否則無法顯示
  const page = props.match.params.page || ''
  const cName = new URLSearchParams(props.location.search).get('cName')
  const vName = new URLSearchParams(props.location.search).get('vName')

  useEffect(() => {
    props.getProducts(page)
  }, [])

  let sort = (
    <div className="d-md-flex justify-content-md-between align-items-center my-3">
      <span>共有{props.list.totalRows}項商品</span>
      <select>
        <option>依上架時間(近期-早期)</option>
        <option>依上架時間(早期-近期)</option>
        <option>依價格高低(高價-低價)</option>
        <option>依價格高低(低價-高價)</option>
      </select>
    </div>
  )

  //設定分頁
  let pages = []
  for (let number = 1; number <= props.list.totalPages; number++) {
    pages.push(
      <Pagination.Item href={'/products/' + number} key={number}>
        {number}
      </Pagination.Item>
    )
  }
  //設定分頁容納節點
  const paginationBasic = (
    <Pagination className="d-flex justify-content-center" size="md">
      <Pagination.First href={'/products/' + 1} />
      <Pagination.Prev
        href={'/products/' + (props.list.page === 1 ? 1 : props.list.page - 1)}
      />
      {pages}
      <Pagination.Next
        href={
          '/products/' +
          (props.list.page === props.list.totalPages
            ? props.list.totalPages
            : props.list.page + 1)
        }
      />
      <Pagination.Last href={'/products/' + props.list.totalPages} />
    </Pagination>
  )

  return (
    <Container>
      <Row className="my-5">
        <ProductSidebar />
        <Col md={10}>
          <Breadcrumb />
          {sort}
          <Row>
            {props.list.rows &&
              props.list.rows.map((value, index) => {
                return <ProductCard key={index} data={props.list.rows[index]} />
              })}
          </Row>
          {paginationBasic}
        </Col>
      </Row>
    </Container>
  )
}

//選擇對應的reducer，將其狀態淺拷貝到此元件的props
const mapStateToProps = store => {
  return { list: store.getProducts }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getProducts, getProductsCategory }, dispatch)
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Products)
)
